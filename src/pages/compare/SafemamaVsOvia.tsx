import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Check, 
  X, 
  Star, 
  Shield, 
  Scan,
  MessageCircle,
  Users,
  Smartphone,
  Crown,
  TrendingUp
} from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const SafemamaVsOvia: React.FC = () => {
  const comparison = {
    safeMama: {
      name: 'SafeMama',
      logo: '/images/logo/safemama-logo.png',
      rating: 4.8,
      downloads: '50,000+',
      pricing: '$4.99/month',
      freeTier: '3 scans + 3 questions',
      color: 'primary',
      strengths: [
        'AI-powered food scanning',
        'Instant safety analysis',
        'Expert Q&A system',
        'Medication safety database',
        'Personalized recommendations'
      ],
      weaknesses: [
        'Newer app with smaller community',
        'Premium pricing for full features',
        'Currently English only'
      ]
    },
    ovia: {
      name: 'Ovia Pregnancy',
      logo: '/images/compare/ovia-logo.png',
      rating: 4.6,
      downloads: '1,000,000+',
      pricing: 'Free + Premium',
      freeTier: 'Basic tracking + ads',
      color: 'purple',
      strengths: [
        'Large user community',
        'Comprehensive tracking',
        'Exercise videos',
        'Multiple language support',
        'Free basic features'
      ],
      weaknesses: [
        'No AI food scanning',
        'Limited safety analysis',
        'Ad-supported free version',
        'No medication checking'
      ]
    }
  }

  const features = [
    {
      category: 'Food Safety',
      items: [
        { name: 'AI Food Scanning', safeMama: true, ovia: false, importance: 'high' },
        { name: 'Barcode Scanning', safeMama: true, ovia: false, importance: 'high' },
        { name: 'Ingredient Analysis', safeMama: true, ovia: false, importance: 'high' },
        { name: 'Safety Recommendations', safeMama: true, ovia: false, importance: 'high' },
        { name: 'Food Database', safeMama: true, ovia: true, importance: 'medium' }
      ]
    },
    {
      category: 'Expert Guidance',
      items: [
        { name: 'Ask Expert Feature', safeMama: true, ovia: false, importance: 'high' },
        { name: 'AI-Powered Q&A', safeMama: true, ovia: false, importance: 'high' },
        { name: 'Medical Information', safeMama: true, ovia: true, importance: 'medium' },
        { name: 'Doctor Articles', safeMama: true, ovia: true, importance: 'medium' }
      ]
    },
    {
      category: 'Pregnancy Tracking',
      items: [
        { name: 'Week-by-Week Updates', safeMama: true, ovia: true, importance: 'medium' },
        { name: 'Baby Development', safeMama: true, ovia: true, importance: 'medium' },
        { name: 'Weight Tracking', safeMama: false, ovia: true, importance: 'low' },
        { name: 'Kick Counter', safeMama: false, ovia: true, importance: 'low' },
        { name: 'Contraction Timer', safeMama: false, ovia: true, importance: 'low' }
      ]
    },
    {
      category: 'Community & Support',
      items: [
        { name: 'Community Forums', safeMama: false, ovia: true, importance: 'medium' },
        { name: 'Expert Support', safeMama: true, ovia: false, importance: 'high' },
        { name: 'Partner App', safeMama: false, ovia: true, importance: 'low' },
        { name: '24/7 Access', safeMama: true, ovia: true, importance: 'medium' }
      ]
    },
    {
      category: 'Additional Features',
      items: [
        { name: 'Medication Safety', safeMama: true, ovia: false, importance: 'high' },
        { name: 'Offline Access', safeMama: true, ovia: false, importance: 'medium' },
        { name: 'Exercise Videos', safeMama: false, ovia: true, importance: 'low' },
        { name: 'Photo Journal', safeMama: false, ovia: true, importance: 'low' },
        { name: 'Multiple Languages', safeMama: false, ovia: true, importance: 'medium' }
      ]
    }
  ]

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case 'high': return 'text-red-600'
      case 'medium': return 'text-yellow-600'
      case 'low': return 'text-green-600'
      default: return 'text-gray-600'
    }
  }

  return (
    <>
      <Helmet>
        <title>SafeMama vs Ovia Pregnancy 2025 | Detailed App Comparison</title>
        <meta 
          name="description" 
          content="Compare SafeMama vs Ovia Pregnancy. See which pregnancy app offers better food safety features, expert guidance, and value for expecting mothers in 2025." 
        />
        <meta 
          name="keywords" 
          content="SafeMama vs Ovia, pregnancy app comparison, food safety app, Ovia Pregnancy review, best pregnancy app 2025" 
        />
        <link rel="canonical" href="https://safemama.co/compare/safemama-vs-ovia/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/compare"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Comparison
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SafeMama vs <span className="text-purple-600">Ovia Pregnancy</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive comparison of SafeMama's AI-powered food safety features against 
              Ovia's established pregnancy tracking platform.
            </p>
          </motion.div>

          {/* Quick Comparison Cards */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* SafeMama Card */}
            <Card className="p-8 border-2 border-primary-500 bg-primary-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Crown className="w-3 h-3 mr-1" />
                  BEST FOR SAFETY
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-500 rounded-full mb-4">
                  <Scan className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{comparison.safeMama.name}</h2>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-medium">{comparison.safeMama.rating}</span>
                  <span className="text-gray-500 ml-2">({comparison.safeMama.downloads})</span>
                </div>
                <div className="text-lg font-semibold text-primary-600">
                  {comparison.safeMama.pricing}
                </div>
                <div className="text-sm text-gray-600">
                  Free tier: {comparison.safeMama.freeTier}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-700 mb-2">✅ Key Strengths</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {comparison.safeMama.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-700 mb-2">⚠️ Limitations</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {comparison.safeMama.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* Ovia Card */}
            <Card className="p-8 border-2 border-purple-500 bg-purple-50 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                  <Users className="w-3 h-3 mr-1" />
                  LARGEST COMMUNITY
                </span>
              </div>
              
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-purple-500 rounded-full mb-4">
                  <Smartphone className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{comparison.ovia.name}</h2>
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-medium">{comparison.ovia.rating}</span>
                  <span className="text-gray-500 ml-2">({comparison.ovia.downloads})</span>
                </div>
                <div className="text-lg font-semibold text-purple-600">
                  {comparison.ovia.pricing}
                </div>
                <div className="text-sm text-gray-600">
                  Free tier: {comparison.ovia.freeTier}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-green-700 mb-2">✅ Key Strengths</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {comparison.ovia.strengths.map((strength, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {strength}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-red-700 mb-2">⚠️ Limitations</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    {comparison.ovia.weaknesses.map((weakness, index) => (
                      <li key={index} className="flex items-start">
                        <X className="w-4 h-4 text-red-400 mr-2 mt-0.5 flex-shrink-0" />
                        {weakness}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Detailed Feature Comparison */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="overflow-hidden">
              <div className="p-8 border-b border-gray-200 text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  Feature-by-Feature Comparison
                </h2>
                <p className="text-gray-600">
                  Detailed breakdown of features and capabilities
                </p>
              </div>

              <div className="divide-y divide-gray-200">
                {features.map((category, categoryIndex) => (
                  <div key={category.category} className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <Shield className="w-5 h-5 mr-2 text-primary-600" />
                      {category.category}
                    </h3>
                    
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="text-left">
                            <th className="pb-3 text-sm font-medium text-gray-700">Feature</th>
                            <th className="pb-3 text-center text-sm font-medium text-gray-700">SafeMama</th>
                            <th className="pb-3 text-center text-sm font-medium text-gray-700">Ovia</th>
                            <th className="pb-3 text-center text-sm font-medium text-gray-700">Priority</th>
                          </tr>
                        </thead>
                        <tbody className="space-y-2">
                          {category.items.map((item, index) => (
                            <tr key={index} className="border-t border-gray-100">
                              <td className="py-3 text-sm text-gray-900">{item.name}</td>
                              <td className="py-3 text-center">
                                {item.safeMama ? (
                                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                                )}
                              </td>
                              <td className="py-3 text-center">
                                {item.ovia ? (
                                  <Check className="w-5 h-5 text-green-500 mx-auto" />
                                ) : (
                                  <X className="w-5 h-5 text-gray-300 mx-auto" />
                                )}
                              </td>
                              <td className="py-3 text-center">
                                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getImportanceColor(item.importance)}`}>
                                  {item.importance.toUpperCase()}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Bottom Line Recommendation */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 mr-3" />
                <h2 className="text-3xl font-bold">The Bottom Line</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold mb-3">Choose SafeMama If:</h3>
                  <ul className="text-left space-y-2 opacity-90">
                    <li>✅ Food safety is your top priority</li>
                    <li>✅ You want AI-powered scanning technology</li>
                    <li>✅ Expert medical guidance is important</li>
                    <li>✅ You prefer comprehensive safety analysis</li>
                    <li>✅ You're willing to pay for premium features</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-3">Choose Ovia If:</h3>
                  <ul className="text-left space-y-2 opacity-90">
                    <li>✅ You want a large community of users</li>
                    <li>✅ Comprehensive pregnancy tracking is key</li>
                    <li>✅ You prefer free basic features</li>
                    <li>✅ Multiple language support is needed</li>
                    <li>✅ Partner involvement features matter</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 mb-8">
                <p className="text-lg font-medium mb-4">
                  <strong>Our Recommendation:</strong> If pregnancy food safety and AI-powered analysis 
                  are priorities, SafeMama offers unmatched capabilities. For general pregnancy tracking 
                  and community features, Ovia provides excellent value.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-primary-600 hover:bg-gray-50">
                  Try SafeMama Free
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Compare More Apps
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SafemamaVsOvia
