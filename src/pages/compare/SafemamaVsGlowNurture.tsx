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
  UserPlus,
  Heart,
  BarChart3,
  Timer,
  Zap
} from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const SafemamaVsGlowNurture: React.FC = () => {
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
        'Limited partner connectivity',
        'No advanced data analytics'
      ]
    },
    glownurture: {
      name: 'Glow Nurture',
      rating: 4.2,
      downloads: '1M+',
      price: 'Free + Premium',
      freeVersion: true,
      strengths: [
        'Partner connectivity and sharing',
        'Data-driven insights and analytics',
        'Mood and symptom tracking',
        'Contraction timer and labor prep',
        'Milestone tracking and memories',
        'Community support features',
        'Comprehensive health tracking',
        'Clean, intuitive interface'
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
      partnerConnectivity: false,
      dataInsights: false,
      moodTracking: false,
      contractionTimer: false,
      milestoneTracking: true,
      symptomTracking: true,
      healthAnalytics: false,
      socialFeatures: false
    },
    glownurture: {
      aiScanning: false,
      foodSafety: false,
      medicationCheck: false,
      expertQA: false,
      pregnancyTracking: true,
      weeklyUpdates: true,
      communitySupport: true,
      offlineAccess: false,
      partnerConnectivity: true,
      dataInsights: true,
      moodTracking: true,
      contractionTimer: true,
      milestoneTracking: true,
      symptomTracking: true,
      healthAnalytics: true,
      socialFeatures: true
    }
  }

  const featuresList = [
    { key: 'aiScanning', name: 'AI Food Scanning', icon: Scan, category: 'safety' },
    { key: 'foodSafety', name: 'Food Safety Database', icon: Shield, category: 'safety' },
    { key: 'medicationCheck', name: 'Medication Safety Check', icon: Shield, category: 'safety' },
    { key: 'expertQA', name: 'Expert Q&A System', icon: MessageCircle, category: 'safety' },
    { key: 'pregnancyTracking', name: 'Pregnancy Tracking', icon: Heart, category: 'tracking' },
    { key: 'weeklyUpdates', name: 'Weekly Updates', icon: BookOpen, category: 'tracking' },
    { key: 'partnerConnectivity', name: 'Partner Connectivity', icon: UserPlus, category: 'social' },
    { key: 'dataInsights', name: 'Data Insights', icon: BarChart3, category: 'analytics' },
    { key: 'moodTracking', name: 'Mood Tracking', icon: Heart, category: 'tracking' },
    { key: 'contractionTimer', name: 'Contraction Timer', icon: Timer, category: 'tracking' },
    { key: 'communitySupport', name: 'Community Support', icon: Users, category: 'community' },
    { key: 'offlineAccess', name: 'Offline Access', icon: Shield, category: 'features' }
  ]

  return (
    <>
      <Helmet>
        <title>SafeMama vs Glow Nurture 2025 | AI Safety vs Data-Driven Tracking</title>
        <meta 
          name="description" 
          content="Compare SafeMama vs Glow Nurture pregnancy apps. SafeMama offers AI food safety scanning while Glow Nurture focuses on data-driven pregnancy tracking and partner connectivity. Find the best app for your pregnancy journey." 
        />
        <meta 
          name="keywords" 
          content="SafeMama vs Glow Nurture, pregnancy app comparison, AI safety vs data tracking, pregnancy partner app, best pregnancy tracker 2025" 
        />
        <link rel="canonical" href="https://safemama.co/compare/safemama-vs-glow-nurture" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              SafeMama vs <span className="text-emerald-500">Glow Nurture</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered pregnancy safety vs data-driven pregnancy tracking. Compare features, partner connectivity, and analytics to choose the best app for your journey.
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

            {/* Glow Nurture Card */}
            <Card className="p-8 border-2 border-emerald-200 bg-emerald-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-emerald-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  DATA FOCUSED
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-500 rounded-full mb-4">
                  <BarChart3 className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{comparisonData.glownurture.name}</h2>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-lg font-semibold">{comparisonData.glownurture.rating}</span>
                  <span className="text-gray-600 ml-2">({comparisonData.glownurture.downloads})</span>
                </div>
                <div className="text-xl font-bold text-emerald-600">{comparisonData.glownurture.price}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Strengths:</h3>
                  <ul className="space-y-1">
                    {comparisonData.glownurture.strengths.slice(0, 4).map((strength, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="https://apps.apple.com/app/glow-nurture-pregnancy-tracker/id1023699819"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white">
                  View Glow Nurture
                </Button>
              </a>
            </Card>
          </motion.div>

          {/* Feature Comparison Table */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Feature Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-primary-600">SafeMama</th>
                    <th className="text-center py-4 px-6 font-semibold text-emerald-600">Glow Nurture</th>
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
                        {features.glownurture[feature.key as keyof typeof features.glownurture] ? (
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

          {/* Bottom CTA */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Prioritize Your Pregnancy Safety?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                While data tracking is valuable, your safety comes first. Join thousands who trust SafeMama's AI-powered safety guidance for their pregnancy journey.
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

export default SafemamaVsGlowNurture
