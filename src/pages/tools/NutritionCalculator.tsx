import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Calculator, Activity, Heart, Zap, Target, TrendingUp } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'
import { calculateNutritionNeeds, calculateBMI, NutritionNeeds, BMIResult } from '../../utils/calculations'

const NutritionCalculator: React.FC = () => {
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    activityLevel: 'moderate' as 'sedentary' | 'light' | 'moderate' | 'active',
    trimester: 1 as 1 | 2 | 3
  })
  const [results, setResults] = useState<{
    nutrition: NutritionNeeds
    bmi: BMIResult
  } | null>(null)
  const [error, setError] = useState('')

  const handleInputChange = (field: string, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleCalculate = () => {
    setError('')
    
    // Validation
    if (!formData.weight || !formData.height || !formData.age) {
      setError('Please fill in all required fields.')
      return
    }

    const weight = parseFloat(formData.weight)
    const height = parseFloat(formData.height)
    const age = parseInt(formData.age)

    if (weight <= 0 || height <= 0 || age <= 0) {
      setError('Please enter valid positive numbers.')
      return
    }

    if (age < 15 || age > 50) {
      setError('Please enter an age between 15 and 50 years.')
      return
    }

    // Calculate nutrition needs and BMI
    const nutrition = calculateNutritionNeeds(weight, height, age, formData.activityLevel, formData.trimester)
    const bmi = calculateBMI(weight, height)

    setResults({ nutrition, bmi })
  }

  const activityLevels = [
    { value: 'sedentary', label: 'Sedentary', description: 'Little to no exercise' },
    { value: 'light', label: 'Light', description: '1-3 days/week light exercise' },
    { value: 'moderate', label: 'Moderate', description: '3-5 days/week moderate exercise' },
    { value: 'active', label: 'Active', description: '6-7 days/week intense exercise' }
  ]

  const getNutrientBar = (current: number, recommended: number, unit: string) => {
    const percentage = Math.min((current / recommended) * 100, 100)
    return (
      <div className="w-full">
        <div className="flex justify-between text-sm mb-1">
          <span>Current: {current}{unit}</span>
          <span>Goal: {recommended}{unit}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Pregnancy Nutrition Calculator | SafeMama - Personalized Nutrition Needs</title>
        <meta 
          name="description" 
          content="Free pregnancy nutrition calculator. Calculate your personalized calorie, protein, and nutrient needs during pregnancy. Get customized recommendations by trimester." 
        />
        <meta 
          name="keywords" 
          content="pregnancy nutrition calculator, pregnancy calories, pregnancy protein needs, prenatal nutrition, pregnancy diet calculator" 
        />
        <link rel="canonical" href="https://safemama.co/tools/nutrition-calculator/" />
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
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pregnancy Nutrition Calculator
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get personalized nutrition recommendations based on your pregnancy stage, 
              activity level, and individual needs.
            </p>
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
                  <Target className="w-6 h-6 text-primary-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Your Information</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Pre-pregnancy Weight (kg)
                      </label>
                      <input
                        type="number"
                        value={formData.weight}
                        onChange={(e) => handleInputChange('weight', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="65"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Height (cm)
                      </label>
                      <input
                        type="number"
                        value={formData.height}
                        onChange={(e) => handleInputChange('height', e.target.value)}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                        placeholder="165"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Age (years)
                    </label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                      placeholder="28"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Current Trimester
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[1, 2, 3].map((trim) => (
                        <button
                          key={trim}
                          onClick={() => handleInputChange('trimester', trim)}
                          className={`p-3 rounded-xl border-2 transition-all ${
                            formData.trimester === trim
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="font-medium">Trimester {trim}</div>
                          <div className="text-xs text-gray-500">
                            {trim === 1 ? '1-12 weeks' : trim === 2 ? '13-27 weeks' : '28-40 weeks'}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Activity Level
                    </label>
                    <div className="space-y-2">
                      {activityLevels.map((level) => (
                        <button
                          key={level.value}
                          onClick={() => handleInputChange('activityLevel', level.value)}
                          className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                            formData.activityLevel === level.value
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center">
                            <Activity className="w-5 h-5 mr-3 text-gray-600" />
                            <div>
                              <div className="font-medium text-gray-900">{level.label}</div>
                              <div className="text-sm text-gray-600">{level.description}</div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}

                  <Button
                    onClick={handleCalculate}
                    className="w-full"
                    size="lg"
                    icon={TrendingUp}
                  >
                    Calculate Nutrition Needs
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
              {results ? (
                <div className="space-y-6">
                  {/* BMI Results */}
                  <Card className="p-8">
                    <div className="flex items-center mb-6">
                      <Heart className="w-6 h-6 text-red-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Health Status</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-primary-600 mb-1">
                          {results.bmi.bmi}
                        </div>
                        <div className="text-sm text-gray-600">BMI</div>
                        <div className="text-sm font-medium text-gray-900 capitalize mt-1">
                          {results.bmi.category}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-secondary-600">
                          {results.bmi.weightGainRecommendation.min}-{results.bmi.weightGainRecommendation.max} lbs
                        </div>
                        <div className="text-sm text-gray-600">Recommended Weight Gain</div>
                      </div>
                    </div>
                  </Card>

                  {/* Daily Nutrition Needs */}
                  <Card className="p-8">
                    <div className="flex items-center mb-6">
                      <Zap className="w-6 h-6 text-yellow-500 mr-3" />
                      <h3 className="text-xl font-bold text-gray-900">Daily Nutrition Needs</h3>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Calories</h4>
                        <div className="text-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                          <div className="text-3xl font-bold text-yellow-600">
                            {results.nutrition.calories}
                          </div>
                          <div className="text-sm text-gray-600">calories per day</div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-4 bg-blue-50 rounded-lg">
                          <div className="text-xl font-bold text-blue-600">
                            {results.nutrition.protein}g
                          </div>
                          <div className="text-sm text-gray-600">Protein</div>
                        </div>
                        <div className="p-4 bg-green-50 rounded-lg">
                          <div className="text-xl font-bold text-green-600">
                            {results.nutrition.calcium}mg
                          </div>
                          <div className="text-sm text-gray-600">Calcium</div>
                        </div>
                        <div className="p-4 bg-red-50 rounded-lg">
                          <div className="text-xl font-bold text-red-600">
                            {results.nutrition.iron}mg
                          </div>
                          <div className="text-sm text-gray-600">Iron</div>
                        </div>
                        <div className="p-4 bg-purple-50 rounded-lg">
                          <div className="text-xl font-bold text-purple-600">
                            {results.nutrition.folate}μg
                          </div>
                          <div className="text-sm text-gray-600">Folate</div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  {/* Recommendations */}
                  <Card className="p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Personalized Recommendations</h3>
                    
                    <div className="space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Trimester {formData.trimester} Focus</h4>
                        <p className="text-blue-700 text-sm">
                          {formData.trimester === 1 && "Focus on folic acid, protein, and avoiding harmful substances. Morning sickness may affect appetite."}
                          {formData.trimester === 2 && "Increased calorie and protein needs. Great time to focus on calcium and iron-rich foods."}
                          {formData.trimester === 3 && "Highest nutritional needs. Focus on protein, calcium, and preparing for breastfeeding."}
                        </p>
                      </div>

                      <div className="p-4 bg-green-50 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Weight Gain Guidance</h4>
                        <p className="text-green-700 text-sm">
                          Based on your BMI ({results.bmi.category}), aim for {results.bmi.weightGainRecommendation.min}-{results.bmi.weightGainRecommendation.max} lbs 
                          total weight gain. Gradual, steady gain is healthiest for you and your baby.
                        </p>
                      </div>

                      <div className="p-4 bg-orange-50 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">Activity Level</h4>
                        <p className="text-orange-700 text-sm">
                          Your {formData.activityLevel} activity level is factored into your calorie needs. 
                          Maintain regular exercise as approved by your healthcare provider.
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              ) : (
                <Card className="p-8 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calculator className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to Calculate?</h3>
                  <p className="text-gray-600">
                    Enter your information to get personalized nutrition recommendations 
                    for your pregnancy journey.
                  </p>
                </Card>
              )}
            </motion.div>
          </div>

          {/* Additional Information */}
          <motion.div
            className="mt-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Understanding Your Nutritional Needs
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Nutrients During Pregnancy</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li><strong>Protein:</strong> Essential for baby's growth and development</li>
                    <li><strong>Folate:</strong> Prevents neural tube defects</li>
                    <li><strong>Iron:</strong> Prevents anemia and supports increased blood volume</li>
                    <li><strong>Calcium:</strong> Builds baby's bones and teeth</li>
                    <li><strong>Omega-3:</strong> Supports brain and eye development</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Important Notes</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• These are general recommendations</li>
                    <li>• Consult your healthcare provider for personalized advice</li>
                    <li>• Individual needs may vary based on health conditions</li>
                    <li>• Prenatal vitamins complement, don't replace, a healthy diet</li>
                    <li>• Quality of calories matters as much as quantity</li>
                  </ul>
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
