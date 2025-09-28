import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  CheckCircle, 
  XCircle, 
  Star,
  Smartphone,
  Zap,
  Shield,
  Users,
  Calendar,
  Search,
  Heart,
  DollarSign,
  Target  // Added missing import
} from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const SafemamaVsWhatToExpect: React.FC = () => {
  const comparisonData = {
    pricing: {
      safemama: {
        free: "3 scans + 3 Expert Q&A",
        monthly: "₹399 ($4.99) - 50 scans + 25 Expert Q&A",
        yearly: "₹3,999 ($49.99) - Unlimited scans + 350 Expert Q&A"
      },
      whatToExpected: {
        free: "Basic pregnancy tracking",
        premium: "$4.99/month - Premium content + tools"
      }
    },
    features: [
      {
        feature: "AI Product Scanning",
        safemama: true,
        whatToExpected: false,
        description: "Scan any food, medicine, or product for pregnancy safety"
      },
      {
        feature: "Expert Q&A",
        safemama: true,
        whatToExpected: false,
        description: "Ask pregnancy questions to AI-powered expert system"
      },
      {
        feature: "Due Date Calculator",
        safemama: true,
        whatToExpected: true,
        description: "Calculate and track pregnancy due date"
      },
      {
        feature: "Weekly Pregnancy Tracking",
        safemama: true,
        whatToExpected: true,
        description: "Track baby development week by week"
      },
      {
        feature: "Food Safety Database",
        safemama: true,
        whatToExpected: false,
        description: "Comprehensive pregnancy food safety information"
      },
      {
        feature: "Community Forums",
        safemama: false,
        whatToExpected: true,
        description: "Connect with other expecting mothers"
      },
      {
        feature: "Pregnancy Articles",
        safemama: true,
        whatToExpected: true,
        description: "Educational content about pregnancy"
      },
      {
        feature: "Medication Safety Guide",
        safemama: true,
        whatToExpected: false,
        description: "Check medication safety during pregnancy"
      },
      {
        feature: "Kick Counter",
        safemama: false,
        whatToExpected: true,
        description: "Track baby's movements"
      },
      {
        feature: "Birth Plan Tools",
        safemama: false,
        whatToExpected: true,
        description: "Create and customize birth plans"
      },
      {
        feature: "Personalized AI Guides",
        safemama: true,
        whatToExpected: false,
        description: "AI-generated personalized pregnancy content"
      },
      {
        feature: "Hospital Bag Checklist",
        safemama: false,
        whatToExpected: true,
        description: "Comprehensive hospital bag preparation"
      }
    ],
    ratings: {
      safemama: {
        appStore: 4.8,
        googlePlay: 4.7,
        users: "50,000+"
      },
      whatToExpected: {
        appStore: 4.6,
        googlePlay: 4.5,
        users: "10M+"
      }
    }
  }

  const pros = {
    safemama: [
      "AI-powered product safety scanning",
      "Instant expert answers to pregnancy questions",
      "Comprehensive food and medication safety database",
      "Personalized AI-generated pregnancy guides",
      "Affordable pricing with generous free tier",
      "Focus on safety and evidence-based information"
    ],
    whatToExpected: [
      "Large, established community",
      "Comprehensive pregnancy tracking features",
      "Detailed birth planning tools",
      "Extensive content library",
      "Well-known brand with medical backing",
      "Regular app updates and improvements"
    ]
  }

  const cons = {
    safemama: [
      "Smaller community compared to established apps",
      "Limited social features",
      "Newer app with growing feature set",
      "No kick counter or contraction timer yet"
    ],
    whatToExpected: [
      "No AI scanning capabilities",
      "Limited personalized safety recommendations",
      "Higher cost for premium features",
      "Generic advice not tailored to individual needs"
    ]
  }

  const bestFor = {
    safemama: [
      "Mothers prioritizing food and product safety",
      "Users wanting instant AI-powered answers",
      "Those needing personalized safety guidance",
      "Budget-conscious expecting mothers"
    ],
    whatToExpected: [
      "Mothers wanting comprehensive pregnancy tracking",
      "Users seeking community support",
      "Those planning detailed birth experiences",
      "Mothers familiar with What to Expect brand"
    ]
  }

  return (
    <>
      <Helmet>
        <title>SafeMama vs What to Expect App 2025 | Complete Pregnancy App Comparison</title>
        <meta name="description" content="Compare SafeMama AI pregnancy scanner vs What to Expect pregnancy app. Features, pricing, pros & cons to help you choose the best pregnancy app." />
        <meta name="keywords" content="SafeMama vs What to Expect, pregnancy app comparison, best pregnancy apps, pregnancy safety scanner, What to Expect app review" />
        <link rel="canonical" href="https://safemama.co/compare/safemama-vs-what-to-expect/" />
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
            <Link to="/compare" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Compare
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
              SafeMama vs <span className="text-gradient">What to Expect</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Comprehensive comparison of SafeMama's AI-powered pregnancy safety scanner versus What to Expect's traditional pregnancy tracking app.
            </p>
          </motion.div>

          {/* App Overview Cards */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* SafeMama Card */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-secondary-500 p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <Shield className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">SafeMama</h2>
                    <p className="text-primary-100">AI Pregnancy Safety Scanner</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{comparisonData.ratings.safemama.appStore}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{comparisonData.ratings.safemama.users} users</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-primary-500 mr-2" />
                    AI-powered product scanning
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-primary-500 mr-2" />
                    Expert Q&A system
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-primary-500 mr-2" />
                    Food & medication safety database
                  </li>
                  <li className="flex items-center">
                    <Search className="w-4 h-4 text-primary-500 mr-2" />
                    Personalized AI guides
                  </li>
                </ul>
              </div>
            </Card>

            {/* What to Expect Card */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <Calendar className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">What to Expect</h2>
                    <p className="text-pink-100">Comprehensive Pregnancy Tracking</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{comparisonData.ratings.whatToExpected.appStore}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{comparisonData.ratings.whatToExpected.users} users</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 text-pink-500 mr-2" />
                    Weekly pregnancy tracking
                  </li>
                  <li className="flex items-center">
                    <Users className="w-4 h-4 text-pink-500 mr-2" />
                    Community forums
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-pink-500 mr-2" />
                    Kick counter & tools
                  </li>
                  <li className="flex items-center">
                    <Search className="w-4 h-4 text-pink-500 mr-2" />
                    Birth planning features
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Feature Comparison Table */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Feature Comparison</h2>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">SafeMama</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">What to Expect</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {comparisonData.features.map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{item.feature}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.safemama ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                        <td className="px-6 py-4 text-center">
                          {item.whatToExpected ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-400 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </motion.div>

          {/* Pricing Comparison */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pricing Comparison</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-2 border-primary-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 text-primary-500 mr-2" />
                    SafeMama Pricing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Free Tier</span>
                      <span className="text-sm text-gray-600">{comparisonData.pricing.safemama.free}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Monthly</span>
                      <span className="text-sm text-gray-600">{comparisonData.pricing.safemama.monthly}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Yearly</span>
                      <span className="text-sm text-gray-600">{comparisonData.pricing.safemama.yearly}</span>
                    </div>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 text-pink-500 mr-2" />
                    What to Expect Pricing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Free Tier</span>
                      <span className="text-sm text-gray-600">{comparisonData.pricing.whatToExpected.free}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Premium</span>
                      <span className="text-sm text-gray-600">{comparisonData.pricing.whatToExpected.premium}</span>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Pros and Cons */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pros & Cons</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* SafeMama Pros/Cons */}
              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">SafeMama Pros</h3>
                    <ul className="space-y-2">
                      {pros.safemama.map((pro, index) => (
                        <li key={index} className="flex items-start text-sm text-green-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-4">SafeMama Cons</h3>
                    <ul className="space-y-2">
                      {cons.safemama.map((con, index) => (
                        <li key={index} className="flex items-start text-sm text-red-700">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>

              {/* What to Expect Pros/Cons */}
              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">What to Expect Pros</h3>
                    <ul className="space-y-2">
                      {pros.whatToExpected.map((pro, index) => (
                        <li key={index} className="flex items-start text-sm text-green-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>

                <Card className="bg-red-50 border-red-200">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-red-800 mb-4">What to Expect Cons</h3>
                    <ul className="space-y-2">
                      {cons.whatToExpected.map((con, index) => (
                        <li key={index} className="flex items-start text-sm text-red-700">
                          <XCircle className="w-4 h-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </div>
            </div>
          </motion.div>

          {/* Best For */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Which App is Best For You?</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="bg-primary-50 border-primary-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-4">Choose SafeMama If You...</h3>
                  <ul className="space-y-3">
                    {bestFor.safemama.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-primary-700">
                        <Target className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>

              <Card className="bg-pink-50 border-pink-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-pink-800 mb-4">Choose What to Expect If You...</h3>
                  <ul className="space-y-3">
                    {bestFor.whatToExpected.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-pink-700">
                        <Target className="w-4 h-4 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Final Verdict */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">Our Verdict</h2>
                <p className="text-xl mb-6 max-w-3xl mx-auto">
                  SafeMama excels in AI-powered safety features and personalized guidance, making it ideal for safety-conscious mothers. 
                  What to Expect offers comprehensive tracking and community features for those wanting traditional pregnancy support.
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    variant="secondary" 
                    size="lg" 
                    href="https://dub.sh/safemama"
                    className="bg-white text-primary-600 hover:bg-gray-100"
                    icon={Smartphone}
                  >
                    Try SafeMama Free
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    href="/compare"
                    className="border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    More Comparisons
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SafemamaVsWhatToExpect
