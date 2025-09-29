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
  Pill,
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
  Phone,
  Thermometer
} from 'lucide-react'

const MedicationSafetyGuide: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false)

  // Share functions
  const shareUrl = `${window.location.origin}/safety-guides/medication-safety`
  const shareTitle = 'Medication Safety During Pregnancy | SafeMama Safety Guide'
  
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
    { id: 'safe-medications', title: 'Safe Medications', icon: CheckCircle, color: 'text-green-600' },
    { id: 'alternatives', title: 'Natural Alternatives', icon: Heart, color: 'text-pink-600' },
    { id: 'consulting-healthcare', title: 'Consulting Healthcare Providers', icon: Phone, color: 'text-blue-600' },
    { id: 'emergency-situations', title: 'Emergency Situations', icon: AlertTriangle, color: 'text-orange-600' }
  ]

  return (
    <>
      <Helmet>
        <title>Medication Safety During Pregnancy | SafeMama Safety Guide</title>
        <meta name="description" content="Essential guide to safe medications and alternatives during pregnancy. Learn which medications are safe, what to avoid, and when to consult healthcare providers." />
        <meta name="keywords" content="pregnancy medication safety, safe medications pregnancy, pregnancy drug guide, medication alternatives pregnancy" />
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
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-blue-500 to-cyan-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Pill className="w-16 h-16 mx-auto mb-4" />
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Medication Safety Guide</h1>
                      <p className="text-xl text-blue-100">Safe Medications During Pregnancy</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>10 min read</span>
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
                      Understanding medication safety during pregnancy is crucial for protecting both you and your developing baby. This guide covers safe medications, alternatives, and when to seek medical advice.
                    </p>
                    
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                      <h3 className="flex items-center font-semibold text-blue-800 mb-3">
                        <Shield className="w-5 h-5 mr-2" />
                        Important Safety Principles
                      </h3>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Always consult your healthcare provider before taking any medication
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Never assume over-the-counter means safe during pregnancy
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Inform all healthcare providers that you are pregnant
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Keep a list of all medications you're taking
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 1: Safe Medications */}
                  <section id="safe-medications" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600" />
                      Safe Medications During Pregnancy
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-green-800 mb-4">
                          <Thermometer className="w-5 h-5 mr-2" />
                          Pain & Fever Relief
                        </h3>
                        <ul className="space-y-3 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Acetaminophen (Tylenol)</strong>
                              <p className="text-sm text-green-600">Safe throughout pregnancy when used as directed</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                            <div>
                              <strong>Avoid: Ibuprofen, Aspirin, Naproxen</strong>
                              <p className="text-sm text-red-600">Can cause complications, especially in third trimester</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-blue-800 mb-4">
                          <Heart className="w-5 h-5 mr-2" />
                          Allergy Relief
                        </h3>
                        <ul className="space-y-3 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            <div>
                              <strong>Loratadine (Claritin)</strong>
                              <p className="text-sm text-blue-600">Generally safe antihistamine</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            <div>
                              <strong>Cetirizine (Zyrtec)</strong>
                              <p className="text-sm text-blue-600">Safe for pregnancy allergies</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-purple-800 mb-4">
                          <Pill className="w-5 h-5 mr-2" />
                          Digestive Issues
                        </h3>
                        <ul className="space-y-3 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            <div>
                              <strong>Antacids (Tums, Rolaids)</strong>
                              <p className="text-sm text-purple-600">Safe for heartburn relief</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            <div>
                              <strong>Fiber supplements</strong>
                              <p className="text-sm text-purple-600">Metamucil, Citrucel for constipation</p>
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="flex items-center font-semibold text-yellow-800 mb-4">
                          <Shield className="w-5 h-5 mr-2" />
                          Cold & Cough
                        </h3>
                        <ul className="space-y-3 text-yellow-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            <div>
                              <strong>Saline nasal spray</strong>
                              <p className="text-sm text-yellow-600">Safe for congestion relief</p>
                            </div>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            <div>
                              <strong>Dextromethorphan (cough)</strong>
                              <p className="text-sm text-orange-600">Use with caution, consult doctor first</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <h3 className="font-semibold text-red-800 mb-4">⚠️ Medications to Completely Avoid:</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Isotretinoin (Accutane) - severe birth defects</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Warfarin - blood thinner complications</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />ACE inhibitors - kidney/heart problems</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Tetracycline antibiotics - tooth/bone issues</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High-dose vitamin A - birth defects</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Certain seizure medications</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Some antidepressants</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Herbal supplements (without approval)</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Natural Alternatives */}
                  <section id="alternatives" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Heart className="w-6 h-6 mr-3 text-pink-600" />
                      Natural Alternatives & Home Remedies
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h3 className="font-semibold text-pink-800 mb-4">For Nausea & Morning Sickness:</h3>
                        <ul className="space-y-2 text-pink-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Ginger tea or ginger chews
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Vitamin B6 (with doctor approval)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Acupressure wristbands
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Small, frequent meals
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">For Headaches:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Cold compress on forehead
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Adequate hydration
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Regular sleep schedule
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Gentle neck massage
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">For Constipation:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Increase fiber intake gradually
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Drink more water
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Regular, gentle exercise
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Prunes or prune juice
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">For Sleep Issues:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Pregnancy pillow for support
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Warm (not hot) bath before bed
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Relaxation techniques
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Chamomile tea (in moderation)
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Consulting Healthcare */}
                  <section id="consulting-healthcare" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Phone className="w-6 h-6 mr-3 text-blue-600" />
                      When to Consult Healthcare Providers
                    </h2>
                    
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-800 mb-4">Always Consult Before Taking:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Any prescription medication
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Over-the-counter medications
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Herbal supplements
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Vitamins beyond prenatal
                          </li>
                        </ul>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Essential oils for medicinal use
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Probiotics and supplements
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Topical treatments
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Any new treatment approach
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Emergency Situations */}
                  <section id="emergency-situations" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
                      Emergency Medication Situations
                    </h2>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="font-semibold text-orange-800 mb-4">When Benefits May Outweigh Risks:</h3>
                      <p className="text-orange-700 mb-4">
                        In certain emergency situations, the benefit of taking medication may outweigh potential risks to the pregnancy. Always inform medical personnel that you are pregnant.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-orange-700 mb-3">Emergency Conditions:</h4>
                          <ul className="space-y-2 text-orange-600">
                            <li>• Severe infections requiring antibiotics</li>
                            <li>• High fever (over 100.4°F/38°C)</li>
                            <li>• Severe allergic reactions</li>
                            <li>• Mental health crises</li>
                            <li>• Chronic conditions (diabetes, epilepsy)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-700 mb-3">What to Tell Medical Staff:</h4>
                          <ul className="space-y-2 text-orange-600">
                            <li>• Exact gestational age</li>
                            <li>• All current medications</li>
                            <li>• Known allergies</li>
                            <li>• Pre-existing conditions</li>
                            <li>• Your OB/GYN contact information</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Check Medication Safety Instantly</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Download SafeMama app to scan medications and get instant safety information for pregnancy. Get personalized recommendations from healthcare professionals.
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
                      Instantly check if medications are safe during pregnancy. Get expert guidance you can trust.
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
                    <Link to="/safety-guides/exercise-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Heart className="w-5 h-5 mr-3 text-pink-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Exercise Safety</span>
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

export default MedicationSafetyGuide
