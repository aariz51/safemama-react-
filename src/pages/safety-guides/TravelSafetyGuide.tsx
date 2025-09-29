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
  Plane,
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
  Car,
  MapPin,
  Luggage
} from 'lucide-react'

const TravelSafetyGuide: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false)

  // Share functions
  const shareUrl = `${window.location.origin}/safety-guides/travel-safety`
  const shareTitle = 'Travel Safety for Expecting Mothers | SafeMama Safety Guide'
  
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
    { id: 'air-travel', title: 'Air Travel Safety', icon: Plane, color: 'text-blue-600' },
    { id: 'car-travel', title: 'Car Travel Tips', icon: Car, color: 'text-green-600' },
    { id: 'international-travel', title: 'International Travel', icon: MapPin, color: 'text-purple-600' },
    { id: 'health-precautions', title: 'Health Precautions', icon: Shield, color: 'text-red-600' }
  ]

  return (
    <>
      <Helmet>
        <title>Travel Safety for Expecting Mothers | SafeMama Safety Guide</title>
        <meta name="description" content="Essential tips for safe travel during pregnancy. Learn about air travel guidelines, car safety, international travel precautions, and health considerations." />
        <meta name="keywords" content="pregnancy travel safety, flying while pregnant, pregnancy travel guide, travel during pregnancy" />
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
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-indigo-500 to-purple-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Plane className="w-16 h-16 mx-auto mb-4" />
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Travel Safety Guide</h1>
                      <p className="text-xl text-indigo-100">Essential Tips for Expecting Mothers</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>15 min read</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>Intermediate Level</span>
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
                      Traveling during pregnancy can be safe and enjoyable with proper planning and precautions. This comprehensive guide covers air travel, road trips, international travel, and essential health considerations.
                    </p>
                    
                    <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg">
                      <h3 className="flex items-center font-semibold text-indigo-800 mb-3">
                        <Luggage className="w-5 h-5 mr-2" />
                        Best Time to Travel During Pregnancy
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-indigo-700 mb-2">First Trimester (1-12 weeks):</h4>
                          <p className="text-indigo-600 text-sm">May experience nausea and fatigue. Short trips recommended.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-700 mb-2">Second Trimester (13-27 weeks):</h4>
                          <p className="text-indigo-600 text-sm">Best time to travel. Energy levels are higher, morning sickness usually subsides.</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-indigo-700 mb-2">Third Trimester (28+ weeks):</h4>
                          <p className="text-indigo-600 text-sm">Travel restrictions may apply. Consult doctor before planning trips.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Air Travel */}
                  <section id="air-travel" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Plane className="w-6 h-6 mr-3 text-blue-600" />
                      Air Travel Safety During Pregnancy
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">✈️ Airline Policies & Restrictions:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Most airlines allow travel up to 36 weeks
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Doctor's note required after 28 weeks
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Check specific airline policies before booking
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Consider travel insurance
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">🛫 Flight Comfort Tips:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Book aisle seat for easy bathroom access
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Wear compression socks
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Walk every 1-2 hours during flight
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Stay hydrated (bring water bottle)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-yellow-800 mb-4">🛡️ Safety Considerations:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Avoid flying if you have pregnancy complications
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Be aware of radiation exposure on frequent flights
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Carry medical records and insurance info
                          </li>
                        </ul>
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Inform airline staff of pregnancy
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Pack snacks for nausea management
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Know location of nearest hospital at destination
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Car Travel */}
                  <section id="car-travel" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Car className="w-6 h-6 mr-3 text-green-600" />
                      Car Travel Safety Tips
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">🚗 Seatbelt Safety:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Always wear seatbelt properly positioned
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Lap belt under the belly, across hip bones
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Shoulder belt between breasts, over shoulder
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Adjust seat position for comfort
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">🛣️ Road Trip Planning:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Plan stops every 1-2 hours
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Pack healthy snacks and water
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Bring pregnancy pillow for support
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Keep emergency contacts accessible
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="font-semibold text-red-800 mb-4">⚠️ When NOT to Drive:</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Severe morning sickness or dizziness</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High-risk pregnancy complications</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Very late in third trimester</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Braxton Hicks contractions</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Recent bleeding or complications</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Taking medications that cause drowsiness</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: International Travel */}
                  <section id="international-travel" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <MapPin className="w-6 h-6 mr-3 text-purple-600" />
                      International Travel Considerations
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">🌍 Pre-Travel Preparations:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <ul className="space-y-2 text-purple-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                              Consult doctor 4-6 weeks before travel
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                              Check vaccination requirements
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                              Research healthcare facilities at destination
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                              Get travel insurance with pregnancy coverage
                            </li>
                          </ul>
                          <ul className="space-y-2 text-purple-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                              Pack extra medications and vitamins
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                              Carry medical records and translations
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                              Know emergency numbers and embassy contacts
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                              Plan for time zone adjustments
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                        <h3 className="font-semibold text-orange-800 mb-4">🚫 Destinations to Avoid:</h3>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                            Areas with Zika virus transmission
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                            High-altitude destinations (over 8,000 feet)
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                            Countries requiring live vaccines
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                            Areas with poor healthcare infrastructure
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                            Regions with malaria or other endemic diseases
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Health Precautions */}
                  <section id="health-precautions" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-red-600" />
                      Health Precautions While Traveling
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">💊 Travel Health Kit:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Prenatal vitamins and medications
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Anti-nausea medication (doctor-approved)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Thermometer and first aid supplies
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Sunscreen and insect repellent (safe for pregnancy)
                          </li>
                        </ul>
                      </div>

                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                        <h3 className="font-semibold text-teal-800 mb-4">🍽️ Food & Water Safety:</h3>
                        <ul className="space-y-2 text-teal-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-teal-600" />
                            Drink only bottled or boiled water
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-teal-600" />
                            Avoid ice cubes and tap water
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-teal-600" />
                            Eat well-cooked, hot foods
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-teal-600" />
                            Avoid raw or undercooked foods
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Travel Checklist */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Pre-Travel Checklist</h2>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">✅ Essential Pre-Travel Tasks:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Medical Preparations:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>☐ Get doctor's clearance to travel</li>
                            <li>☐ Request medical summary letter</li>
                            <li>☐ Refill all prescriptions</li>
                            <li>☐ Check vaccination needs</li>
                            <li>☐ Arrange travel insurance</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Travel Planning:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>☐ Research healthcare facilities</li>
                            <li>☐ Book travel accommodations</li>
                            <li>☐ Pack comfortable clothing</li>
                            <li>☐ Prepare emergency contact list</li>
                            <li>☐ Download offline maps</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Travel Safely with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Download SafeMama app for instant access to pregnancy safety information while traveling. Get food safety checks and medical guidance anywhere in the world.
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
                      Access pregnancy safety information anywhere you travel. Get instant guidance you can trust.
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
                      <Shield className="w-5 h-5 mr-3 text-blue-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Medication Safety</span>
                    </Link>
                    <Link to="/safety-guides/first-trimester" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <AlertTriangle className="w-5 h-5 mr-3 text-orange-500 group-hover:text-primary-600" />
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

export default TravelSafetyGuide
