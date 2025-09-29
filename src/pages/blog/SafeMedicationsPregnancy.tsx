import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { 
  Calendar, 
  Clock, 
  User, 
  Share2, 
  ChevronRight, 
  Pill, 
  CheckCircle, 
  BookOpen,
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  AlertTriangle,
  XCircle,
  Shield
} from 'lucide-react'
import { Link } from 'react-router-dom'

const SafeMedicationsPregnancy: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('')
  const [copiedLink, setCopiedLink] = useState(false)

  // Table of Contents
  const tableOfContents = [
    { id: 'medication-safety-basics', title: 'Medication Safety Basics', completed: true },
    { id: 'safe-otc-medications', title: 'Safe Over-the-Counter Medications', completed: true },
    { id: 'medications-to-avoid', title: 'Medications to Avoid', completed: true },
    { id: 'prescription-medications', title: 'Prescription Medication Guidelines', completed: true },
    { id: 'natural-alternatives', title: 'Natural Alternatives', completed: true },
    { id: 'emergency-situations', title: 'Emergency Situations', completed: true }
  ]

  // Share functions
  const shareUrl = `${window.location.origin}/blog/safe-medications-pregnancy`
  const shareTitle = 'Safe Medications During Pregnancy: What You Can and Cannot Take'
  
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
        <title>Safe Medications During Pregnancy: What You Can and Cannot Take | SafeMama</title>
        <meta name="description" content="Understanding which medications are safe during pregnancy and alternatives for common health issues. Complete guide to prescription and OTC drug safety." />
        <meta name="keywords" content="safe medications pregnancy, pregnancy drugs, OTC pregnancy, prescription medications pregnancy, medication safety pregnancy" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Safe Medications During Pregnancy: What You Can and Cannot Take" />
        <meta property="og:description" content="Understanding which medications are safe during pregnancy and alternatives for common health issues." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/safe-medications-pregnancy-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog/safe-medications-pregnancy`} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Safe Medications During Pregnancy: What You Can and Cannot Take" />
        <meta name="twitter:description" content="Understanding which medications are safe during pregnancy and alternatives for common health issues." />
        <meta name="twitter:image" content={`${window.location.origin}/images/blog/safe-medications-pregnancy-twitter.jpg`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <article className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Header Image - Using CSS gradient as placeholder */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-blue-100 via-cyan-50 to-indigo-100">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex items-center space-x-2 text-white/90 text-sm mb-2">
                      <Calendar className="w-4 h-4" />
                      <span>September 26, 2025</span>
                      <span>•</span>
                      <Clock className="w-4 h-4" />
                      <span>7 min read</span>
                    </div>
                  </div>
                  {/* Placeholder for actual image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Pill className="w-16 h-16 mx-auto mb-4 text-blue-500" />
                      <p className="text-lg font-medium">Safe Medications During Pregnancy</p>
                      <p className="text-sm">What You Can and Cannot Take</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Article Header */}
                  <div className="mb-8">
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                      <User className="w-4 h-4" />
                      <span>Dr. Jennifer Park, OB-GYN</span>
                      <span>•</span>
                      <span>Reviewed by Medical Team</span>
                    </div>
                    
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                      Safe Medications During Pregnancy: What You Can and Cannot Take
                    </h1>
                    
                    <p className="text-xl text-gray-600 leading-relaxed mb-6">
                      Understanding which medications are safe during pregnancy and alternatives for common health issues. Navigate medication safety with confidence during your pregnancy journey.
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
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Important Medication Safety Rules
                    </h3>
                    <ul className="space-y-2 text-red-700">
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Always consult your healthcare provider before taking any medication
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Never assume a medication is safe just because it's over-the-counter
                      </li>
                      <li className="flex items-start">
                        <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                        Inform all healthcare providers that you are pregnant
                      </li>
                    </ul>
                  </div>

                  {/* Section 1: Medication Safety Basics */}
                  <section id="medication-safety-basics" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-blue-500" />
                      Medication Safety Basics
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      During pregnancy, medications can cross the placenta and potentially affect your developing baby. The FDA categorizes medications into pregnancy categories to help guide safe use.
                    </p>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-blue-800 mb-4">FDA Pregnancy Categories:</h3>
                      <div className="space-y-3 text-blue-700">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-green-500" />
                          <div>
                            <strong>Category A:</strong> Safest - Studies show no risk to the fetus
                          </div>
                        </div>
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 mr-3 mt-0.5 text-yellow-500" />
                          <div>
                            <strong>Category B:</strong> Generally safe - No evidence of risk in humans
                          </div>
                        </div>
                        <div className="flex items-start">
                          <AlertTriangle className="w-5 h-5 mr-3 mt-0.5 text-orange-500" />
                          <div>
                            <strong>Category C:</strong> Use with caution - Risk cannot be ruled out
                          </div>
                        </div>
                        <div className="flex items-start">
                          <XCircle className="w-5 h-5 mr-3 mt-0.5 text-red-500" />
                          <div>
                            <strong>Category D:</strong> Evidence of risk - Use only if benefits outweigh risks
                          </div>
                        </div>
                        <div className="flex items-start">
                          <XCircle className="w-5 h-5 mr-3 mt-0.5 text-red-600" />
                          <div>
                            <strong>Category X:</strong> Never use - Risk clearly outweighs any benefit
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Safe OTC Medications */}
                  <section id="safe-otc-medications" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-500" />
                      Safe Over-the-Counter Medications
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Pain and Fever:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Acetaminophen (Tylenol):</strong> Safe for all trimesters. Follow dosage instructions.
                            </div>
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-500" />
                            <div>
                              <strong>Avoid:</strong> Aspirin, Ibuprofen (Advil, Motrin), Naproxen (Aleve)
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">Allergies:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Loratadine (Claritin):</strong> Safe antihistamine option
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Cetirizine (Zyrtec):</strong> Generally safe for pregnancy
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">Digestive Issues:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Tums/Rolaids:</strong> Safe for heartburn relief
                            </div>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Metamucil:</strong> Safe fiber supplement for constipation
                            </div>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-4">Cold and Cough:</h3>
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            <div>
                              <strong>Saline nasal spray:</strong> Safe for congestion
                            </div>
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            <div>
                              <strong>Dextromethorphan:</strong> Use with caution, consult doctor
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Medications to Avoid */}
                  <section id="medications-to-avoid" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <XCircle className="w-6 h-6 mr-3 text-red-500" />
                      Medications to Avoid
                    </h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-red-800 mb-4">Never Take During Pregnancy:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Isotretinoin (Accutane) - causes severe birth defects</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Warfarin (blood thinner) - except in special circumstances</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />ACE inhibitors - for blood pressure</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Tetracycline antibiotics</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />NSAIDs in third trimester (Ibuprofen, Aspirin)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High-dose vitamin A supplements</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Pseudoephedrine (in first trimester)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Herbal supplements without medical approval</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Prescription Medications */}
                  <section id="prescription-medications" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Prescription Medication Guidelines</h2>
                    
                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">Generally Safe Prescriptions:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Most antibiotics (penicillin, erythromycin, cephalexin)</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Insulin for diabetes management</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Methyldopa for blood pressure</li>
                          <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />Levothyroxine for thyroid conditions</li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-4">Use with Medical Supervision:</h3>
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Antidepressants (some SSRIs are safer than others)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Anti-seizure medications (benefits may outweigh risks)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Certain asthma medications</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Blood pressure medications (specific types)</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 5: Natural Alternatives */}
                  <section id="natural-alternatives" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Natural Alternatives</h2>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <h3 className="font-semibold text-green-800 mb-6">Safe Natural Remedies:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">For Nausea:</h4>
                          <ul className="space-y-1 text-green-600 text-sm">
                            <li>• Ginger tea or ginger chews</li>
                            <li>• Vitamin B6 (with doctor approval)</li>
                            <li>• Acupressure wristbands</li>
                            <li>• Small, frequent meals</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">For Constipation:</h4>
                          <ul className="space-y-1 text-green-600 text-sm">
                            <li>• Increase fiber intake</li>
                            <li>• Drink more water</li>
                            <li>• Regular exercise</li>
                            <li>• Prunes or prune juice</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">For Headaches:</h4>
                          <ul className="space-y-1 text-green-600 text-sm">
                            <li>• Rest in a dark room</li>
                            <li>• Cold or warm compress</li>
                            <li>• Stay hydrated</li>
                            <li>• Gentle neck massage</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-green-700 mb-3">For Sleep Issues:</h4>
                          <ul className="space-y-1 text-green-600 text-sm">
                            <li>• Pregnancy pillow for support</li>
                            <li>• Warm milk before bed</li>
                            <li>• Relaxation techniques</li>
                            <li>• Regular sleep schedule</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 6: Emergency Situations */}
                  <section id="emergency-situations" className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Emergency Situations</h2>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="font-semibold text-orange-800 mb-4">When to Seek Immediate Medical Care:</h3>
                      <ul className="space-y-2 text-orange-700">
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />High fever (over 100.4°F/38°C)</li>
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Severe allergic reactions</li>
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Persistent vomiting preventing hydration</li>
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Signs of infection requiring antibiotics</li>
                        <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-600" />Mental health crisis</li>
                      </ul>
                      <p className="text-orange-700 mt-4 font-medium">
                        In emergency situations, the benefits of necessary medication typically outweigh the risks. Always inform emergency personnel that you are pregnant.
                      </p>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Check Medication Safety with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Scan any medication and get instant safety information for pregnancy. Get AI-powered recommendations and alternative suggestions from healthcare professionals.
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
                          <p className="text-sm text-gray-600">Essential safety guide for early pregnancy nutrition.</p>
                        </div>
                      </Link>
                      <Link to="/blog/pregnancy-nutrition-guide" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Pregnancy Nutrition Guide</h4>
                          <p className="text-sm text-gray-600">Complete nutrition guide for expecting mothers.</p>
                        </div>
                      </Link>
                      <Link to="/blog/foods-to-avoid-during-pregnancy" className="group">
                        <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors">
                          <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 mb-2">Foods to Avoid During Pregnancy</h4>
                          <p className="text-sm text-gray-600">Comprehensive guide to foods that should be avoided.</p>
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

export default SafeMedicationsPregnancy
