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
  Shield,
  BookOpen,
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  XCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const FoodsToAvoidDuringPregnancy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [shareMessage, setShareMessage] = useState('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'raw-undercooked-foods', title: 'Raw and Undercooked Foods', completed: true },
    { id: 'mercury-fish', title: 'Mercury in Fish', completed: true },
    { id: 'unpasteurized-products', title: 'Unpasteurized Products', completed: true },
    { id: 'caffeine-alcohol', title: 'Caffeine and Alcohol', completed: true },
    { id: 'processed-foods', title: 'Processed and Deli Foods', completed: true },
    { id: 'safe-alternatives', title: 'Safe Alternatives', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/foods-to-avoid-during-pregnancy`
  const shareTitle = 'Foods to Avoid During Pregnancy: Complete Safety Guide'
  
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
        <title>Foods to Avoid During Pregnancy: Complete Safety Guide | SafeMama</title>
        <meta name="description" content="Comprehensive guide to foods that should be avoided during pregnancy to keep you and your baby safe. Learn about raw foods, mercury, alcohol, and more." />
        <meta name="keywords" content="foods to avoid pregnancy, pregnancy food safety, dangerous foods pregnancy, raw foods pregnancy, mercury fish pregnancy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Foods to Avoid During Pregnancy: Complete Safety Guide" />
        <meta property="og:description" content="Comprehensive guide to foods that should be avoided during pregnancy to keep you and your baby safe." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/foods-to-avoid-pregnancy-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/foods-to-avoid-during-pregnancy`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Foods to Avoid During Pregnancy: Complete Safety Guide" />
        <meta name="twitter:description" content="Comprehensive guide to foods that should be avoided during pregnancy to keep you and your baby safe." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/foods-to-avoid-pregnancy-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-red-100 via-orange-50 to-yellow-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 28, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>6 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <AlertTriangle className="w-16 h-16 mx-auto mb-4 text-red-500" />
                      <p className="text-lg font-medium">Foods to Avoid During Pregnancy</p>
                      <p className="text-sm">Complete Safety Guide</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>Dr. Michael Chen, Nutrition Specialist</span>
                      <span>•</span>
                      <span>Reviewed by Medical Team</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      Foods to Avoid During Pregnancy: Complete Safety Guide
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Comprehensive guide to foods that should be avoided during pregnancy to keep you and your baby safe. Learn about the risks and find healthy alternatives.
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

                  {/* Key Warning */}
                  <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-semibold text-red-800 mb-4">
                      <XCircle className="w-5 h-5 mr-2" />
                      Important Safety Warning
                    </h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Certain foods pose serious risks to your developing baby's health
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Foodborne illnesses can lead to miscarriage, stillbirth, or birth defects
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        When in doubt, avoid the food and consult your healthcare provider
                      </li>
                    </ul>
                  </div>

                  {/* Section 1: Raw and Undercooked Foods */}
                  <section id="raw-undercooked-foods" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <XCircle className="w-6 h-6 mr-3 text-red-500" />
                      Raw and Undercooked Foods
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Raw or undercooked foods pose the highest risk during pregnancy due to potential bacterial contamination including E. coli, Salmonella, and Listeria.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">Completely Avoid:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw fish (sushi, sashimi, ceviche)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Rare or medium-rare steaks</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw cookie dough or cake batter</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Soft-boiled or runny eggs</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw sprouts (alfalfa, mung bean)</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Safe Cooking Temperatures:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Beef, pork, lamb: 145°F (63°C)</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Ground meat: 160°F (71°C)</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Poultry: 165°F (74°C)</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Fish: 145°F (63°C)</li>
                          <li className="flex items-center"><CheckCircle className="w-4 h-4 mr-2 text-green-600" />Eggs: Cook until firm</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Mercury in Fish */}
                  <section id="mercury-fish" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-orange-500" />
                      Mercury in Fish
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Mercury can cross the placenta and potentially harm your baby's developing brain and nervous system. Large, predatory fish typically contain the highest mercury levels.
                    </p>

                    <div className="grid md:grid-cols-3 gap-6 mb-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">Avoid Completely:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li>• Shark</li>
                          <li>• Swordfish</li>
                          <li>• King mackerel</li>
                          <li>• Tilefish</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-4">Limit Intake:</h3>
                        <ul className="space-y-2 text-yellow-700">
                          <li>• Albacore tuna (6 oz/week)</li>
                          <li>• Yellowfin tuna (6 oz/week)</li>
                          <li>• Light canned tuna (12 oz/week)</li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Safe Options:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li>• Salmon</li>
                          <li>• Sardines</li>
                          <li>• Shrimp</li>
                          <li>• Pollock</li>
                          <li>• Catfish</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Unpasteurized Products */}
                  <section id="unpasteurized-products" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-red-500" />
                      Unpasteurized Products
                    </h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-red-800 mb-4">Avoid All Unpasteurized:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw milk and dairy products</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Soft cheeses (brie, camembert, feta, blue cheese)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Fresh fruit juices</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Unpasteurized cider</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Mexican-style cheeses (queso fresco)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Homemade eggnog</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Caffeine and Alcohol */}
                  <section id="caffeine-alcohol" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-red-500" />
                      Caffeine and Alcohol
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">Alcohol - Zero Tolerance:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />No safe amount during pregnancy</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Can cause fetal alcohol syndrome</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Increases risk of miscarriage</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-4">Caffeine - Limit to 200mg/day:</h3>
                        <ul className="space-y-2 text-yellow-700">
                          <li>• 1 cup coffee = 95mg</li>
                          <li>• 1 cup tea = 47mg</li>
                          <li>• 1 can soda = 34mg</li>
                          <li>• 1 oz dark chocolate = 12mg</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Processed and Deli Foods */}
                  <section id="processed-foods" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <XCircle className="w-6 h-6 mr-3 text-orange-500" />
                      Processed and Deli Foods
                    </h2>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="font-semibold text-orange-800 mb-4">High-Risk Processed Foods:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Deli meats and cold cuts</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Hot dogs (unless heated until steaming)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Pre-made chicken or tuna salad</li>
                        </ul>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Smoked salmon or lox</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Meat spreads and pâtés</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Refrigerated ready-to-eat meals</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 6: Safe Alternatives */}
                  <section id="safe-alternatives" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                      Safe Alternatives
                    </h2>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-semibold text-green-800 mb-6">Healthy Substitutions:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">Instead of Raw Fish:</h4>
                          <ul className="space-y-1 text-green-600 text-sm">
                            <li>• Cooked sushi (California roll)</li>
                            <li>• Grilled salmon</li>
                            <li>• Canned salmon or tuna</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">Instead of Deli Meat:</h4>
                          <ul className="space-y-1 text-green-600 text-sm">
                            <li>• Freshly cooked chicken</li>
                            <li>• Heated deli meat until steaming</li>
                            <li>• Vegetarian protein options</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">Instead of Soft Cheese:</h4>
                          <ul className="space-y-1 text-green-600 text-sm">
                            <li>• Hard cheeses (cheddar, Swiss)</li>
                            <li>• Pasteurized cream cheese</li>
                            <li>• Cottage cheese</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">Instead of Alcohol:</h4>
                          <ul className="space-y-1 text-green-600 text-sm">
                            <li>• Sparkling water with fruit</li>
                            <li>• Herbal teas</li>
                            <li>• Virgin mocktails</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Get SafeMama App for Instant Food Safety Checks</h3>
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
                      <Link to="/blog/first-trimester-food-safety" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">First Trimester Food Safety</h4>
                          <p className="text-sm text-gray-600">Essential guide for safe eating during early pregnancy.</p>
                        </div>
                      </Link>
                      <Link to="/blog/pregnancy-nutrition-guide" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Pregnancy Nutrition Guide</h4>
                          <p className="text-sm text-gray-600">Complete nutrition guide for expecting mothers.</p>
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

export default FoodsToAvoidDuringPregnancy
