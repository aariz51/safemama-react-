import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ChevronRight, 
  BookOpen, 
  CheckCircle, 
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Apple,
  Baby,
  Heart,
  Utensils
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PregnancyDietGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'first-trimester-diet', title: 'First Trimester Diet Plan', completed: true },
    { id: 'second-trimester-diet', title: 'Second Trimester Nutrition', completed: true },
    { id: 'third-trimester-diet', title: 'Third Trimester Meal Planning', completed: true },
    { id: 'daily-meal-plans', title: 'Sample Daily Meal Plans', completed: true },
    { id: 'nutritional-requirements', title: 'Nutritional Requirements by Stage', completed: true },
    { id: 'meal-prep-tips', title: 'Meal Prep and Planning Tips', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/pregnancy-diet-guide`
  const shareTitle = 'Pregnancy Diet Plan: Trimester-by-Trimester Nutrition Guide'
  
  const handleShare = (platform: string) => {
    let url = ''
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
        break
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case 'copy':
        navigator.clipboard.writeText(shareUrl)
        setCopiedLink(true)
        setTimeout(() => setCopiedLink(false), 2000)
        return
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400')
    }
  }

  // App Store Badge Component
  const AppStoreBadge: React.FC = () => (
    <motion.a
      href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div className="bg-black text-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
        <svg className="w-8 h-8" viewBox="0 0 384 512" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
        </svg>
        <div>
          <div className="text-xs">Download on the</div>
          <div className="text-lg font-semibold -mt-1">App Store</div>
        </div>
      </div>
    </motion.a>
  )

  const GooglePlayBadge: React.FC = () => (
    <motion.a
      href="https://play.google.com/store/apps/details?id=com.safemama.app"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div className="bg-black text-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
        <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
        </svg>
        <div>
          <div className="text-xs">Get it on</div>
          <div className="text-lg font-semibold -mt-1">Google Play</div>
        </div>
      </div>
    </motion.a>
  )

  return (
    <>
      <Helmet>
        <title>Pregnancy Diet Plan: Trimester-by-Trimester Nutrition Guide | SafeMama</title>
        <meta name="description" content="Detailed diet plans and meal ideas for each trimester of pregnancy to support healthy development. Complete nutrition guide with sample meal plans." />
        <meta name="keywords" content="pregnancy diet plan, trimester nutrition, pregnancy meal planning, pregnancy diet guide, healthy pregnancy foods, prenatal nutrition" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pregnancy Diet Plan: Trimester-by-Trimester Nutrition Guide" />
        <meta property="og:description" content="Detailed diet plans and meal ideas for each trimester of pregnancy to support healthy development." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/pregnancy-diet-guide-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/pregnancy-diet-guide`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pregnancy Diet Plan: Trimester-by-Trimester Nutrition Guide" />
        <meta name="twitter:description" content="Detailed diet plans and meal ideas for each trimester of pregnancy to support healthy development." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/pregnancy-diet-guide-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-orange-100 via-yellow-50 to-red-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 24, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>9 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Apple className="w-16 h-16 mx-auto mb-4 text-orange-500" />
                      <p className="text-lg font-medium">Pregnancy Diet Plan</p>
                      <p className="text-sm">Trimester-by-Trimester Nutrition Guide</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>Dr. Lisa Thompson, Nutritionist</span>
                      <span>•</span>
                      <span>Reviewed by Medical Team</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      Pregnancy Diet Plan: Trimester-by-Trimester Nutrition Guide
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Detailed diet plans and meal ideas for each trimester of pregnancy to support healthy development. Learn what to eat, when to eat it, and how to maintain optimal nutrition throughout your pregnancy journey.
                    </p>

                    {/* Share Buttons */}
                    <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm font-medium text-gray-700">Share Article:</span>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleShare('facebook')}
                            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                            aria-label="Share on Facebook"
                          >
                            <Facebook className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleShare('twitter')}
                            className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                            aria-label="Share on Twitter"
                          >
                            <Twitter className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
                            aria-label="Share on LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleShare('copy')}
                            className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                            aria-label="Copy link"
                          >
                            {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Nutrition Overview */}
                  <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-semibold text-orange-800 mb-4">
                      <Utensils className="w-5 h-5 mr-2" />
                      Pregnancy Nutrition Essentials
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-orange-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Focus on nutrient-dense foods over empty calories
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Eat small, frequent meals to manage symptoms
                        </li>
                      </ul>
                      <ul className="space-y-2 text-orange-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Adjust portions based on trimester needs
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Stay hydrated with plenty of water
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 1: First Trimester Diet */}
                  <section id="first-trimester-diet" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Baby className="w-6 h-6 mr-3 text-pink-500" />
                      First Trimester Diet Plan (Weeks 1-12)
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      During the first trimester, focus on managing morning sickness while ensuring adequate folic acid and protein intake. No extra calories needed yet - focus on quality over quantity.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h3 className="font-semibold text-pink-800 mb-4">Key Nutrients:</h3>
                        <ul className="space-y-2 text-pink-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            <strong>Folic Acid:</strong> 400-800mcg daily (leafy greens, fortified cereals)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            <strong>Protein:</strong> 71g daily (lean meats, eggs, legumes)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            <strong>Iron:</strong> 27mg daily (prevent anemia)
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Morning Sickness Foods:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Crackers, toast, and dry cereals
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Ginger tea and lemon water
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Bland proteins like chicken breast
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Sample First Trimester Day:</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Breakfast:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Fortified cereal with milk</li>
                            <li>• Banana and berries</li>
                            <li>• Prenatal vitamin</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Lunch:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Spinach and feta wrap</li>
                            <li>• Greek yogurt</li>
                            <li>• Orange juice</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Dinner:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Grilled chicken breast</li>
                            <li>• Sweet potato</li>
                            <li>• Steamed broccoli</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Second Trimester Diet */}
                  <section id="second-trimester-diet" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Heart className="w-6 h-6 mr-3 text-orange-500" />
                      Second Trimester Nutrition (Weeks 13-27)
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      The second trimester is often called the "golden period" with reduced nausea and increased appetite. Add 340 extra calories daily and focus on calcium, protein, and healthy weight gain.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h3 className="font-semibold text-orange-800 mb-4">Increased Needs:</h3>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            <strong>Calories:</strong> +340 per day (total ~2,200)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            <strong>Calcium:</strong> 1,000mg (dairy, fortified foods)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            <strong>Protein:</strong> 75-100g daily
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Focus Foods:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Lean meats and fish (low mercury)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Dairy products and calcium-rich alternatives
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Whole grains and complex carbohydrates
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Sample Second Trimester Day:</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Breakfast:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Oatmeal with nuts and berries</li>
                            <li>• Greek yogurt</li>
                            <li>• Calcium-fortified orange juice</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Mid-Morning Snack:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Apple with almond butter</li>
                            <li>• Whole grain crackers</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Lunch:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Quinoa bowl with chickpeas</li>
                            <li>• Mixed vegetables</li>
                            <li>• Avocado and olive oil</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Afternoon Snack:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Cheese and whole grain crackers</li>
                            <li>• Fresh fruit</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Dinner:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Baked salmon with herbs</li>
                            <li>• Brown rice pilaf</li>
                            <li>• Roasted vegetables</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Evening Snack:</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Warm milk with honey</li>
                            <li>• Handful of almonds</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Third Trimester Diet */}
                  <section id="third-trimester-diet" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Baby className="w-6 h-6 mr-3 text-green-500" />
                      Third Trimester Meal Planning (Weeks 28-40)
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      In the final trimester, baby's growth accelerates. Add 450 extra calories daily and focus on smaller, more frequent meals as space becomes limited. Prepare your body for breastfeeding.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Key Focus Areas:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <strong>Calories:</strong> +450 per day (total ~2,400)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <strong>DHA:</strong> 200-300mg for brain development
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <strong>Fiber:</strong> 25-35g to prevent constipation
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">Comfort Strategies:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Eat 6 small meals instead of 3 large ones
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Avoid spicy and acidic foods (heartburn)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Stay upright after eating
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Daily Meal Plans */}
                  <section id="daily-meal-plans" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Daily Meal Plans</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                        <h3 className="font-semibold text-teal-800 mb-6">Vegetarian Pregnancy Day:</h3>
                        <div className="grid md:grid-cols-6 gap-4">
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Breakfast</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Smoothie bowl with spinach</li>
                              <li>• Chia seeds and berries</li>
                              <li>• Fortified plant milk</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Snack 1</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Hummus with vegetables</li>
                              <li>• Whole grain pita</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Lunch</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Lentil and quinoa bowl</li>
                              <li>• Mixed greens</li>
                              <li>• Tahini dressing</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Snack 2</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Trail mix with dried fruit</li>
                              <li>• Fortified nutritional yeast</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Dinner</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Black bean and vegetable stir-fry</li>
                              <li>• Brown rice</li>
                              <li>• Avocado slices</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Evening</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Calcium-fortified almond milk</li>
                              <li>• Prenatal supplement</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-6">High-Protein Pregnancy Day:</h3>
                        <div className="grid md:grid-cols-6 gap-4">
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Breakfast</h4>
                            <ul className="text-sm text-yellow-600 space-y-1">
                              <li>• Scrambled eggs with cheese</li>
                              <li>• Whole grain toast</li>
                              <li>• Greek yogurt</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Snack 1</h4>
                            <ul className="text-sm text-yellow-600 space-y-1">
                              <li>• Protein smoothie</li>
                              <li>• Banana and berries</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Lunch</h4>
                            <ul className="text-sm text-yellow-600 space-y-1">
                              <li>• Grilled chicken salad</li>
                              <li>• Chickpeas and quinoa</li>
                              <li>• Olive oil dressing</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Snack 2</h4>
                            <ul className="text-sm text-yellow-600 space-y-1">
                              <li>• Cottage cheese</li>
                              <li>• Fresh fruit</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Dinner</h4>
                            <ul className="text-sm text-yellow-600 space-y-1">
                              <li>• Baked cod with herbs</li>
                              <li>• Quinoa pilaf</li>
                              <li>• Steamed asparagus</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Evening</h4>
                            <ul className="text-sm text-yellow-600 space-y-1">
                              <li>• Milk with protein powder</li>
                              <li>• Handful of nuts</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Nutritional Requirements */}
                  <section id="nutritional-requirements" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Nutritional Requirements by Stage</h2>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-700">Nutrient</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-700">1st Trimester</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-700">2nd Trimester</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-700">3rd Trimester</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium">Calories</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">1,800 (no increase)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">2,200 (+340)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">2,400 (+450)</td>
                          </tr>
                          <tr className="bg-gray-25">
                            <td className="border border-gray-200 px-4 py-3 font-medium">Protein (g)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">71</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">75-100</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">85-100</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium">Folic Acid (mcg)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">400-800</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">400-800</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">400-800</td>
                          </tr>
                          <tr className="bg-gray-25">
                            <td className="border border-gray-200 px-4 py-3 font-medium">Iron (mg)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">27</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">27</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">27</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium">Calcium (mg)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">1,000</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">1,000</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">1,000</td>
                          </tr>
                          <tr className="bg-gray-25">
                            <td className="border border-gray-200 px-4 py-3 font-medium">DHA (mg)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">200</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">200-300</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">200-300</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Section 6: Meal Prep Tips */}
                  <section id="meal-prep-tips" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Meal Prep and Planning Tips</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                        <h3 className="font-semibold text-indigo-800 mb-4">Weekly Prep Strategies:</h3>
                        <ul className="space-y-2 text-indigo-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Batch cook proteins on Sundays
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Pre-cut vegetables for easy cooking
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Prepare freezer-friendly meals
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Stock healthy snacks
                          </li>
                        </ul>
                      </div>

                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-6">
                        <h3 className="font-semibold text-rose-800 mb-4">Emergency Meals:</h3>
                        <ul className="space-y-2 text-rose-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-rose-600" />
                            Keep canned beans and lentils on hand
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-rose-600" />
                            Frozen vegetables for quick sides
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-rose-600" />
                            Quick-cook grains (quinoa, minute rice)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-rose-600" />
                            Nut butters for protein
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Track Your Pregnancy Nutrition with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Get personalized meal suggestions and nutrition tracking based on your trimester. Scan foods to ensure they meet your pregnancy dietary needs.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <AppStoreBadge />
                      <GooglePlayBadge />
                    </div>
                  </div>

                  {/* Related Articles */}
                  <div className="border-t border-gray-200 pt-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                      <Link to="/blog/pregnancy-nutrition-guide" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Complete Pregnancy Nutrition Guide</h4>
                          <p className="text-sm text-gray-600">Essential nutrients for each trimester of pregnancy.</p>
                        </div>
                      </Link>
                      <Link to="/blog/first-trimester-food-safety" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">First Trimester Food Safety</h4>
                          <p className="text-sm text-gray-600">Critical safety information for early pregnancy.</p>
                        </div>
                      </Link>
                      <Link to="/blog/foods-to-avoid-during-pregnancy" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Foods to Avoid During Pregnancy</h4>
                          <p className="text-sm text-gray-600">Complete guide to unsafe foods during pregnancy.</p>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                    <BookOpen className="w-5 h-5 mr-2 text-primary-500" />
                    Table of Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item, index) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={`flex items-center justify-between p-2 rounded-lg text-sm transition-colors hover:bg-primary-50 hover:text-primary-600 ${
                          activeSection === item.id ? 'bg-primary-50 text-primary-600' : 'text-gray-700'
                        }`}
                      >
                        <span className="flex items-center">
                          <ChevronRight className="w-4 h-4 mr-2 flex-shrink-0" />
                          {item.title}
                        </span>
                        {item.completed && <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Get SafeMama App */}
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <Smartphone className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Get SafeMama Free</h3>
                    <p className="text-primary-100 mb-4 text-sm">
                      Instantly check if food, medicine, and products are safe during pregnancy. Get personalized recommendations you can trust.
                    </p>
                    <a
                      href="https://dub.sh/safemama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-white text-primary-600 font-semibold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download App
                    </a>
                  </div>
                </div>

                {/* Stats */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-4">SafeMama Stats</h3>
                  <div className="space-y-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">50,000+</div>
                      <div className="text-sm text-gray-600">Happy Mothers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">4.8★</div>
                      <div className="text-sm text-gray-600">App Store Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">10,000+</div>
                      <div className="text-sm text-gray-600">Daily Scans</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary-600">100+</div>
                      <div className="text-sm text-gray-600">Safety Guides</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PregnancyDietGuide
