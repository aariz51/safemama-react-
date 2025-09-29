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
  Dumbbell,
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
  Heart,
  Activity,
  Timer
} from 'lucide-react'

const ExerciseSafetyGuide: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false)

  // Share functions
  const shareUrl = `${window.location.origin}/safety-guides/exercise-safety`
  const shareTitle = 'Safe Exercise During Pregnancy | SafeMama Safety Guide'
  
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
    { id: 'safe-exercises', title: 'Safe Exercises', icon: CheckCircle, color: 'text-green-600' },
    { id: 'activities-to-avoid', title: 'Activities to Avoid', icon: XCircle, color: 'text-red-600' },
    { id: 'trimester-guidelines', title: 'Trimester Guidelines', icon: Timer, color: 'text-blue-600' },
    { id: 'warning-signs', title: 'Warning Signs', icon: AlertTriangle, color: 'text-orange-600' }
  ]

  return (
    <>
      <Helmet>
        <title>Safe Exercise During Pregnancy | SafeMama Safety Guide</title>
        <meta name="description" content="Guidelines for staying active and healthy throughout pregnancy. Learn safe exercises, activities to avoid, and warning signs to watch for." />
        <meta name="keywords" content="pregnancy exercise safety, safe workouts pregnancy, pregnancy fitness guide, exercise during pregnancy" />
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
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-pink-500 to-rose-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Dumbbell className="w-16 h-16 mx-auto mb-4" />
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Safe Exercise Guide</h1>
                      <p className="text-xl text-pink-100">Stay Active During Pregnancy</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>8 min read</span>
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
                      Regular exercise during pregnancy offers numerous benefits for both mother and baby. This guide covers safe exercises, activities to avoid, and guidelines for each trimester.
                    </p>
                    
                    <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                      <h3 className="flex items-center font-semibold text-pink-800 mb-3">
                        <Heart className="w-5 h-5 mr-2" />
                        Benefits of Exercise During Pregnancy
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-pink-700">
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Reduces back pain and improves posture
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Helps manage healthy weight gain
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Improves mood and energy levels
                          </li>
                        </ul>
                        <ul className="space-y-2 text-pink-700">
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Prepares body for labor and delivery
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Promotes better sleep quality
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Reduces risk of gestational diabetes
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Safe Exercises */}
                  <section id="safe-exercises" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                      Safe Exercises During Pregnancy
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-green-800 mb-4">
                          <Activity className="w-5 h-5 mr-2" />
                          Low-Impact Cardio
                        </h3>
                        <ul className="space-y-3 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Walking</strong>
                              <p className="text-sm text-green-600">Safe throughout pregnancy, easy to modify intensity</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Swimming</strong>
                              <p className="text-sm text-green-600">Excellent full-body, low-impact exercise</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Stationary Cycling</strong>
                              <p className="text-sm text-green-600">Good alternative to outdoor cycling</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-blue-800 mb-4">
                          <Dumbbell className="w-5 h-5 mr-2" />
                          Strength & Flexibility
                        </h3>
                        <ul className="space-y-3 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            <div>
                              <strong>Prenatal Yoga</strong>
                              <p className="text-sm text-blue-600">Improves flexibility and reduces stress</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            <div>
                              <strong>Light Weight Training</strong>
                              <p className="text-sm text-blue-600">Using lighter weights with more reps</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            <div>
                              <strong>Pelvic Floor Exercises</strong>
                              <p className="text-sm text-blue-600">Essential for pregnancy and recovery</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-800 mb-4">Exercise Guidelines:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">General Recommendations:</h4>
                          <ul className="space-y-2 text-purple-600">
                            <li>• Aim for 150 minutes of moderate exercise per week</li>
                            <li>• Exercise on most days of the week</li>
                            <li>• Start slowly and gradually increase intensity</li>
                            <li>• Stay hydrated and avoid overheating</li>
                            <li>• Listen to your body and rest when needed</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">Safety Tips:</h4>
                          <ul className="space-y-2 text-purple-600">
                            <li>• Warm up before and cool down after exercise</li>
                            <li>• Avoid exercising in hot, humid weather</li>
                            <li>• Wear supportive shoes and comfortable clothing</li>
                            <li>• Use proper form to prevent injury</li>
                            <li>• Modify exercises as your body changes</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Activities to Avoid */}
                  <section id="activities-to-avoid" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <XCircle className="w-6 h-6 mr-3 text-red-600" />
                      Activities to Avoid During Pregnancy
                    </h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-red-800 mb-4">High-Risk Activities to Avoid:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Contact sports (football, basketball, hockey)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Activities with fall risk (skiing, horseback riding)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Hot yoga or exercise in excessive heat</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Scuba diving</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Heavy weight lifting (avoid holding breath)</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Exercises lying flat on back (after first trimester)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High-intensity interval training (HIIT)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Activities at high altitude (over 6,000 feet)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Bouncing or jarring motions</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Exercises with rapid direction changes</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Trimester Guidelines */}
                  <section id="trimester-guidelines" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Timer className="w-6 h-6 mr-3 text-blue-600" />
                      Trimester-Specific Guidelines
                    </h2>
                    
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

                  {/* Section 4: Warning Signs */}
                  <section id="warning-signs" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
                      Warning Signs to Stop Exercise
                    </h2>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="font-semibold text-orange-800 mb-4">⚠️ Stop Exercise Immediately If You Experience:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Vaginal bleeding or fluid leakage</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Chest pain or severe shortness of breath</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Dizziness or faintness</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Severe headache</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Muscle weakness</li>
                        </ul>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Calf pain or swelling</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Preterm labor contractions</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Decreased fetal movement</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Persistent nausea and vomiting</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Sudden onset of ankle, hand, or face swelling</li>
                        </ul>
                      </div>
                      <p className="text-orange-700 mt-4 font-medium">
                        Contact your healthcare provider immediately if you experience any of these symptoms.
                      </p>
                    </div>
                  </section>

                  {/* Sample Workout Plans */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Workout Plans</h2>
                    
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
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Track Your Pregnancy Fitness Journey</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Download SafeMama app for personalized exercise recommendations based on your trimester and fitness level. Get expert guidance for staying active safely.
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
                      Get personalized exercise recommendations and track your fitness safely during pregnancy.
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
                    <Link to="/safety-guides/food-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Food Safety Guide</span>
                    </Link>
                    <Link to="/safety-guides/medication-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Heart className="w-5 h-5 mr-3 text-blue-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Medication Safety</span>
                    </Link>
                    <Link to="/safety-guides/first-trimester" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Shield className="w-5 h-5 mr-3 text-purple-500 group-hover:text-primary-600" />
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

export default ExerciseSafetyGuide
