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
  Baby,
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
  Calendar,
  Stethoscope,
  Pill
} from 'lucide-react'

const FirstTrimesterSafetyGuide: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false)

  // Share functions
  const shareUrl = `${window.location.origin}/safety-guides/first-trimester`
  const shareTitle = 'First Trimester Safety Essentials | SafeMama Safety Guide'
  
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
    { id: 'early-development', title: 'Critical Early Development', icon: Baby, color: 'text-pink-600' },
    { id: 'critical-period-safety', title: 'Critical Period Safety', icon: Shield, color: 'text-red-600' },
    { id: 'warning-signs', title: 'Warning Signs to Watch', icon: AlertTriangle, color: 'text-orange-600' },
    { id: 'prenatal-care', title: 'Essential Prenatal Care', icon: Stethoscope, color: 'text-blue-600' }
  ]

  return (
    <>
      <Helmet>
        <title>First Trimester Safety Essentials | SafeMama Safety Guide</title>
        <meta name="description" content="Critical safety information for the first 12 weeks of pregnancy. Learn about early development, warning signs, and essential prenatal care." />
        <meta name="keywords" content="first trimester safety, early pregnancy safety, pregnancy warning signs, prenatal care first trimester" />
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
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-purple-500 to-indigo-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Baby className="w-16 h-16 mx-auto mb-4" />
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">First Trimester Safety</h1>
                      <p className="text-xl text-purple-100">Essential Safety for Early Pregnancy</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>14 min read</span>
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
                      The first trimester (weeks 1-12) is the most critical period of pregnancy when major organ systems develop. Understanding safety essentials during this time is crucial for your baby's healthy development.
                    </p>
                    
                    <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
                      <h3 className="flex items-center font-semibold text-purple-800 mb-3">
                        <Calendar className="w-5 h-5 mr-2" />
                        First Trimester Timeline (Weeks 1-12)
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-purple-700 mb-2">Weeks 1-4:</h4>
                          <p className="text-purple-600 text-sm">Fertilization, implantation, neural tube formation begins</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-700 mb-2">Weeks 5-8:</h4>
                          <p className="text-purple-600 text-sm">Major organ development, heart starts beating, limb buds form</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-700 mb-2">Weeks 9-12:</h4>
                          <p className="text-purple-600 text-sm">Organs continue developing, facial features form, movement begins</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Critical Early Development */}
                  <section id="early-development" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Baby className="w-6 h-6 mr-3 text-pink-600" />
                      Critical Early Development Stages
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      During the first trimester, your baby's major organs and body systems are forming. This makes it the most vulnerable period for developmental problems caused by harmful exposures.
                    </p>

                    <div className="space-y-6">
                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h3 className="font-semibold text-pink-800 mb-4">🧬 Week-by-Week Development:</h3>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-medium text-pink-700 mb-3">Weeks 3-4: Neural Tube Formation</h4>
                              <ul className="space-y-1 text-pink-600 text-sm">
                                <li>• Brain and spinal cord begin forming</li>
                                <li>• Folic acid is critical during this period</li>
                                <li>• Heart tube starts developing</li>
                                <li>• Avoid alcohol, smoking, harmful chemicals</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-pink-700 mb-3">Weeks 5-6: Organ Formation</h4>
                              <ul className="space-y-1 text-pink-600 text-sm">
                                <li>• Heart begins beating (detectable by ultrasound)</li>
                                <li>• Limb buds appear</li>
                                <li>• Neural tube closes (prevents spina bifida)</li>
                                <li>• Digestive system begins forming</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-pink-700 mb-3">Weeks 7-8: Facial Features</h4>
                              <ul className="space-y-1 text-pink-600 text-sm">
                                <li>• Eyes, nose, and mouth form</li>
                                <li>• Arms and legs become more defined</li>
                                <li>• Kidneys begin functioning</li>
                                <li>• Sex organs start developing</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-pink-700 mb-3">Weeks 9-12: Refinement</h4>
                              <ul className="space-y-1 text-pink-600 text-sm">
                                <li>• All major organs present</li>
                                <li>• Fingers and toes fully formed</li>
                                <li>• Baby begins moving (not yet felt)</li>
                                <li>• Risk of major birth defects decreases</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">💊 Essential Nutrients for Development:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <ul className="space-y-2 text-blue-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Folic Acid (600mcg daily)</strong>
                                <p className="text-sm text-blue-600">Prevents neural tube defects</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Iron (27mg daily)</strong>
                                <p className="text-sm text-blue-600">Supports increased blood volume</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Calcium (1000mg daily)</strong>
                                <p className="text-sm text-blue-600">Essential for bone development</p>
                              </div>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-blue-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>DHA (200-300mg daily)</strong>
                                <p className="text-sm text-blue-600">Critical for brain development</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Vitamin D (600 IU daily)</strong>
                                <p className="text-sm text-blue-600">Supports immune system and bones</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Choline (450mg daily)</strong>
                                <p className="text-sm text-blue-600">Important for brain development</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Critical Period Safety */}
                  <section id="critical-period-safety" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-red-600" />
                      Critical Period Safety Guidelines
                    </h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-red-800 mb-4">🚫 Absolute Avoidance During First Trimester:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Alcohol (any amount)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Tobacco and secondhand smoke</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Illegal drugs and recreational substances</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High-mercury fish (shark, swordfish)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Raw or undercooked foods</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Unprescribed medications</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Hot tubs and saunas (hyperthermia risk)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />X-rays and radiation (unless necessary)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Cat litter (toxoplasmosis risk)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Excess caffeine (over 200mg daily)</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">✅ Safety Best Practices:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Start prenatal vitamins with folic acid
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Schedule first prenatal appointment
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Maintain good hand hygiene
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Get adequate sleep (7-9 hours)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Stay hydrated with clean water
                          </li>
                        </ul>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-4">⚠️ Use Caution With:</h3>
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Herbal supplements (consult doctor)
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Essential oils (some can be harmful)
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Cleaning chemicals (use natural alternatives)
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Hair treatments and chemical processes
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Travel to high-risk areas
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Warning Signs */}
                  <section id="warning-signs" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <AlertTriangle className="w-6 h-6 mr-3 text-orange-600" />
                      Warning Signs to Watch For
                    </h2>
                    
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-orange-800 mb-4">🚨 Call Your Doctor Immediately If You Experience:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Heavy bleeding or passing clots</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Severe abdominal or pelvic cramping</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Severe nausea preventing food/fluid intake</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />High fever (over 101°F/38.3°C)</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Severe headaches or vision changes</li>
                        </ul>
                        <ul className="space-y-2 text-orange-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Dizziness or fainting spells</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Burning or pain during urination</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Sudden, severe swelling</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Persistent back pain</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Signs of infection or illness</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-800 mb-4">📞 When to Contact Your Healthcare Provider:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-blue-700 mb-3">Normal vs. Concerning Symptoms:</h4>
                          <div className="space-y-3">
                            <div>
                              <p className="text-blue-600 text-sm"><strong>Normal:</strong> Light spotting, mild cramping</p>
                              <p className="text-red-600 text-sm"><strong>Concerning:</strong> Heavy bleeding, severe pain</p>
                            </div>
                            <div>
                              <p className="text-blue-600 text-sm"><strong>Normal:</strong> Morning sickness, food aversions</p>
                              <p className="text-red-600 text-sm"><strong>Concerning:</strong> Can't keep fluids down for 24+ hours</p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-700 mb-3">Emergency Situations:</h4>
                          <ul className="space-y-1 text-blue-600 text-sm">
                            <li>• Severe bleeding with clots</li>
                            <li>• Intense, one-sided abdominal pain</li>
                            <li>• Signs of ectopic pregnancy</li>
                            <li>• Symptoms of miscarriage</li>
                            <li>• Severe dehydration</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Prenatal Care */}
                  <section id="prenatal-care" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Stethoscope className="w-6 h-6 mr-3 text-blue-600" />
                      Essential Prenatal Care
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">📋 First Trimester Medical Timeline:</h3>
                        <div className="space-y-4">
                          <div className="grid md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="font-medium text-blue-700 mb-2">Weeks 6-8: First Visit</h4>
                              <ul className="space-y-1 text-blue-600 text-sm">
                                <li>• Confirm pregnancy</li>
                                <li>• Medical history review</li>
                                <li>• Physical examination</li>
                                <li>• Initial blood tests</li>
                                <li>• Discuss nutrition and lifestyle</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-700 mb-2">Weeks 8-10: Follow-up</h4>
                              <ul className="space-y-1 text-blue-600 text-sm">
                                <li>• Review test results</li>
                                <li>• Check vital signs</li>
                                <li>• Address concerns</li>
                                <li>• Schedule regular appointments</li>
                                <li>• Discuss genetic testing options</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium text-blue-700 mb-2">Weeks 10-12: Assessment</h4>
                              <ul className="space-y-1 text-blue-600 text-sm">
                                <li>• First-trimester screening</li>
                                <li>• NT scan (if chosen)</li>
                                <li>• Doppler to hear heartbeat</li>
                                <li>• Nutritional counseling</li>
                                <li>• Plan for second trimester</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">🩺 Important Tests & Screenings:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <ul className="space-y-2 text-green-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              <div>
                                <strong>Blood Type & Rh Factor</strong>
                                <p className="text-sm text-green-600">Determines compatibility and potential complications</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              <div>
                                <strong>Complete Blood Count (CBC)</strong>
                                <p className="text-sm text-green-600">Checks for anemia and other blood disorders</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              <div>
                                <strong>STD Screening</strong>
                                <p className="text-sm text-green-600">Important for baby's health and delivery planning</p>
                              </div>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-green-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              <div>
                                <strong>Rubella Immunity</strong>
                                <p className="text-sm text-green-600">Protects against German measles</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              <div>
                                <strong>Thyroid Function</strong>
                                <p className="text-sm text-green-600">Ensures proper hormone levels</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              <div>
                                <strong>Genetic Screening</strong>
                                <p className="text-sm text-green-600">Optional tests for chromosomal abnormalities</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* First Trimester Checklist */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">First Trimester Safety Checklist</h2>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">✅ Essential Safety Tasks:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Immediate Actions:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>☐ Start prenatal vitamins with folic acid</li>
                            <li>☐ Schedule first prenatal appointment</li>
                            <li>☐ Stop alcohol, smoking, and drugs</li>
                            <li>☐ Review all medications with doctor</li>
                            <li>☐ Avoid high-mercury fish</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Lifestyle Changes:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>☐ Switch to safer cleaning products</li>
                            <li>☐ Limit caffeine to under 200mg daily</li>
                            <li>☐ Avoid hot tubs and saunas</li>
                            <li>☐ Practice food safety measures</li>
                            <li>☐ Get adequate sleep and rest</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Navigate Your First Trimester with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Download SafeMama app for instant safety guidance during your critical first trimester. Get personalized recommendations and track your pregnancy safely.
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
                      Essential safety guidance for your most critical pregnancy weeks. Get instant answers you can trust.
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
                      <Pill className="w-5 h-5 mr-3 text-blue-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Medication Safety</span>
                    </Link>
                    <Link to="/safety-guides/mental-health" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Heart className="w-5 h-5 mr-3 text-pink-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Mental Health Guide</span>
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

export default FirstTrimesterSafetyGuide
