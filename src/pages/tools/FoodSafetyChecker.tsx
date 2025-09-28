import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Search, Shield, AlertTriangle, CheckCircle, XCircle, Scan } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { searchFoods, FoodItem } from '../../data/foodDatabase'

const FoodSafetyChecker: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<FoodItem[]>([])
  const [selectedFood, setSelectedFood] = useState<FoodItem | null>(null)
  const [isSearched, setIsSearched] = useState(false)

  const handleSearch = () => {
    if (!searchTerm.trim()) return
    
    const results = searchFoods(searchTerm)
    setSearchResults(results)
    setIsSearched(true)
    setSelectedFood(null)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const getSafetyIcon = (safetyLevel: string) => {
    switch (safetyLevel) {
      case 'safe':
        return <CheckCircle className="w-6 h-6 text-green-500" />
      case 'caution':
        return <AlertTriangle className="w-6 h-6 text-yellow-500" />
      case 'avoid':
        return <XCircle className="w-6 h-6 text-red-500" />
      default:
        return <Shield className="w-6 h-6 text-gray-500" />
    }
  }

  const getSafetyColor = (safetyLevel: string) => {
    switch (safetyLevel) {
      case 'safe':
        return 'bg-green-50 border-green-200 text-green-800'
      case 'caution':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800'
      case 'avoid':
        return 'bg-red-50 border-red-200 text-red-800'
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800'
    }
  }

  const handleSuggestionClick = (suggestion: string) => {
    setSearchTerm(suggestion)
    const results = searchFoods(suggestion)
    setSearchResults(results)
    setIsSearched(true)
    setSelectedFood(null)
  }

  return (
    <>
      <Helmet>
        <title>Food Safety Checker | SafeMama - Pregnancy Food Safety Database</title>
        <meta 
          name="description" 
          content="Free pregnancy food safety checker. Search our comprehensive database to find out if foods are safe during pregnancy. Get instant safety recommendations for expecting mothers." 
        />
        <meta 
          name="keywords" 
          content="pregnancy food safety, food safety checker, safe foods pregnancy, pregnancy nutrition, food safety database" 
        />
        <link rel="canonical" href="https://safemama.co/tools/food-safety-checker/" />
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
              Search our comprehensive database to find out if foods are safe during pregnancy. 
              Get instant safety recommendations and alternatives.
            </p>
          </motion.div>

          {/* Search Section */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Search className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Search for a Food</h2>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter food name (e.g., salmon, spinach, cheese)..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <Button
                  onClick={handleSearch}
                  className="w-full"
                  size="lg"
                  disabled={!searchTerm.trim()}
                >
                  Check Food Safety
                </Button>
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-700 text-sm">
                  <strong>Tip:</strong> Try searching for specific foods like "salmon," "soft cheese," 
                  "deli meat," or "herbal tea" to get detailed safety information.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Search Results */}
          {isSearched && (
            <motion.div
              className="max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {searchResults.map((food, index) => (
                    <motion.div
                      key={food.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div 
                        className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg border ${
                          selectedFood?.id === food.id ? 'ring-2 ring-primary-500 bg-white' : 'bg-white hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedFood(food)}
                      >
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center">
                            {getSafetyIcon(food.safetyLevel)}
                            <h3 className="text-xl font-bold text-gray-900 ml-3">{food.name}</h3>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSafetyColor(food.safetyLevel)}`}>
                            {food.safetyLevel.toUpperCase()}
                          </span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">{food.description}</p>
                        
                        <div className="text-sm text-primary-600 font-medium">
                          Click to view detailed information →
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No Results Found</h3>
                  <p className="text-gray-600 mb-4">
                    We couldn't find any foods matching "{searchTerm}". Try searching for:
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {['Salmon', 'Spinach', 'Cheese', 'Eggs', 'Tuna', 'Milk'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm hover:bg-primary-200 transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </Card>
              )}
            </motion.div>
          )}

          {/* Detailed Food Information */}
          {selectedFood && (
            <motion.div
              className="max-w-4xl mx-auto mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    {getSafetyIcon(selectedFood.safetyLevel)}
                    <h2 className="text-3xl font-bold text-gray-900 ml-4">{selectedFood.name}</h2>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getSafetyColor(selectedFood.safetyLevel)}`}>
                    {selectedFood.safetyLevel.toUpperCase()}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                      <p className="text-gray-600 leading-relaxed">{selectedFood.description}</p>
                    </div>

                    {selectedFood.benefits && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          Benefits
                        </h3>
                        <ul className="space-y-2">
                          {selectedFood.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {selectedFood.risks && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                          <AlertTriangle className="w-5 h-5 text-red-500 mr-2" />
                          Potential Risks
                        </h3>
                        <ul className="space-y-2">
                          {selectedFood.risks.map((risk, index) => (
                            <li key={index} className="flex items-start">
                              <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-600">{risk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h3>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <p className="text-blue-800">{selectedFood.recommendations}</p>
                      </div>
                    </div>

                    {selectedFood.alternatives && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Safe Alternatives</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedFood.alternatives.map((alternative, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                            >
                              {alternative}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedFood.nutrients && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Nutrients</h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedFood.nutrients.map((nutrient, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                            >
                              {nutrient}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {selectedFood.servingSize && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Serving Information</h3>
                        <div className="bg-gray-50 rounded-lg p-4">
                          <div className="text-sm text-gray-600 mb-1">Recommended Serving Size:</div>
                          <div className="font-medium text-gray-900">{selectedFood.servingSize}</div>
                          {selectedFood.maxPerWeek && (
                            <>
                              <div className="text-sm text-gray-600 mb-1 mt-2">Maximum per week:</div>
                              <div className="font-medium text-gray-900">{selectedFood.maxPerWeek} servings</div>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          )}

          {/* App Promotion */}
          <motion.div
            className="max-w-4xl mx-auto mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <Scan className="w-8 h-8 mr-3" />
                    <h3 className="text-2xl font-bold">Get Instant Results with SafeMama App</h3>
                  </div>
                  <p className="text-lg opacity-90 mb-6">
                    Scan any food product with your camera and get AI-powered safety analysis 
                    instantly. No more searching - just point and scan!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src="/images/badges/app-store-coming-soon.png"
                      alt="Download on App Store"
                      className="h-12 w-auto"
                    />
                    <img
                      src="/images/badges/google-play-coming-soon.png"
                      alt="Get it on Google Play"
                      className="h-12 w-auto"
                    />
                  </div>
                </div>
                <div className="hidden lg:block">
                  <img
                    src="/images/css/images/mockups/mockup_scan-and-discover.png"
                    alt="SafeMama App Scanning"
                    className="h-48 w-auto"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default FoodSafetyChecker
