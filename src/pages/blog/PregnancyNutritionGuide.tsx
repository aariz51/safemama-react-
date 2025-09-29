import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ChevronRight, 
  Heart, 
  CheckCircle, 
  BookOpen,
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Baby,
  Apple
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PregnancyNutritionGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'essential-nutrients', title: 'Essential Nutrients for Pregnancy', completed: true },
    { id: 'trimester-nutrition', title: 'Trimester-by-Trimester Nutrition', completed: true },
    { id: 'prenatal-vitamins', title: 'Prenatal Vitamins Guide', completed: true },
    { id: 'healthy-meal-planning', title: 'Healthy Meal Planning', completed: true },
    { id: 'managing-symptoms', title: 'Managing Pregnancy Symptoms with Nutrition', completed: true },
    { id: 'special-considerations', title: 'Special Dietary Considerations', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/pregnancy-nutrition-guide`
  const shareTitle = 'Complete Pregnancy Nutrition Guide: What to Eat for a Healthy Baby'
  
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
        <title>Complete Pregnancy Nutrition Guide: What to Eat for a Healthy Baby | SafeMama</title>
        <meta name="description" content="Essential nutrients needed throughout your pregnancy journey for optimal baby development and maternal health. Complete nutrition guide for expecting mothers." />
        <meta name="keywords" content="pregnancy nutrition, prenatal vitamins, pregnancy diet, healthy pregnancy foods, pregnancy nutrients, expecting mothers nutrition" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Complete Pregnancy Nutrition Guide: What to Eat for a Healthy Baby" />
        <meta property="og:description" content="Essential nutrients needed throughout your pregnancy journey for optimal baby development and maternal health." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/pregnancy-nutrition-guide-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/pregnancy-nutrition-guide`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Complete Pregnancy Nutrition Guide: What to Eat for a Healthy Baby" />
        <meta name="twitter:description" content="Essential nutrients needed throughout your pregnancy journey for optimal baby development and maternal health." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/pregnancy-nutrition-guide-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-purple-100 via-pink-50 to-indigo-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 27, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>10 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Heart className="w-16 h-16 mx-auto mb-4 text-purple-500" />
                      <p className="text-lg font-medium">Pregnancy Nutrition Guide</p>
                      <p className="text-sm">What to Eat for a Healthy Baby</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>Dr. Emily Rodriguez, Nutrition Specialist</span>
                      <span>•</span>
                      <span>Reviewed by Medical Team</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      Complete Pregnancy Nutrition Guide: What to Eat for a Healthy Baby
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Essential nutrients needed throughout your pregnancy journey for optimal baby development and maternal health. Learn what to eat, when to eat it, and how to ensure you're getting everything you need.
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

                  {/* Key Nutrients Overview */}
                  <div className="bg-purple-50 border-l-4 border-purple-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-semibold text-purple-800 mb-4">
                      <Heart className="w-5 h-5 mr-2" />
                      Essential Nutrients for Pregnancy
                    </h3>
                    <ul className="space-y-2 text-purple-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Folic Acid: Prevents neural tube defects (400-800 mcg daily)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Iron: Supports increased blood volume (27 mg daily)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Calcium: Essential for baby's bone development (1,000 mg daily)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Protein: Building blocks for growth (75-100g daily)
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Omega-3 DHA: Critical for brain development (200-300 mg daily)
                      </li>
                    </ul>
                  </div>

                  {/* Section 1: Essential Nutrients */}
                  <section id="essential-nutrients" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Apple className="w-6 h-6 mr-3 text-green-500" />
                      Essential Nutrients for Pregnancy
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Macro Nutrients:</h3>
                        <ul className="space-y-3 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Protein (75-100g daily):</strong> Lean meats, fish, eggs, legumes, dairy
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Carbohydrates (175g daily):</strong> Whole grains, fruits, vegetables
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Healthy Fats (20-35% of calories):</strong> Avocados, nuts, olive oil
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Critical Micronutrients:</h3>
                        <ul className="space-y-3 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            <div>
                              <strong>Folic Acid (400-800 mcg):</strong> Leafy greens, fortified cereals
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            <div>
                              <strong>Iron (27 mg):</strong> Lean red meat, spinach, lentils
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            <div>
                              <strong>Calcium (1,000 mg):</strong> Dairy products, fortified plant milks
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Trimester Nutrition */}
                  <section id="trimester-nutrition" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Baby className="w-6 h-6 mr-3 text-pink-500" />
                      Trimester-by-Trimester Nutrition
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h3 className="font-semibold text-pink-800 mb-4">First Trimester (Weeks 1-12):</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-pink-700 mb-2">Key Focus:</h4>
                            <ul className="space-y-1 text-pink-600 text-sm">
                              <li>• Folic acid for neural tube development</li>
                              <li>• Manage morning sickness with small meals</li>
                              <li>• Stay hydrated</li>
                              <li>• Begin prenatal vitamins</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-pink-700 mb-2">Calorie Needs:</h4>
                            <p className="text-pink-600 text-sm">No additional calories needed. Focus on nutrient density over quantity.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h3 className="font-semibold text-orange-800 mb-4">Second Trimester (Weeks 13-27):</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-orange-700 mb-2">Key Focus:</h4>
                            <ul className="space-y-1 text-orange-600 text-sm">
                              <li>• Increase protein for rapid growth</li>
                              <li>• Iron for expanding blood volume</li>
                              <li>• Calcium for bone development</li>
                              <li>• Omega-3s for brain development</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-orange-700 mb-2">Calorie Needs:</h4>
                            <p className="text-orange-600 text-sm">Add 340 extra calories per day. Focus on nutrient-rich foods.</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Third Trimester (Weeks 28-40):</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Key Focus:</h4>
                            <ul className="space-y-1 text-green-600 text-sm">
                              <li>• Continue high protein and iron intake</li>
                              <li>• Increase DHA for brain maturation</li>
                              <li>• Small, frequent meals for comfort</li>
                              <li>• Prepare body for breastfeeding</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Calorie Needs:</h4>
                            <p className="text-green-600 text-sm">Add 450 extra calories per day. Continue focus on quality nutrition.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Prenatal Vitamins */}
                  <section id="prenatal-vitamins" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Prenatal Vitamins Guide</h2>
                    
                    <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-indigo-800 mb-4">Essential Components in Your Prenatal:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-indigo-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Folic Acid: 400-800 mcg</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Iron: 27 mg</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Calcium: 200-300 mg</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Vitamin D: 600 IU</li>
                        </ul>
                        <ul className="space-y-2 text-indigo-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />DHA: 200-300 mg</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Iodine: 220 mcg</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Choline: 450 mg</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />B Vitamins: Full spectrum</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Meal Planning */}
                  <section id="healthy-meal-planning" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Healthy Meal Planning</h2>
                    
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                      <h3 className="font-semibold text-teal-800 mb-6">Sample Daily Meal Plan (2nd Trimester):</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-teal-700 mb-3">Breakfast (8am)</h4>
                          <ul className="text-sm text-teal-600 space-y-1">
                            <li>• Fortified oatmeal with berries</li>
                            <li>• Greek yogurt</li>
                            <li>• Orange juice with calcium</li>
                            <li>• Prenatal vitamin</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-teal-700 mb-3">Mid-Morning Snack (10am)</h4>
                          <ul className="text-sm text-teal-600 space-y-1">
                            <li>• Apple with almond butter</li>
                            <li>• Whole grain crackers</li>
                            <li>• Water with lemon</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-teal-700 mb-3">Lunch (12pm)</h4>
                          <ul className="text-sm text-teal-600 space-y-1">
                            <li>• Quinoa salad with chickpeas</li>
                            <li>• Mixed leafy greens</li>
                            <li>• Grilled chicken breast</li>
                            <li>• Olive oil dressing</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-teal-700 mb-3">Afternoon Snack (3pm)</h4>
                          <ul className="text-sm text-teal-600 space-y-1">
                            <li>• Hummus with vegetables</li>
                            <li>• Whole grain pita</li>
                            <li>• Herbal tea</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-teal-700 mb-3">Dinner (6pm)</h4>
                          <ul className="text-sm text-teal-600 space-y-1">
                            <li>• Baked salmon with herbs</li>
                            <li>• Roasted sweet potato</li>
                            <li>• Steamed broccoli</li>
                            <li>• Brown rice</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-teal-700 mb-3">Evening Snack (8pm)</h4>
                          <ul className="text-sm text-teal-600 space-y-1">
                            <li>• Calcium-fortified milk</li>
                            <li>• Whole grain cereal</li>
                            <li>• Fresh berries</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Managing Symptoms */}
                  <section id="managing-symptoms" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Pregnancy Symptoms with Nutrition</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-4">Morning Sickness:</h3>
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Eat small, frequent meals every 2-3 hours</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Try ginger tea, crackers, or toast</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Avoid spicy, greasy, or strong-smelling foods</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Stay hydrated with small sips throughout the day</li>
                        </ul>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">Constipation:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Increase fiber intake with fruits, vegetables, and whole grains</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Drink 8-10 glasses of water daily</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Add prunes, pears, and leafy greens to your diet</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Consider a fiber supplement if recommended by your doctor</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Heartburn:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />Eat smaller, more frequent meals</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />Avoid spicy, acidic, or fatty foods</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />Don't lie down immediately after eating</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />Try eating yogurt or drinking milk for relief</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 6: Special Considerations */}
                  <section id="special-considerations" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Special Dietary Considerations</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">Vegetarian/Vegan Pregnancy:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />Focus on protein combinations (rice + beans)</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />Supplement with B12, iron, and omega-3</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />Include fortified plant milks and nutritional yeast</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Gestational Diabetes:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Monitor carbohydrate intake and timing</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Choose complex carbs over simple sugars</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Work with a registered dietitian</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Get Personalized Nutrition Guidance with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Scan food items to check their nutritional value and safety for pregnancy. Get AI-powered meal suggestions tailored to your trimester and dietary needs.
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
                      <Link to="/blog/first-trimester-food-safety" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">First Trimester Food Safety</h4>
                          <p className="text-sm text-gray-600">Essential safety guide for early pregnancy nutrition.</p>
                        </div>
                      </Link>
                      <Link to="/blog/foods-to-avoid-during-pregnancy" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Foods to Avoid During Pregnancy</h4>
                          <p className="text-sm text-gray-600">Complete guide to foods that should be avoided.</p>
                        </div>
                      </Link>
                      <Link to="/blog/pregnancy-diet-guide" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Pregnancy Diet Plan</h4>
                          <p className="text-sm text-gray-600">Trimester-by-trimester meal planning guide.</p>
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

export default PregnancyNutritionGuide
