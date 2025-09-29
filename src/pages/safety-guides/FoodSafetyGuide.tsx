import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft,
  Clock, 
  User,
  Share2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Utensils,
  Shield,
  BookOpen,
  ChevronRight,
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Apple,
  Fish,
  Milk,
  Coffee,
  Pill,
  Dumbbell,
  Baby
} from 'lucide-react'

const FoodSafetyGuide: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('')

  // Share functions
  const shareUrl = `${window.location.origin}/safety-guides/food-safety`
  const shareTitle = 'Complete Food Safety Guide During Pregnancy | SafeMama'
  
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

  // Table of Contents
  const tableOfContents = [
    { id: 'safe-foods', title: 'Foods That Are Safe', icon: CheckCircle, color: 'text-green-600' },
    { id: 'foods-to-avoid', title: 'Foods to Avoid', icon: XCircle, color: 'text-red-600' },
    { id: 'food-preparation', title: 'Safe Food Preparation', icon: Utensils, color: 'text-blue-600' },
    { id: 'restaurant-safety', title: 'Restaurant Safety Tips', icon: Shield, color: 'text-purple-600' },
    { id: 'food-poisoning-prevention', title: 'Food Poisoning Prevention', icon: AlertTriangle, color: 'text-orange-600' },
    { id: 'special-considerations', title: 'Special Considerations', icon: BookOpen, color: 'text-indigo-600' }
  ]

  return (
    <>
      <Helmet>
        <title>Complete Food Safety Guide During Pregnancy | SafeMama Safety Guides</title>
        <meta name="description" content="Comprehensive guide to safe eating throughout your pregnancy journey. Learn which foods are safe, what to avoid, and proper food preparation techniques." />
        <meta name="keywords" content="pregnancy food safety, safe foods pregnancy, foods to avoid pregnancy, food preparation pregnancy, SafeMama food guide" />
        
        <meta property="og:title" content="Complete Food Safety Guide During Pregnancy | SafeMama" />
        <meta property="og:description" content="Comprehensive guide to safe eating throughout your pregnancy journey." />
        <meta property="og:image" content={`${window.location.origin}/images/safety-guides/food-safety-og.jpg`} />
        <meta property="og:url" content={shareUrl} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Back Button */}
                <div className="p-6 border-b border-gray-200">
                  <Link 
                    to="/safety-guides" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Safety Guides
                  </Link>
                </div>

                {/* Header */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-green-500 to-emerald-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Utensils className="w-16 h-16 mx-auto mb-4" />
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Complete Food Safety Guide</h1>
                      <p className="text-xl text-green-100">Safe Eating Throughout Pregnancy</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>12 min read</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>Beginner Level</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Share Buttons */}
                  <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-700">Share Guide:</span>
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

                  {/* Introduction */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Eating safely during pregnancy is crucial for both your health and your baby's development. This comprehensive guide covers everything you need to know about food safety, from which foods to enjoy to those you should avoid, plus practical tips for safe food preparation.
                    </p>
                    
                    <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
                      <h3 className="flex items-center font-semibold text-green-800 mb-3">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        What You'll Learn
                      </h3>
                      <ul className="space-y-2 text-green-700">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Which foods are completely safe during pregnancy
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Foods to avoid and why they're risky
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Safe food preparation techniques
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          How to eat safely at restaurants
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Prevention strategies for foodborne illness
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 1: Safe Foods */}
                  <section id="safe-foods" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                      Foods That Are Safe During Pregnancy
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      These foods are not only safe but also beneficial for you and your baby's health when prepared properly.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-green-800 mb-4">
                          <Apple className="w-5 h-5 mr-2" />
                          Fruits & Vegetables
                        </h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            All fresh fruits (washed thoroughly)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            All vegetables (cooked or raw, well-washed)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Frozen fruits and vegetables
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Canned fruits in juice (not syrup)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Dried fruits (in moderation)
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-blue-800 mb-4">
                          <Fish className="w-5 h-5 mr-2" />
                          Proteins
                        </h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Well-cooked poultry (165°F internal temp)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Well-cooked beef, pork, lamb (145°F)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Low-mercury fish (salmon, sardines, anchovies)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Fully cooked eggs (no runny yolks)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Legumes, beans, lentils
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-purple-800 mb-4">
                          <Milk className="w-5 h-5 mr-2" />
                          Dairy Products
                        </h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Pasteurized milk and yogurt
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Hard cheeses (cheddar, Swiss, parmesan)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Pasteurized soft cheeses
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Cottage cheese and cream cheese
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Ice cream (commercially made)
                          </li>
                        </ul>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-orange-800 mb-4">
                          <Coffee className="w-5 h-5 mr-2" />
                          Beverages
                        </h3>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            Water (8-10 glasses daily)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            Pasteurized juices
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            Herbal teas (pregnancy-safe varieties)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            Limited caffeine (under 200mg/day)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            Decaffeinated drinks
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Foods to Avoid */}
                  <section id="foods-to-avoid" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <XCircle className="w-6 h-6 mr-3 text-red-600" />
                      Foods to Avoid During Pregnancy
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      These foods pose potential risks to you and your baby and should be completely avoided during pregnancy.
                    </p>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-red-800 mb-4">High-Risk Foods to Completely Avoid:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw or undercooked fish (sushi, sashimi)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High-mercury fish (shark, swordfish, king mackerel)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw or undercooked eggs</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw or undercooked meat</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Unpasteurized dairy products</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Soft cheeses (brie, camembert, blue cheese)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Deli meats and cold cuts</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw sprouts</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Alcohol (any amount)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Excess caffeine (over 200mg/day)</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Food Preparation */}
                  <section id="food-preparation" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Utensils className="w-6 h-6 mr-3 text-blue-600" />
                      Safe Food Preparation
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Essential Food Safety Steps:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-blue-700 mb-3">Before Cooking:</h4>
                            <ul className="space-y-2 text-blue-600">
                              <li>• Wash hands thoroughly for 20 seconds</li>
                              <li>• Clean all surfaces and utensils</li>
                              <li>• Wash fruits and vegetables under running water</li>
                              <li>• Use separate cutting boards for raw meat</li>
                              <li>• Check expiration dates</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-700 mb-3">During Cooking:</h4>
                            <ul className="space-y-2 text-blue-600">
                              <li>• Use a food thermometer</li>
                              <li>• Cook meat to proper internal temperatures</li>
                              <li>• Don't cross-contaminate cooked and raw foods</li>
                              <li>• Heat leftovers to 165°F (74°C)</li>
                              <li>• Don't taste food while cooking with utensils</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-4">Food Storage Guidelines:</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Refrigerator (40°F/4°C):</h4>
                            <ul className="space-y-1 text-yellow-600 text-sm">
                              <li>• Fresh meat: 1-2 days</li>
                              <li>• Cooked meat: 3-4 days</li>
                              <li>• Dairy products: Use by date</li>
                              <li>• Leftovers: 3-4 days</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Freezer (0°F/-18°C):</h4>
                            <ul className="space-y-1 text-yellow-600 text-sm">
                              <li>• Fresh meat: 4-12 months</li>
                              <li>• Cooked meat: 2-6 months</li>
                              <li>• Frozen vegetables: 8-12 months</li>
                              <li>• Prepared meals: 1-3 months</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-yellow-700 mb-2">Danger Zone:</h4>
                            <ul className="space-y-1 text-yellow-600 text-sm">
                              <li>• 40-140°F (4-60°C)</li>
                              <li>• Don't leave food out greater than 2 hours</li>
                              <li>• Greater than 1 hour if temp greater than 90°F (32°C)</li>
                              <li>• When in doubt, throw it out</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Restaurant Safety */}
                  <section id="restaurant-safety" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-purple-600" />
                      Restaurant Safety Tips
                    </h2>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-800 mb-4">Smart Restaurant Choices:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">What to Order:</h4>
                          <ul className="space-y-2 text-purple-600">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-500" />
                              Well-cooked meat and poultry
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-500" />
                              Fully cooked seafood
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-500" />
                              Hot, freshly prepared meals
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-500" />
                              Pasteurized dairy products
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">What to Avoid:</h4>
                          <ul className="space-y-2 text-purple-600">
                            <li className="flex items-start">
                              <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                              Raw or undercooked items
                            </li>
                            <li className="flex items-start">
                              <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                              Salad bars and buffets
                            </li>
                            <li className="flex items-start">
                              <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                              Foods that have been sitting out
                            </li>
                            <li className="flex items-start">
                              <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                              Unpasteurized dressings or sauces
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Get Instant Food Safety Checks</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Download SafeMama app to scan any food item and get instant safety recommendations tailored to your pregnancy stage.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <a
                        href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download on App Store
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.safemama.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Get on Google Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                    <BookOpen className="w-5 h-5 mr-2 text-primary-500" />
                    Guide Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center p-3 rounded-lg text-sm transition-colors hover:bg-gray-50 hover:text-primary-600 group"
                      >
                        <item.icon className={`w-4 h-4 mr-3 ${item.color} group-hover:text-primary-600`} />
                        <span>{item.title}</span>
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
                      Instantly check if any food is safe during pregnancy. Get personalized recommendations you can trust.
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

                {/* Related Guides */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                  <div className="space-y-3">
                    <Link to="/safety-guides/medication-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Pill className="w-5 h-5 mr-3 text-blue-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Medication Safety</span>
                    </Link>
                    <Link to="/safety-guides/exercise-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Dumbbell className="w-5 h-5 mr-3 text-pink-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Exercise Safety</span>
                    </Link>
                    <Link to="/safety-guides/first-trimester" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Baby className="w-5 h-5 mr-3 text-purple-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">First Trimester Safety</span>
                    </Link>
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

export default FoodSafetyGuide
