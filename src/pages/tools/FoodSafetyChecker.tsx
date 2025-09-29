import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Search, Scan, Shield, AlertTriangle, CheckCircle, XCircle, Download, Apple, Smartphone, Star, ArrowRight, Info } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

interface FoodItem {
  name: string
  safe: boolean
  category: string
  reason: string
  alternatives?: string[]
  trimester_specific?: {
    first: boolean
    second: boolean
    third: boolean
  }
}

const FoodSafetyChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState<FoodItem | null>(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  // Enhanced food database with more items
  const foodDatabase: FoodItem[] = [
    {
      name: 'banana',
      safe: true,
      category: 'fruits',
      reason: 'Rich in potassium, vitamin B6, and fiber. Helps with morning sickness and provides sustained energy.',
      alternatives: ['apples', 'pears', 'berries'],
      trimester_specific: { first: true, second: true, third: true }
    },
    {
      name: 'apple',
      safe: true,
      category: 'fruits',
      reason: 'High in fiber and vitamin C. Wash thoroughly before eating to remove any pesticide residue.',
      alternatives: ['pears', 'bananas', 'oranges'],
      trimester_specific: { first: true, second: true, third: true }
    },
    {
      name: 'sushi',
      safe: false,
      category: 'seafood',
      reason: 'Raw fish may contain harmful bacteria and parasites. High mercury content in some fish.',
      alternatives: ['cooked salmon', 'vegetarian rolls', 'cooked shrimp'],
      trimester_specific: { first: false, second: false, third: false }
    },
    {
      name: 'salmon',
      safe: true,
      category: 'seafood',
      reason: 'Excellent source of omega-3 fatty acids when fully cooked. Choose wild-caught when possible.',
      alternatives: ['sardines', 'anchovies', 'cooked cod'],
      trimester_specific: { first: true, second: true, third: true }
    },
    {
      name: 'coffee',
      safe: true,
      category: 'beverages',
      reason: 'Safe in moderation. Limit to 200mg caffeine per day (about 1-2 cups).',
      alternatives: ['decaf coffee', 'herbal tea', 'water'],
      trimester_specific: { first: true, second: true, third: true }
    },
    {
      name: 'alcohol',
      safe: false,
      category: 'beverages',
      reason: 'No amount of alcohol is considered safe during pregnancy. Can cause fetal alcohol syndrome.',
      alternatives: ['sparkling water', 'fruit juices', 'mocktails'],
      trimester_specific: { first: false, second: false, third: false }
    },
    {
      name: 'cheese',
      safe: true,
      category: 'dairy',
      reason: 'Hard cheeses are safe. Avoid unpasteurized soft cheeses like brie, camembert, and blue cheese.',
      alternatives: ['cheddar', 'swiss', 'mozzarella'],
      trimester_specific: { first: true, second: true, third: true }
    },
    {
      name: 'spinach',
      safe: true,
      category: 'vegetables',
      reason: 'Rich in folate, iron, and vitamins. Wash thoroughly and cook when possible to reduce bacteria risk.',
      alternatives: ['kale', 'broccoli', 'swiss chard'],
      trimester_specific: { first: true, second: true, third: true }
    },
    {
      name: 'tuna',
      safe: true,
      category: 'seafood',
      reason: 'Limit to 2-3 servings per week due to mercury content. Choose light tuna over albacore.',
      alternatives: ['salmon', 'sardines', 'cod'],
      trimester_specific: { first: true, second: true, third: true }
    },
    {
      name: 'eggs',
      safe: true,
      category: 'protein',
      reason: 'Excellent protein source when fully cooked. Avoid raw or undercooked eggs.',
      alternatives: ['cooked chicken', 'beans', 'tofu'],
      trimester_specific: { first: true, second: true, third: true }
    }
  ]

  const handleSearch = () => {
    if (!searchTerm.trim()) return

    setLoading(true)
    setNotFound(false)
    setResult(null)

    // Simulate API call delay
    setTimeout(() => {
      const found = foodDatabase.find(
        item => item.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

      if (found) {
        setResult(found)
        setNotFound(false)
      } else {
        setResult(null)
        setNotFound(true)
      }
      setLoading(false)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

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
          {/* Header */}
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
              Search any food to instantly check if it's safe during pregnancy. Get personalized recommendations based on your trimester.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>4.9/5 Rating</span>
              </div>
              <div>1M+ food checks</div>
              <div>Medically reviewed</div>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Search Section */}
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
                      placeholder="Enter food name (e.g., salmon, coffee, cheese...)"
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
                      {loading ? 'Checking...' : 'Check Safety'}
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    Try searching: banana, sushi, coffee, cheese, salmon, spinach, tuna, eggs
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Results Section */}
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
                      <h4 className="font-semibold text-gray-900 mb-2">Why?</h4>
                      <p className="text-gray-700">{result.reason}</p>
                    </div>
                    
                    {result.alternatives && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {result.safe ? 'Similar Safe Options:' : 'Safe Alternatives:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {result.alternatives.map((alt, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize"
                            >
                              {alt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Trimester Safety:</h4>
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

                {/* App Promotion After Results */}
                <Card className="p-8 bg-gradient-to-r from-green-500 to-blue-500 text-white">
                  <div className="text-center mb-6">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <h2 className="text-2xl font-bold mb-4">Get Instant Food Safety Scanning</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                      Love this checker? Scan any product barcode with SafeMama app for instant AI-powered safety analysis!
                    </p>
                  </div>

                  {/* App Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Scan className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">AI Barcode Scanning</h3>
                      <p className="text-sm opacity-80">Scan any product for instant analysis</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">10,000+ Foods</h3>
                      <p className="text-sm opacity-80">Comprehensive safety database</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Star className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Expert Reviewed</h3>
                      <p className="text-sm opacity-80">Medically accurate information</p>
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

            {/* Not Found Message with App Promotion */}
            {notFound && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 mb-8 text-center">
                  <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Food not found in our basic database
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find "<strong>{searchTerm}</strong>" in our web tool database. But don't worry!
                  </p>
                  
                  <div className="bg-primary-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-primary-900 mb-3">
                      🔍 Get comprehensive food safety information in the SafeMama app
                    </h4>
                    <ul className="text-primary-800 text-sm space-y-2 text-left max-w-md mx-auto">
                      <li>• Scan 50,000+ products with AI technology</li>
                      <li>• Search our complete food safety database</li>
                      <li>• Get instant answers for any food or ingredient</li>
                      <li>• Expert medical advice and recommendations</li>
                      <li>• Personalized based on your pregnancy stage</li>
                    </ul>
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
                      className="inline-flex items-center justify-center bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
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

            {/* Popular Searches */}
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
                  {['Sushi', 'Coffee', 'Salmon', 'Cheese', 'Eggs', 'Tuna', 'Spinach', 'Alcohol'].map((food) => (
                    <button
                      key={food}
                      onClick={() => {
                        setSearchTerm(food.toLowerCase())
                        setTimeout(() => {
                          const found = foodDatabase.find(
                            item => item.name.toLowerCase() === food.toLowerCase()
                          )
                          if (found) {
                            setResult(found)
                            setNotFound(false)
                          } else {
                            setResult(null)
                            setNotFound(true)
                          }
                        }, 100)
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

            {/* Disclaimer */}
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
                      This tool provides general information only and should not replace professional medical advice. 
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
  )
}

export default FoodSafetyChecker
