import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ChevronRight, 
  AlertTriangle, 
  CheckCircle, 
  Heart,
  BookOpen,
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check
} from 'lucide-react'
import { Link } from 'react-router-dom'

const FirstTrimesterFoodSafety: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [shareMessage, setShareMessage] = useState('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'why-food-safety-matters', title: 'Why Food Safety Matters Most in First Trimester', completed: true },
    { id: 'foods-to-embrace', title: 'Foods to Embrace in Your First Trimester', completed: true },
    { id: 'foods-to-avoid', title: 'Foods to Avoid in First Trimester', completed: true },
    { id: 'managing-challenges', title: 'Managing First Trimester Challenges', completed: true },
    { id: 'meal-planning', title: 'Meal Planning for First Trimester', completed: true },
    { id: 'food-safety-tips', title: 'Food Safety Tips for First Trimester', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/first-trimester-food-safety`
  const shareTitle = 'First Trimester Food Safety: Essential Guide for Early Pregnancy'
  
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
        <title>First Trimester Food Safety: Essential Guide for Early Pregnancy | SafeMama</title>
        <meta name="description" content="Navigate the critical first 12 weeks of pregnancy with confidence. Learn which foods are safe, what to avoid, and essential nutrition tips for early pregnancy." />
        <meta name="keywords" content="first trimester food safety, early pregnancy nutrition, pregnancy diet guide, safe foods pregnancy, foods to avoid pregnancy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="First Trimester Food Safety: Essential Guide for Early Pregnancy" />
        <meta property="og:description" content="Navigate the critical first 12 weeks of pregnancy with confidence. Learn which foods are safe, what to avoid, and essential nutrition tips for early pregnancy." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/first-trimester-food-safety-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/first-trimester-food-safety`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="First Trimester Food Safety: Essential Guide for Early Pregnancy" />
        <meta name="twitter:description" content="Navigate the critical first 12 weeks of pregnancy with confidence. Learn which foods are safe, what to avoid, and essential nutrition tips for early pregnancy." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/first-trimester-food-safety-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-pink-100 via-purple-50 to-indigo-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 29, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>8 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <BookOpen className="w-16 h-16 mx-auto mb-4 text-primary-500" />
                      <p className="text-lg font-medium">First Trimester Food Safety</p>
                      <p className="text-sm">Essential Guide for Early Pregnancy</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>Dr. Sarah Johnson, Nutrition Specialist</span>
                      <span>•</span>
                      <span>Reviewed by Medical Team</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      First Trimester Food Safety: Essential Guide for Early Pregnancy
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Navigate the critical first 12 weeks of pregnancy with confidence. Learn which foods are safe, what to avoid, and essential nutrition tips for early pregnancy.
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

                  {/* Key Takeaways */}
                  <div className="bg-green-50 border-l-4 border-green-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-semibold text-green-800 mb-4">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      Key Takeaways
                    </h3>
                    <ul className="space-y-2 text-green-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Prioritize Safety: Avoid high-risk foods that could harm your developing baby
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Focus on Nutrients: Emphasize iron, calcium, and protein
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Listen to Your Body: Work with pregnancy symptoms, not against them
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Stay Flexible: Adapt your diet as needed while maintaining nutrition
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Plan Ahead: Meal planning helps ensure consistent nutrition
                      </li>
                    </ul>
                  </div>

                  {/* Section 1: Why Food Safety Matters Most in First Trimester */}
                  <section id="why-food-safety-matters" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-red-500" />
                      Why Food Safety Matters Most in the First Trimester
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      During the first trimester of pregnancy, your baby's major organs are forming, making this period critical for proper nutrition and food safety. Your baby's neural tube, heart, and other vital organs are developing rapidly during weeks 1-12.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-amber-800 mb-4">Key Risks During Early Pregnancy:</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white p-4 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-700 mb-2">Foodborne Illnesses:</h4>
                          <p className="text-sm text-amber-600">Your immune system is naturally suppressed during pregnancy</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-700 mb-2">Toxoplasmosis:</h4>
                          <p className="text-sm text-amber-600">Can cause serious birth defects</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-700 mb-2">Listeria:</h4>
                          <p className="text-sm text-amber-600">Particularly dangerous in the first trimester</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-amber-200">
                          <h4 className="font-semibold text-amber-700 mb-2">High Mercury Levels:</h4>
                          <p className="text-sm text-amber-600">Can affect brain development</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Foods to Embrace */}
                  <section id="foods-to-embrace" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Heart className="w-6 h-6 mr-3 text-green-500" />
                      Foods to Embrace in Your First Trimester
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Folate-Rich Foods (Essential for Neural Tube Development):</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Leafy Greens: Spinach, kale, romaine lettuce</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Legumes: Lentils, chickpeas, black beans</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Fortified Cereals: Choose whole grain options</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Avocados: Also rich in healthy fats</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Citrus Fruits: Oranges, grapefruit, lemons</li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Iron-Rich Foods (Prevent Anemia):</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-600" />Lean Red Meat: Well-cooked beef or lamb</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-600" />Poultry: Chicken and turkey (fully cooked)</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-600" />Fish: Salmon, sardines (low mercury)</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-blue-600" />Plant Sources: Quinoa, pumpkin seeds, dried apricots</li>
                        </ul>
                      </div>
                    </div>

                    {/* Sample Daily Menu */}
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-6">Sample Daily Menu</h3>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Breakfast</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Fortified whole grain cereal with milk</li>
                            <li>• Mixed berries and banana</li>
                            <li>• Orange juice fortified with calcium</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Mid Morning Snack</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Greek yogurt with nuts</li>
                            <li>• Whole grain crackers</li>
                            <li>• Herbal tea or water</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Lunch</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Grilled chicken salad with grilled chicken</li>
                            <li>• Mixed greens and vegetables</li>
                            <li>• Whole grain roll</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Afternoon Snack</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Apple slices with almond butter</li>
                            <li>• Prenatal vitamin</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Dinner</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Baked salmon with lemon</li>
                            <li>• Steamed broccoli</li>
                            <li>• Brown rice or quinoa</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Evening Snack</h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Calcium-fortified cereal or smoothie</li>
                            <li>• Herbal tea</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Foods to Avoid */}
                  <section id="foods-to-avoid" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-red-500" />
                      Foods to Avoid in First Trimester
                    </h2>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="font-semibold text-red-800 mb-4">High-Risk Foods:</h3>
                          <ul className="space-y-2 text-red-700">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw or undercooked meats</li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw or undercooked eggs</li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Unpasteurized dairy products</li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw sprouts and unwashed produce</li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High-mercury fish (shark, swordfish)</li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="font-semibold text-red-800 mb-4">Limit or Avoid:</h3>
                          <ul className="space-y-2 text-red-700">
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Caffeine (limit to 200mg daily)</li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Alcohol (completely avoid)</li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Processed meats and deli meats</li>
                            <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw seafood (sushi, oysters)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Managing Challenges */}
                  <section id="managing-challenges" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing First Trimester Challenges</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">Dealing with Morning Sickness:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />Eat small, frequent meals throughout the day</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />Keep crackers by your bedside</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />Try ginger tea or ginger chews</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />Stay hydrated with small sips of water</li>
                        </ul>
                      </div>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                        <h3 className="font-semibold text-indigo-800 mb-4">Food Aversions and Cravings:</h3>
                        <ul className="space-y-2 text-indigo-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Don't force yourself to eat foods that make you nauseous</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Find alternative sources of the same nutrients</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Satisfy cravings with healthier versions when possible</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />Trust your body's signals while maintaining safety</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Meal Planning */}
                  <section id="meal-planning" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Meal Planning for First Trimester</h2>
                    
                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                      <h3 className="font-semibold text-teal-800 mb-6">Weekly Meal Planning Tips:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-teal-700 mb-3">Planning Strategies:</h4>
                          <ul className="space-y-2 text-teal-600">
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5" />Plan meals around foods you can tolerate</li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5" />Prepare safe snacks in advance</li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5" />Batch cook when you feel good</li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5" />Keep emergency foods on hand</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-teal-700 mb-3">Safe Food Preparation:</h4>
                          <ul className="space-y-2 text-teal-600">
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5" />Wash all fruits and vegetables thoroughly</li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5" />Cook meats to safe internal temperatures</li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5" />Store leftovers properly and use within 2 days</li>
                            <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5" />Keep raw and cooked foods separate</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 6: Food Safety Tips */}
                  <section id="food-safety-tips" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Food Safety Tips for First Trimester</h2>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <div className="grid md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="font-medium text-orange-700 mb-3">Kitchen Hygiene:</h4>
                          <ul className="space-y-2 text-orange-600 text-sm">
                            <li>• Wash hands frequently</li>
                            <li>• Use separate cutting boards</li>
                            <li>• Clean surfaces regularly</li>
                            <li>• Check expiration dates</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-700 mb-3">Safe Temperatures:</h4>
                          <ul className="space-y-2 text-orange-600 text-sm">
                            <li>• Poultry: 165°F (74°C)</li>
                            <li>• Ground meat: 160°F (71°C)</li>
                            <li>• Whole cuts: 145°F (63°C)</li>
                            <li>• Fish: 145°F (63°C)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-700 mb-3">Storage Safety:</h4>
                          <ul className="space-y-2 text-orange-600 text-sm">
                            <li>• Refrigerate promptly</li>
                            <li>• Use leftovers within 2 days</li>
                            <li>• Freeze for longer storage</li>
                            <li>• When in doubt, throw it out</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Get SafeMama App for Personalized Guidance</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Scan any food item and get instant safety recommendations tailored to your pregnancy stage. Join 50,000+ expecting mothers using SafeMama.
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
                      <Link to="/blog/foods-to-avoid-during-pregnancy" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Foods to Avoid During Pregnancy</h4>
                          <p className="text-sm text-gray-600">Complete guide to foods that should be avoided for pregnancy safety.</p>
                        </div>
                      </Link>
                      <Link to="/blog/pregnancy-nutrition-guide" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Pregnancy Nutrition Guide</h4>
                          <p className="text-sm text-gray-600">Essential nutrients needed throughout your pregnancy journey.</p>
                        </div>
                      </Link>
                      <Link to="/blog/safe-medications-pregnancy" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Safe Medications During Pregnancy</h4>
                          <p className="text-sm text-gray-600">Understanding which medications are safe during pregnancy.</p>
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

export default FirstTrimesterFoodSafety
