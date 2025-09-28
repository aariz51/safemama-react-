import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calculator, 
  Calendar, 
  Shield, 
  Heart, 
  Pill, 
  ArrowRight,
  Star,
  Users,
  Clock,
  CheckCircle
} from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const ToolsIndex: React.FC = () => {
  const tools = [
    {
      id: 'due-date-calculator',
      title: 'Due Date Calculator',
      description: 'Calculate your pregnancy due date, track baby development milestones, and get personalized pregnancy timeline.',
      icon: Calendar,
      color: 'from-blue-500 to-purple-600',
      features: [
        'Accurate due date calculation',
        'Baby development tracking',
        'Trimester information',
        'Important milestone dates'
      ],
      usage: '10K+ calculations',
      rating: 4.9,
      route: '/tools/due-date-calculator'
    },
    {
      id: 'food-safety-checker',
      title: 'Food Safety Checker',
      description: 'Search our comprehensive database to find out if foods are safe during pregnancy with detailed recommendations.',
      icon: Shield,
      color: 'from-green-500 to-teal-600',
      features: [
        'Comprehensive food database',
        'Safety level indicators',
        'Alternative suggestions',
        'Trimester-specific advice'
      ],
      usage: '25K+ searches',
      rating: 4.8,
      route: '/tools/food-safety-checker'
    },
    {
      id: 'nutrition-calculator',
      title: 'Nutrition Calculator',
      description: 'Get personalized nutrition recommendations based on your pregnancy stage, activity level, and individual needs.',
      icon: Calculator,
      color: 'from-orange-500 to-pink-600',
      features: [
        'Personalized calorie needs',
        'Nutrient requirements',
        'BMI calculation',
        'Weight gain guidance'
      ],
      usage: '15K+ calculations',
      rating: 4.7,
      route: '/tools/nutrition-calculator'
    },
    {
      id: 'medication-guide',
      title: 'Medication Guide',
      description: 'Check medication safety during pregnancy with our comprehensive database of prescription and over-the-counter drugs.',
      icon: Pill,
      color: 'from-purple-500 to-blue-600',
      features: [
        'Prescription drug safety',
        'OTC medication guide',
        'Alternative recommendations',
        'Dosage considerations'
      ],
      usage: '8K+ searches',
      rating: 4.8,
      route: '/tools/medication-guide'
    }
  ]

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Expert-Reviewed Content',
      description: 'All tools are based on medical guidelines from leading health organizations'
    },
    {
      icon: Users,
      title: 'Trusted by 50,000+ Mothers',
      description: 'Join thousands of expecting mothers who use our tools daily'
    },
    {
      icon: Clock,
      title: 'Instant Results',
      description: 'Get immediate answers to your pregnancy health and safety questions'
    },
    {
      icon: Heart,
      title: 'Always Free',
      description: 'Basic versions of all tools are completely free to use'
    }
  ]

  return (
    <>
      <Helmet>
        <title>Free Pregnancy Tools | SafeMama - Due Date, Nutrition & Safety Calculators</title>
        <meta 
          name="description" 
          content="Free pregnancy tools including due date calculator, food safety checker, nutrition calculator, and medication guide. Expert-reviewed tools for expecting mothers." 
        />
        <meta 
          name="keywords" 
          content="pregnancy tools, due date calculator, pregnancy nutrition calculator, food safety checker, pregnancy medication guide, free pregnancy tools" 
        />
        <link rel="canonical" href="https://safemama.co/tools/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-6">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Free Pregnancy <span className="text-gradient">Tools</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Essential calculators and checkers to guide your pregnancy journey. 
              Expert-reviewed tools trusted by thousands of expecting mothers worldwide.
            </p>
          </motion.div>

          {/* Tools Grid */}
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
              >
                <Card className="p-8 h-full group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <Link to={tool.route}>
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${tool.color} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-sm text-gray-500 mb-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                          {tool.rating}
                        </div>
                        <div className="text-xs text-gray-400">{tool.usage}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {tool.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {tool.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {tool.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-primary-600">
                        Free to use
                      </span>
                      <div className="flex items-center text-primary-600 group-hover:translate-x-1 transition-transform">
                        <span className="font-medium mr-2">Try now</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Tools?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Trusted, accurate, and designed specifically for expecting mothers
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="p-6 text-center h-full">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r from-indigo-500 to-cyan-500 rounded-full mb-4">
                      <benefit.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* App Promotion */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-12 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">
                  Want More Advanced Features?
                </h2>
                <p className="text-xl opacity-90 mb-8">
                  Get the full SafeMama experience with AI-powered food scanning, 
                  expert Q&A, and unlimited access to all our tools.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h3 className="text-lg font-semibold mb-2">AI Food Scanning</h3>
                    <p className="opacity-80">Scan any product for instant safety analysis</p>
                  </div>
                  <div className="text-center">
                    <Heart className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h3 className="text-lg font-semibold mb-2">Expert Q&A</h3>
                    <p className="opacity-80">Get answers from AI-powered medical knowledge</p>
                  </div>
                  <div className="text-center">
                    <Calculator className="w-12 h-12 mx-auto mb-4 opacity-90" />
                    <h3 className="text-lg font-semibold mb-2">Unlimited Tools</h3>
                    <p className="opacity-80">Full access to all calculators and features</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <img
                    src="/images/badges/app-store-coming-soon.png"
                    alt="Download on App Store"
                    className="h-14 w-auto mx-auto sm:mx-0"
                  />
                  <img
                    src="/images/badges/google-play-coming-soon.png"
                    alt="Get it on Google Play"
                    className="h-14 w-auto mx-auto sm:mx-0"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ToolsIndex
