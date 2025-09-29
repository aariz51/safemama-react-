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
  Heart,
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
  Phone,
  Users,
  Brain,
  Smile
} from 'lucide-react'

const MentalHealthGuide: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false)

  // Share functions
  const shareUrl = `${window.location.origin}/safety-guides/mental-health`
  const shareTitle = 'Mental Health & Emotional Wellness During Pregnancy | SafeMama'
  
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
    { id: 'emotional-changes', title: 'Understanding Emotional Changes', icon: Brain, color: 'text-purple-600' },
    { id: 'support-systems', title: 'Building Support Systems', icon: Users, color: 'text-blue-600' },
    { id: 'professional-help', title: 'When to Seek Help', icon: Phone, color: 'text-red-600' },
    { id: 'self-care', title: 'Self-Care Strategies', icon: Smile, color: 'text-green-600' }
  ]

  return (
    <>
      <Helmet>
        <title>Mental Health & Emotional Wellness During Pregnancy | SafeMama Safety Guide</title>
        <meta name="description" content="Supporting your mental health during pregnancy. Learn about emotional changes, building support systems, and when to seek professional help." />
        <meta name="keywords" content="pregnancy mental health, emotional wellness pregnancy, prenatal depression, pregnancy anxiety, perinatal mental health" />
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
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-rose-500 to-pink-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Heart className="w-16 h-16 mx-auto mb-4" />
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Mental Health & Wellness</h1>
                      <p className="text-xl text-rose-100">Supporting Your Emotional Journey</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>13 min read</span>
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
                      Pregnancy brings significant emotional and psychological changes. Understanding these changes and prioritizing mental health is crucial for both maternal and baby's wellbeing during this transformative time.
                    </p>
                    
                    <div className="bg-rose-50 border-l-4 border-rose-500 p-6 rounded-r-lg">
                      <h3 className="flex items-center font-semibold text-rose-800 mb-3">
                        <Brain className="w-5 h-5 mr-2" />
                        Mental Health Statistics During Pregnancy
                      </h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-rose-700 mb-2">Depression:</h4>
                          <p className="text-rose-600 text-sm">10-20% of pregnant women experience prenatal depression</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-rose-700 mb-2">Anxiety:</h4>
                          <p className="text-rose-600 text-sm">Up to 25% experience anxiety during pregnancy</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-rose-700 mb-2">Recovery:</h4>
                          <p className="text-rose-600 text-sm">Treatment is safe and effective during pregnancy</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Emotional Changes */}
                  <section id="emotional-changes" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Brain className="w-6 h-6 mr-3 text-purple-600" />
                      Understanding Emotional Changes
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      Pregnancy involves dramatic hormonal fluctuations that can significantly impact mood and emotional state. Understanding what's normal can help you recognize when additional support might be needed.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">😊 Normal Emotional Changes:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Mood swings and increased sensitivity
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Heightened emotions and crying spells
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Anxiety about pregnancy and parenthood
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Concerns about body changes
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Excitement mixed with worry
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">⚠️ Signs of Concern:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Persistent sadness lasting 2+ weeks
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Loss of interest in activities you enjoyed
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Severe anxiety or panic attacks
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Thoughts of self-harm
                          </li>
                          <li className="flex items-start">
                            <AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Inability to function daily
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                      <h3 className="font-semibold text-blue-800 mb-4">🧠 Hormonal Impact on Mental Health:</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-blue-700 mb-2">First Trimester:</h4>
                          <ul className="space-y-1 text-blue-600 text-sm">
                            <li>• Rapid hormone increases</li>
                            <li>• Fatigue affecting mood</li>
                            <li>• Morning sickness stress</li>
                            <li>• Adjustment to pregnancy</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-700 mb-2">Second Trimester:</h4>
                          <ul className="space-y-1 text-blue-600 text-sm">
                            <li>• Generally more stable mood</li>
                            <li>• Increased energy levels</li>
                            <li>• Body image concerns may arise</li>
                            <li>• Planning and preparation focus</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-blue-700 mb-2">Third Trimester:</h4>
                          <ul className="space-y-1 text-blue-600 text-sm">
                            <li>• Anxiety about labor and delivery</li>
                            <li>• Nesting behaviors</li>
                            <li>• Sleep disruption affecting mood</li>
                            <li>• Anticipation and preparation stress</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Support Systems */}
                  <section id="support-systems" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Users className="w-6 h-6 mr-3 text-blue-600" />
                      Building Strong Support Systems
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">👥 Family & Friends Support:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Communicate your needs clearly
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Accept help when offered
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Share your feelings and concerns
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Set boundaries when needed
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Include partner in your emotional journey
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">🤝 Community Resources:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Join prenatal classes and groups
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Connect with other expecting mothers
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Utilize online support communities
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Seek cultural or religious support
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Access community mental health services
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="font-semibold text-yellow-800 mb-4">💬 Effective Communication Strategies:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-yellow-700 mb-3">With Your Partner:</h4>
                          <ul className="space-y-1 text-yellow-600 text-sm">
                            <li>• Schedule regular check-ins</li>
                            <li>• Share fears and excitement equally</li>
                            <li>• Discuss expectations and concerns</li>
                            <li>• Plan together for baby's arrival</li>
                            <li>• Seek couples counseling if needed</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-700 mb-3">With Healthcare Providers:</h4>
                          <ul className="space-y-1 text-yellow-600 text-sm">
                            <li>• Be honest about emotional symptoms</li>
                            <li>• Ask questions about mental health</li>
                            <li>• Discuss family history of mental illness</li>
                            <li>• Request referrals when needed</li>
                            <li>• Follow up on concerns</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Professional Help */}
                  <section id="professional-help" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Phone className="w-6 h-6 mr-3 text-red-600" />
                      When to Seek Professional Help
                    </h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                      <h3 className="font-semibold text-red-800 mb-4">🚨 Immediate Help Needed If You Experience:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Thoughts of harming yourself or baby</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Severe anxiety or panic attacks</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Inability to eat, sleep, or function</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Substance abuse thoughts or behaviors</li>
                        </ul>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Persistent hopelessness for 2+ weeks</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Complete loss of interest in pregnancy</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Severe mood swings affecting relationships</li>
                          <li className="flex items-start"><AlertTriangle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />Hallucinations or delusions</li>
                        </ul>
                      </div>
                      <div className="mt-4 p-4 bg-red-100 rounded-lg">
                        <p className="text-red-800 font-medium text-center">
                          🔴 Crisis Resources: National Suicide Prevention Lifeline: 988 | Crisis Text Line: Text HOME to 741741
                        </p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">👩‍⚕️ Types of Mental Health Professionals:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <ul className="space-y-2 text-blue-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Perinatal Psychologist</strong>
                                <p className="text-sm text-blue-600">Specializes in pregnancy and postpartum mental health</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Psychiatrist</strong>
                                <p className="text-sm text-blue-600">Can prescribe pregnancy-safe medications</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Licensed Therapist</strong>
                                <p className="text-sm text-blue-600">Provides counseling and coping strategies</p>
                              </div>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-blue-700">
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Social Worker</strong>
                                <p className="text-sm text-blue-600">Helps connect with resources and support</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Pregnancy Counselor</strong>
                                <p className="text-sm text-blue-600">Specializes in pregnancy-specific concerns</p>
                              </div>
                            </li>
                            <li className="flex items-start">
                              <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                              <div>
                                <strong>Support Group Facilitator</strong>
                                <p className="text-sm text-blue-600">Leads group therapy sessions</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">💊 Safe Treatment Options During Pregnancy:</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-medium text-green-700 mb-3">Non-Medication Approaches:</h4>
                            <ul className="space-y-1 text-green-600 text-sm">
                              <li>• Cognitive Behavioral Therapy (CBT)</li>
                              <li>• Interpersonal therapy</li>
                              <li>• Mindfulness and meditation</li>
                              <li>• Support group participation</li>
                              <li>• Light therapy for seasonal depression</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-medium text-green-700 mb-3">Medication Considerations:</h4>
                            <ul className="space-y-1 text-green-600 text-sm">
                              <li>• Some antidepressants are safe in pregnancy</li>
                              <li>• Benefits vs. risks carefully evaluated</li>
                              <li>• Close monitoring by healthcare team</li>
                              <li>• Never stop medications without medical guidance</li>
                              <li>• Alternative medications may be recommended</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Self-Care */}
                  <section id="self-care" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Smile className="w-6 h-6 mr-3 text-green-600" />
                      Self-Care Strategies for Mental Wellness
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">🧘 Daily Wellness Practices:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Practice deep breathing exercises
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Maintain a gratitude journal
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Engage in gentle, regular exercise
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Spend time in nature when possible
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Practice prenatal yoga or stretching
                          </li>
                        </ul>
                      </div>

                      <div className="bg-pink-50 border border-pink-200 rounded-lg p-6">
                        <h3 className="font-semibold text-pink-800 mb-4">💆 Physical Self-Care:</h3>
                        <ul className="space-y-2 text-pink-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Prioritize adequate sleep (7-9 hours)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Eat regular, nutritious meals
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Take warm (not hot) baths for relaxation
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Schedule regular prenatal massages
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-pink-600" />
                            Limit caffeine and avoid alcohol
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                      <h3 className="font-semibold text-purple-800 mb-4">📱 Digital Wellness & Boundaries:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">Healthy Digital Habits:</h4>
                          <ul className="space-y-1 text-purple-600 text-sm">
                            <li>• Limit social media comparison</li>
                            <li>• Use pregnancy apps for positive support</li>
                            <li>• Set boundaries with pregnancy advice</li>
                            <li>• Avoid excessive research or "Dr. Google"</li>
                            <li>• Choose reliable, medical sources</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-purple-700 mb-3">Stress Management:</h4>
                          <ul className="space-y-1 text-purple-600 text-sm">
                            <li>• Practice saying "no" to overwhelming requests</li>
                            <li>• Delegate tasks when possible</li>
                            <li>• Focus on what you can control</li>
                            <li>• Use relaxation apps or meditation</li>
                            <li>• Create a calming bedtime routine</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Mental Health Resources */}
                  <section className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Mental Health Resources</h2>
                    
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
                      <h3 className="font-semibold text-gray-800 mb-4">🆘 Crisis & Support Resources:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Emergency Resources:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li><strong>National Suicide Prevention Lifeline:</strong> 988</li>
                            <li><strong>Crisis Text Line:</strong> Text HOME to 741741</li>
                            <li><strong>Postpartum Support International:</strong> 1-944-4HELP4MOMS</li>
                            <li><strong>SAMHSA National Helpline:</strong> 1-800-662-HELP</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Online Support:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>• Postpartum Support International online groups</li>
                            <li>• BetterHelp online therapy platform</li>
                            <li>• Talkspace pregnancy counseling</li>
                            <li>• Local hospital mental health programs</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Support Your Mental Health with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Download SafeMama app for personalized wellness tips and connect with mental health resources designed for expecting mothers.
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
                      Access mental health resources and wellness tips designed for your pregnancy journey.
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
                    <Link to="/safety-guides/first-trimester" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <CheckCircle className="w-5 h-5 mr-3 text-purple-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">First Trimester Safety</span>
                    </Link>
                    <Link to="/safety-guides/exercise-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Users className="w-5 h-5 mr-3 text-pink-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Exercise Safety</span>
                    </Link>
                    <Link to="/safety-guides/workplace-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Brain className="w-5 h-5 mr-3 text-blue-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Workplace Safety</span>
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

export default MentalHealthGuide
