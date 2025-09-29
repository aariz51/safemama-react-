import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ChevronRight, 
  Smartphone, 
  CheckCircle, 
  BookOpen,
  Download,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Scan,
  Zap,
  Shield,
  Brain,
  Camera,
  Database
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PregnancyFoodSafetyScanner: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'how-scanners-work', title: 'How Food Safety Scanners Work', completed: true },
    { id: 'safemama-technology', title: 'SafeMama AI Technology', completed: true },
    { id: 'benefits-for-pregnancy', title: 'Benefits for Expecting Mothers', completed: true },
    { id: 'scanning-process', title: 'Step-by-Step Scanning Process', completed: true },
    { id: 'accuracy-reliability', title: 'Accuracy and Reliability', completed: true },
    { id: 'future-of-food-safety', title: 'Future of Food Safety Technology', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/pregnancy-food-safety-scanner`
  const shareTitle = 'How Food Safety Scanners Help During Pregnancy'
  
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
        <title>How Food Safety Scanners Help During Pregnancy | SafeMama Technology Guide</title>
        <meta name="description" content="Learn how modern technology like SafeMama helps expecting mothers make informed food choices through AI-powered scanning and instant safety analysis." />
        <meta name="keywords" content="pregnancy food scanner, food safety app, pregnancy technology, AI food analysis, SafeMama scanner, pregnancy safety tech" />
        
        {/* Open Graph */}
        <meta property="og:title" content="How Food Safety Scanners Help During Pregnancy" />
        <meta property="og:description" content="Learn how modern technology like SafeMama helps expecting mothers make informed food choices." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/pregnancy-food-scanner-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/pregnancy-food-safety-scanner`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="How Food Safety Scanners Help During Pregnancy" />
        <meta name="twitter:description" content="Learn how modern technology like SafeMama helps expecting mothers make informed food choices." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/pregnancy-food-scanner-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-indigo-100 via-purple-50 to-blue-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 22, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>5 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Scan className="w-16 h-16 mx-auto mb-4 text-indigo-500" />
                      <p className="text-lg font-medium">Food Safety Scanners</p>
                      <p className="text-sm">Modern Technology for Pregnancy Safety</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>SafeMama Team</span>
                      <span>•</span>
                      <span>Technology & Health</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      How Food Safety Scanners Help During Pregnancy
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Learn how modern technology like SafeMama helps expecting mothers make informed food choices through AI-powered scanning and instant safety analysis.
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

                  {/* Key Benefits Overview */}
                  <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-semibold text-indigo-800 mb-4">
                      <Zap className="w-5 h-5 mr-2" />
                      Why Food Safety Scanners Are Revolutionary
                    </h3>
                    <ul className="space-y-2 text-indigo-700">
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Instant analysis of food safety for pregnancy in seconds
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        AI-powered recommendations based on latest research
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Personalized guidance for your specific pregnancy stage
                      </li>
                      <li className="flex items-start">
                        <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Access to expert knowledge anytime, anywhere
                      </li>
                    </ul>
                  </div>

                  {/* Section 1: How Scanners Work */}
                  <section id="how-scanners-work" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Camera className="w-6 h-6 mr-3 text-blue-500" />
                      How Food Safety Scanners Work
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Food safety scanners use advanced computer vision and artificial intelligence to analyze food items and provide instant safety recommendations for pregnancy. The technology combines multiple detection methods for comprehensive analysis.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Visual Recognition:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Camera captures high-resolution images
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            AI identifies food type, brand, and variety
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Machine learning improves accuracy over time
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Barcode Scanning:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Instant product identification via UPC/EAN codes
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Access to detailed ingredient databases
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Real-time nutritional information retrieval
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: SafeMama Technology */}
                  <section id="safemama-technology" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Brain className="w-6 h-6 mr-3 text-purple-500" />
                      SafeMama AI Technology
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">Advanced AI Analysis:</h3>
                        <p className="text-purple-700 mb-4">
                          SafeMama's proprietary AI system combines computer vision, natural language processing, and medical knowledge databases to provide the most accurate pregnancy safety recommendations.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">99.2%</div>
                            <div className="text-sm text-purple-600">Accuracy Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">&lt;2 sec</div>
                            <div className="text-sm text-purple-600">Analysis Time</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-purple-600 mb-1">50k+</div>
                            <div className="text-sm text-purple-600">Food Database</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h3 className="font-semibold text-orange-800 mb-4">Real-Time Updates:</h3>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            Continuous updates from FDA and medical research
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            Integration with latest pregnancy safety guidelines
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />
                            Personalized recommendations based on trimester
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Benefits for Pregnancy */}
                  <section id="benefits-for-pregnancy" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-green-500" />
                      Benefits for Expecting Mothers
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Peace of Mind:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Eliminate guesswork about food safety
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Confident grocery shopping and dining
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Reduced anxiety about food choices
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Convenience:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Instant answers without research
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Works offline for basic scanning
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Available 24/7 on your smartphone
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="font-semibold text-yellow-800 mb-4">Educational Value:</h3>
                      <p className="text-yellow-700 mb-4">
                        Beyond simple yes/no answers, food safety scanners provide educational content that helps expecting mothers understand the reasoning behind safety recommendations.
                      </p>
                      <ul className="space-y-2 text-yellow-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                          Learn about specific risks and benefits
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                          Understand nutritional content
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                          Get alternative food suggestions
                        </li>
                      </ul>
                    </div>
                  </section>

                  {/* Section 4: Scanning Process */}
                  <section id="scanning-process" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Scanning Process</h2>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-6">How to Use SafeMama Scanner:</h3>
                      <div className="grid md:grid-cols-4 gap-6">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
                          <h4 className="font-medium text-gray-700 mb-2">Open App</h4>
                          <p className="text-sm text-gray-600">Launch SafeMama and tap the scan button</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
                          <h4 className="font-medium text-gray-700 mb-2">Scan Item</h4>
                          <p className="text-sm text-gray-600">Point camera at food item or barcode</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
                          <h4 className="font-medium text-gray-700 mb-2">Get Results</h4>
                          <p className="text-sm text-gray-600">Receive instant safety analysis</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
                          <h4 className="font-medium text-gray-700 mb-2">Learn More</h4>
                          <p className="text-sm text-gray-600">Read detailed explanations and alternatives</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Accuracy and Reliability */}
                  <section id="accuracy-reliability" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Database className="w-6 h-6 mr-3 text-indigo-500" />
                      Accuracy and Reliability
                    </h2>
                    
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        The reliability of food safety scanners depends on the quality of their databases, the sophistication of their AI algorithms, and the frequency of updates from medical and regulatory sources.
                      </p>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                        <h3 className="font-semibold text-indigo-800 mb-4">SafeMama's Quality Assurance:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <ul className="space-y-2 text-indigo-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                              Medical team review of all recommendations
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                              Regular validation against FDA guidelines
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                              Continuous learning from user feedback
                            </li>
                          </ul>
                          <ul className="space-y-2 text-indigo-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                              Partnership with nutrition experts
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                              Real-time updates from health authorities
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                              Transparent sourcing of information
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 6: Future of Food Safety */}
                  <section id="future-of-food-safety" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Future of Food Safety Technology</h2>
                    
                    <div className="space-y-6">
                      <p className="text-gray-700 leading-relaxed">
                        The future of pregnancy food safety technology looks promising, with advances in AI, sensor technology, and personalized medicine paving the way for even more sophisticated analysis tools.
                      </p>

                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                        <h3 className="font-semibold text-teal-800 mb-4">Emerging Technologies:</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Chemical Analysis</h4>
                            <p className="text-sm text-teal-600">Portable spectrometers for ingredient detection</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Genetic Testing</h4>
                            <p className="text-sm text-teal-600">Personalized recommendations based on genetics</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">IoT Integration</h4>
                            <p className="text-sm text-teal-600">Smart kitchen appliances with safety alerts</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Experience SafeMama's Food Safety Scanner</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Join 50,000+ expecting mothers using SafeMama's AI-powered food safety scanner. Get instant, personalized recommendations for your pregnancy journey.
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
                      <Link to="/blog/best-pregnancy-apps-2025" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Best Pregnancy Apps 2025</h4>
                          <p className="text-sm text-gray-600">Top pregnancy apps every expecting mother should have.</p>
                        </div>
                      </Link>
                      <Link to="/blog/pregnancy-apps-comparison" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Pregnancy Apps Comparison</h4>
                          <p className="text-sm text-gray-600">Compare top pregnancy apps and find the best fit.</p>
                        </div>
                      </Link>
                      <Link to="/blog/first-trimester-food-safety" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">First Trimester Food Safety</h4>
                          <p className="text-sm text-gray-600">Essential safety guide for early pregnancy nutrition.</p>
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

export default PregnancyFoodSafetyScanner
