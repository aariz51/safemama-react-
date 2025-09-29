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
  ShoppingCart,
  Heart,
  Camera,
  Palette,
  Zap
} from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const SafemamaVsTheBump: React.FC = () => {
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
        'Limited shopping features',
        'No fashion/style content'
      ]
    },
    thebump: {
      name: 'The Bump',
      rating: 4.4,
      downloads: '2M+',
      price: 'Free + Premium',
      freeVersion: true,
      strengths: [
        'Stylish, modern design interface',
        'Comprehensive registry management',
        'Weekly bump photo features',
        'Size comparison tools',
        'Shopping guides and product recommendations',
        'Editorial content and articles',
        'Social sharing capabilities',
        'Baby name inspiration'
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
      registryFeatures: false,
      shoppingGuides: false,
      photoSharing: true,
      styleContent: false,
      bumpPhotos: true,
      sizeComparisons: false,
      editorialContent: true,
      socialSharing: false
    },
    thebump: {
      aiScanning: false,
      foodSafety: false,
      medicationCheck: false,
      expertQA: false,
      pregnancyTracking: true,
      weeklyUpdates: true,
      communitySupport: true,
      offlineAccess: false,
      registryFeatures: true,
      shoppingGuides: true,
      photoSharing: true,
      styleContent: true,
      bumpPhotos: true,
      sizeComparisons: true,
      editorialContent: true,
      socialSharing: true
    }
  }

  const featuresList = [
    { key: 'aiScanning', name: 'AI Food Scanning', icon: Scan, category: 'safety' },
    { key: 'foodSafety', name: 'Food Safety Database', icon: Shield, category: 'safety' },
    { key: 'medicationCheck', name: 'Medication Safety Check', icon: Shield, category: 'safety' },
    { key: 'expertQA', name: 'Expert Q&A System', icon: MessageCircle, category: 'safety' },
    { key: 'pregnancyTracking', name: 'Pregnancy Tracking', icon: Heart, category: 'tracking' },
    { key: 'weeklyUpdates', name: 'Weekly Updates', icon: BookOpen, category: 'tracking' },
    { key: 'registryFeatures', name: 'Registry Management', icon: ShoppingCart, category: 'lifestyle' },
    { key: 'shoppingGuides', name: 'Shopping Guides', icon: ShoppingCart, category: 'lifestyle' },
    { key: 'bumpPhotos', name: 'Bump Photo Features', icon: Camera, category: 'lifestyle' },
    { key: 'styleContent', name: 'Style Content', icon: Palette, category: 'lifestyle' },
    { key: 'communitySupport', name: 'Community Support', icon: Users, category: 'community' },
    { key: 'socialSharing', name: 'Social Sharing', icon: Users, category: 'community' }
  ]

  return (
    <>
      <Helmet>
        <title>SafeMama vs The Bump 2025 | AI Safety vs Stylish Pregnancy Tracking</title>
        <meta 
          name="description" 
          content="Compare SafeMama vs The Bump pregnancy apps. SafeMama offers AI food safety scanning while The Bump focuses on stylish pregnancy tracking and shopping guides. See which app is better for your needs." 
        />
        <meta 
          name="keywords" 
          content="SafeMama vs The Bump, pregnancy app comparison, food safety vs style, AI pregnancy app vs lifestyle app, best pregnancy tracker 2025" 
        />
        <link rel="canonical" href="https://safemama.co/compare/safemama-vs-the-bump" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              SafeMama vs <span className="text-teal-500">The Bump</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              AI-powered pregnancy safety vs stylish pregnancy lifestyle. Compare features, design, and functionality to choose the best app for your pregnancy journey.
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

            {/* The Bump Card */}
            <Card className="p-8 border-2 border-teal-200 bg-teal-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-teal-500 text-white text-sm font-bold px-4 py-2 rounded-full">
                  LIFESTYLE FOCUSED
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-teal-500 rounded-full mb-4">
                  <Palette className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{comparisonData.thebump.name}</h2>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="text-lg font-semibold">{comparisonData.thebump.rating}</span>
                  <span className="text-gray-600 ml-2">({comparisonData.thebump.downloads})</span>
                </div>
                <div className="text-xl font-bold text-teal-600">{comparisonData.thebump.price}</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Key Strengths:</h3>
                  <ul className="space-y-1">
                    {comparisonData.thebump.strengths.slice(0, 4).map((strength, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="https://apps.apple.com/app/the-bump-pregnancy-tracker/id378448073"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="w-full border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white">
                  View The Bump
                </Button>
              </a>
            </Card>
          </motion.div>

          {/* Detailed Comparison */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Head-to-Head Analysis</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-primary-600 mb-4">SafeMama - Medical Safety Priority</h3>
                <p className="text-gray-700 mb-4">
                  SafeMama revolutionizes pregnancy safety with cutting-edge AI technology. Get instant, evidence-based safety recommendations for food, medications, and ingredients with just a quick scan.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Zap className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Instant AI Analysis</h4>
                      <p className="text-sm text-gray-600">Advanced AI provides safety results in seconds</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-primary-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Medical Expertise</h4>
                      <p className="text-sm text-gray-600">Expert Q&A backed by medical professionals</p>
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
                <h3 className="text-lg font-semibold text-teal-600 mb-4">The Bump - Stylish Pregnancy Lifestyle</h3>
                <p className="text-gray-700 mb-4">
                  The Bump combines pregnancy tracking with lifestyle content, offering a visually appealing experience focused on style, shopping, and social sharing throughout your pregnancy journey.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Palette className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Beautiful Design</h4>
                      <p className="text-sm text-gray-600">Stylish, modern interface with premium aesthetics</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ShoppingCart className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Registry & Shopping</h4>
                      <p className="text-sm text-gray-600">Comprehensive registry management and shopping guides</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Camera className="w-5 h-5 text-teal-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium">Photo Features</h4>
                      <p className="text-sm text-gray-600">Weekly bump photos and milestone documentation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Feature Comparison Table */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Feature Comparison</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-4 px-6 font-semibold text-gray-900">Feature</th>
                    <th className="text-center py-4 px-6 font-semibold text-primary-600">SafeMama</th>
                    <th className="text-center py-4 px-6 font-semibold text-teal-600">The Bump</th>
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
                        {features.thebump[feature.key as keyof typeof features.thebump] ? (
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

          {/* Use Cases */}
          <Card className="p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Which App is Right for You?</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-primary-800 mb-4">Choose SafeMama if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prioritize food and medication safety above all</span>
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
                    <span>Value AI-powered recommendations</span>
                  </li>
                </ul>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-teal-800 mb-4">Choose The Bump if you:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Love beautiful, stylish app design</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Want registry management features</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Enjoy shopping guides and recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Like to document and share your journey</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                    <span>Prefer lifestyle and style content</span>
                  </li>
                </ul>
              </div>
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
                While style matters, your safety and your baby's health come first. Join thousands who trust SafeMama's AI-powered safety guidance.
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

export default SafemamaVsTheBump
