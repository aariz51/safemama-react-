import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ChevronRight, 
  Users, 
  CheckCircle, 
  BookOpen,
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Star,
  Shield,
  Scan,
  Heart,
  XCircle,
  AlertCircle
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PregnancyAppsComparison: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'comparison-overview', title: 'App Comparison Overview', completed: true },
    { id: 'safemama-vs-babycenter', title: 'SafeMama vs BabyCenter', completed: true },
    { id: 'safemama-vs-what-to-expect', title: 'SafeMama vs What to Expect', completed: true },
    { id: 'safemama-vs-ovia', title: 'SafeMama vs Ovia Pregnancy', completed: true },
    { id: 'feature-comparison', title: 'Detailed Feature Comparison', completed: true },
    { id: 'final-recommendations', title: 'Final Recommendations', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/pregnancy-apps-comparison`
  const shareTitle = 'SafeMama vs Other Pregnancy Apps: Detailed Comparison'
  
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
        <title>SafeMama vs Other Pregnancy Apps: Detailed Comparison | 2025 Review</title>
        <meta name="description" content="In-depth comparison of SafeMama with popular pregnancy apps like BabyCenter, Ovia, and What to Expect. Find the best pregnancy app for your needs." />
        <meta name="keywords" content="SafeMama comparison, pregnancy app comparison, BabyCenter vs SafeMama, pregnancy app review 2025, best pregnancy app" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SafeMama vs Other Pregnancy Apps: Detailed Comparison" />
        <meta property="og:description" content="In-depth comparison of SafeMama with popular pregnancy apps like BabyCenter, Ovia, and What to Expect." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/pregnancy-apps-comparison-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/pregnancy-apps-comparison`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SafeMama vs Other Pregnancy Apps: Detailed Comparison" />
        <meta name="twitter:description" content="In-depth comparison of SafeMama with popular pregnancy apps." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/pregnancy-apps-comparison-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-cyan-100 via-blue-50 to-indigo-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 20, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>13 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Users className="w-16 h-16 mx-auto mb-4 text-cyan-500" />
                      <p className="text-lg font-medium">Pregnancy Apps Comparison</p>
                      <p className="text-sm">SafeMama vs Popular Alternatives</p>
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
                      <span>Updated September 2025</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      SafeMama vs Other Pregnancy Apps: Detailed Comparison
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      In-depth comparison of SafeMama with popular pregnancy apps like BabyCenter, Ovia, and What to Expect. Discover which app offers the best features for expecting mothers in 2025.
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

                  {/* Quick Comparison Overview */}
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-semibold text-blue-800 mb-4">
                      <Star className="w-5 h-5 mr-2" />
                      Quick Comparison Summary
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-primary-600">SafeMama</div>
                        <div className="text-xs text-blue-600">AI Food Scanner</div>
                        <div className="text-xs text-blue-600">4.8★ Rating</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-gray-600">BabyCenter</div>
                        <div className="text-xs text-blue-600">Community Focus</div>
                        <div className="text-xs text-blue-600">4.5★ Rating</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-gray-600">What to Expect</div>
                        <div className="text-xs text-blue-600">Content Rich</div>
                        <div className="text-xs text-blue-600">4.6★ Rating</div>
                      </div>
                      <div className="text-center p-3 bg-white rounded-lg">
                        <div className="text-lg font-bold text-gray-600">Ovia</div>
                        <div className="text-xs text-blue-600">Data Tracking</div>
                        <div className="text-xs text-blue-600">4.3★ Rating</div>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Comparison Overview */}
                  <section id="comparison-overview" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Users className="w-6 h-6 mr-3 text-blue-500" />
                      App Comparison Overview
                    </h2>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed">
                      We've analyzed the most popular pregnancy apps to help you make an informed decision. Our comparison focuses on unique features, user experience, accuracy, and overall value for expecting mothers.
                    </p>

                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white border border-gray-200 rounded-lg">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-4 py-3 text-left font-medium text-gray-700">Feature</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-medium text-primary-700">SafeMama</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-700">BabyCenter</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-700">What to Expect</th>
                            <th className="border border-gray-200 px-4 py-3 text-center font-medium text-gray-700">Ovia</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium">AI Food Scanner</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">❌</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">❌</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">❌</td>
                          </tr>
                          <tr className="bg-gray-25">
                            <td className="border border-gray-200 px-4 py-3 font-medium">Pregnancy Tracking</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium">Expert Q&A</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅ (AI-powered)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">❌</td>
                          </tr>
                          <tr className="bg-gray-25">
                            <td className="border border-gray-200 px-4 py-3 font-medium">Community Forums</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">❌</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">❌</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-200 px-4 py-3 font-medium">Personalized Content</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅ (AI-driven)</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                          </tr>
                          <tr className="bg-gray-25">
                            <td className="border border-gray-200 px-4 py-3 font-medium">Offline Access</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">✅</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">Partial</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">Partial</td>
                            <td className="border border-gray-200 px-4 py-3 text-center">❌</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  {/* Section 2: SafeMama vs BabyCenter */}
                  <section id="safemama-vs-babycenter" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-green-500" />
                      SafeMama vs BabyCenter
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                        <h3 className="font-bold text-primary-800 text-lg mb-4 flex items-center">
                          <Scan className="w-5 h-5 mr-2" />
                          SafeMama Advantages
                        </h3>
                        <ul className="space-y-2 text-primary-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary-600" />
                            <strong>Unique AI Food Scanner:</strong> Only app with instant food safety analysis
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary-600" />
                            <strong>Medical Accuracy:</strong> AI trained on latest medical guidelines
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary-600" />
                            <strong>Personalized Responses:</strong> Tailored to your trimester and profile
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary-600" />
                            <strong>Clean Interface:</strong> Ad-free, distraction-free experience
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-gray-800 text-lg mb-4 flex items-center">
                          <Users className="w-5 h-5 mr-2" />
                          BabyCenter Advantages
                        </h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-gray-600" />
                            <strong>Large Community:</strong> Millions of active users worldwide
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-gray-600" />
                            <strong>Content Library:</strong> Thousands of articles and videos
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-gray-600" />
                            <strong>Birth Groups:</strong> Connect with moms due same month
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-gray-600" />
                            <strong>Long History:</strong> Established brand with track record
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="font-semibold text-yellow-800 mb-3">Key Difference:</h3>
                      <p className="text-yellow-700">
                        SafeMama focuses on <strong>instant, personalized safety guidance</strong> while BabyCenter emphasizes <strong>community support and comprehensive content</strong>. Choose SafeMama for immediate answers to safety questions, BabyCenter for social connection with other moms.
                      </p>
                    </div>
                  </section>

                  {/* Section 3: SafeMama vs What to Expect */}
                  <section id="safemama-vs-what-to-expect" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Heart className="w-6 h-6 mr-3 text-red-500" />
                      SafeMama vs What to Expect
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-primary-50 to-red-50 border border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-gray-800 text-lg mb-4">Head-to-Head Comparison</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-primary-700 mb-3">SafeMama Wins At:</h4>
                            <ul className="space-y-2 text-primary-600">
                              <li className="flex items-start">
                                <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500" />
                                Food safety technology (unique feature)
                              </li>
                              <li className="flex items-start">
                                <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500" />
                                Personalized AI responses
                              </li>
                              <li className="flex items-start">
                                <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500" />
                                Modern, intuitive interface
                              </li>
                              <li className="flex items-start">
                                <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500" />
                                Faster, more accurate answers
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-red-700 mb-3">What to Expect Wins At:</h4>
                            <ul className="space-y-2 text-red-600">
                              <li className="flex items-start">
                                <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500" />
                                Comprehensive week-by-week content
                              </li>
                              <li className="flex items-start">
                                <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500" />
                                Established brand recognition
                              </li>
                              <li className="flex items-start">
                                <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500" />
                                Active community forums
                              </li>
                              <li className="flex items-start">
                                <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500" />
                                Extensive article library
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-3">Our Verdict:</h3>
                        <p className="text-green-700">
                          <strong>SafeMama is better for modern, tech-savvy moms</strong> who want instant, accurate answers to safety questions. <strong>What to Expect is ideal for first-time mothers</strong> who prefer detailed, traditional pregnancy guidance and want to read comprehensive articles.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: SafeMama vs Ovia */}
                  <section id="safemama-vs-ovia" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">SafeMama vs Ovia Pregnancy</h2>
                    
                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-6">
                      <h3 className="font-bold text-purple-800 text-lg mb-4">Feature Showdown</h3>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr>
                              <th className="text-left py-2 text-purple-700">Category</th>
                              <th className="text-center py-2 text-primary-700">SafeMama</th>
                              <th className="text-center py-2 text-purple-700">Ovia</th>
                            </tr>
                          </thead>
                          <tbody className="text-sm">
                            <tr>
                              <td className="py-2 font-medium">Food Safety</td>
                              <td className="py-2 text-center">🏆 AI Scanner</td>
                              <td className="py-2 text-center">❌ None</td>
                            </tr>
                            <tr>
                              <td className="py-2 font-medium">Data Tracking</td>
                              <td className="py-2 text-center">✅ Essential</td>
                              <td className="py-2 text-center">🏆 Comprehensive</td>
                            </tr>
                            <tr>
                              <td className="py-2 font-medium">Personalization</td>
                              <td className="py-2 text-center">🏆 AI-powered</td>
                              <td className="py-2 text-center">✅ Good</td>
                            </tr>
                            <tr>
                              <td className="py-2 font-medium">User Interface</td>
                              <td className="py-2 text-center">🏆 Modern</td>
                              <td className="py-2 text-center">✅ Clean</td>
                            </tr>
                            <tr>
                              <td className="py-2 font-medium">Medical Accuracy</td>
                              <td className="py-2 text-center">🏆 AI + Experts</td>
                              <td className="py-2 text-center">✅ Reliable</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Feature Comparison */}
                  <section id="feature-comparison" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Detailed Feature Comparison</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-primary-50 border border-primary-200 rounded-lg p-6">
                        <h3 className="font-bold text-primary-800 text-lg mb-4">SafeMama Unique Features</h3>
                        <ul className="space-y-3 text-primary-700">
                          <li className="flex items-start">
                            <Scan className="w-5 h-5 mr-2 mt-0.5 text-primary-600" />
                            <div>
                              <strong>AI Food Scanner</strong>
                              <p className="text-sm text-primary-600">Point camera at any food for instant safety analysis</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Shield className="w-5 h-5 mr-2 mt-0.5 text-primary-600" />
                            <div>
                              <strong>50k+ Product Database</strong>
                              <p className="text-sm text-primary-600">Comprehensive food and product safety database</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <Heart className="w-5 h-5 mr-2 mt-0.5 text-primary-600" />
                            <div>
                              <strong>Expert Q&A with AI</strong>
                              <p className="text-sm text-primary-600">Get instant answers from AI trained by medical experts</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h3 className="font-bold text-gray-800 text-lg mb-4">What Others Lack</h3>
                        <ul className="space-y-3 text-gray-700">
                          <li className="flex items-start">
                            <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                            <div>
                              <strong>No Food Safety Scanner</strong>
                              <p className="text-sm text-gray-600">Manual food safety lookup only</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <AlertCircle className="w-5 h-5 mr-2 mt-0.5 text-yellow-500" />
                            <div>
                              <strong>Delayed Expert Responses</strong>
                              <p className="text-sm text-gray-600">Can take hours or days for expert answers</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-5 h-5 mr-2 mt-0.5 text-red-500" />
                            <div>
                              <strong>Generic Recommendations</strong>
                              <p className="text-sm text-gray-600">Limited personalization capabilities</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 6: Final Recommendations */}
                  <section id="final-recommendations" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Final Recommendations</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-lg p-6">
                        <h3 className="font-bold text-lg mb-3">🏆 Choose SafeMama If You:</h3>
                        <ul className="space-y-2">
                          <li>• Are concerned about food safety during pregnancy</li>
                          <li>• Want instant, accurate answers to safety questions</li>
                          <li>• Prefer modern, AI-powered solutions</li>
                          <li>• Value personalized recommendations</li>
                          <li>• Want an ad-free, focused experience</li>
                        </ul>
                      </div>

                      <div className="bg-gray-100 border border-gray-300 rounded-lg p-6">
                        <h3 className="font-bold text-gray-800 text-lg mb-3">Choose Others If You:</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">BabyCenter/What to Expect:</h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>• Want active community discussions</li>
                              <li>• Prefer reading extensive articles</li>
                              <li>• Are a first-time mom needing guidance</li>
                              <li>• Don't mind ads for free content</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-700 mb-2">Ovia:</h4>
                            <ul className="space-y-1 text-gray-600 text-sm">
                              <li>• Love detailed data tracking</li>
                              <li>• Want to share data with healthcare providers</li>
                              <li>• Prefer data-driven insights</li>
                              <li>• Are comfortable with basic features</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Experience the SafeMama Difference</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Join 50,000+ expecting mothers who trust SafeMama's AI-powered food safety scanner. Get instant, personalized pregnancy guidance you can't find anywhere else.
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
                          <p className="text-sm text-gray-600">Complete ranking of top 10 pregnancy apps.</p>
                        </div>
                      </Link>
                      <Link to="/blog/pregnancy-food-safety-scanner" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">How Food Safety Scanners Work</h4>
                          <p className="text-sm text-gray-600">Understanding AI-powered pregnancy safety technology.</p>
                        </div>
                      </Link>
                      <Link to="/blog/first-trimester-food-safety" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">First Trimester Food Safety</h4>
                          <p className="text-sm text-gray-600">Essential safety guide for early pregnancy.</p>
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

export default PregnancyAppsComparison
