import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Baby, Calendar, TrendingUp, Heart, ArrowRight, Ruler, User, Scale, Apple } from 'lucide-react';
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

interface BabyGrowthData {
  length: string;
  weight: string;
  headCircumference: string;
  stage: string;
  developments: string[];
  comparison: string;
  personalizedTips: string[];
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

const generateGrowthInsights = async (
  weeks: number, 
  motherAge: string, 
  motherHeight: string, 
  fatherHeight: string, 
  pregnancyNumber: string
): Promise<BabyGrowthData> => {
  try {
    console.log('Generating AI growth insights for week:', weeks);
    
    const prompt = `Generate baby growth information for pregnancy week ${weeks}. Mother age: ${motherAge}, Mother height: ${motherHeight}cm, Father height: ${fatherHeight}cm, Pregnancy: ${pregnancyNumber}.

Provide EXACTLY this format without any markdown formatting:

BABY_LENGTH: [estimated length in mm or cm]
BABY_WEIGHT: [estimated weight in grams]
HEAD_CIRCUMFERENCE: [estimated head circumference in mm]
DEVELOPMENT_STAGE: [brief description]
KEY_DEVELOPMENTS: [4 key developments, comma separated]
SIZE_COMPARISON: [fun comparison to fruit/object]
PERSONALIZED_TIPS: [4 personalized tips, comma separated]

Be specific to week ${weeks}. Do not use ** or * formatting.`;

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
    
    // Parse the structured response
    const lengthMatch = content.match(/BABY_LENGTH:\s*([^\n\r]+)/i);
    const weightMatch = content.match(/BABY_WEIGHT:\s*([^\n\r]+)/i);
    const headMatch = content.match(/HEAD_CIRCUMFERENCE:\s*([^\n\r]+)/i);
    const stageMatch = content.match(/DEVELOPMENT_STAGE:\s*([^\n\r]+)/i);
    const developmentsMatch = content.match(/KEY_DEVELOPMENTS:\s*([^\n\r]+)/i);
    const comparisonMatch = content.match(/SIZE_COMPARISON:\s*([^\n\r]+)/i);
    const tipsMatch = content.match(/PERSONALIZED_TIPS:\s*([^\n\r]+)/i);

    const result: BabyGrowthData = {
      length: lengthMatch ? lengthMatch[1].trim() : getDefaultLength(weeks),
      weight: weightMatch ? weightMatch[1].trim() : getDefaultWeight(weeks),
      headCircumference: headMatch ? headMatch[1].trim() : getDefaultHeadCircumference(weeks),
      stage: stageMatch ? stageMatch[1].trim() : getDefaultStage(weeks),
      developments: developmentsMatch ? 
        developmentsMatch[1].split(',').map((d: string) => d.trim()).filter((d: string) => d.length > 0).slice(0, 4) : 
        getDefaultDevelopments(weeks),
      comparison: comparisonMatch ? comparisonMatch[1].trim() : getDefaultComparison(weeks),
      personalizedTips: tipsMatch ? 
        tipsMatch[1].split(',').map((t: string) => t.trim()).filter((t: string) => t.length > 0).slice(0, 4) : 
        getDefaultTips(weeks)
    };

    return result;

  } catch (error) {
    console.error('AI growth analysis failed:', error);
    return getDefaultGrowthData(weeks);
  }
};

const getDefaultLength = (weeks: number): string => {
  if (weeks <= 8) return `${weeks * 2}mm`;
  if (weeks <= 20) return `${weeks * 10}mm`;
  return `${25 + (weeks - 20) * 5}cm`;
};

const getDefaultWeight = (weeks: number): string => {
  if (weeks <= 8) return `${weeks}g`;
  if (weeks <= 20) return `${weeks * 20}g`;
  return `${1000 + (weeks - 20) * 200}g`;
};

const getDefaultHeadCircumference = (weeks: number): string => {
  if (weeks <= 12) return `${weeks * 5}mm`;
  return `${60 + (weeks - 12) * 8}mm`;
};

const getDefaultStage = (weeks: number): string => {
  if (weeks <= 8) return "Early embryonic development";
  if (weeks <= 12) return "Late embryonic period";
  if (weeks <= 28) return "Fetal development phase";
  return "Final growth and maturation";
};

const getDefaultDevelopments = (weeks: number): string[] => {
  if (weeks <= 8) return ["Neural tube forming", "Heart begins beating", "Limb buds appearing", "Basic organ development"];
  if (weeks <= 16) return ["All organs formed", "Movement begins", "Sex determination possible", "Hair and nails developing"];
  if (weeks <= 28) return ["Brain development accelerates", "Eyes opening", "Hearing developing", "Breathing movements"];
  return ["Rapid weight gain", "Lung maturation", "Final organ development", "Preparing for birth"];
};

const getDefaultComparison = (weeks: number): string => {
  const comparisons: { [key: number]: string } = {
    4: "poppy seed", 6: "sweet pea", 8: "raspberry", 10: "strawberry",
    12: "lime", 14: "lemon", 16: "avocado", 18: "bell pepper",
    20: "banana", 22: "papaya", 24: "cantaloupe", 26: "lettuce head",
    28: "eggplant", 30: "cabbage", 32: "coconut", 34: "butternut squash",
    36: "romaine lettuce", 38: "winter melon", 40: "small pumpkin"
  };
  return comparisons[weeks] || "growing baby";
};

const getDefaultTips = (weeks: number): string[] => {
  return [
    "Continue taking prenatal vitamins daily",
    "Eat a balanced diet rich in nutrients",
    "Stay hydrated with plenty of water",
    "Get adequate rest and gentle exercise"
  ];
};

const getDefaultGrowthData = (weeks: number): BabyGrowthData => ({
  length: getDefaultLength(weeks),
  weight: getDefaultWeight(weeks),
  headCircumference: getDefaultHeadCircumference(weeks),
  stage: getDefaultStage(weeks),
  developments: getDefaultDevelopments(weeks),
  comparison: getDefaultComparison(weeks),
  personalizedTips: getDefaultTips(weeks)
});

const BabyGrowthCalculator: React.FC = () => {
  const [weeks, setWeeks] = useState('');
  const [motherAge, setMotherAge] = useState('');
  const [motherHeight, setMotherHeight] = useState('');
  const [fatherHeight, setFatherHeight] = useState('');
  const [pregnancy, setPregnancy] = useState('first');
  const [result, setResult] = useState<BabyGrowthData | null>(null);
  const [loading, setLoading] = useState(false);

  const calculateGrowth = async () => {
    if (!weeks || parseInt(weeks) < 4 || parseInt(weeks) > 40) return;
    
    setLoading(true);
    
    try {
      const growthData = await generateGrowthInsights(
        parseInt(weeks), 
        motherAge || '28', 
        motherHeight || '165', 
        fatherHeight || '175', 
        pregnancy
      );
      
      setResult(growthData);
    } catch (error) {
      console.error('Growth calculation failed:', error);
      setResult(getDefaultGrowthData(parseInt(weeks)));
    }
    
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      calculateGrowth();
    }
  };

  return (
    <>
      <Helmet>
        <title>Baby Growth Calculator | SafeMama - Track Fetal Development by Week</title>
        <meta 
          name="description" 
          content="Free baby growth calculator. Track your baby's development week by week with personalized growth estimates and developmental milestones." 
        />
        <meta 
          name="keywords" 
          content="baby growth calculator, fetal development, pregnancy weeks, baby size calculator, fetal growth chart" 
        />
        <link rel="canonical" href="https://safemama.co/tools/baby-growth-calculator" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-6">
              <Baby className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Baby Growth Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Track your baby's development week by week. Get personalized growth estimates powered by AI.
            </p>
            
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Heart className="w-4 h-4 text-pink-400 fill-current mr-1" />
                <span>4.8/5 Rating</span>
              </div>
              <div>AI-powered</div>
              <div>Week-by-week tracking</div>
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
                  <Calendar className="w-6 h-6 text-pink-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Calculate Baby Growth</h2>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Pregnancy Week (4-40)
                    </label>
                    <input
                      type="number"
                      value={weeks}
                      onChange={(e) => setWeeks(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Enter pregnancy week"
                      min="4"
                      max="40"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mother's Age (optional)
                      </label>
                      <input
                        type="number"
                        value={motherAge}
                        onChange={(e) => setMotherAge(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="28"
                        min="18"
                        max="50"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mother's Height (cm, optional)
                      </label>
                      <input
                        type="number"
                        value={motherHeight}
                        onChange={(e) => setMotherHeight(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="165"
                        min="140"
                        max="200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Father's Height (cm, optional)
                      </label>
                      <input
                        type="number"
                        value={fatherHeight}
                        onChange={(e) => setFatherHeight(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                        placeholder="175"
                        min="140"
                        max="220"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pregnancy Number
                      </label>
                      <select
                        value={pregnancy}
                        onChange={(e) => setPregnancy(e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      >
                        <option value="first">First pregnancy</option>
                        <option value="second">Second pregnancy</option>
                        <option value="third">Third+ pregnancy</option>
                      </select>
                    </div>
                  </div>

                  <Button 
                    onClick={calculateGrowth}
                    className="w-full"
                    size="lg"
                    icon={loading ? undefined : ArrowRight}
                    disabled={!weeks || parseInt(weeks) < 4 || parseInt(weeks) > 40 || loading}
                  >
                    {loading ? 'Calculating Growth...' : 'Calculate Baby Growth'}
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
                  {/* Growth Measurements */}
                  <Card className="p-6 bg-gradient-to-br from-pink-50 to-blue-50">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full mb-4">
                        <Ruler className="w-8 h-8 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 mb-2">Week {weeks} Growth</h2>
                      <p className="text-gray-600 break-words">{result.stage}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-xl font-bold text-pink-600 break-words">{result.length}</div>
                        <p className="text-sm text-gray-600">Length</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-xl font-bold text-blue-600 break-words">{result.weight}</div>
                        <p className="text-sm text-gray-600">Weight</p>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg">
                        <div className="text-xl font-bold text-purple-600 break-words">{result.headCircumference}</div>
                        <p className="text-sm text-gray-600">Head Size</p>
                      </div>
                    </div>
                    
                    <div className="text-center mt-6 p-4 bg-white rounded-lg">
                      <p className="text-lg font-semibold text-gray-900">Size Comparison</p>
                      <p className="text-pink-600 font-bold capitalize break-words">About the size of a {result.comparison}</p>
                    </div>
                  </Card>

                  {/* Key Developments */}
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <TrendingUp className="w-6 h-6 text-pink-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Key Developments This Week</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {result.developments.map((development, index) => (
                        <div key={index} className="flex items-start p-3 bg-pink-50 rounded-lg">
                          <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm break-words">{development}</span>
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Personalized Tips */}
                  <Card className="p-6">
                    <div className="flex items-center mb-4">
                      <Heart className="w-6 h-6 text-pink-600 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Personalized Tips - Powered by AI</h3>
                    </div>
                    <div className="space-y-3">
                      {result.personalizedTips.map((tip, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 text-sm break-words">{tip}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <Baby className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Track Growth?</h3>
                  <p className="text-gray-600">Enter your pregnancy week to see how your baby is developing.</p>
                </Card>
              )}
            </motion.div>
          </div>

          {/* App Promotion */}
          {result && (
            <motion.div
              className="mt-12 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-8 bg-gradient-to-r from-pink-500 to-blue-500 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Track Your Baby's Growth Daily</h3>
                <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
                  Get daily baby development updates, 3D models, and personalized growth tracking in the SafeMama app!
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <Baby className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Daily growth updates</p>
                  </div>
                  <div className="text-center">
                    <Ruler className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">3D baby models</p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">Milestone tracking</p>
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
                    className="inline-flex items-center justify-center bg-white text-pink-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
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
        </div>
      </div>
    </>
  );
};

export default BabyGrowthCalculator;
