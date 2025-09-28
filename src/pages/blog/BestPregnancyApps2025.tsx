import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Heart, Shield, CheckCircle, Star, Smartphone, Download } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const BestPregnancyApps2025: React.FC = () => {
  const apps = [
    {
      name: 'SafeMama',
      rating: 4.8,
      price: 'Freemium - $4.99/month',
      features: ['AI-powered food scanning', 'Instant safety analysis', 'Expert Q&A', 'Pregnancy guides'],
      pros: ['Most comprehensive food safety', 'AI-powered recommendations', 'Expert medical advice', '50k+ happy users'],
      cons: ['Premium features cost extra'],
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQwKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDAiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZWM0ODk5O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwZWE1ZTk7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+U008L3RleHQ+Cjwvc3ZnPgo='
    },
    {
      name: 'Ovia Pregnancy',
      rating: 4.6,
      price: 'Free with ads',
      features: ['Weekly pregnancy tracking', 'Daily articles', 'Symptom tracker', 'Baby size comparisons'],
      pros: ['Comprehensive tracking', 'Great educational content', 'Free to use'],
      cons: ['Limited personalization', 'Ad-supported'],
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQxKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDEiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojODA0NWU2O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNkOTQ2ZWY7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+TzwvdGV4dD4KPC9zdmc+Cg=='
    },
    {
      name: 'What to Expect',
      rating: 4.5,
      price: 'Free with premium options',
      features: ['Daily pregnancy tips', 'Community forums', 'Baby registry', 'Contraction timer'],
      pros: ['Trusted brand', 'Active community', 'Comprehensive tools'],
      cons: ['Interface feels dated', 'Some features behind paywall'],
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQyKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDIiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMTA0NGFiO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMzYjgyZjY7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+VzwvdGV4dD4KPC9zdmc+Cg=='
    },
    {
      name: 'BabyCenter',
      rating: 4.4,
      price: 'Free',
      features: ['Week-by-week guides', 'Baby names database', 'Photo timeline', 'Due date calculator'],
      pros: ['Completely free', 'Detailed weekly guides', 'Large community'],
      cons: ['Basic features only', 'Limited customization'],
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQzKSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDMiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojZjU5ZTBiO3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiNlYWI0MDg7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+QjwvdGV4dD4KPC9zdmc+Cg=='
    },
    {
      name: 'Pregnancy+',
      rating: 4.3,
      price: 'Free with premium $3.99/month',
      features: ['3D baby models', 'Size comparisons', 'Weight tracker', 'Kick counter'],
      pros: ['Beautiful 3D visuals', 'Intuitive design', 'Good tracking features'],
      cons: ['Limited free features', 'Less educational content'],
      image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiByeD0iMjAiIGZpbGw9InVybCgjZ3JhZGllbnQ0KSIvPgo8ZGVmcz4KPGxpbmVhckdyYWRpZW50IGlkPSJncmFkaWVudDQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPgo8c3RvcCBvZmZzZXQ9IjAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMDU5NjY5O3N0b3Atb3BhY2l0eToxIiAvPgo8c3RvcCBvZmZzZXQ9IjEwMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMwZGI3ZGU7c3RvcC1vcGFjaXR5OjEiIC8+CjwvbGluZWFyR3JhZGllbnQ+CjwvZGVmcz4KPHRleHQgeD0iNTAiIHk9IjU1IiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTYiIGZvbnQtd2VpZ2h0PSJib2xkIiBmaWxsPSJ3aGl0ZSIgdGV4dC1hbmNob3I9Im1pZGRsZSI+UCs8L3RleHQ+Cjwvc3ZnPgo='
    }
  ]

  const categories = [
    { name: 'Food Safety', winner: 'SafeMama', icon: Shield },
    { name: 'Tracking', winner: 'Ovia Pregnancy', icon: Calendar },
    { name: 'Community', winner: 'What to Expect', icon: Heart },
    { name: 'Education', winner: 'BabyCenter', icon: BookOpen },
    { name: 'Design', winner: 'Pregnancy+', icon: Star }
  ]

  return (
    <>
      <Helmet>
        <title>Best Pregnancy Apps 2025 | Complete Guide & Reviews - SafeMama</title>
        <meta name="description" content="Discover the best pregnancy apps of 2025. Compare features, prices, and reviews of top pregnancy tracking apps including SafeMama, Ovia, and What to Expect." />
        <meta name="keywords" content="best pregnancy apps 2025, pregnancy tracking apps, pregnancy app reviews, SafeMama vs competitors" />
        <link rel="canonical" href="https://safemama.co/blog/best-pregnancy-apps-2025/" />
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Blog
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Header */}
              <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-600 text-sm font-medium rounded-full">
                    App Reviews
                  </span>
                </div>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Best Pregnancy Apps 2025: Complete Guide & Reviews
                </h1>
                
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Compare the top pregnancy apps of 2025. Find the perfect app for tracking your pregnancy journey, 
                  from food safety to weekly development updates.
                </p>
                
                <div className="flex items-center justify-between flex-wrap gap-4 pb-8 border-b border-gray-200">
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      SafeMama Team
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      January 15, 2025
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      12 min read
                    </div>
                  </div>
                  
                  <Button variant="outline" size="sm" icon={Share2}>
                    Share Article
                  </Button>
                </div>
              </motion.div>

              {/* Category Winners */}
              <motion.div className="mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Category Winners</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {categories.map((category, index) => (
                    <Card key={index} className="p-6 text-center">
                      <category.icon className="w-8 h-8 text-primary-600 mx-auto mb-3" />
                      <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-primary-600 font-medium">{category.winner}</p>
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* App Comparisons */}
              <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Top 5 Pregnancy Apps Detailed Reviews</h2>
                <div className="space-y-8">
                  {apps.map((app, index) => (
                    <Card key={index} className="p-8">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* App Icon & Basic Info */}
                        <div className="text-center">
                          <img src={app.image} alt={app.name} className="w-20 h-20 mx-auto mb-4 rounded-2xl shadow-lg" />
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{app.name}</h3>
                          <div className="flex items-center justify-center mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span className="ml-1 font-semibold">{app.rating}</span>
                          </div>
                          <p className="text-sm text-gray-600">{app.price}</p>
                        </div>

                        {/* Features */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                          <ul className="space-y-1">
                            {app.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <CheckCircle className="w-3 h-3 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Pros */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-green-600">Pros</h4>
                          <ul className="space-y-1">
                            {app.pros.map((pro, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="w-2 h-2 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {pro}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Cons */}
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3 text-red-600">Cons</h4>
                          <ul className="space-y-1">
                            {app.cons.map((con, idx) => (
                              <li key={idx} className="text-sm text-gray-600 flex items-start">
                                <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                                {con}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {index === 0 && (
                        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-primary-800 font-semibold">🏆 Our Top Pick for Food Safety</p>
                              <p className="text-sm text-primary-600 mt-1">
                                SafeMama is the only app with AI-powered food scanning specifically for pregnancy safety
                              </p>
                            </div>
                            <Button size="sm" className="ml-4">
                              Try SafeMama
                            </Button>
                          </div>
                        </div>
                      )}
                    </Card>
                  ))}
                </div>
              </motion.div>

              {/* Detailed Comparison Table */}
              <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Feature Comparison</h2>
                <Card className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left p-4 font-semibold">Feature</th>
                        <th className="text-center p-4 font-semibold text-primary-600">SafeMama</th>
                        <th className="text-center p-4 font-semibold">Ovia</th>
                        <th className="text-center p-4 font-semibold">What to Expect</th>
                        <th className="text-center p-4 font-semibold">BabyCenter</th>
                        <th className="text-center p-4 font-semibold">Pregnancy+</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium">Food Safety Scanning</td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4">❌</td>
                        <td className="text-center p-4">❌</td>
                        <td className="text-center p-4">❌</td>
                        <td className="text-center p-4">❌</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium">AI-Powered Analysis</td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4">❌</td>
                        <td className="text-center p-4">❌</td>
                        <td className="text-center p-4">❌</td>
                        <td className="text-center p-4">❌</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium">Weekly Tracking</td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium">Community Forums</td>
                        <td className="text-center p-4">❌</td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4"><CheckCircle className="w-5 h-5 text-green-500 mx-auto" /></td>
                        <td className="text-center p-4">❌</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="p-4 font-medium">Price (Monthly)</td>
                        <td className="text-center p-4 text-primary-600 font-semibold">$4.99</td>
                        <td className="text-center p-4 text-green-600 font-semibold">Free</td>
                        <td className="text-center p-4 text-green-600 font-semibold">Free</td>
                        <td className="text-center p-4 text-green-600 font-semibold">Free</td>
                        <td className="text-center p-4">$3.99</td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
              </motion.div>

              {/* Final Recommendation */}
              <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
                <Card className="p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                  <h2 className="text-3xl font-bold mb-6">Our Final Recommendation</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4">🥇 Best Overall: SafeMama</h3>
                      <p className="opacity-90 mb-4">
                        For expecting mothers who prioritize food safety and want AI-powered personalized guidance, 
                        SafeMama is unmatched. The food scanning feature alone makes it worth the premium price.
                      </p>
                      <Button variant="secondary" className="bg-white text-primary-600 hover:bg-gray-50">
                        <Download className="w-4 h-4 mr-2" />
                        Download SafeMama
                      </Button>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-4">🥈 Best Free Option: Ovia Pregnancy</h3>
                      <p className="opacity-90 mb-4">
                        If you're looking for a completely free pregnancy app with comprehensive tracking features, 
                        Ovia Pregnancy offers excellent value without any cost.
                      </p>
                      <Button variant="outline" className="border-white text-white hover:bg-white hover:text-primary-600">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div className="sticky top-32" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                {/* Quick Compare */}
                <Card className="p-6 mb-8">
                  <h3 className="font-semibold text-gray-900 mb-4">Quick Compare</h3>
                  <div className="space-y-3">
                    {['Food Safety', 'Price', 'Features', 'User Rating'].map((criterion, index) => (
                      <div key={index} className="flex justify-between text-sm">
                        <span className="text-gray-600">{criterion}</span>
                        <span className="font-medium text-primary-600">
                          {index === 0 ? 'SafeMama' : index === 1 ? 'BabyCenter' : index === 2 ? 'Ovia' : 'SafeMama'}
                        </span>
                      </div>
                    ))}
                  </div>
                </Card>

                {/* App Promotion */}
                <Card className="p-6 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                  <h3 className="font-bold text-lg mb-3">Try SafeMama Free</h3>
                  <p className="text-sm opacity-90 mb-4">
                    Experience the most advanced pregnancy safety app. Get 3 free scans to see why 50,000+ mothers trust SafeMama.
                  </p>
                  <Button variant="secondary" className="w-full bg-white text-primary-600 hover:bg-gray-50">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Get Started
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BestPregnancyApps2025
