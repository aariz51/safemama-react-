import React from 'react'
import { Helmet } from 'react-helmet-async'
import Hero from '../components/sections/Hero'
import Features from '../components/sections/Features'
import HowItWorks from '../components/sections/HowItWorks'
import Statistics from '../components/sections/Statistics'
import Testimonials from '../components/sections/Testimonials'
import FAQ from '../components/sections/FAQ'
import ToolsSection from '../components/sections/ToolsSection'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  BookOpen, 
  ChevronRight, 
  Clock, 
  Calendar,
  Scale,
  Users,
  Star,
  Shield,
  Heart,
  Smartphone,
  Utensils
} from 'lucide-react'

const Home: React.FC = () => {
  // Featured blog posts
  const featuredBlogs = [
    {
      title: 'First Trimester Food Safety: Essential Guide',
      excerpt: 'Navigate the critical first 12 weeks with confidence',
      href: '/blog/first-trimester-food-safety',
      readTime: '8 min read',
      date: 'Sep 29, 2025',
      category: 'Nutrition',
      icon: Utensils,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Foods to Avoid During Pregnancy',
      excerpt: 'Complete safety guide for expecting mothers',
      href: '/blog/foods-to-avoid-during-pregnancy',
      readTime: '6 min read',
      date: 'Sep 28, 2025',
      category: 'Safety',
      icon: Shield,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Complete Pregnancy Nutrition Guide',
      excerpt: 'Essential nutrients for healthy baby development',
      href: '/blog/pregnancy-nutrition-guide',
      readTime: '10 min read',
      date: 'Sep 27, 2025',
      category: 'Nutrition',
      icon: Heart,
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  // Featured comparison apps
  const featuredComparisons = [
    {
      title: 'SafeMama vs BabyCenter',
      description: 'Compare features, accuracy, and user experience',
      href: '/compare/safemama-vs-babycenter',
      apps: ['SafeMama', 'BabyCenter'],
      winner: 'SafeMama',
      categories: 4
    },
    {
      title: 'SafeMama vs What to Expect',
      description: 'Detailed comparison of pregnancy tracking features',
      href: '/compare/safemama-vs-what-to-expect',
      apps: ['SafeMama', 'What to Expect'],
      winner: 'SafeMama',
      categories: 5
    },
    {
      title: 'SafeMama vs Pregnancy+',
      description: 'Which app offers better food safety guidance?',
      href: '/compare/safemama-vs-pregnancy-plus',
      apps: ['SafeMama', 'Pregnancy+'],
      winner: 'SafeMama',
      categories: 6
    }
  ]

  return (
    <>
      <Helmet>
        <title>SafeMama - AI-Powered Pregnancy Safety Companion | Food, Medicine & Product Safety</title>
        <meta name="description" content="Instantly check if food, medicine, and products are safe during pregnancy. Get personalized AI-powered recommendations trusted by 50,000+ expecting mothers worldwide." />
        <meta name="keywords" content="pregnancy app, food safety pregnancy, pregnancy scanner, safe foods pregnancy, pregnancy nutrition, SafeMama" />
        
        <meta property="og:title" content="SafeMama - AI-Powered Pregnancy Safety Companion" />
        <meta property="og:description" content="Instantly check if food, medicine, and products are safe during pregnancy. Trusted by 50,000+ expecting mothers." />
        <meta property="og:image" content={`${window.location.origin}/images/safemama-og-image.jpg`} />
        <meta property="og:url" content={window.location.origin} />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SafeMama - AI-Powered Pregnancy Safety Companion" />
        <meta name="twitter:description" content="Instantly check if food, medicine, and products are safe during pregnancy." />
        <meta name="twitter:image" content={`${window.location.origin}/images/safemama-twitter-card.jpg`} />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero />
        
        {/* Features Section */}
        <Features />
        
        {/* Tools Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Comprehensive 
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Pregnancy Tools</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Access a complete suite of pregnancy tools and calculators designed to support your journey from conception to birth.
                </p>
              </motion.div>
            </div>
            
            <ToolsSection />
            
            <div className="text-center mt-12">
              <Link
                to="/tools"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Explore All Tools
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <HowItWorks />
        
        {/* Blog Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Expert 
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Pregnancy Guidance</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Stay informed with evidence-based articles, nutrition guides, and safety tips from healthcare professionals.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredBlogs.map((blog, index) => {
                const IconComponent = blog.icon
                return (
                  <motion.article
                    key={blog.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Link to={blog.href} className="block">
                      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                        {/* Header */}
                        <div className={`h-32 bg-gradient-to-r ${blog.color} flex items-center justify-center`}>
                          <IconComponent className="w-12 h-12 text-white" />
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-3">
                            <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                              {blog.category}
                            </span>
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock className="w-3 h-3 mr-1" />
                              {blog.readTime}
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                            {blog.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-4">
                            {blog.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="flex items-center text-xs text-gray-500">
                              <Calendar className="w-3 h-3 mr-1" />
                              {blog.date}
                            </span>
                            <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/blog"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Read All Articles
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <Statistics />
        
        {/* Compare Apps Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                  Compare 
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Pregnancy Apps</span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  See how SafeMama compares to other popular pregnancy apps in terms of features, accuracy, and user satisfaction.
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredComparisons.map((comparison, index) => (
                <motion.div
                  key={comparison.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Link to={comparison.href} className="block">
                    <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-2">
                      <div className="flex items-center justify-between mb-4">
                        <Scale className="w-8 h-8 text-primary-500" />
                        <span className="px-3 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                          Winner: {comparison.winner}
                        </span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                        {comparison.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {comparison.description}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center text-xs text-gray-500">
                          <Users className="w-3 h-3 mr-1" />
                          {comparison.categories} Categories
                        </div>
                        <div className="flex -space-x-1">
                          {comparison.apps.map((app, appIndex) => (
                            <div
                              key={app}
                              className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                appIndex === 0 
                                  ? 'bg-primary-500 text-white' 
                                  : 'bg-gray-300 text-gray-600'
                              }`}
                            >
                              {app.charAt(0)}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-primary-600 font-medium text-sm">View Comparison</span>
                        <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/compare"
                className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <Scale className="mr-2 w-5 h-5" />
                Compare All Apps
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <Testimonials />
        
        {/* FAQ */}
        <FAQ />
      </main>
    </>
  )
}

export default Home
