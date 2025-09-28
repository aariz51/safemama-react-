import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Apple, 
  Leaf, 
  Heart, 
  Shield, 
  AlertTriangle,
  CheckCircle,
  Clock,
  Calendar,
  Utensils,
  Droplets,
  Zap
} from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const PregnancyDietGuide: React.FC = () => {
  const trimesterGuides = [
    {
      trimester: "First Trimester",
      weeks: "1-12 weeks",
      icon: Leaf,
      color: "from-green-500 to-emerald-600",
      keyFoods: [
        "Folate-rich foods: Spinach, asparagus, citrus fruits",
        "Lean proteins: Chicken, fish, eggs, beans",
        "Whole grains: Brown rice, quinoa, oats",
        "Calcium sources: Dairy, leafy greens, fortified foods"
      ],
      avoidFoods: [
        "Raw or undercooked meats and eggs",
        "High-mercury fish (shark, swordfish)",
        "Unpasteurized dairy products",
        "Excessive caffeine (limit to 200mg/day)"
      ],
      tips: [
        "Take prenatal vitamins with folic acid",
        "Eat small, frequent meals to combat nausea",
        "Stay hydrated with water and herbal teas",
        "Choose ginger for natural nausea relief"
      ]
    },
    {
      trimester: "Second Trimester",
      weeks: "13-26 weeks",
      icon: Heart,
      color: "from-blue-500 to-cyan-600",
      keyFoods: [
        "Iron-rich foods: Red meat, spinach, lentils",
        "Calcium: Milk, cheese, yogurt, sardines",
        "Protein: Fish, poultry, tofu, nuts",
        "Fiber: Fruits, vegetables, whole grains"
      ],
      avoidFoods: [
        "High-sodium processed foods",
        "Raw sprouts and unwashed produce",
        "Alcohol and smoking",
        "Large amounts of vitamin A supplements"
      ],
      tips: [
        "Increase calorie intake by 300-350 per day",
        "Focus on iron absorption with vitamin C",
        "Prevent constipation with fiber and water",
        "Monitor weight gain (1-2 pounds per week)"
      ]
    },
    {
      trimester: "Third Trimester",
      weeks: "27-40 weeks",
      icon: Apple,
      color: "from-purple-500 to-pink-600",
      keyFoods: [
        "Omega-3s: Salmon, walnuts, chia seeds",
        "Complex carbs: Sweet potatoes, oats",
        "Protein: Lean meats, dairy, legumes",
        "Antioxidants: Berries, colorful vegetables"
      ],
      avoidFoods: [
        "Excessive sugar and refined carbs",
        "Large meals that cause heartburn",
        "Foods high in saturated fats",
        "Spicy or acidic foods if causing discomfort"
      ],
      tips: [
        "Eat smaller, more frequent meals",
        "Prepare for breastfeeding with extra calories",
        "Stay active with gentle exercise",
        "Prepare freezer meals for postpartum"
      ]
    }
  ]

  const essentialNutrients = [
    {
      nutrient: "Folic Acid",
      amount: "600-800 mcg daily",
      icon: Shield,
      benefits: "Prevents neural tube defects, supports DNA synthesis",
      sources: "Leafy greens, fortified cereals, legumes, citrus fruits",
      color: "bg-green-100 text-green-800"
    },
    {
      nutrient: "Iron",
      amount: "27 mg daily",
      icon: Zap,
      benefits: "Prevents anemia, supports increased blood volume",
      sources: "Red meat, spinach, lentils, fortified cereals",
      color: "bg-red-100 text-red-800"
    },
    {
      nutrient: "Calcium",
      amount: "1,000 mg daily",
      icon: Heart,
      benefits: "Builds baby's bones and teeth, maintains maternal bone health",
      sources: "Dairy products, leafy greens, sardines, fortified foods",
      color: "bg-blue-100 text-blue-800"
    },
    {
      nutrient: "Protein",
      amount: "70-100g daily",
      icon: Utensils,
      benefits: "Supports fetal growth, maternal tissue development",
      sources: "Lean meats, fish, eggs, dairy, legumes, nuts",
      color: "bg-purple-100 text-purple-800"
    },
    {
      nutrient: "Omega-3 DHA",
      amount: "200-300 mg daily",
      icon: Droplets,
      benefits: "Brain and eye development, reduces preterm birth risk",
      sources: "Fatty fish, walnuts, chia seeds, algae supplements",
      color: "bg-cyan-100 text-cyan-800"
    },
    {
      nutrient: "Vitamin D",
      amount: "600 IU daily",
      icon: Calendar,
      benefits: "Calcium absorption, immune function, bone development",
      sources: "Fortified milk, fatty fish, sunlight exposure",
      color: "bg-yellow-100 text-yellow-800"
    }
  ]

  const mealPlanSample = {
    breakfast: [
      "Fortified cereal with milk and berries",
      "Greek yogurt with granola and fruit",
      "Whole grain toast with avocado and egg"
    ],
    lunch: [
      "Quinoa salad with vegetables and lean protein",
      "Lentil soup with whole grain bread",
      "Grilled chicken wrap with vegetables"
    ],
    dinner: [
      "Baked salmon with sweet potato and broccoli",
      "Lean beef stir-fry with brown rice",
      "Tofu and vegetable curry with quinoa"
    ],
    snacks: [
      "Apple slices with almond butter",
      "Greek yogurt with nuts",
      "Whole grain crackers with cheese",
      "Smoothie with spinach and fruit"
    ]
  }

  // Create decorative food icons using CSS
  const FoodIcon: React.FC<{ type: 'fruit' | 'vegetable' | 'grain' | 'protein' | 'dairy' }> = ({ type }) => {
    const configs = {
      fruit: { color: 'from-red-400 to-pink-500', icon: '🍎' },
      vegetable: { color: 'from-green-400 to-emerald-500', icon: '🥬' },
      grain: { color: 'from-yellow-400 to-orange-500', icon: '🌾' },
      protein: { color: 'from-purple-400 to-pink-500', icon: '🥩' },
      dairy: { color: 'from-blue-400 to-cyan-500', icon: '🥛' }
    }
    
    const config = configs[type]
    return (
      <div className={`w-12 h-12 bg-gradient-to-r ${config.color} rounded-full flex items-center justify-center text-white text-xl`}>
        {config.icon}
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Complete Pregnancy Diet Guide 2025 | SafeMama - Nutrition for Every Trimester</title>
        <meta name="description" content="Expert pregnancy diet guide with meal plans, essential nutrients, and foods to eat/avoid for each trimester. Safe nutrition advice for expecting mothers." />
        <meta name="keywords" content="pregnancy diet, pregnancy nutrition, trimester diet guide, pregnancy meal plan, prenatal nutrition, pregnancy foods" />
        <link rel="canonical" href="https://safemama.co/blog/pregnancy-diet-guide/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div 
            className="mb-8" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Blog
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <FoodIcon type="fruit" />
              <FoodIcon type="vegetable" />
              <FoodIcon type="protein" />
              <FoodIcon type="dairy" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Complete Pregnancy <span className="text-gradient">Diet Guide</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your comprehensive guide to healthy eating during pregnancy. Expert-backed nutrition advice, meal plans, and essential nutrients for every trimester.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500 space-x-4">
              <span className="flex items-center"><Clock className="w-4 h-4 mr-1" />15 min read</span>
              <span>Last Updated: September 2025</span>
            </div>
          </motion.div>

          {/* Trimester Guides */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nutrition by Trimester</h2>
            <div className="space-y-8">
              {trimesterGuides.map((guide, index) => (
                <Card key={guide.trimester} className="overflow-hidden">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${guide.color} rounded-full flex items-center justify-center mr-4`}>
                        <guide.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{guide.trimester}</h3>
                        <p className="text-gray-600">{guide.weeks}</p>
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />Focus Foods
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {guide.keyFoods.map((food, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {food}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-red-800 mb-3 flex items-center">
                          <AlertTriangle className="w-5 h-5 mr-2" />Avoid/Limit
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {guide.avoidFoods.map((food, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {food}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                          <Heart className="w-5 h-5 mr-2" />Pro Tips
                        </h4>
                        <ul className="space-y-2 text-sm text-gray-700">
                          {guide.tips.map((tip, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {tip}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Essential Nutrients */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Nutrients</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {essentialNutrients.map((nutrient, index) => (
                <Card key={nutrient.nutrient} className="hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                        <nutrient.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{nutrient.nutrient}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${nutrient.color}`}>
                          {nutrient.amount}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">{nutrient.benefits}</p>
                    <p className="text-sm text-gray-800 font-medium">
                      <span className="text-gray-600">Sources: </span>
                      {nutrient.sources}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Sample Meal Plan */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Sample Daily Meal Plan</h2>
            <Card className="overflow-hidden">
              <div className="p-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mr-2">
                        🌅
                      </div>
                      Breakfast
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {mealPlanSample.breakfast.map((meal, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-2">
                        🥗
                      </div>
                      Lunch
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {mealPlanSample.lunch.map((meal, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center mr-2">
                        🍽️
                      </div>
                      Dinner
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {mealPlanSample.dinner.map((meal, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {meal}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full flex items-center justify-center mr-2">
                        🥜
                      </div>
                      Snacks
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {mealPlanSample.snacks.map((snack, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {snack}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <Card className="bg-gradient-to-r from-green-500 to-blue-500 text-white">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">Make Safe Food Choices with SafeMama</h2>
                <p className="text-xl mb-6">
                  Scan any food product to get instant pregnancy safety analysis and personalized nutrition advice.
                </p>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  href="https://dub.sh/safemama"
                  className="bg-white text-green-600 hover:bg-gray-100"
                >
                  Download SafeMama App
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default PregnancyDietGuide
