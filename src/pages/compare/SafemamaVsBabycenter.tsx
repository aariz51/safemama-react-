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
  Target
} from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const SafemamaVsBabycenter: React.FC = () => {
  const comparisonData = {
    pricing: {
      safemama: {
        free: "3 scans + 3 Expert Q&A",
        monthly: "₹399 ($4.99) - 50 scans + 25 Expert Q&A",
        yearly: "₹3,999 ($49.99) - Unlimited scans + 350 Expert Q&A"
      },
      babycenter: {
        free: "Free pregnancy tracking + basic features",
        premium: "BabyCenter+ $4.99/month - Premium content & tools"
      }
    },
    features: [
      {
        feature: "AI Product Scanning",
        safemama: true,
        babycenter: false,
        description: "Scan any food, medicine, or product for pregnancy safety"
      },
      {
        feature: "Expert Q&A System",
        safemama: true,
        babycenter: false,
        description: "AI-powered instant answers to pregnancy questions"
      },
      {
        feature: "Due Date Calculator",
        safemama: true,
        babycenter: true,
        description: "Calculate and track pregnancy due date"
      },
      {
        feature: "Weekly Pregnancy Updates",
        safemama: true,
        babycenter: true,
        description: "Track baby development week by week"
      },
      {
        feature: "Food Safety Database",
        safemama: true,
        babycenter: false,
        description: "Comprehensive pregnancy food safety information"
      },
      {
        feature: "Community Groups",
        safemama: false,
        babycenter: true,
        description: "Join birth month and topic-specific groups"
      },
      {
        feature: "Baby Names Tool",
        safemama: false,
        babycenter: true,
        description: "Browse and favorite baby names"
      },
      {
        feature: "Medication Safety Guide",
        safemama: true,
        babycenter: false,
        description: "Check medication safety during pregnancy"
      },
      {
        feature: "Ovulation Calculator",
        safemama: false,
        babycenter: true,
        description: "Track ovulation and fertility"
      },
      {
        feature: "Pregnancy Symptoms Checker",
        safemama: false,
        babycenter: true,
        description: "Understand common pregnancy symptoms"
      },
      {
        feature: "Personalized AI Guides",
        safemama: true,
        babycenter: false,
        description: "AI-generated personalized pregnancy content"
      },
      {
        feature: "Baby Development Videos",
        safemama: false,
        babycenter: true,
        description: "Visual content about fetal development"
      },
      {
        feature: "Registry Integration",
        safemama: false,
        babycenter: true,
        description: "Create and manage baby registries"
      }
    ],
    ratings: {
      safemama: {
        appStore: 4.8,
        googlePlay: 4.7,
        users: "50,000+"
      },
      babycenter: {
        appStore: 4.7,
        googlePlay: 4.6,
        users: "100M+"
      }
    }
  }

  const pros = {
    safemama: [
      "Revolutionary AI product scanning technology",
      "Instant expert answers to safety questions",
      "Comprehensive food and medication safety database",
      "Personalized AI-generated pregnancy guides",
      "Focus on evidence-based safety information",
      "Affordable pricing with meaningful free tier"
    ],
    babycenter: [
      "Massive, established community of mothers",
      "Comprehensive pregnancy and parenting content",
      "Wide range of tools and calculators",
      "Strong brand recognition and trust",
      "Regular updates and feature additions",
      "Integration with baby product ecosystem"
    ]
  }

  const cons = {
    safemama: [
      "Smaller community compared to established platforms",
      "Limited social and community features",
      "Newer app still building comprehensive feature set",
      "No baby names or registry tools"
    ],
    babycenter: [
      "No AI-powered safety scanning capabilities",
      "Generic advice not personalized to individual needs",
      "Can be overwhelming with too many features",
      "Limited focus on real-time safety analysis"
    ]
  }

  const bestFor = {
    safemama: [
      "Safety-conscious expecting mothers",
      "Users wanting AI-powered personalized guidance",
      "Those needing instant product safety analysis",
      "Mothers prioritizing evidence-based information"
    ],
    babycenter: [
      "First-time mothers wanting comprehensive guidance",
      "Users seeking large community support",
      "Those wanting all-in-one pregnancy platform",
      "Parents planning baby registries and names"
    ]
  }

  const uniqueFeatures = {
    safemama: [
      {
        feature: "AI Scanner",
        description: "Point your camera at any product for instant pregnancy safety analysis",
        icon: Zap
      },
      {
        feature: "Expert Q&A",
        description: "Get personalized answers to your pregnancy questions in seconds",
        icon: Heart
      },
      {
        feature: "Safety Database",
        description: "Comprehensive database of pregnancy-safe foods and medications",
        icon: Shield
      }
    ],
    babycenter: [
      {
        feature: "Birth Month Groups",
        description: "Connect with mothers due in the same month as you",
        icon: Users
      },
      {
        feature: "Baby Names Tool",
        description: "Browse thousands of baby names with meanings and popularity data",
        icon: Search
      },
      {
        feature: "Registry Builder",
        description: "Create baby registries integrated with major retailers",
        icon: Calendar
      }
    ]
  }

  return (
    <>
      <Helmet>
        <title>SafeMama vs BabyCenter 2025 | AI Safety Scanner vs Traditional Pregnancy App</title>
        <meta name="description" content="Compare SafeMama AI pregnancy scanner vs BabyCenter pregnancy app. Features, community, safety tools, and pricing comparison to help you choose." />
        <meta name="keywords" content="SafeMama vs BabyCenter, pregnancy app comparison, AI pregnancy scanner, BabyCenter app review, best pregnancy apps 2025" />
        <link rel="canonical" href="https://safemama.co/compare/safemama-vs-babycenter/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
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
              SafeMama vs <span className="text-gradient">BabyCenter</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              AI-powered safety scanner meets comprehensive pregnancy platform. Compare SafeMama's innovative technology with BabyCenter's established ecosystem.
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
                <h3 className="font-semibold mb-3">Unique Strengths</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <Zap className="w-4 h-4 text-primary-500 mr-2" />
                    Real-time AI safety analysis
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-primary-500 mr-2" />
                    Personalized expert guidance
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-4 h-4 text-primary-500 mr-2" />
                    Evidence-based safety database
                  </li>
                  <li className="flex items-center">
                    <Search className="w-4 h-4 text-primary-500 mr-2" />
                    AI-generated custom guides
                  </li>
                </ul>
              </div>
            </Card>

            {/* BabyCenter Card */}
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">BabyCenter</h2>
                    <p className="text-orange-100">Comprehensive Pregnancy Platform</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    <span className="font-semibold">{comparisonData.ratings.babycenter.appStore}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    <span>{comparisonData.ratings.babycenter.users} users</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-semibold mb-3">Unique Strengths</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <Users className="w-4 h-4 text-orange-500 mr-2" />
                    Massive community support
                  </li>
                  <li className="flex items-center">
                    <Calendar className="w-4 h-4 text-orange-500 mr-2" />
                    Comprehensive tracking tools
                  </li>
                  <li className="flex items-center">
                    <Search className="w-4 h-4 text-orange-500 mr-2" />
                    Baby names and registry tools
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-orange-500 mr-2" />
                    Expert-reviewed content library
                  </li>
                </ul>
              </div>
            </Card>
          </motion.div>

          {/* Unique Features Showcase */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">What Makes Each App Special</h2>
            <div className="grid lg:grid-cols-2 gap-8">
              {/* SafeMama Unique Features */}
              <Card className="bg-primary-50 border-primary-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-6">SafeMama's AI Innovation</h3>
                  <div className="space-y-4">
                    {uniqueFeatures.safemama.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center mr-3">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-primary-800">{feature.feature}</h4>
                          <p className="text-sm text-primary-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* BabyCenter Unique Features */}
              <Card className="bg-orange-50 border-orange-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-6">BabyCenter's Ecosystem</h3>
                  <div className="space-y-4">
                    {uniqueFeatures.babycenter.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-orange-800">{feature.feature}</h4>
                          <p className="text-sm text-orange-600 mt-1">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          {/* Feature Comparison Table */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Detailed Feature Comparison</h2>
            <Card className="overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Feature</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">SafeMama</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-900">BabyCenter</th>
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
                          {item.babycenter ? (
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
            transition={{ duration: 1.0 }}
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

              <Card className="border-2 border-orange-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <DollarSign className="w-6 h-6 text-orange-500 mr-2" />
                    BabyCenter Pricing
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b">
                      <span className="font-medium">Free Tier</span>
                      <span className="text-sm text-gray-600">{comparisonData.pricing.babycenter.free}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Premium</span>
                      <span className="text-sm text-gray-600">{comparisonData.pricing.babycenter.premium}</span>
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
            transition={{ duration: 1.1 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Pros & Cons Analysis</h2>
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

              {/* BabyCenter Pros/Cons */}
              <div className="space-y-6">
                <Card className="bg-green-50 border-green-200">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-800 mb-4">BabyCenter Pros</h3>
                    <ul className="space-y-2">
                      {pros.babycenter.map((pro, index) => (
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
                    <h3 className="text-xl font-bold text-red-800 mb-4">BabyCenter Cons</h3>
                    <ul className="space-y-2">
                      {cons.babycenter.map((con, index) => (
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
            transition={{ duration: 1.2 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Which App Should You Choose?</h2>
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

              <Card className="bg-orange-50 border-orange-200">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-orange-800 mb-4">Choose BabyCenter If You...</h3>
                  <ul className="space-y-3">
                    {bestFor.babycenter.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-orange-700">
                        <Target className="w-4 h-4 text-orange-500 mr-2 mt-0.5 flex-shrink-0" />
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
            transition={{ duration: 1.3 }}
          >
            <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="p-8">
                <h2 className="text-3xl font-bold mb-4">The Bottom Line</h2>
                <p className="text-xl mb-6 max-w-3xl mx-auto">
                  SafeMama revolutionizes pregnancy safety with AI technology, perfect for modern mothers who want instant, personalized guidance. 
                  BabyCenter offers comprehensive support with its vast community and established ecosystem for traditional pregnancy tracking.
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

export default SafemamaVsBabycenter
