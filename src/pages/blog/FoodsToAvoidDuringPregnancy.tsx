import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Share2, AlertTriangle, X, CheckCircle } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const FoodsToAvoidDuringPregnancy: React.FC = () => {
  const avoidFoods = [
    {
      category: 'Raw or Undercooked Foods',
      risk: 'High',
      items: [
        'Sushi and raw fish',
        'Raw or rare meat',
        'Raw eggs and cookie dough',
        'Raw shellfish'
      ],
      reason: 'Risk of foodborne bacteria like Salmonella, E. coli, and Listeria'
    },
    {
      category: 'High Mercury Fish',
      risk: 'High',
      items: [
        'Shark',
        'Swordfish',
        'King mackerel',
        'Tilefish'
      ],
      reason: 'High mercury levels can damage baby\'s developing nervous system'
    },
    {
      category: 'Unpasteurized Products',
      risk: 'High',
      items: [
        'Soft cheeses (Brie, Camembert)',
        'Raw milk',
        'Unpasteurized juices',
        'Raw honey'
      ],
      reason: 'May contain harmful bacteria like Listeria'
    },
    {
      category: 'Alcohol',
      risk: 'Severe',
      items: [
        'Wine',
        'Beer',
        'Spirits',
        'Cocktails'
      ],
      reason: 'No safe amount - can cause Fetal Alcohol Spectrum Disorders'
    }
  ]

  const safeAlternatives = [
    { avoid: 'Raw sushi', alternative: 'Cooked sushi rolls' },
    { avoid: 'Soft cheese', alternative: 'Hard pasteurized cheese' },
    { avoid: 'Raw eggs', alternative: 'Pasteurized eggs' },
    { avoid: 'High mercury fish', alternative: 'Salmon, sardines, shrimp' },
    { avoid: 'Alcohol', alternative: 'Sparkling water with fruit' }
  ]

  return (
    <>
      <Helmet>
        <title>Foods to Avoid During Pregnancy 2025 | Complete Safety Guide - SafeMama</title>
        <meta 
          name="description" 
          content="Complete guide to foods and drinks to avoid during pregnancy. Learn about high-risk foods, mercury levels, and safe alternatives for expecting mothers." 
        />
        <meta 
          name="keywords" 
          content="foods to avoid pregnancy, pregnancy food safety, what not to eat pregnant, unsafe foods pregnancy, pregnancy diet restrictions" 
        />
        <link rel="canonical" href="https://safemama.co/blog/foods-to-avoid-during-pregnancy/" />
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-medium rounded-full">
                    Food Safety
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Foods to Avoid During Pregnancy: Complete Safety Guide 2025
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Comprehensive guide to foods and beverages to avoid during pregnancy. Learn about potential risks and safe alternatives to protect your baby's health and development.
                </p>
                
                <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Dr. Maria Rodriguez, Maternal Health Specialist
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      December 10, 2024
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      12 min read
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" icon={Share2}>
                    Share Article
                  </Button>
                </div>
              </motion.div>

              {/* Featured Image */}
              <motion.div
                className="mb-12 rounded-2xl overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <img
                  src="/images/blog/foods-avoid-pregnancy.jpg"
                  alt="Foods to avoid during pregnancy"
                  className="w-full h-64 md:h-96 object-cover"
                />
              </motion.div>

              {/* Key Warning */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Card className="p-8 bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Important Safety Warning</h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    During pregnancy, your immune system is naturally suppressed, making you more vulnerable to foodborne illnesses. Certain foods can also directly affect your baby's development. This guide helps you make informed choices to protect both you and your baby.
                  </p>
                </Card>
              </motion.div>

              {/* Foods to Avoid Categories */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">High-Risk Foods to Avoid</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {avoidFoods.map((category, index) => (
                    <Card key={index} className="p-6 border-l-4 border-red-500">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-900">{category.category}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          category.risk === 'Severe' ? 'bg-red-100 text-red-800' :
                          category.risk === 'High' ? 'bg-orange-100 text-orange-800' :
                          'bg-yellow-100 text-yellow-800'
                        }`}>
                          {category.risk.toUpperCase()} RISK
                        </span>
                      </div>
                      
                      <ul className="space-y-2 mb-4">
                        {category.items.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <X className="w-4 h-4 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <div className="bg-red-50 rounded-lg p-3">
                        <p className="text-red-800 text-sm font-medium">
                          <strong>Why avoid:</strong> {category.reason}
                        </p>
                      </div>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Safe Alternatives */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Safe Alternatives</h2>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {safeAlternatives.map((alt, index) => (
                      <div key={index} className="bg-white rounded-lg p-4 border border-green-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm text-red-600 font-medium mb-1">Instead of:</div>
                            <div className="text-gray-700 mb-2">{alt.avoid}</div>
                            <div className="text-sm text-green-600 font-medium mb-1">Try:</div>
                            <div className="text-gray-900 font-semibold">{alt.alternative}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>

              {/* Detailed Guidelines */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Detailed Safety Guidelines</h2>
                
                <div className="space-y-8">
                  <Card className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Raw and Undercooked Foods</h3>
                    <p className="text-gray-700 mb-4">
                      Raw or undercooked foods pose the highest risk during pregnancy due to potential bacterial contamination.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Completely Avoid:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Raw fish (sushi, sashimi, ceviche)</li>
                          <li>• Rare or medium-rare steaks</li>
                          <li>• Raw cookie dough or cake batter</li>
                          <li>• Soft-boiled or runny eggs</li>
                          <li>• Raw sprouts (alfalfa, mung bean)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Safe Cooking Temperatures:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Beef, pork, lamb: 145°F (63°C)</li>
                          <li>• Ground meats: 160°F (71°C)</li>
                          <li>• Poultry: 165°F (74°C)</li>
                          <li>• Fish: 145°F (63°C)</li>
                          <li>• Eggs: Cook until firm</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Mercury in Fish</h3>
                    <p className="text-gray-700 mb-4">
                      Mercury can cross the placenta and potentially harm your baby's developing brain and nervous system.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-3">Avoid Completely:</h4>
                        <ul className="space-y-1 text-red-700 text-sm">
                          <li>• Shark</li>
                          <li>• Swordfish</li>
                          <li>• King mackerel</li>
                          <li>• Tilefish</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-3">Limit Intake:</h4>
                        <ul className="space-y-1 text-yellow-700 text-sm">
                          <li>• Albacore tuna (6 oz/week)</li>
                          <li>• Yellowfin tuna (6 oz/week)</li>
                          <li>• Light canned tuna (12 oz/week)</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-3">Safe Options:</h4>
                        <ul className="space-y-1 text-green-700 text-sm">
                          <li>• Salmon</li>
                          <li>• Sardines</li>
                          <li>• Shrimp</li>
                          <li>• Pollock</li>
                          <li>• Catfish</li>
                        </ul>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">Alcohol and Caffeine</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-red-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-red-800 mb-3">Alcohol - Complete Avoidance</h4>
                        <p className="text-red-700 mb-3">
                          No amount of alcohol has been proven safe during pregnancy. Alcohol can cause:
                        </p>
                        <ul className="space-y-1 text-red-700 text-sm">
                          <li>• Fetal Alcohol Spectrum Disorders</li>
                          <li>• Birth defects</li>
                          <li>• Developmental delays</li>
                          <li>• Learning disabilities</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 p-6 rounded-lg">
                        <h4 className="font-semibold text-yellow-800 mb-3">Caffeine - Limit to 200mg/day</h4>
                        <p className="text-yellow-700 mb-3">
                          Moderate caffeine intake (about 1 cup of coffee) is generally safe:
                        </p>
                        <ul className="space-y-1 text-yellow-700 text-sm">
                          <li>• Coffee (8 oz): 95mg</li>
                          <li>• Tea (8 oz): 25-50mg</li>
                          <li>• Cola (12 oz): 35mg</li>
                          <li>• Dark chocolate (1 oz): 12mg</li>
                        </ul>
                      </div>
                    </div>
                  </Card>
                </div>
              </motion.div>

              {/* Emergency Signs */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <Card className="p-8 bg-gradient-to-r from-red-50 to-pink-50 border-red-200">
                  <div className="flex items-center mb-6">
                    <AlertTriangle className="w-6 h-6 text-red-500 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">When to Call Your Doctor</h2>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Contact your healthcare provider immediately if you experience:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        Fever over 100.4°F (38°C)
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        Severe nausea and vomiting
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        Diarrhea lasting more than 24 hours
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        Signs of dehydration
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        Severe headache or vision changes
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                        Stomach cramping or abdominal pain
                      </li>
                    </ul>
                  </div>
                </Card>
              </motion.div>

              {/* Key Takeaways */}
              <motion.div
                className="mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50">
                  <div className="flex items-center mb-6">
                    <CheckCircle className="w-6 h-6 text-blue-500 mr-3" />
                    <h2 className="text-2xl font-bold text-gray-900">Key Takeaways</h2>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Completely avoid alcohol - no safe amount has been established</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Cook all meats, fish, and eggs thoroughly to safe temperatures</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Choose low-mercury fish and limit high-mercury varieties</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">Avoid unpasteurized dairy products and soft cheeses</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-3 mr-4 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium">When in doubt, ask your healthcare provider or use SafeMama app</span>
                    </li>
                  </ul>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-32"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {/* App Promotion */}
                <Card className="p-6 bg-gradient-to-br from-primary-500 to-secondary-500 text-white mb-8">
                  <h3 className="font-bold text-lg mb-3">Get SafeMama App</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Scan any food instantly and get AI-powered safety recommendations for your pregnancy.
                  </p>
                  <div className="space-y-3">
                    <img
                      src="/images/badges/app-store-coming-soon.png"
                      alt="Download on App Store"
                      className="h-10 w-auto"
                    />
                    <img
                      src="/images/badges/google-play-coming-soon.png"
                      alt="Get it on Google Play"
                      className="h-10 w-auto"
                    />
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodsToAvoidDuringPregnancy
