import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Shield, AlertTriangle, CheckCircle, XCircle, Apple, Smartphone, Star, ArrowRight, Info } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

interface FoodItem {
  name: string;
  safe: boolean;
  category: string;
  reason: string;
  alternatives?: string[];
  trimester_specific?: {
    first: boolean;
    second: boolean;
    third: boolean;
  };
}

// Your Gemini API Key
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

const checkFoodSafetyWithAI = async (foodName: string): Promise<FoodItem | null> => {
  try {
    console.log('Making AI request for:', foodName);
    
    const prompt = `Analyze "${foodName}" for pregnancy safety. Provide EXACTLY this format:

SAFETY: [write either "safe" or "unsafe" or "caution"]
CATEGORY: [write one: fruits, vegetables, seafood, dairy, meat, beverages, or other]
REASON: [Write 2-3 sentences explaining why it's safe or unsafe during pregnancy with medical facts]
ALTERNATIVES: [List 3-4 safer food alternatives, separated by commas]
FIRST_TRIMESTER: [write either "safe" or "caution" or "avoid"]
SECOND_TRIMESTER: [write either "safe" or "caution" or "avoid"]
THIRD_TRIMESTER: [write either "safe" or "caution" or "avoid"]

Be medically accurate for pregnant women. Do not use any markdown formatting like ** or *.`;

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
      const errorData = await response.json();
      console.error('API Error:', errorData);
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content || !data.candidates[0].content.parts) {
      throw new Error('Invalid response format from AI');
    }

    const content = cleanMarkdown(data.candidates[0].content.parts[0].text);
    return parseAIResponse(content, foodName);

  } catch (error) {
    console.error('AI failed:', error);
    return {
      name: foodName,
      safe: false,
      category: 'general',
      reason: `Unable to analyze ${foodName} at the moment. Please consult your healthcare provider for specific advice about this food during pregnancy.`,
      alternatives: ['Consult your doctor', 'Ask nutritionist', 'Speak with healthcare provider'],
      trimester_specific: {
        first: false,
        second: false,
        third: false
      }
    };
  }
};

const parseAIResponse = (content: string, foodName: string): FoodItem => {
  const lowerContent = content.toLowerCase();
  
  // Extract safety level
  let safe = true;
  if (lowerContent.includes('safety: unsafe') || lowerContent.includes('safety:unsafe') || lowerContent.includes('avoid')) {
    safe = false;
  }

  // Extract category
  let category = 'general';
  const categoryMatch = content.match(/CATEGORY:\s*([^\n\r]+)/i);
  if (categoryMatch) {
    category = categoryMatch[1].trim().toLowerCase();
  }

  // Extract reason
  let reason = '';
  const reasonMatch = content.match(/REASON:\s*([^\n\r]+(?:\n(?!ALTERNATIVES|FIRST_TRIMESTER)[^\n\r]+)*)/i);
  if (reasonMatch) {
    reason = reasonMatch[1].trim();
  } else {
    const sentences = content.split(/[.!?]+/).filter((s: string) => s.trim().length > 20);
    reason = sentences.slice(0, 2).join('. ').trim() + '.';
  }

  // Extract alternatives
  let alternatives: string[] = [];
  const altMatch = content.match(/ALTERNATIVES:\s*([^\n\r]+)/i);
  if (altMatch) {
    alternatives = altMatch[1].split(',').map((alt: string) => alt.trim()).filter((alt: string) => alt.length > 0).slice(0, 4);
  }
  if (alternatives.length === 0) {
    alternatives = ['Consult healthcare provider', 'Speak with nutritionist', 'Check with doctor'];
  }

  // Extract trimester safety
  const firstTrimester = lowerContent.includes('first_trimester: safe') || lowerContent.includes('first_trimester:safe') ? true : 
                        (lowerContent.includes('first_trimester: avoid') || lowerContent.includes('first_trimester:avoid')) ? false : safe;
  
  const secondTrimester = lowerContent.includes('second_trimester: safe') || lowerContent.includes('second_trimester:safe') ? true : 
                         (lowerContent.includes('second_trimester: avoid') || lowerContent.includes('second_trimester:avoid')) ? false : safe;
  
  const thirdTrimester = lowerContent.includes('third_trimester: safe') || lowerContent.includes('third_trimester:safe') ? true : 
                        (lowerContent.includes('third_trimester: avoid') || lowerContent.includes('third_trimester:avoid')) ? false : safe;

  return {
    name: foodName,
    safe: safe,
    category: category,
    reason: reason || `${foodName} requires medical evaluation for pregnancy safety. Please consult your healthcare provider.`,
    alternatives: alternatives,
    trimester_specific: {
      first: firstTrimester,
      second: secondTrimester,
      third: thirdTrimester
    }
  };
};

const FoodSafetyChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<FoodItem | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setNotFound(false);
    setResult(null);

    try {
      const aiResult = await checkFoodSafetyWithAI(searchTerm);
      
      if (aiResult) {
        setResult(aiResult);
        setNotFound(false);
      } else {
        setResult(null);
        setNotFound(true);
      }
    } catch (error) {
      console.error('AI search failed:', error);
      setResult(null);
      setNotFound(true);
    }

    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <>
      <Helmet>
        <title>Pregnancy Food Safety Checker | SafeMama - Is It Safe During Pregnancy?</title>
        <meta 
          name="description" 
          content="Free pregnancy food safety checker. Search any food to see if it's safe during pregnancy. Get instant safety recommendations and healthy alternatives." 
        />
        <meta 
          name="keywords" 
          content="pregnancy food safety, safe foods pregnancy, food checker pregnancy, pregnancy nutrition, foods to avoid pregnancy" 
        />
        <link rel="canonical" href="https://safemama.co/tools/food-safety-checker" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Food Safety Checker
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Search any food to instantly check if it's safe during pregnancy. Get personalized recommendations powered by AI.
            </p>
            
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>4.9/5 Rating</span>
              </div>
              <div>AI-powered analysis</div>
              <div>Any food item</div>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Search className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Check Food Safety</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Enter any food name (e.g., chicken, cheese, wine, sushi...)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    />
                    <Button 
                      onClick={handleSearch}
                      disabled={!searchTerm.trim() || loading}
                      size="lg"
                      icon={loading ? undefined : Search}
                    >
                      {loading ? 'Analyzing...' : 'Check Safety'}
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    🤖 Powered by AI - Search any food item for instant pregnancy safety analysis
                  </p>
                </div>
              </Card>
            </motion.div>

            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className={`p-8 mb-8 ${result.safe ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
                  <div className="flex items-center mb-6">
                    {result.safe ? (
                      <CheckCircle className="w-8 h-8 text-green-600 mr-4" />
                    ) : (
                      <XCircle className="w-8 h-8 text-red-600 mr-4" />
                    )}
                    <div>
                      <h3 className="text-2xl font-bold capitalize text-gray-900">
                        {result.name}
                      </h3>
                      <p className={`text-lg font-semibold ${result.safe ? 'text-green-600' : 'text-red-600'}`}>
                        {result.safe ? '✅ Generally Safe During Pregnancy' : '❌ Not Recommended During Pregnancy'}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">AI Analysis</h4>
                      <p className="text-gray-700 break-words">{result.reason}</p>
                    </div>
                    
                    {result.alternatives && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {result.safe ? 'Similar Safe Options' : 'Safe Alternatives'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {result.alternatives.map((alt, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize break-words"
                            >
                              {alt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Trimester Safety</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {(['first', 'second', 'third'] as const).map((trimester) => (
                          <div key={trimester} className="text-center p-3 bg-white rounded-lg border">
                            <div className="font-medium text-gray-900 capitalize">{trimester} Trimester</div>
                            <div className={`text-sm ${result.trimester_specific?.[trimester] ? 'text-green-600' : 'text-red-600'}`}>
                              {result.trimester_specific?.[trimester] ? '✅ Safe' : '❌ Avoid'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  <div className="text-center mb-6">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <h2 className="text-2xl font-bold mb-4">Get Advanced Food Scanning</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                      Love this checker? Scan any product barcode with SafeMama app for instant AI-powered safety analysis!
                    </p>
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

            {notFound && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 mb-8 text-center">
                  <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Analysis Temporarily Unavailable
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We're experiencing technical difficulties. Please try again later.
                  </p>
                </Card>
              </motion.div>
            )}

            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Popular Food Safety Searches
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Chicken', 'Sushi', 'Coffee', 'Salmon', 'Cheese', 'Eggs', 'Tuna', 'Wine'].map((food) => (
                    <button
                      key={food}
                      onClick={() => {
                        setSearchTerm(food.toLowerCase());
                        setTimeout(() => handleSearch(), 100);
                      }}
                      className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-900 transition-colors text-left"
                    >
                      <ArrowRight className="w-4 h-4 inline mr-2" />
                      {food}
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-6 bg-yellow-50 border-yellow-200">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <p className="font-semibold mb-1">Medical Disclaimer</p>
                    <p>
                      This AI-powered tool provides general information only and should not replace professional medical advice. 
                      Always consult with your healthcare provider about your specific dietary needs during pregnancy.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodSafetyChecker;
