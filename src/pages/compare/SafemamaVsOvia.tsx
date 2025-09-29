import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft,
  Star,
  Check,
  X,
  Download,
  Smartphone,
  Shield,
  Scan,
  MessageCircle,
  BookOpen,
  Users,
  Heart,
  Baby,
  Calendar,
  Activity,
  Zap,
  Globe
} from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const SafemamaVsOvia: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'pricing'>('overview')

  const comparisonData = {
    safemama: {
      name: 'SafeMama',
      rating: 4.8,
      downloads: '50K+',
      price: '$4.99/month',
      freeVersion: false,
      strengths: [
        'AI-powered food safety scanning',
        'Instant ingredient analysis',
        'Expert Q&A system with medical professionals',
        'Comprehensive medication safety database',
        'Personalized safety recommendations',
        'Real-time barcode scanning',
        'Offline safety reference',
        'Community expert support'
      ],
      weaknesses: [
        'Newer app with smaller user base',
        'Premium pricing model only',
        'Limited pregnancy tracking features',
        'No fertility tracking'
      ]
    },
    ovia: {
      name: 'Ovia Pregnancy',
      rating: 4.6,
      downloads: '10M+',
      price: 'Free + Premium',
      freeVersion: true,
      strengths: [
        'Comprehensive pregnancy tracking',
        'Weekly baby development updates',
        'Community forums and support',
        'Exercise and wellness videos',
        'Kick counter and contraction timer',
        'Partner sharing capabilities',
        'Large established user base',
        'Multiple language support'
      ],
      weaknesses: [
        'No AI-powered food safety features',
        'Limited medication safety information',
        'No expert Q&A system',
        'Basic safety content only',
        'Less medical focus',
        'No real-time safety scanning'
      ]
    }
  }

  const features = {
    safemama: {
      aiScanning: true,
      foodSafety: true,
      medicationCheck: true,
      expertQA: true,
      pregnancyTracking: true,
      weeklyUpdates: true,
      communitySupport: true,
      offlineAccess: true,
      kickCounter: false,
      contractionTimer: false,
      exerciseVideos: false,
      partnerSharing: false,
      multiLanguage: false,
      fertilityTracking: false,
      babyNames: false,
      appointments: true,
      weightTracking: true,
      symptomTracking: true
    },
    ovia: {
      aiScanning: false,
      foodSafety: false,
      medicationCheck: false,
      expertQA: false,
      pregnancyTracking: true,
      weeklyUpdates: true,
      communitySupport: true,
      offlineAccess: false,
      kickCounter: true,
      contractionTimer: true,
      exerciseVideos: true,
      partnerSharing: true,
      multiLanguage: true,
      fertilityTracking: true,
      babyNames: true,
      appointments: true,
      weightTracking: true,
      symptomTracking: true
    }
  }

  const featuresList = [
    { key: 'aiScanning', name: 'AI Food Scanning', icon: Scan, category: 'safety' },
    { key: 'foodSafety', name: 'Food Safety Database', icon: Shield, category: 'safety' },
    { key: 'medicationCheck', name: 'Medication Safety Check', icon: Shield, category: 'safety' },
    { key: 'expertQA', name: 'Expert Q&A System', icon: MessageCircle, category: 'safety' },
    { key: 'pregnancyTracking', name: 'Pregnancy Tracking', icon: Baby, category: 'tracking' },
    { key: 'weeklyUpdates', name: 'Weekly Updates', icon: BookOpen, category: 'tracking' },
    { key: 'kickCounter', name: 'Kick Counter', icon: Heart, category: 'tracking' },
    { key: 'contractionTimer', name: 'Contraction Timer', icon: Calendar, category: 'tracking' },
    { key: 'exerciseVideos', name: 'Exercise Videos', icon: Activity, category: 'wellness' },
    { key: 'partnerSharing', name: 'Partner Sharing', icon: Users, category: 'social' },
    { key: 'communitySupport', name: 'Community Support', icon: Users, category: 'community' },
    { key: 'multiLanguage', name: 'Multiple Languages', icon: Globe, category: 'features' }
  ]

  return (
    <>
      <Helmet>
        <title>SafeMama vs Ovia Pregnancy 2025 | AI Safety vs Comprehensive Tracking</title>
        <meta 
          name="description" 
          content="Compare SafeMama vs Ovia Pregnancy apps. SafeMama offers AI food safety scanning while Ovia provides comprehensive pregnancy tracking. See detailed feature comparison, pricing, and user reviews." 
        />
        <meta 
          name="keywords" 
          content="SafeMama vs Ovia, pregnancy app comparison, AI food safety vs pregnancy tracking, best pregnancy app 2025, Ovia Pregnancy alternative" 
        />
        <link rel="canonical" href="https://safemama.co/compare/safemama-vs-ovia" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div 
            className="flex items-center space-x-2 text-sm text-gray-600 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Link to="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link to="/compare" className="hover:text-primary-600">Compare Apps</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">SafeMama vs Ovia Pregnancy</span>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              SafeMama vs <span className="text-purple-500">Ovia Pregnancy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered food safety vs comprehensive pregnancy tracking. Compare features, community support, and user experience to choose the best app for your pregnancy journey.
            </p>
          </motion.div>

          {/* Quick Comparison Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* SafeMama Card */}
            <Card className="p-8 border-2 border-primary-200 bg-primary-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  SAFETY FOCUSED
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full mb-4">
                  <Scan className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{comparisonData.safemama.name}</h2>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-lg font-semibold">{comparisonData.safemama.rating}</span>
                  <span className="text-gray-600 ml-2">({comparisonData.safemama.downloads})</span>
                </div>
                <div className="text-xl font-bold text-primary-600">{comparisonData.safemama.price}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Strengths:</h3>
                  <ul className="space-y-1">
                    {comparisonData.safemama.strengths.slice(0, 4).map((strength, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <Button variant="primary" className="w-full">
                Choose SafeMama
              </Button>
            </Card>

            {/* Ovia Card */}
            <Card className="p-8 border-2 border-purple-200 bg-purple-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  TRACKING FOCUSED
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full mb-4">
                  <Baby className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{comparisonData.ovia.name}</h2>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-lg font-semibold">{comparisonData.ovia.rating}</span>
                  <span className="text-gray-600 ml-2">({comparisonData.ovia.downloads})</span>
                </div>
                <div className="text-xl font-bold text-purple-600">{comparisonData.ovia.price}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Strengths:</h3>
                  <ul className="space-y-1">
                    {comparisonData.ovia.strengths.slice(0, 4).map((strength, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="https://apps.apple.com/app/ovia-pregnancy-tracker/id719135369"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                  View Ovia Pregnancy
                </Button>
              </a>
            </Card>
          </motion.div>

          {/* Tabs */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex justify-center">
              <div className="bg-gray-100 rounded-lg p-1 inline-flex">
                {(['overview', 'features', 'pricing'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                      activeTab === tab
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {activeTab === 'overview' && (
              <div className="space-y-12">
                {/* Head to Head */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Head-to-Head Comparison</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-semibold text-primary-600 mb-4">SafeMama - AI-Powered Safety</h3>
                      <p className="text-gray-700 mb-4">
                        SafeMama revolutionizes pregnancy safety with AI-powered food scanning technology. Get instant, personalized safety recommendations for food, medications, and ingredients.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Zap className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Instant AI Analysis</h4>
                            <p className="text-sm text-gray-600">Get safety results in seconds with our advanced AI system</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Shield className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Medical Expertise</h4>
                            <p className="text-sm text-gray-600">Expert Q&A system powered by medical professionals</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Scan className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Real-time Scanning</h4>
                            <p className="text-sm text-gray-600">Camera-based scanning of products and ingredients</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-purple-600 mb-4">Ovia - Comprehensive Tracking</h3>
                      <p className="text-gray-700 mb-4">
                        Ovia Pregnancy offers comprehensive pregnancy tracking with detailed weekly updates, community support, and a full suite of pregnancy tools and features.
                      </p>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Baby className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Comprehensive Tracking</h4>
                            <p className="text-sm text-gray-600">Track every aspect of your pregnancy journey</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Large Community</h4>
                            <p className="text-sm text-gray-600">Connect with millions of other expecting mothers</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Activity className="w-5 h-5 text-purple-500 mr-3 mt-0.5" />
                          <div>
                            <h4 className="font-medium">Wellness Tools</h4>
                            <p className="text-sm text-gray-600">Exercise videos and wellness tracking features</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>

                {/* Use Cases */}
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Best Use Cases</h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="bg-primary-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-primary-800 mb-4">Choose SafeMama if you:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Prioritize food and medication safety</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Want instant safety answers while shopping</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Need expert medical guidance</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Have dietary restrictions or allergies</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Are a first-time pregnant mother</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-6 rounded-lg">
                      <h3 className="text-lg font-semibold text-purple-800 mb-4">Choose Ovia if you:</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Want comprehensive pregnancy tracking</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Enjoy community forums and support</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Need exercise and wellness guidance</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Want to share with your partner</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                          <span>Prefer a free app with premium options</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            )}

            {activeTab === 'features' && (
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Feature Comparison</h2>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                        <th className="text-center py-4 px-6 font-semibold text-primary-600">SafeMama</th>
                        <th className="text-center py-4 px-6 font-semibold text-purple-600">Ovia Pregnancy</th>
                      </tr>
                    </thead>
                    <tbody>
                      {featuresList.map((feature, index) => (
                        <tr key={feature.key} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="py-4 px-6">
                            <div className="flex items-center">
                              <feature.icon className="w-5 h-5 text-gray-600 mr-3" />
                              <span className="font-medium">{feature.name}</span>
                            </div>
                          </td>
                          <td className="text-center py-4 px-6">
                            {features.safemama[feature.key as keyof typeof features.safemama] ? (
                              <Check className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-red-400 mx-auto" />
                            )}
                          </td>
                          <td className="text-center py-4 px-6">
                            {features.ovia[feature.key as keyof typeof features.ovia] ? (
                              <Check className="w-6 h-6 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-6 h-6 text-red-400 mx-auto" />
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>
            )}

            {activeTab === 'pricing' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="p-8 border-2 border-primary-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">SafeMama</h3>
                    <div className="text-4xl font-bold text-primary-600 mb-2">$4.99</div>
                    <div className="text-gray-600">per month</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Unlimited AI food scanning</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Expert Q&A access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Medication safety database</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Personalized recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Offline safety reference</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                      <span>Community expert support</span>
                    </li>
                  </ul>

                  <div className="space-y-3">
                    <a
                      href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="primary" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Download on App Store
                      </Button>
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.safemama.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full">
                        <Download className="w-4 h-4 mr-2" />
                        Get on Google Play
                      </Button>
                    </a>
                  </div>
                </Card>

                <Card className="p-8 border-2 border-purple-200">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Ovia Pregnancy</h3>
                    <div className="text-4xl font-bold text-purple-600 mb-2">Free</div>
                    <div className="text-gray-600">+ Premium features</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Free Features:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Basic pregnancy tracking</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Weekly updates</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Community access</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Basic tracking tools</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-2">Premium Features:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Advanced tracking features</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Exercise video library</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Additional content</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5" />
                        <span>Ad-free experience</span>
                      </li>
                    </ul>
                  </div>

                  <a
                    href="https://apps.apple.com/app/ovia-pregnancy-tracker/id719135369"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white">
                      <Download className="w-4 h-4 mr-2" />
                      View Ovia Pregnancy
                    </Button>
                  </a>
                </Card>
              </div>
            )}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Prioritize Your Pregnancy Safety?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                While community support is valuable, your safety comes first. Join thousands who trust SafeMama's AI-powered safety guidance.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download on App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=com.safemama.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Get on Google Play
                </a>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SafemamaVsOvia
