import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Search, Pill, Shield, AlertTriangle, CheckCircle, XCircle, Apple, Smartphone, Star, Info, ArrowRight } from 'lucide-react';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

interface Medication {
  name: string;
  safe: boolean;
  category: 'otc' | 'prescription' | 'supplement' | 'herbal';
  safetyLevel: 'safe' | 'caution' | 'avoid' | 'consult';
  reason: string;
  alternatives?: string[];
  dosage?: string;
  trimester_specific?: {
    first: 'safe' | 'caution' | 'avoid' | 'consult';
    second: 'safe' | 'caution' | 'avoid' | 'consult';
    third: 'safe' | 'caution' | 'avoid' | 'consult';
  };
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

const checkMedicationSafetyWithAI = async (medicationName: string): Promise<Medication | null> => {
  try {
    console.log('Making medication API request for:', medicationName);
    
    const prompt = `Analyze "${medicationName}" medication for pregnancy safety. Provide EXACTLY this format without any markdown formatting:

SAFETY_LEVEL: [safe/caution/avoid/consult]
CATEGORY: [otc/prescription/supplement/herbal]
REASON: [detailed medical explanation in 2-3 sentences]
DOSAGE: [recommended dosage guidelines for pregnancy]
ALTERNATIVES: [2-3 safer alternatives, comma separated]
FIRST_TRIMESTER: [safe/caution/avoid/consult]
SECOND_TRIMESTER: [safe/caution/avoid/consult]
THIRD_TRIMESTER: [safe/caution/avoid/consult]

Be medically accurate. Do not use ** or * markdown formatting.`;

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
      console.error('Medication API Error:', errorData);
      throw new Error(`API request failed: ${response.status}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response format from AI');
    }

    const content = cleanMarkdown(data.candidates[0].content.parts[0].text);
    
    // Parse the structured response
    const lowerContent = content.toLowerCase();
    
    // Extract safety level
    let safetyLevel: 'safe' | 'caution' | 'avoid' | 'consult' = 'consult';
    if (lowerContent.includes('safety_level: safe')) {
      safetyLevel = 'safe';
    } else if (lowerContent.includes('safety_level: caution')) {
      safetyLevel = 'caution';
    } else if (lowerContent.includes('safety_level: avoid')) {
      safetyLevel = 'avoid';
    }

    // Extract category
    let category: 'otc' | 'prescription' | 'supplement' | 'herbal' = 'otc';
    if (lowerContent.includes('category: prescription')) {
      category = 'prescription';
    } else if (lowerContent.includes('category: supplement')) {
      category = 'supplement';
    } else if (lowerContent.includes('category: herbal')) {
      category = 'herbal';
    }

    // Extract reason
    const reasonMatch = content.match(/REASON:\s*([^\n\r]+(?:\n(?!DOSAGE|ALTERNATIVES)[^\n\r]+)*)/i);
    const reason = reasonMatch ? reasonMatch[1].trim() : content.substring(0, 200);

    // Extract dosage
    const dosageMatch = content.match(/DOSAGE:\s*([^\n\r]+(?:\n(?!ALTERNATIVES|FIRST_TRIMESTER)[^\n\r]+)*)/i);
    const dosage = dosageMatch ? dosageMatch[1].trim() : 'Consult healthcare provider for dosage';

    // Extract alternatives
    const altMatch = content.match(/ALTERNATIVES:\s*([^\n\r]+)/i);
    const alternatives = altMatch ? 
      altMatch[1].split(',').map((alt: string) => alt.trim()).slice(0, 3) : 
      ['Consult doctor', 'Natural alternatives', 'Safer options'];

    // Extract trimester safety
    const firstTrimester = lowerContent.includes('first_trimester: safe') ? 'safe' :
                          lowerContent.includes('first_trimester: caution') ? 'caution' :
                          lowerContent.includes('first_trimester: avoid') ? 'avoid' : 'consult';
    
    const secondTrimester = lowerContent.includes('second_trimester: safe') ? 'safe' :
                           lowerContent.includes('second_trimester: caution') ? 'caution' :
                           lowerContent.includes('second_trimester: avoid') ? 'avoid' : 'consult';
    
    const thirdTrimester = lowerContent.includes('third_trimester: safe') ? 'safe' :
                          lowerContent.includes('third_trimester: caution') ? 'caution' :
                          lowerContent.includes('third_trimester: avoid') ? 'avoid' : 'consult';

    const result: Medication = {
      name: medicationName,
      safe: safetyLevel === 'safe',
      category: category,
      safetyLevel: safetyLevel,
      reason: reason,
      alternatives: alternatives,
      dosage: dosage,
      trimester_specific: {
        first: firstTrimester as 'safe' | 'caution' | 'avoid' | 'consult',
        second: secondTrimester as 'safe' | 'caution' | 'avoid' | 'consult',
        third: thirdTrimester as 'safe' | 'caution' | 'avoid' | 'consult',
      }
    };

    return result;

  } catch (error) {
    console.error('AI medication analysis failed:', error);
    return {
      name: medicationName,
      safe: false,
      category: 'otc',
      safetyLevel: 'consult',
      reason: `Unable to analyze ${medicationName} at the moment. Please consult your healthcare provider for specific advice about this medication during pregnancy.`,
      alternatives: ['Consult your doctor', 'Ask pharmacist', 'Seek medical advice'],
      dosage: 'Consult healthcare provider',
      trimester_specific: {
        first: 'consult',
        second: 'consult',
        third: 'consult'
      }
    };
  }
};

const MedicationGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [result, setResult] = useState<Medication | null>(null);
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleSearch = async () => {
    if (!searchTerm.trim()) return;
    
    setLoading(true);
    setNotFound(false);
    setResult(null);

    try {
      const aiResult = await checkMedicationSafetyWithAI(searchTerm);
      
      if (aiResult) {
        setResult(aiResult);
        setNotFound(false);
      } else {
        setResult(null);
        setNotFound(true);
      }
    } catch (error) {
      console.error('AI medication search failed:', error);
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

  const getSafetyColor = (level: string) => {
    switch (level) {
      case 'safe': return 'text-green-600';
      case 'caution': return 'text-yellow-600';
      case 'avoid': return 'text-red-600';
      case 'consult': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  const getSafetyIcon = (level: string) => {
    switch (level) {
      case 'safe': return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'caution': return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
      case 'avoid': return <XCircle className="w-5 h-5 text-red-500" />;
      case 'consult': return <Info className="w-5 h-5 text-blue-500" />;
      default: return <Shield className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Pregnancy Medication Safety Guide | SafeMama - Is It Safe During Pregnancy?</title>
        <meta 
          name="description" 
          content="Check medication safety during pregnancy. Search prescription drugs, over-the-counter medications, and supplements for pregnancy safety information." 
        />
        <meta 
          name="keywords" 
          content="pregnancy medication safety, safe medications pregnancy, pregnancy drugs, medication guide pregnancy, prescription safety pregnancy" 
        />
        <link rel="canonical" href="https://safemama.co/tools/medication-guide" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <Pill className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Medication Safety Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check if medications are safe during pregnancy. AI-powered analysis of prescription drugs, over-the-counter medications, and supplements.
            </p>
            
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>4.8/5 Rating</span>
              </div>
              <div>AI-powered</div>
              <div>Any medication</div>
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
                  <Search className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Check Medication Safety</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Enter any medication name (e.g., Tylenol, Ibuprofen, Prenatal vitamins...)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
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
                    🤖 Powered by AI - Search any medication, supplement, or prescription drug
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
                    {getSafetyIcon(result.safetyLevel)}
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold capitalize text-gray-900">
                        {result.name}
                      </h3>
                      <p className={`text-lg font-semibold ${getSafetyColor(result.safetyLevel)}`}>
                        {result.safetyLevel === 'safe' && '✅ Generally Safe During Pregnancy'}
                        {result.safetyLevel === 'caution' && '⚠️ Use with Caution During Pregnancy'}
                        {result.safetyLevel === 'avoid' && '❌ Avoid During Pregnancy'}
                        {result.safetyLevel === 'consult' && '👩‍⚕️ Consult Healthcare Provider'}
                      </p>
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${
                        result.category === 'otc' ? 'bg-blue-100 text-blue-800' :
                        result.category === 'prescription' ? 'bg-purple-100 text-purple-800' :
                        result.category === 'supplement' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {result.category === 'otc' ? 'Over-the-Counter' : 
                         result.category === 'prescription' ? 'Prescription' :
                         result.category === 'supplement' ? 'Supplement' : 'Herbal'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">AI Medical Analysis</h4>
                      <p className="text-gray-700 break-words">{result.reason}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Dosage Guidelines</h4>
                      <p className="text-gray-700 break-words">{result.dosage}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Safer Alternatives</h4>
                      <div className="flex flex-wrap gap-2">
                        {result.alternatives?.map((alt, index) => (
                          <span 
                            key={index}
                            className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium break-words"
                          >
                            {alt}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Safety by Trimester</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {(['first', 'second', 'third'] as const).map((trimester) => (
                          <div key={trimester} className="text-center p-4 bg-white rounded-lg border">
                            <div className="font-medium text-gray-900 capitalize mb-2">{trimester} Trimester</div>
                            <div className="flex items-center justify-center mb-1">
                              {getSafetyIcon(result.trimester_specific?.[trimester] || 'consult')}
                            </div>
                            <div className={`text-sm font-medium ${getSafetyColor(result.trimester_specific?.[trimester] || 'consult')}`}>
                              {result.trimester_specific?.[trimester] === 'safe' && 'Safe'}
                              {result.trimester_specific?.[trimester] === 'caution' && 'Caution'}
                              {result.trimester_specific?.[trimester] === 'avoid' && 'Avoid'}
                              {result.trimester_specific?.[trimester] === 'consult' && 'Consult'}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                  <div className="text-center mb-6">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <h2 className="text-2xl font-bold mb-4">Get Advanced Medication Tracking</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                      Track all your medications and supplements with SafeMama app for comprehensive pregnancy health monitoring!
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
                      className="inline-flex items-center justify-center bg-white text-purple-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
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
                    We're experiencing technical difficulties. Please try again.
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
                  Popular Medication Safety Searches
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Tylenol', 'Ibuprofen', 'Aspirin', 'Prenatal vitamins', 'Antacids', 'Allergy meds', 'Antibiotics', 'Pain relief'].map((medication) => (
                    <button
                      key={medication}
                      onClick={() => {
                        setSearchTerm(medication.toLowerCase());
                        setTimeout(() => handleSearch(), 100);
                      }}
                      className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-900 transition-colors text-left"
                    >
                      <ArrowRight className="w-4 h-4 inline mr-2" />
                      {medication}
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
                      Always consult with your healthcare provider before starting, stopping, or changing any medications during pregnancy.
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

export default MedicationGuide;
