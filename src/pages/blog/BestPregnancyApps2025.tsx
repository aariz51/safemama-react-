import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ChevronRight, 
  Star, 
  CheckCircle, 
  BookOpen,
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Heart,
  Shield,
  Scan,
  Users,
  Award
} from 'lucide-react'
import { Link } from 'react-router-dom'

const BestPregnancyApps2025: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'top-pregnancy-apps', title: 'Top 10 Pregnancy Apps Overview', completed: true },
    { id: 'safemama-review', title: 'SafeMama - Best Overall', completed: true },
    { id: 'tracking-apps', title: 'Best Tracking Apps', completed: true },
    { id: 'educational-apps', title: 'Best Educational Apps', completed: true },
    { id: 'health-fitness-apps', title: 'Health & Fitness Apps', completed: true },
    { id: 'choosing-right-app', title: 'How to Choose the Right App', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/best-pregnancy-apps-2025`
  const shareTitle = 'Top 10 Pregnancy Apps Every Expecting Mother Should Have'
  
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
        <title>Top 10 Pregnancy Apps Every Expecting Mother Should Have | SafeMama 2025</title>
        <meta name="description" content="Discover the most helpful pregnancy apps for tracking, health, nutrition, and baby development. Complete 2025 guide with reviews and recommendations." />
        <meta name="keywords" content="best pregnancy apps 2025, pregnancy tracking apps, pregnancy app reviews, SafeMama app, pregnancy tracker, expecting mothers apps" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Top 10 Pregnancy Apps Every Expecting Mother Should Have" />
        <meta property="og:description" content="Discover the most helpful pregnancy apps for tracking, health, nutrition, and baby development." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/best-pregnancy-apps-2025-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/best-pregnancy-apps-2025`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top 10 Pregnancy Apps Every Expecting Mother Should Have" />
        <meta name="twitter:description" content="Discover the most helpful pregnancy apps for tracking, health, nutrition, and baby development." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/best-pregnancy-apps-2025-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-yellow-100 via-orange-50 to-red-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 21, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>11 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Star className="w-16 h-16 mx-auto mb-4 text-yellow-500" />
                      <p className="text-lg font-medium">Best Pregnancy Apps 2025</p>
                      <p className="text-sm">Top 10 Apps for Expecting Mothers</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>App Review Team</span>
                      <span>•</span>
                      <span>Updated September 2025</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      Top 10 Pregnancy Apps Every Expecting Mother Should Have
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Discover the most helpful pregnancy apps for tracking, health, nutrition, and baby development. Our comprehensive 2025 guide reviews the best apps to support your pregnancy journey.
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

                  {/* Top Apps Overview */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-semibold text-yellow-800 mb-4">
                      <Award className="w-5 h-5 mr-2" />
                      Our Top 3 Pregnancy Apps for 2025
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">#1</div>
                        <div className="text-sm font-medium text-yellow-700">SafeMama</div>
                        <div className="text-xs text-yellow-600">AI-powered safety scanner</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">#2</div>
                        <div className="text-sm font-medium text-yellow-700">What to Expect</div>
                        <div className="text-xs text-yellow-600">Comprehensive tracking</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-yellow-600 mb-1">#3</div>
                        <div className="text-sm font-medium text-yellow-700">BabyCenter</div>
                        <div className="text-xs text-yellow-600">Community & content</div>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Top Pregnancy Apps */}
                  <section id="top-pregnancy-apps" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Star className="w-6 h-6 mr-3 text-yellow-500" />
                      Top 10 Pregnancy Apps Overview
                    </h2>
                    
                    <p className="text-gray-700 mb-8 leading-relaxed">
                      We've tested and reviewed dozens of pregnancy apps to bring you the best options for 2025. Our rankings consider user experience, accuracy, features, and value for expecting mothers.
                    </p>

                    <div className="space-y-6">
                      {/* App Rankings List */}
                      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                        <h3 className="font-semibold text-gray-800 mb-4">Complete Rankings:</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gold-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">1</div>
                                <span className="font-medium">SafeMama</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">4.8</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-400 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">2</div>
                                <span className="font-medium">What to Expect</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">4.6</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">3</div>
                                <span className="font-medium">BabyCenter</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">4.5</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">4</div>
                                <span className="font-medium">Pregnancy+</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">4.4</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">5</div>
                                <span className="font-medium">Ovia Pregnancy</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">4.3</span>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">6</div>
                                <span className="font-medium">The Bump</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">4.2</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">7</div>
                                <span className="font-medium">Glow Nurture</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">4.1</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">8</div>
                                <span className="font-medium">Sprout Pregnancy</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">4.0</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">9</div>
                                <span className="font-medium">Babylist</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">3.9</span>
                              </div>
                            </div>
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm">
                              <div className="flex items-center">
                                <div className="w-8 h-8 bg-gray-500 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3">10</div>
                                <span className="font-medium">Pregnancy Tracker</span>
                              </div>
                              <div className="flex items-center">
                                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                                <span className="text-sm">3.8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: SafeMama Review */}
                  <section id="safemama-review" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Award className="w-6 h-6 mr-3 text-gold-500" />
                      SafeMama - Best Overall Pregnancy App 2025
                    </h2>
                    
                    <div className="bg-gradient-to-r from-primary-50 to-secondary-50 border border-primary-200 rounded-lg p-6 mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-primary-800 text-lg">🏆 Editor's Choice Winner</h3>
                        <div className="flex items-center space-x-4">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">4.8</div>
                            <div className="text-xs text-primary-600">Rating</div>
                          </div>
                          <div className="text-center">
                            <div className="text-2xl font-bold text-primary-600">50k+</div>
                            <div className="text-xs text-primary-600">Users</div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-primary-700 mb-4">
                        SafeMama stands out as the most innovative pregnancy app of 2025, offering AI-powered food safety scanning that no other app provides. It's the only app that can instantly tell you if a food item is safe during pregnancy by simply scanning it.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-primary-700 mb-2">Unique Features:</h4>
                          <ul className="space-y-1 text-primary-600 text-sm">
                            <li>• AI-powered food scanning technology</li>
                            <li>• Instant safety analysis for 50,000+ products</li>
                            <li>• Expert Q&A with streaming responses</li>
                            <li>• Personalized pregnancy guides</li>
                            <li>• Trimester-specific recommendations</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-primary-700 mb-2">Why It's #1:</h4>
                          <ul className="space-y-1 text-primary-600 text-sm">
                            <li>• Solves real pregnancy safety concerns</li>
                            <li>• Backed by medical professionals</li>
                            <li>• Constantly updated database</li>
                            <li>• User-friendly interface</li>
                            <li>• Available in multiple countries</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-4 pt-4 border-t border-primary-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-primary-700"><strong>Price:</strong> Freemium - Premium from $4.99/month</p>
                            <p className="text-sm text-primary-700"><strong>Best for:</strong> Food safety concerns and AI-powered guidance</p>
                          </div>
                          <div className="flex space-x-2">
                            <AppStoreBadge />
                            <GooglePlayBadge />
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Tracking Apps */}
                  <section id="tracking-apps" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Users className="w-6 h-6 mr-3 text-blue-500" />
                      Best Pregnancy Tracking Apps
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-blue-800 text-lg">#2 What to Expect</h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">4.6</span>
                          </div>
                        </div>
                        <p className="text-blue-700 mb-4">
                          The most comprehensive pregnancy tracking app with detailed week-by-week information and a large community of expecting mothers.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-medium text-blue-700 mb-2">Best Features:</h4>
                            <ul className="space-y-1 text-blue-600 text-sm">
                              <li>• Week-by-week pregnancy guide</li>
                              <li>• Baby size comparisons</li>
                              <li>• Symptom tracker</li>
                              <li>• Due date calculator</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-700 mb-2">Community:</h4>
                            <ul className="space-y-1 text-blue-600 text-sm">
                              <li>• Birth month groups</li>
                              <li>• Expert Q&A sessions</li>
                              <li>• Discussion forums</li>
                              <li>• Local mom groups</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-700 mb-2">Details:</h4>
                            <p className="text-blue-600 text-sm"><strong>Price:</strong> Free with ads</p>
                            <p className="text-blue-600 text-sm"><strong>Best for:</strong> First-time moms wanting detailed guidance</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="font-bold text-green-800 text-lg">#3 BabyCenter</h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">4.5</span>
                          </div>
                        </div>
                        <p className="text-green-700 mb-4">
                          A well-established app with extensive content library and active community forums. Great for research-minded parents.
                        </p>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Content Library:</h4>
                            <ul className="space-y-1 text-green-600 text-sm">
                              <li>• 1000+ articles</li>
                              <li>• Video library</li>
                              <li>• Expert advice</li>
                              <li>• Baby name finder</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Tracking Tools:</h4>
                            <ul className="space-y-1 text-green-600 text-sm">
                              <li>• Pregnancy calendar</li>
                              <li>• Kick counter</li>
                              <li>• Weight tracker</li>
                              <li>• Contraction timer</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Details:</h4>
                            <p className="text-green-600 text-sm"><strong>Price:</strong> Free with premium options</p>
                            <p className="text-green-600 text-sm"><strong>Best for:</strong> Comprehensive pregnancy information</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Educational Apps */}
                  <section id="educational-apps" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Best Educational Pregnancy Apps</h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-bold text-purple-800 text-lg mb-2">#4 Pregnancy+ by Philips</h3>
                        <div className="flex items-center mb-3">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-medium">4.4</span>
                        </div>
                        <p className="text-purple-700 text-sm mb-3">Beautiful 3D visuals of baby development with comprehensive educational content.</p>
                        <ul className="space-y-1 text-purple-600 text-xs">
                          <li>• 3D baby development models</li>
                          <li>• Weekly articles and tips</li>
                          <li>• Size comparisons</li>
                          <li>• Hospital bag checklist</li>
                        </ul>
                        <p className="text-purple-600 text-xs mt-3"><strong>Price:</strong> $4.99 one-time</p>
                      </div>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                        <h3 className="font-bold text-indigo-800 text-lg mb-2">#5 Ovia Pregnancy</h3>
                        <div className="flex items-center mb-3">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          <span className="text-sm font-medium">4.3</span>
                        </div>
                        <p className="text-indigo-700 text-sm mb-3">Data-driven approach to pregnancy tracking with personalized insights.</p>
                        <ul className="space-y-1 text-indigo-600 text-xs">
                          <li>• Personalized health insights</li>
                          <li>• Medical data tracking</li>
                          <li>• Fun baby size comparisons</li>
                          <li>• Healthcare provider sharing</li>
                        </ul>
                        <p className="text-indigo-600 text-xs mt-3"><strong>Price:</strong> Free with ads</p>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Health & Fitness Apps */}
                  <section id="health-fitness-apps" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Health & Fitness Focused Apps</h2>
                    
                    <div className="space-y-4">
                      <div className="bg-rose-50 border border-rose-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-rose-800">#6 The Bump</h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm">4.2</span>
                          </div>
                        </div>
                        <p className="text-rose-600 text-sm">Stylish app focused on fashion and lifestyle during pregnancy.</p>
                      </div>

                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-teal-800">#7 Glow Nurture</h3>
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm">4.1</span>
                          </div>
                        </div>
                        <p className="text-teal-600 text-sm">Clean interface with focus on health tracking and wellness.</p>
                      </div>
                    </div>
                  </section>

                  {/* Section 6: How to Choose */}
                  <section id="choosing-right-app" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Choose the Right Pregnancy App</h2>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Consider Your Priorities:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">Safety-First Approach:</h4>
                          <ul className="space-y-1 text-gray-600 text-sm">
                            <li>• Choose apps with medical backing</li>
                            <li>• Look for food safety features</li>
                            <li>• Verify information sources</li>
                            <li>• Check for regular updates</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-2">User Experience:</h4>
                          <ul className="space-y-1 text-gray-600 text-sm">
                            <li>• Intuitive navigation</li>
                            <li>• Personalization options</li>
                            <li>• Offline functionality</li>
                            <li>• Customer support quality</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Try SafeMama - The #1 Pregnancy App of 2025</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Join 50,000+ expecting mothers using SafeMama's revolutionary AI-powered food safety scanner. Get instant answers to your pregnancy safety questions.
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
                      <Link to="/blog/pregnancy-apps-comparison" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">SafeMama vs Other Pregnancy Apps</h4>
                          <p className="text-sm text-gray-600">Detailed comparison of SafeMama with popular alternatives.</p>
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

export default BestPregnancyApps2025
