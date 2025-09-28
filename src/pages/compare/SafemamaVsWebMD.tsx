import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Check, X, Star, Shield, Heart, Smartphone, Users, Clock, Zap } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const SafemamaVsWebMD: React.FC = () => {
  const comparisonData = {
    features: [
      {
        feature: 'AI-Powered Food Scanning',
        safemama: true,
        competitor: false,
        description: 'Scan any product with camera for instant safety analysis'
      },
      {
        feature: 'Personalized Pregnancy Guidance',
        safemama: true,
        competitor: false,
        description: 'AI-powered recommendations based on your trimester and preferences'
      },
      {
        feature: 'Expert Q&A System',
        safemama: true,
        competitor: true,
        description: 'Ask pregnancy questions and get expert responses'
      },
      {
        feature: 'Medical Articles',
        safemama: true,
        competitor: true,
        description: 'Access to pregnancy and health articles'
      },
      {
        feature: 'Symptom Checker',
        safemama: false,
        competitor: true,
        description: 'Check symptoms and get medical insights'
      },
      {
        feature: 'Pregnancy Tracking',
        safemama: true,
        competitor: false,
        description: 'Track your pregnancy journey week by week'
      },
      {
        feature: 'Food Safety Database',
        safemama: true,
        competitor: false,
        description: 'Comprehensive database of pregnancy-safe foods'
      },
      {
        feature: 'Mobile App',
        safemama: true,
        competitor: true,
        description: 'Dedicated mobile application'
      }
    ],
    pricing: {
      safemama: {
        free: '3 scans, 3 expert questions',
        premium: '$4.99/month - Unlimited scans, expert Q&A, personalized guides'
      },
      competitor: {
        free: 'Limited articles access',
        premium: 'WebMD Premium - $4.99/month'
      }
    },
    ratings: {
      safemama: { rating: 4.8, reviews: '12,000+' },
      competitor: { rating: 4.1, reviews: '50,000+' }
    }
  }

  const pros = {
    safemama: [
      'Only app with AI-powered food scanning for pregnancy',
      'Personalized recommendations based on your profile',
      'Pregnancy-specific safety focus',
      'Expert medical team validation',
      'Clean, pregnancy-focused interface'
    ],
    competitor: [
      'Comprehensive medical information',
      'Large database of health articles',
      'General symptom checker',
      'Established medical brand',
      'Free basic access to articles'
    ]
  }

  const cons = {
    safemama: [
      'Newer brand (less recognition)',
      'Pregnancy-focused only',
      'Premium features cost extra'
    ],
    competitor: [
      'No pregnancy-specific food scanning',
      'General health focus, not pregnancy-specialized',
      'Information overload for expecting mothers',
      'No personalized pregnancy guidance'
    ]
  }

  return (
    <>
      <Helmet>
        <title>SafeMama vs WebMD | Pregnancy App Comparison 2025</title>
        <meta name="description" content="Compare SafeMama and WebMD for pregnancy. See which app offers better food safety scanning, expert advice, and pregnancy-specific features." />
        <meta name="keywords" content="SafeMama vs WebMD, pregnancy apps comparison, food safety pregnancy, WebMD pregnancy" />
        <link rel="canonical" href="https://safemama.co/compare/safemama-vs-webmd/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/compare" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Compare
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SafeMama vs <span className="text-blue-600">WebMD</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comparing pregnancy-focused AI scanning with general medical information platform. 
              Find the best solution for your pregnancy journey.
            </p>
          </motion.div>

          {/* App Comparison Cards */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            {/* SafeMama Card */}
            <Card className="p-8 text-center relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-primary-500 text-white text-xs font-bold px-2 py-1 rounded-full">RECOMMENDED</span>
              </div>
              
              <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">SM</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">SafeMama</h2>
              <p className="text-gray-600 mb-6">AI-Powered Pregnancy Safety Assistant</p>
              
              <div className="flex items-center justify-center mb-6">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-2 font-semibold">{comparisonData.ratings.safemama.rating}</span>
                <span className="text-gray-500 ml-2">({comparisonData.ratings.safemama.reviews} reviews)</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center text-green-600">
                  <Shield className="w-5 h-5 mr-2" />
                  <span className="font-medium">Pregnancy-Focused</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Zap className="w-5 h-5 mr-2" />
                  <span className="font-medium">AI-Powered Scanning</span>
                </div>
                <div className="flex items-center justify-center text-purple-600">
                  <Heart className="w-5 h-5 mr-2" />
                  <span className="font-medium">Expert Validation</span>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                Try SafeMama Free
              </Button>
            </Card>

            {/* WebMD Card */}
            <Card className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">W</span>
              </div>
              
              <h2 className="text-2xl font-bold text-gray-900 mb-4">WebMD</h2>
              <p className="text-gray-600 mb-6">General Medical Information Platform</p>
              
              <div className="flex items-center justify-center mb-6">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="ml-2 font-semibold">{comparisonData.ratings.competitor.rating}</span>
                <span className="text-gray-500 ml-2">({comparisonData.ratings.competitor.reviews} reviews)</span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-center text-green-600">
                  <Users className="w-5 h-5 mr-2" />
                  <span className="font-medium">Established Brand</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <Clock className="w-5 h-5 mr-2" />
                  <span className="font-medium">Symptom Checker</span>
                </div>
                <div className="flex items-center justify-center text-purple-600">
                  <Smartphone className="w-5 h-5 mr-2" />
                  <span className="font-medium">General Health Info</span>
                </div>
              </div>
              
              <Button variant="outline" className="w-full" size="lg">
                Visit WebMD
              </Button>
            </Card>
          </motion.div>

          {/* Feature Comparison Table */}
          <motion.div className="mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white p-6">
                <h2 className="text-2xl font-bold text-center">Feature Comparison</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-gray-900">Feature</th>
                      <th className="text-center p-4 font-semibold text-primary-600">SafeMama</th>
                      <th className="text-center p-4 font-semibold text-blue-600">WebMD</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.features.map((item, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="p-4">
                          <div>
                            <div className="font-medium text-gray-900">{item.feature}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </td>
                        <td className="text-center p-4">
                          {item.safemama ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <X className="w-6 h-6 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="text-center p-4">
                          {item.competitor ? (
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
          </motion.div>

          {/* Pros and Cons */}
          <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            {/* SafeMama Pros/Cons */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-primary-600 mb-6 text-center">SafeMama</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {pros.safemama.map((pro, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                    <X className="w-5 h-5 mr-2" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {cons.safemama.map((con, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>

            {/* WebMD Pros/Cons */}
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-blue-600 mb-6 text-center">WebMD</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {pros.competitor.map((pro, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-red-600 mb-3 flex items-center">
                    <X className="w-5 h-5 mr-2" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {cons.competitor.map((con, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Final Recommendation */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Card className="p-12 text-center bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 text-white">
              <h2 className="text-3xl font-bold mb-6">Our Recommendation</h2>
              <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
                For expecting mothers focused on <strong>food safety and pregnancy-specific guidance</strong>, 
                SafeMama is the clear winner. WebMD is better suited for general health information but lacks 
                pregnancy-specialized features like AI food scanning.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="bg-white text-primary-600 hover:bg-gray-50">
                  <Shield className="w-5 h-5 mr-2" />
                  Try SafeMama Free
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                  View All Comparisons
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SafemamaVsWebMD
