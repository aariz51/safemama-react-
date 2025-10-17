import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, Heart, Zap, ArrowRight, Star, Info, Activity, Apple } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

interface NutritionResult {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber: number;
  calcium: number;
  iron: number;
  folate: number;
  recommendations: string[];
  warnings: string[];
}

const GEMINI_API_KEY = 'AIzaSyBWAG2FqzvAi93rDy1yAh5FZ7JPoPXngxE';

// Helper function to clean markdown formatting
const cleanMarkdown = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold markdown
    .replace(/\*(.*?)\*/g, '$1')     // Remove italic markdown
    .replace(/#{1,6}\s*/g, '')       // Remove headers
    .replace(/`(.*?)`/g, '$1')       // Remove code formatting
    .replace(/\n\s*\n/g, '\n')       // Remove extra line breaks
    .trim();
};

const generatePersonalizedRecommendations = async (
  nutritionData: any, 
  age: string, 
  weight: string, 
  trimester: string, 
  activityLevel: string
): Promise<string[]> => {
  try {
    console.log('Generating AI recommendations for nutrition data:', nutritionData);
    
    const prompt = `Generate 6 personalized nutrition recommendations for a pregnant woman:

Age: ${age} years
Weight: ${weight} kg
Trimester: ${trimester}
Activity Level: ${activityLevel}
Daily Calories: ${nutritionData.calories}
Daily Protein: ${nutritionData.protein}g

Provide practical recommendations about:
1. Food choices for this trimester
2. Meal timing and portion sizes
3. Key nutrients to focus on
4. Healthy snack suggestions
5. Hydration tips
6. Activity-specific nutrition advice

Format as simple bullet points without any markdown formatting like ** or *.`;

    const requestBody = {
      contents: [{
        parts: [{
          text: prompt
        }]
      }]
    };

    const response = await fetch(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent',
      {
        method: 'POST',
        headers: {
          'x-goog-api-key': GEMINI_API_KEY,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      }
    );

    if (!response.ok) {
      throw new Error('AI request failed');
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid AI response');
    }

    const content = cleanMarkdown(data.candidates[0].content.parts[0].text);
    
    // Parse recommendations from AI response
    const recommendations = content
      .split('\n')
      .filter((line: string) => line.trim().startsWith('•') || line.trim().startsWith('-') || line.trim().startsWith('*') || line.match(/^\d+\./))
      .map((line: string) => line.replace(/^[•\-*]\s*/, '').replace(/^\d+\.\s*/, '').trim())
      .filter((line: string) => line.length > 10)
      .slice(0, 6);

    return recommendations.length > 0 ? recommendations : [
      'Focus on nutrient-dense foods during this trimester',
      'Eat small, frequent meals to manage morning sickness',
      'Stay hydrated with 8-10 glasses of water daily',
      'Include iron-rich foods with vitamin C for better absorption',
      'Take your prenatal vitamins as recommended by your healthcare provider',
      'Choose whole grains over refined carbohydrates for sustained energy'
    ];

  } catch (error) {
    console.error('AI recommendation generation failed:', error);
    return [
      `Focus on getting adequate nutrition for ${trimester} trimester`,
      'Include a variety of colorful fruits and vegetables',
      'Choose lean proteins like chicken, fish, beans, and eggs',
      'Opt for whole grains over refined carbohydrates',
      'Stay hydrated and limit caffeine intake',
      'Take prenatal vitamins as recommended by your healthcare provider'
    ];
  }
};

const NutritionCalculator: React.FC = () => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [trimester, setTrimester] = useState('first');
  const [activityLevel, setActivityLevel] = useState('moderate');
  const [result, setResult] = useState<NutritionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const calculateBasicNutrition = (
    ageNum: number,
    weightNum: number,
    heightNum: number,
    trimesterValue: string,
    activityValue: string
  ) => {
    // Calculate BMR using Mifflin-St Jeor equation for women
    const bmr = (10 * weightNum) + (6.25 * heightNum) - (5 * ageNum) - 161;
    
    // Activity multipliers
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryactive: 1.9
    };

    // Base calorie needs
    const baseCalories = bmr * activityMultipliers[activityValue as keyof typeof activityMultipliers];
    
    // Pregnancy calorie additions by trimester
    const calorieAdditions = {
      first: 0,    // No additional calories needed
      second: 340, // Second trimester
      third: 450   // Third trimester
    };

    const totalCalories = baseCalories + calorieAdditions[trimesterValue as keyof typeof calorieAdditions];
    
    // Calculate macronutrients and micronutrients based on pregnancy needs
    const proteinGrams = Math.max(71, totalCalories * 0.175 / 4); // Minimum 71g for pregnancy
    const carbsGrams = totalCalories * 0.45 / 4; // 45-65% of calories
    const fatGrams = totalCalories * 0.25 / 9; // 20-35% of calories
    const fiberGrams = Math.max(28, weightNum * 0.4); // Minimum 28g for pregnancy
    
    // Key micronutrients for pregnancy
    const calciumMg = 1000; // 1000mg recommended
    const ironMg = 27; // 27mg recommended for pregnancy
    const folateMcg = 600; // 600 micrograms recommended

    return {
      calories: Math.round(totalCalories),
      protein: Math.round(proteinGrams),
      carbs: Math.round(carbsGrams),
      fat: Math.round(fatGrams),
      fiber: Math.round(fiberGrams),
      calcium: calciumMg,
      iron: ironMg,
      folate: folateMcg
    };
  };

  const calculateNutrition = async () => {
    if (!age || !weight || !height) return;
    
    setLoading(true);
    const ageNum = parseInt(age);
    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    // Calculate basic nutrition needs
    const calculationResult = calculateBasicNutrition(ageNum, weightNum, heightNum, trimester, activityLevel);
    
    // Generate AI recommendations
    const aiRecommendations = await generatePersonalizedRecommendations(
      calculationResult, age, weight, trimester, activityLevel
    );

    // Generate warnings based on calculations
    const warnings: string[] = [];
    if (calculationResult.calories < 1800) {
      warnings.push('Calorie intake may be too low - consult your healthcare provider');
    }
    if (trimester === 'first' && calculationResult.folate < 600) {
      warnings.push('Ensure adequate folate intake for neural tube development');
    }
    if (ageNum > 35) {
      warnings.push('Consider additional prenatal vitamins as recommended by your doctor');
    }

    const fullResult: NutritionResult = {
      ...calculationResult,
      recommendations: aiRecommendations,
      warnings
    };

    setResult(fullResult);
    setShowResults(true);
    setLoading(false);
  };

  return (
    <>
      <Helmet>
        <title>Pregnancy Nutrition Calculator | SafeMama - Personalized Nutrition Needs</title>
        <meta 
          name="description" 
          content="Free pregnancy nutrition calculator. Get personalized calorie, protein, and nutrient recommendations based on your pregnancy stage and activity level." 
        />
        <meta 
          name="keywords" 
          content="pregnancy nutrition calculator, pregnancy calories, pregnancy protein needs, prenatal nutrition, pregnancy diet calculator" 
        />
        <link rel="canonical" href="https://safemama.co/tools/nutrition-calculator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nutrition Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized nutrition recommendations for your pregnancy. Calculate calorie needs and essential nutrients with AI guidance.
            </p>
            
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>4.7/5 Rating</span>
              </div>
              <div>AI-powered</div>
              <div>Personalized nutrition</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Input Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Activity className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Calculate Nutrition Needs</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age
                      </label>
                      <input
                        type="number"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="25"
                        min="18"
                        max="50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Current Weight (kg)
                      </label>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="65"
                        min="40"
                        max="200"
                        step="0.1"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Height (cm)
                    </label>
                    <input
                      type="number"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="165"
                      min="140"
                      max="200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Trimester
                    </label>
                    <select
                      value={trimester}
                      onChange={(e) => setTrimester(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="first">First Trimester (Weeks 1-12)</option>
                      <option value="second">Second Trimester (Weeks 13-27)</option>
                      <option value="third">Third Trimester (Weeks 28-40)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Activity Level
                    </label>
                    <select
                      value={activityLevel}
                      onChange={(e) => setActivityLevel(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="sedentary">Sedentary (little/no exercise)</option>
                      <option value="light">Light (light exercise 1-3 days/week)</option>
                      <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
                      <option value="active">Active (hard exercise 6-7 days/week)</option>
                      <option value="veryactive">Very Active (very hard exercise, physical job)</option>
                    </select>
                  </div>

                  <Button 
                    onClick={calculateNutrition}
                    className="w-full"
                    size="lg"
                    icon={loading ? undefined : ArrowRight}
                    disabled={!age || !weight || !height || loading}
                  >
                    {loading ? 'Calculating...' : 'Calculate Nutrition Needs'}
                  </Button>
                </div>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {result ? (
                <div className="space-y-6">
                  {/* Daily Needs */}
                  <Card className="p-6 bg-gradient-to-br from-orange-50 to-pink-50">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-4">
                        <TrendingUp className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Daily Nutrition Needs</h2>
                      <p className="text-gray-600">{trimester.charAt(0).toUpperCase() + trimester.slice(1)} Trimester</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-orange-600 break-words">{result.calories}</div>
                        <p className="text-sm text-gray-600">Calories</p>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-pink-600 break-words">{result.protein}g</div>
                        <p className="text-sm text-gray-600">Protein</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-xl font-bold text-blue-600 break-words">{result.carbs}g</div>
                        <p className="text-xs text-gray-600">Carbs</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-green-600 break-words">{result.fat}g</div>
                        <p className="text-xs text-gray-600">Fat</p>
                      </div>
                      <div className="text-center">
                        <div className="text-xl font-bold text-purple-600 break-words">{result.fiber}g</div>
                        <p className="text-xs text-gray-600">Fiber</p>
                      </div>
                    </div>
                  </Card>

                  {/* Key Nutrients */}
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <Heart className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Essential Pregnancy Nutrients</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-orange-50 rounded-lg">
                        <div className="text-xl font-bold text-orange-600 break-words">{result.calcium}mg</div>
                        <p className="text-sm text-gray-600 font-medium">Calcium</p>
                        <p className="text-xs text-gray-500 mt-1">For baby's bones</p>
                      </div>
                      <div className="text-center p-4 bg-red-50 rounded-lg">
                        <div className="text-xl font-bold text-red-600 break-words">{result.iron}mg</div>
                        <p className="text-sm text-gray-600 font-medium">Iron</p>
                        <p className="text-xs text-gray-500 mt-1">Prevent anemia</p>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-xl font-bold text-green-600 break-words">{result.folate}mcg</div>
                        <p className="text-sm text-gray-600 font-medium">Folate</p>
                        <p className="text-xs text-gray-500 mt-1">Neural development</p>
                      </div>
                    </div>
                  </Card>

                  {/* AI Recommendations */}
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <Zap className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">
                        Personalized Recommendations - Powered by AI
                      </h3>
                    </div>
                    
                    <div className="space-y-3">
                      {result.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-start p-3 bg-gradient-to-r from-orange-50 to-pink-50 rounded-lg">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <p className="text-gray-700 text-sm break-words">{rec}</p>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Warnings */}
                  {result.warnings.length > 0 && (
                    <Card className="p-6 bg-yellow-50 border-yellow-200">
                      <div className="flex items-center mb-4">
                        <Info className="w-5 h-5 text-yellow-600 mr-2" />
                        <h4 className="font-semibold text-yellow-800">Important Notes</h4>
                      </div>
                      <div className="space-y-2">
                        {result.warnings.map((warning, index) => (
                          <p key={index} className="text-yellow-700 text-sm break-words">• {warning}</p>
                        ))}
                      </div>
                    </Card>
                  )}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <Calculator className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Calculate?</h3>
                  <p className="text-gray-600">Enter your details to get personalized nutrition recommendations.</p>
                </Card>
              )}
            </motion.div>
          </div>

          {/* App Promotion */}
          {showResults && (
            <motion.div
              className="mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Track Your Nutrition Daily</h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Get daily meal planning, nutrient tracking, and personalized recipes in the SafeMama app!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <Calculator className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Daily nutrition tracking</p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Healthy meal plans</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Weight gain tracking</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <Apple className="w-5 h-5 mr-2" />
                    Download on App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.safemama.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-orange-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    Get it on Google Play
                  </a>
                </div>
              </Card>
            </motion.div>
          )}

          {/* Quick Tips */}
          <motion.div
            className="mt-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Quick Nutrition Tips
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-orange-600">Foods to Focus On</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Leafy greens for folate</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Lean proteins for development</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Dairy for calcium</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Whole grains for energy</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-red-600">Foods to Limit</h4>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">High-mercury fish</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Caffeine (limit 200mg/day)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Processed foods</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      <span className="text-gray-700 text-sm">Added sugars</span>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            className="mt-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <Card className="p-6 bg-yellow-50 border-yellow-200">
              <div className="flex items-start">
                <Info className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                <div className="text-sm text-yellow-800">
                  <p className="font-semibold mb-1">Nutritional Guidance Disclaimer</p>
                  <p>
                    This AI-powered calculator provides general nutritional estimates based on standard guidelines. 
                    Individual needs may vary. Always consult with a registered dietitian or your healthcare provider 
                    for personalized nutrition advice during pregnancy.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NutritionCalculator;
