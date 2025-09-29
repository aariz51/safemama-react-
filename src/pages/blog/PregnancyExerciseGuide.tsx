import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ChevronRight, 
  Dumbbell, 
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
  AlertTriangle,
  Activity
} from 'lucide-react'
import { Link } from 'react-router-dom'

const PregnancyExerciseGuide: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'exercise-benefits', title: 'Benefits of Pregnancy Exercise', completed: true },
    { id: 'safe-exercises', title: 'Safe Exercises During Pregnancy', completed: true },
    { id: 'exercises-to-avoid', title: 'Exercises to Avoid', completed: true },
    { id: 'trimester-guidelines', title: 'Trimester-Specific Guidelines', completed: true },
    { id: 'warning-signs', title: 'Warning Signs to Stop', completed: true },
    { id: 'workout-plans', title: 'Sample Workout Plans', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/pregnancy-exercise-guide`
  const shareTitle = 'Safe Pregnancy Exercises: Stay Fit and Healthy During Pregnancy'
  
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
        <title>Safe Pregnancy Exercises: Stay Fit and Healthy During Pregnancy | SafeMama</title>
        <meta name="description" content="Exercise recommendations and safety guidelines for staying active throughout your pregnancy. Learn which exercises are safe and which to avoid." />
        <meta name="keywords" content="pregnancy exercise, prenatal workout, safe exercise pregnancy, pregnancy fitness, prenatal yoga, pregnancy swimming" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Safe Pregnancy Exercises: Stay Fit and Healthy During Pregnancy" />
        <meta property="og:description" content="Exercise recommendations and safety guidelines for staying active throughout your pregnancy." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/pregnancy-exercise-guide-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/pregnancy-exercise-guide`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Safe Pregnancy Exercises: Stay Fit and Healthy During Pregnancy" />
        <meta name="twitter:description" content="Exercise recommendations and safety guidelines for staying active throughout your pregnancy." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/pregnancy-exercise-guide-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-pink-100 via-rose-50 to-purple-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 23, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>8 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Dumbbell className="w-16 h-16 mx-auto mb-4 text-pink-500" />
                      <p className="text-lg font-medium">Safe Pregnancy Exercises</p>
                      <p className="text-sm">Stay Fit and Healthy During Pregnancy</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>Dr. Amanda Foster, Exercise Physiologist</span>
                      <span>•</span>
                      <span>Reviewed by Medical Team</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      Safe Pregnancy Exercises: Stay Fit and Healthy During Pregnancy
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Exercise recommendations and safety guidelines for staying active throughout your pregnancy. Discover which activities support your health and your baby's development while avoiding potential risks.
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

                  {/* Exercise Benefits Overview */}
                  <div className="bg-pink-50 border-l-4 border-pink-500 p-6 mb-8 rounded-r-lg">
                    <h3 className="flex items-center text-lg font-semibold text-pink-800 mb-4">
                      <Heart className="w-5 h-5 mr-2" />
                      Benefits of Exercise During Pregnancy
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <ul className="space-y-2 text-pink-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Reduces back pain and improves posture
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Helps manage healthy weight gain
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Improves mood and energy levels
                        </li>
                      </ul>
                      <ul className="space-y-2 text-pink-700">
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Prepares body for labor and delivery
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Promotes better sleep quality
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Reduces risk of gestational diabetes
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 1: Exercise Benefits */}
                  <section id="exercise-benefits" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Heart className="w-6 h-6 mr-3 text-red-500" />
                      Benefits of Pregnancy Exercise
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Regular exercise during pregnancy offers numerous benefits for both mother and baby. The American College of Obstetricians and Gynecologists recommends at least 150 minutes of moderate-intensity exercise per week for healthy pregnant women.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">Physical Benefits:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Stronger cardiovascular system
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Better muscle tone and strength
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Improved circulation and reduced swelling
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Enhanced flexibility and balance
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Mental Health Benefits:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Reduced anxiety and depression
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Improved self-esteem and body image
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Better stress management
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Enhanced cognitive function
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Safe Exercises */}
                  <section id="safe-exercises" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                      Safe Exercises During Pregnancy
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Low-Impact Cardio:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <strong>Walking:</strong> Safe throughout pregnancy, easy to modify intensity
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <strong>Swimming:</strong> Excellent full-body, low-impact exercise
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <strong>Stationary Cycling:</strong> Good alternative to outdoor cycling
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <strong>Elliptical:</strong> Low-impact with good upper body engagement
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">Strength & Flexibility:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            <strong>Prenatal Yoga:</strong> Improves flexibility and reduces stress
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            <strong>Light Weight Training:</strong> Using lighter weights with more reps
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            <strong>Pilates (Modified):</strong> Strengthens core and improves posture
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            <strong>Pelvic Floor Exercises:</strong> Essential for pregnancy and recovery
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Exercises to Avoid */}
                  <section id="exercises-to-avoid" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-red-500" />
                      Exercises to Avoid
                    </h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-red-800 mb-4">High-Risk Activities:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Contact sports (football, basketball, soccer)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Activities with fall risk (skiing, horseback riding)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Hot yoga or exercise in excessive heat</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Scuba diving (pressure changes)</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Heavy weight lifting (over 15-20 lbs)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Exercises lying flat on back (after first trimester)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High-intensity interval training (HIIT)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Activities at high altitude (over 6,000 feet)</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Trimester Guidelines */}
                  <section id="trimester-guidelines" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Trimester-Specific Guidelines</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h3 className="font-semibold text-pink-800 mb-4">First Trimester (Weeks 1-12):</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-pink-700 mb-2">Focus Areas:</h4>
                            <ul className="space-y-1 text-pink-600 text-sm">
                              <li>• Establish exercise routine</li>
                              <li>• Manage fatigue and nausea</li>
                              <li>• Listen to your body's signals</li>
                              <li>• Stay hydrated</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-pink-700 mb-2">Recommended Duration:</h4>
                            <p className="text-pink-600 text-sm">20-30 minutes of moderate exercise, 3-4 times per week</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h3 className="font-semibold text-orange-800 mb-4">Second Trimester (Weeks 13-27):</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-orange-700 mb-2">Focus Areas:</h4>
                            <ul className="space-y-1 text-orange-600 text-sm">
                              <li>• Peak exercise tolerance period</li>
                              <li>• Modify abdominal exercises</li>
                              <li>• Avoid supine positions</li>
                              <li>• Focus on posture exercises</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-orange-700 mb-2">Recommended Duration:</h4>
                            <p className="text-orange-600 text-sm">30-45 minutes of moderate exercise, 4-5 times per week</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Third Trimester (Weeks 28-40):</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Focus Areas:</h4>
                            <ul className="space-y-1 text-green-600 text-sm">
                              <li>• Reduce exercise intensity</li>
                              <li>• Focus on comfort and balance</li>
                              <li>• Prepare for labor with breathing</li>
                              <li>• Gentle stretching and walking</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-700 mb-2">Recommended Duration:</h4>
                            <p className="text-green-600 text-sm">20-30 minutes of light exercise, 3-4 times per week</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Warning Signs */}
                  <section id="warning-signs" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-orange-500" />
                      Warning Signs to Stop Exercise
                    </h2>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="font-semibold text-orange-800 mb-4">Stop Exercise Immediately If You Experience:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Vaginal bleeding or fluid leakage</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Chest pain or severe shortness of breath</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Dizziness or faintness</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Severe headache</li>
                        </ul>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Muscle weakness or calf pain/swelling</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Preterm labor contractions</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Decreased fetal movement</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Persistent nausea and vomiting</li>
                        </ul>
                      </div>
                      <p className="text-orange-700 mt-4 font-medium">
                        Contact your healthcare provider immediately if you experience any of these symptoms.
                      </p>
                    </div>
                  </section>

                  {/* Section 6: Workout Plans */}
                  <section id="workout-plans" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Activity className="w-6 h-6 mr-3 text-blue-500" />
                      Sample Workout Plans
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-6">Beginner Pregnancy Workout (20 minutes):</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                          <div>
                            <h4 className="font-medium text-blue-700 mb-2">Warm-up (5 min)</h4>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Gentle walking</li>
                              <li>• Arm circles</li>
                              <li>• Neck stretches</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-700 mb-2">Cardio (8 min)</h4>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Brisk walking</li>
                              <li>• Marching in place</li>
                              <li>• Side steps</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-700 mb-2">Strength (5 min)</h4>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Modified push-ups</li>
                              <li>• Seated leg lifts</li>
                              <li>• Arm raises</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-blue-700 mb-2">Cool-down (2 min)</h4>
                            <ul className="text-sm text-blue-600 space-y-1">
                              <li>• Gentle stretching</li>
                              <li>• Deep breathing</li>
                              <li>• Relaxation</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                        <h3 className="font-semibold text-teal-800 mb-6">Intermediate Pregnancy Workout (35 minutes):</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Warm-up (5 min)</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Dynamic stretching</li>
                              <li>• Joint mobility</li>
                              <li>• Light movement</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Cardio (15 min)</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Swimming or walking</li>
                              <li>• Stationary cycling</li>
                              <li>• Low-impact aerobics</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Strength (10 min)</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Light weight training</li>
                              <li>• Resistance bands</li>
                              <li>• Core stability</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-teal-700 mb-2">Cool-down (5 min)</h4>
                            <ul className="text-sm text-teal-600 space-y-1">
                              <li>• Full-body stretching</li>
                              <li>• Pelvic floor exercises</li>
                              <li>• Meditation</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Track Your Pregnancy Fitness Journey with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Get personalized exercise recommendations based on your trimester and fitness level. Track your activities and monitor your health with expert guidance.
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
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Pregnancy Nutrition Guide</h4>
                          <p className="text-sm text-gray-600">Complete nutrition guide for expecting mothers.</p>
                        </div>
                      </Link>
                      <Link to="/blog/first-trimester-food-safety" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">First Trimester Food Safety</h4>
                          <p className="text-sm text-gray-600">Essential safety guide for early pregnancy.</p>
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

export default PregnancyExerciseGuide
