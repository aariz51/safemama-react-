import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calculator, Apple, Heart, TrendingUp, Star, Download, Smartphone, Info, Target, Award, Zap } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

interface NutritionResult {
  calories: number
  protein: number
  carbs: number
  fat: number
  fiber: number
  calcium: number
  iron: number
  folate: number
  trimester: 'first' | 'second' | 'third'
  recommendations: string[]
  warnings: string[]
}

const NutritionCalculator: React.FC = () => {
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [activityLevel, setActivityLevel] = useState('moderate')
  const [trimester, setTrimester] = useState<'first' | 'second' | 'third'>('first')
  const [result, setResult] = useState<NutritionResult | null>(null)
  const [showResults, setShowResults] = useState(false)

  const calculateNutrition = () => {
    if (!age || !weight || !height) return

    const ageNum = parseInt(age)
    const weightKg = parseFloat(weight)
    const heightCm = parseFloat(height)

    // Calculate BMR using Mifflin-St Jeor Equation for women
    let bmr = (10 * weightKg) + (6.25 * heightCm) - (5 * ageNum) - 161

    // Activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      very_active: 1.9
    }

    let calories = bmr * activityMultipliers[activityLevel as keyof typeof activityMultipliers]

    // Pregnancy adjustments
    const trimesterCalories = {
      first: 0, // No additional calories in first trimester
      second: 300, // Additional 300 calories
      third: 450 // Additional 450 calories
    }

    calories += trimesterCalories[trimester]

    // Calculate macronutrients
    const protein = Math.round((weightKg * 1.1) + (trimester === 'first' ? 0 : trimester === 'second' ? 25 : 25)) // Increased protein needs
    const carbs = Math.round((calories * 0.45) / 4) // 45-65% of calories from carbs
    const fat = Math.round((calories * 0.25) / 9) // 20-35% of calories from fat
    const fiber = Math.round(25 + (trimester === 'first' ? 3 : 3)) // Increased fiber needs

    // Pregnancy-specific nutrients
    const calcium = 1000 // mg
    const iron = trimester === 'first' ? 27 : 27 // mg (increased during pregnancy)
    const folate = 600 // mcg (critical during pregnancy)

    const recommendations = [
      'Eat frequent, small meals to manage nausea and maintain energy',
      'Focus on nutrient-dense foods rather than empty calories',
      'Include a variety of colorful fruits and vegetables',
      'Choose lean proteins like fish, poultry, beans, and eggs',
      'Stay hydrated with at least 8-10 glasses of water daily',
      `Your protein needs are higher during pregnancy: aim for ${protein}g daily`,
      'Take a prenatal vitamin to ensure adequate micronutrient intake'
    ]

    const warnings = []
    if (calories < 1800) warnings.push('Calorie intake may be too low - consult your healthcare provider')
    if (protein < 70) warnings.push('Consider increasing protein intake for healthy fetal development')

    const nutritionResult: NutritionResult = {
      calories: Math.round(calories),
      protein,
      carbs,
      fat,
      fiber,
      calcium,
      iron,
      folate,
      trimester,
      recommendations,
      warnings
    }

    setResult(nutritionResult)
    setShowResults(true)
  }

  const trimesterInfo = {
    first: {
      title: 'First Trimester (1-12 weeks)',
      description: 'Focus on folate, manage nausea, establish healthy habits',
      keyNutrients: ['Folate', 'Vitamin B6', 'Iron']
    },
    second: {
      title: 'Second Trimester (13-26 weeks)',
      description: 'Increased calorie needs, focus on protein and calcium',
      keyNutrients: ['Protein', 'Calcium', 'Iron']
    },
    third: {
      title: 'Third Trimester (27-40 weeks)',
      description: 'Maximum calorie needs, prepare for breastfeeding',
      keyNutrients: ['Protein', 'Calcium', 'Omega-3']
    }
  }

  return (
    <>
      <Helmet>
        <title>Pregnancy Nutrition Calculator | SafeMama - Daily Nutritional Needs Calculator</title>
        <meta 
          name="description" 
          content="Calculate your daily nutritional needs during pregnancy. Get personalized calorie, protein, and nutrient recommendations for each trimester." 
        />
        <meta 
          name="keywords" 
          content="pregnancy nutrition calculator, pregnancy calories, protein needs pregnancy, pregnancy diet calculator, trimester nutrition" 
        />
        <link rel="canonical" href="https://safemama.co/tools/nutrition-calculator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-6">
              <Apple className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nutrition Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized daily nutrition recommendations for your pregnancy journey. Calculate optimal calories, protein, and essential nutrients for each trimester.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>4.8/5 Rating</span>
              </div>
              <div>Used by 25,000+ moms</div>
              <div>Nutritionist approved</div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Calculator Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8">
                <div className="flex items-center mb-6">
                  <Calculator className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Calculate Your Nutrition Needs</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age (years)
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
                        Weight (kg)
                      </label>
                      <input
                        type="number"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        placeholder="65"
                        min="40"
                        max="150"
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
                      <option value="very_active">Very Active (very hard exercise, physical job)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Current Trimester
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['first', 'second', 'third'] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setTrimester(t)}
                          className={`p-3 rounded-xl text-sm font-medium transition-colors ${
                            trimester === t
                              ? 'bg-orange-500 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {t === 'first' ? '1st' : t === 'second' ? '2nd' : '3rd'} Trimester
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={calculateNutrition}
                    className="w-full"
                    size="lg"
                    icon={TrendingUp}
                    disabled={!age || !weight || !height}
                  >
                    Calculate Nutrition Needs
                  </Button>
                </div>

                {/* Trimester Info */}
                <div className="mt-8 bg-orange-50 rounded-lg p-6">
                  <h3 className="font-semibold text-orange-900 mb-2">
                    {trimesterInfo[trimester].title}
                  </h3>
                  <p className="text-orange-700 text-sm mb-3">
                    {trimesterInfo[trimester].description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {trimesterInfo[trimester].keyNutrients.map((nutrient) => (
                      <span key={nutrient} className="px-2 py-1 bg-orange-200 text-orange-800 text-xs rounded-full">
                        {nutrient}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {showResults && result ? (
                <div className="space-y-6">
                  {/* Main Results */}
                  <Card className="p-8 bg-gradient-to-br from-orange-50 to-pink-50">
                    <div className="text-center mb-8">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full mb-4">
                        <Target className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Daily Nutrition Goals</h2>
                      <p className="text-gray-600">
                        Personalized recommendations for {trimesterInfo[result.trimester].title.toLowerCase()}
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-orange-600">{result.calories}</div>
                        <p className="text-sm text-gray-600">Daily Calories</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-3xl font-bold text-pink-600">{result.protein}g</div>
                        <p className="text-sm text-gray-600">Protein</p>
                      </div>
                    </div>
                  </Card>

                  {/* Macronutrients */}
                  <Card className="p-8">
                    <div className="flex items-center mb-6">
                      <Heart className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Macronutrients</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">Carbohydrates</span>
                          <span className="font-bold text-blue-600">{result.carbs}g</span>
                        </div>
                        <p className="text-xs text-blue-600 mt-1">45-65% of daily calories</p>
                      </div>
                      <div className="p-4 bg-green-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">Healthy Fats</span>
                          <span className="font-bold text-green-600">{result.fat}g</span>
                        </div>
                        <p className="text-xs text-green-600 mt-1">20-35% of daily calories</p>
                      </div>
                      <div className="col-span-2 p-4 bg-purple-50 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium text-gray-900">Fiber</span>
                          <span className="font-bold text-purple-600">{result.fiber}g</span>
                        </div>
                        <p className="text-xs text-purple-600 mt-1">Essential for digestive health</p>
                      </div>
                    </div>
                  </Card>

                  {/* Essential Nutrients */}
                  <Card className="p-8">
                    <div className="flex items-center mb-6">
                      <Award className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Key Pregnancy Nutrients</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">Calcium</div>
                          <div className="text-sm text-gray-600">For baby's bone development</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-orange-600">{result.calcium}mg</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">Iron</div>
                          <div className="text-sm text-gray-600">Prevents anemia, supports blood</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-red-600">{result.iron}mg</div>
                        </div>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-semibold text-gray-900">Folate</div>
                          <div className="text-sm text-gray-600">Critical for neural tube development</div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-green-600">{result.folate}mcg</div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Recommendations */}
                  <Card className="p-8">
                    <div className="flex items-center mb-6">
                      <Zap className="w-6 h-6 text-orange-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Personalized Recommendations</h3>
                    </div>
                    <ul className="space-y-3">
                      {result.recommendations.map((rec, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{rec}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {result.warnings.length > 0 && (
                      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-2">Important Notes:</h4>
                        <ul className="space-y-1">
                          {result.warnings.map((warning, index) => (
                            <li key={index} className="text-yellow-700 text-sm">• {warning}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </Card>
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Apple className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Calculate?</h3>
                  <p className="text-gray-600">
                    Enter your details to get personalized nutrition recommendations for your pregnancy journey.
                  </p>
                </Card>
              )}
            </motion.div>
          </div>

          {/* App Promotion - Shows after calculation */}
          {showResults && (
            <motion.div
              className="mt-16 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-8 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                <div className="text-center mb-8">
                  <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-90" />
                  <h2 className="text-3xl font-bold mb-4">Track Your Nutrition with SafeMama</h2>
                  <p className="text-xl opacity-90 max-w-2xl mx-auto">
                    Get personalized meal plans, track your daily intake, and ensure you're meeting your nutrition goals throughout pregnancy.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Apple className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Smart Meal Plans</h3>
                    <p className="text-sm opacity-80">Personalized nutrition plans for each trimester</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Nutrient Tracking</h3>
                    <p className="text-sm opacity-80">Track vitamins, minerals, and macros</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Heart className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Expert Guidance</h3>
                    <p className="text-sm opacity-80">Nutritionist-approved recommendations</p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a
                    href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    Download on App Store
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.safemama.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
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

          {/* Educational Content */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Understanding Pregnancy Nutrition
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Nutritional Changes</h3>
                  <ul className="text-gray-600 text-sm space-y-2 leading-relaxed">
                    <li>• <strong>First Trimester:</strong> No extra calories needed, focus on quality nutrition</li>
                    <li>• <strong>Second Trimester:</strong> Add 300 calories, increase protein to 75-100g</li>
                    <li>• <strong>Third Trimester:</strong> Add 450 calories, maintain high protein intake</li>
                    <li>• <strong>Folate:</strong> 600mcg daily to prevent neural tube defects</li>
                    <li>• <strong>Iron:</strong> 27mg daily to prevent anemia and support blood volume</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Reminders</h3>
                  <ul className="text-gray-600 text-sm space-y-2 leading-relaxed">
                    <li>• Quality matters more than quantity - choose nutrient-dense foods</li>
                    <li>• Take a prenatal vitamin to fill nutritional gaps</li>
                    <li>• Stay hydrated with 8-10 glasses of water daily</li>
                    <li>• Consult your healthcare provider for personalized advice</li>
                    <li>• These are estimates - individual needs may vary</li>
                  </ul>
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
                  <p className="font-semibold mb-1">Medical Disclaimer</p>
                  <p>
                    This calculator provides general nutritional estimates and should not replace professional medical or nutritional advice. 
                    Always consult with your healthcare provider and a registered dietitian for personalized nutrition planning during pregnancy.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default NutritionCalculator
