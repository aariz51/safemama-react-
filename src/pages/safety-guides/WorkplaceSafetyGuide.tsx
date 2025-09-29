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
  Briefcase,
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
  Monitor,
  Zap,
  Building
} from 'lucide-react'

const WorkplaceSafetyGuide: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false)

  // Share functions
  const shareUrl = `${window.location.origin}/safety-guides/workplace-safety`
  const shareTitle = 'Workplace Safety During Pregnancy | SafeMama Safety Guide'
  
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
    { id: 'ergonomics', title: 'Office Ergonomics', icon: Monitor, color: 'text-blue-600' },
    { id: 'chemical-safety', title: 'Chemical Safety', icon: Zap, color: 'text-red-600' },
    { id: 'rights-accommodations', title: 'Rights & Accommodations', icon: Shield, color: 'text-green-600' },
    { id: 'stress-management', title: 'Stress Management', icon: Building, color: 'text-purple-600' }
  ]

  return (
    <>
      <Helmet>
        <title>Workplace Safety During Pregnancy | SafeMama Safety Guide</title>
        <meta name="description" content="Maintaining safety and health in your work environment during pregnancy. Learn about ergonomics, chemical safety, workplace rights, and stress management." />
        <meta name="keywords" content="pregnancy workplace safety, working while pregnant, pregnancy rights at work, workplace ergonomics pregnancy" />
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
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-orange-500 to-red-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Briefcase className="w-16 h-16 mx-auto mb-4" />
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Workplace Safety Guide</h1>
                      <p className="text-xl text-orange-100">Maintaining Safety During Pregnancy</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>11 min read</span>
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
                      Working during pregnancy requires special attention to workplace safety and health. This guide covers ergonomics, chemical hazards, legal rights, and creating a pregnancy-friendly work environment.
                    </p>
                    
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
                      <h3 className="flex items-center font-semibold text-orange-800 mb-3">
                        <Shield className="w-5 h-5 mr-2" />
                        Key Workplace Safety Principles
                      </h3>
                      <ul className="space-y-2 text-orange-700">
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Communicate openly with your employer about pregnancy needs
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Request reasonable accommodations when necessary
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Know your legal rights and protections
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                          Monitor and manage workplace stress levels
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Section 1: Office Ergonomics */}
                  <section id="ergonomics" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Monitor className="w-6 h-6 mr-3 text-blue-600" />
                      Office Ergonomics During Pregnancy
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">💻 Desk Setup:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Adjust chair height for proper support
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Use lumbar support cushion
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Position monitor at eye level
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Keep feet flat on floor or footrest
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">🚶 Movement & Breaks:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Take breaks every hour to stand and walk
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Do simple stretches at your desk
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Avoid prolonged standing or sitting
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Use stairs instead of elevator when possible
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-800 mb-4">Posture Tips by Trimester:</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-purple-700 mb-2">First Trimester:</h4>
                          <ul className="space-y-1 text-purple-600 text-sm">
                            <li>• Establish good posture habits early</li>
                            <li>• Adjust workspace for comfort</li>
                            <li>• Start using ergonomic accessories</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-700 mb-2">Second Trimester:</h4>
                          <ul className="space-y-1 text-purple-600 text-sm">
                            <li>• Increase lumbar support</li>
                            <li>• Consider standing desk options</li>
                            <li>• Adjust chair height as needed</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-700 mb-2">Third Trimester:</h4>
                          <ul className="space-y-1 text-purple-600 text-sm">
                            <li>• Use pregnancy support cushions</li>
                            <li>• Take more frequent breaks</li>
                            <li>• Consider reduced work hours</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Chemical Safety */}
                  <section id="chemical-safety" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Zap className="w-6 h-6 mr-3 text-red-600" />
                      Chemical Safety in the Workplace
                    </h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-red-800 mb-4">⚠️ Chemicals to Avoid:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Cleaning solvents and degreasers</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Pesticides and herbicides</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Paint and paint thinners</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Photography chemicals</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Heavy metals (lead, mercury)</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Radiation sources</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Formaldehyde</li>
                          <li className="flex items-start"><XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Industrial chemicals and gases</li>
                        </ul>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                        <h3 className="font-semibold text-yellow-800 mb-4">🛡️ Protection Strategies:</h3>
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Request Safety Data Sheets (SDS)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Use proper ventilation systems
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Wear appropriate protective equipment
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />
                            Wash hands frequently and thoroughly
                          </li>
                        </ul>
                      </div>

                      <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                        <h3 className="font-semibold text-teal-800 mb-4">🏢 High-Risk Industries:</h3>
                        <ul className="space-y-2 text-teal-700">
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Healthcare and laboratories
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Manufacturing and construction
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Agriculture and landscaping
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-orange-500" />
                            Cleaning and janitorial services
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Rights & Accommodations */}
                  <section id="rights-accommodations" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-green-600" />
                      Your Rights & Workplace Accommodations
                    </h2>
                    
                    <div className="space-y-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">⚖️ Legal Protections:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <ul className="space-y-2 text-green-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              Pregnancy Discrimination Act (PDA) protection
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              Family and Medical Leave Act (FMLA) benefits
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              Americans with Disabilities Act (ADA) accommodations
                            </li>
                          </ul>
                          <ul className="space-y-2 text-green-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              Right to reasonable accommodations
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              Protection from discrimination and harassment
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                              Right to pumping/nursing accommodations
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">🏢 Common Workplace Accommodations:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <ul className="space-y-2 text-blue-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              Modified work schedules or hours
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              Ergonomic furniture and equipment
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              More frequent breaks
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              Temporary job reassignment
                            </li>
                          </ul>
                          <ul className="space-y-2 text-blue-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              Remote work opportunities
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              Parking accommodations
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              Access to rest areas
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              Light duty assignments
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Stress Management */}
                  <section id="stress-management" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Building className="w-6 h-6 mr-3 text-purple-600" />
                      Managing Workplace Stress During Pregnancy
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">🧘 Stress Reduction Techniques:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Practice deep breathing exercises
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Take regular short walks
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Use meditation apps during breaks
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Listen to calming music
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Practice progressive muscle relaxation
                          </li>
                        </ul>
                      </div>

                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h3 className="font-semibold text-pink-800 mb-4">💼 Workload Management:</h3>
                        <ul className="space-y-2 text-pink-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Prioritize tasks and delegate when possible
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Communicate openly with supervisors
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Set realistic expectations
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Ask for help when needed
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Plan for maternity leave transition
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-6">
                      <h3 className="font-semibold text-yellow-800 mb-4">⚠️ Signs You Need Additional Support:</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Persistent anxiety or worry</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Sleep problems related to work stress</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Physical symptoms of stress</li>
                        </ul>
                        <ul className="space-y-2 text-yellow-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Difficulty concentrating on tasks</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Overwhelming feelings at work</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-yellow-600" />Conflicts with colleagues or supervisors</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Accommodation Request Template */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Sample Accommodation Request</h2>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">Template for Requesting Workplace Accommodations:</h3>
                      <div className="bg-white border border-gray-300 rounded-lg p-4 text-sm text-gray-700">
                        <p className="mb-3"><strong>Subject:</strong> Request for Pregnancy-Related Accommodation</p>
                        <p className="mb-3"><strong>Dear [Supervisor/HR Manager],</strong></p>
                        <p className="mb-3">I am writing to request workplace accommodations due to my pregnancy. My expected due date is [Date], and I am experiencing [specific pregnancy-related limitations].</p>
                        <p className="mb-3">I am requesting the following accommodations:</p>
                        <ul className="list-disc ml-5 mb-3">
                          <li>[Specific accommodation needed]</li>
                          <li>[Additional accommodation if needed]</li>
                        </ul>
                        <p className="mb-3">These accommodations would enable me to continue performing my job effectively while maintaining my health and the health of my baby.</p>
                        <p className="mb-3">I have attached a note from my healthcare provider supporting this request. Please let me know when we can discuss these accommodations further.</p>
                        <p>Thank you for your consideration.</p>
                        <p className="mt-3"><strong>Sincerely,<br />[Your Name]</strong></p>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Stay Safe at Work with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Download SafeMama app to check workplace chemicals, get ergonomic tips, and access pregnancy safety resources while at work.
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
                      Access workplace safety information and chemical databases instantly at work.
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
                      <Monitor className="w-5 h-5 mr-3 text-blue-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Exercise Safety</span>
                    </Link>
                    <Link to="/safety-guides/mental-health" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Building className="w-5 h-5 mr-3 text-purple-500 group-hover:text-primary-600" />
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

export default WorkplaceSafetyGuide
