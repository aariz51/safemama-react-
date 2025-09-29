import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Star, 
  Check, 
  X, 
  ArrowRight, 
  Shield, 
  Scan,
  MessageCircle,
  BookOpen,
  Users,
  Download
} from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const CompareIndex: React.FC = () => {
  const competitors = [
    {
      name: 'SafeMama',
      logo: '/images/logo/safemama-logo.png',
      rating: 4.8,
      downloads: '50K+',
      pricing: '$4.99/month',
      slug: '',
      features: {
        aiScanning: true,
        expertQA: true,
        personalizedGuides: true,
        offlineAccess: true,
        medicationCheck: true,
        nutritionTracking: true,
        communitySupport: true,
        multilingual: false
      },
      highlights: [
        'AI-powered food scanning',
        'Instant safety analysis',
        'Expert Q&A system',
        'Personalized recommendations',
        'Comprehensive medication database'
      ],
      color: 'bg-primary-500'
    },
    {
      name: 'Ovia Pregnancy',
      logo: '/images/compare/ovia-logo.png',
      rating: 4.6,
      downloads: '1M+',
      pricing: 'Free + Premium',
      slug: 'safemama-vs-ovia',
      features: {
        aiScanning: false,
        expertQA: false,
        personalizedGuides: true,
        offlineAccess: false,
        medicationCheck: false,
        nutritionTracking: true,
        communitySupport: true,
        multilingual: true
      },
      highlights: [
        'Pregnancy tracking',
        'Weekly updates',
        'Community features',
        'Exercise videos',
        'Kick counter'
      ],
      color: 'bg-purple-500'
    },
    {
      name: 'Pregnancy+',
      logo: '/images/compare/pregnancy-plus-logo.png',
      rating: 4.5,
      downloads: '5M+',
      pricing: 'Free + Premium',
      slug: 'safemama-vs-pregnancy-plus',
      features: {
        aiScanning: false,
        expertQA: false,
        personalizedGuides: true,
        offlineAccess: true,
        medicationCheck: false,
        nutritionTracking: false,
        communitySupport: false,
        multilingual: true
      },
      highlights: [
        '3D baby models',
        'Weight tracking',
        'Appointment tracker',
        'Photo journal',
        'Baby name suggestions'
      ],
      color: 'bg-pink-500'
    },
    {
      name: 'WebMD Pregnancy',
      logo: '/images/compare/webmd-logo.png',
      rating: 4.3,
      downloads: '500K+',
      pricing: 'Free',
      slug: 'safemama-vs-webmd',
      features: {
        aiScanning: false,
        expertQA: false,
        personalizedGuides: false,
        offlineAccess: false,
        medicationCheck: true,
        nutritionTracking: false,
        communitySupport: false,
        multilingual: false
      },
      highlights: [
        'Medical information',
        'Symptom checker',
        'Doctor-reviewed content',
        'Health articles',
        'Due date calculator'
      ],
      color: 'bg-blue-500'
    },
    {
      name: 'BabyCenter',
      logo: '/images/compare/babycenter-logo.png',
      rating: 4.7,
      downloads: '100M+',
      pricing: 'Free + Premium',
      slug: 'safemama-vs-babycenter',
      features: {
        aiScanning: false,
        expertQA: false,
        personalizedGuides: true,
        offlineAccess: false,
        medicationCheck: false,
        nutritionTracking: true,
        communitySupport: true,
        multilingual: true
      },
      highlights: [
        'Massive community',
        'Weekly updates',
        'Baby names tool',
        'Registry integration',
        'Birth month groups'
      ],
      color: 'bg-orange-500'
    },
    {
      name: 'What to Expect',
      logo: '/images/compare/what-to-expect-logo.png',
      rating: 4.6,
      downloads: '10M+',
      pricing: 'Free + Premium',
      slug: 'safemama-vs-what-to-expect',
      features: {
        aiScanning: false,
        expertQA: false,
        personalizedGuides: true,
        offlineAccess: true,
        medicationCheck: false,
        nutritionTracking: true,
        communitySupport: true,
        multilingual: false
      },
      highlights: [
        'Birth planning tools',
        'Community forums',
        'Kick counter',
        'Hospital bag checklist',
        'Expert articles'
      ],
      color: 'bg-indigo-500'
    },
    {
      name: 'The Bump',
      logo: '/images/compare/the-bump-logo.png',
      rating: 4.4,
      downloads: '2M+',
      pricing: 'Free + Premium',
      slug: 'safemama-vs-the-bump',
      features: {
        aiScanning: false,
        expertQA: false,
        personalizedGuides: true,
        offlineAccess: false,
        medicationCheck: false,
        nutritionTracking: true,
        communitySupport: true,
        multilingual: false
      },
      highlights: [
        'Stylish design',
        'Registry management',
        'Bump photos',
        'Size comparisons',
        'Shopping guides'
      ],
      color: 'bg-teal-500'
    },
    {
      name: 'Glow Nurture',
      logo: '/images/compare/glow-nurture-logo.png',
      rating: 4.2,
      downloads: '1M+',
      pricing: 'Free + Premium',
      slug: 'safemama-vs-glow-nurture',
      features: {
        aiScanning: false,
        expertQA: false,
        personalizedGuides: true,
        offlineAccess: false,
        medicationCheck: false,
        nutritionTracking: true,
        communitySupport: true,
        multilingual: false
      },
      highlights: [
        'Partner connectivity',
        'Data insights',
        'Mood tracking',
        'Contraction timer',
        'Milestone tracking'
      ],
      color: 'bg-emerald-500'
    }
  ]

  const comparisonFeatures = [
    { name: 'AI-Powered Food Scanning', key: 'aiScanning', icon: Scan },
    { name: 'Expert Q&A System', key: 'expertQA', icon: MessageCircle },
    { name: 'Personalized Guides', key: 'personalizedGuides', icon: BookOpen },
    { name: 'Offline Access', key: 'offlineAccess', icon: Shield },
    { name: 'Medication Safety Check', key: 'medicationCheck', icon: Shield },
    { name: 'Nutrition Tracking', key: 'nutritionTracking', icon: Shield },
    { name: 'Community Support', key: 'communitySupport', icon: Users },
    { name: 'Multiple Languages', key: 'multilingual', icon: Shield }
  ]

  return (
    <>
      <Helmet>
        <title>Best Pregnancy Apps Comparison 2025 | SafeMama vs Competitors</title>
        <meta 
          name="description" 
          content="Compare SafeMama with top pregnancy apps like Ovia, WebMD, Pregnancy+, BabyCenter, What to Expect, The Bump, and Glow Nurture. See features, pricing, and user reviews to choose the best pregnancy safety app." 
        />
        <meta 
          name="keywords" 
          content="best pregnancy apps 2025, pregnancy app comparison, SafeMama vs Ovia, pregnancy safety app reviews, best pregnancy tracker app, pregnancy app features comparison" 
        />
        <link rel="canonical" href="https://safemama.co/compare/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Smartphone className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Best Pregnancy Apps <span className="text-gradient">Comparison 2025</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Compare SafeMama with top pregnancy apps to find the perfect companion for your pregnancy journey. 
              See features, pricing, and real user reviews side by side.
            </p>
          </motion.div>

          {/* Quick Comparison Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {competitors.slice(0, 8).map((app, index) => (
              <motion.div
                key={app.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Card className={`p-6 text-center group cursor-pointer h-full ${app.name === 'SafeMama' ? 'ring-2 ring-primary-500 bg-primary-50' : ''}`}>
                  {app.name === 'SafeMama' && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                        RECOMMENDED
                      </span>
                    </div>
                  )}
                  
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${app.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{app.name}</h3>
                  
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-medium text-gray-700">{app.rating}</span>
                    <span className="text-xs text-gray-500 ml-2">({app.downloads})</span>
                  </div>
                  
                  <div className="text-sm font-medium text-primary-600 mb-4">
                    {app.pricing}
                  </div>
                  
                  <ul className="text-xs text-gray-600 space-y-1 mb-6 text-left">
                    {app.highlights.slice(0, 3).map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  
                  {app.slug ? (
                    <Link to={`/compare/${app.slug}`}>
                      <Button 
                        variant={app.name === 'SafeMama' ? 'primary' : 'outline'} 
                        size="sm" 
                        className="w-full"
                      >
                        Compare Now
                      </Button>
                    </Link>
                  ) : (
                    <Button variant="primary" size="sm" className="w-full">
                      Choose SafeMama
                    </Button>
                  )}
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Detailed Comparison Table */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="overflow-hidden">
              <div className="p-8 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                  Feature-by-Feature Comparison
                </h2>
                <p className="text-gray-600 text-center">
                  See how SafeMama stacks up against the competition
                </p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
                      {competitors.slice(0, 8).map((app) => (
                        <th key={app.name} className="px-6 py-4 text-center text-sm font-semibold text-gray-900">
                          {app.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={feature.key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          <div className="flex items-center">
                            <feature.icon className="w-4 h-4 mr-3 text-gray-600" />
                            {feature.name}
                          </div>
                        </td>
                        {competitors.slice(0, 8).map((app) => (
                          <td key={app.name} className="px-6 py-4 text-center">
                            {app.features[feature.key as keyof typeof app.features] ? (
                              <Check className="w-5 h-5 text-green-500 mx-auto" />
                            ) : (
                              <X className="w-5 h-5 text-red-400 mx-auto" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* Individual Comparisons */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Detailed Comparisons
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {competitors.slice(1).map((competitor, index) => (
                <motion.div
                  key={competitor.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="p-8 text-center group hover:shadow-xl transition-shadow">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${competitor.color} rounded-full mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Smartphone className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      SafeMama vs {competitor.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6">
                      See how SafeMama's AI-powered food safety features compare to {competitor.name}'s 
                      pregnancy tracking capabilities.
                    </p>
                    
                    <Link to={`/compare/${competitor.slug}`}>
                      <Button variant="outline" className="w-full group-hover:bg-primary-500 group-hover:text-white group-hover:border-primary-500">
                        Compare Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose SafeMama */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <h2 className="text-3xl font-bold mb-6">Why SafeMama Stands Out</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                SafeMama is the only pregnancy app that combines AI-powered food scanning with 
                expert medical guidance, giving you instant safety recommendations for you and your baby.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <Scan className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-lg font-semibold mb-2">AI Food Scanning</h3>
                  <p className="opacity-80">Instant safety analysis of any food or product</p>
                </div>
                <div className="text-center">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-lg font-semibold mb-2">Expert Q&A</h3>
                  <p className="opacity-80">Get answers from AI-powered medical knowledge</p>
                </div>
                <div className="text-center">
                  <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
                  <h3 className="text-lg font-semibold mb-2">Safety First</h3>
                  <p className="opacity-80">Comprehensive medication and supplement database</p>
                </div>
              </div>
              
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

export default CompareIndex
