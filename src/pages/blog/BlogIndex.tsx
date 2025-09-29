import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Search, 
  Calendar, 
  Clock, 
  ChevronRight, 
  BookOpen, 
  Heart, 
  Shield,
  Baby,
  Utensils,
  Pill,
  Smartphone,
  Star,
  Filter,
  Dumbbell,
  Users
} from 'lucide-react'

// Complete blog posts data with all 10 posts
const blogPosts = [
  {
    id: 'first-trimester-food-safety',
    title: 'First Trimester Food Safety: Essential Guide for Early Pregnancy',
    excerpt: 'Navigate the critical first 12 weeks of pregnancy with confidence. Learn which foods are safe, what to avoid, and essential nutrition tips for early pregnancy.',
    author: 'Dr. Sarah Johnson',
    date: 'September 29, 2025',
    readTime: '8 min read',
    category: 'Nutrition',
    featured: true,
    tags: ['first-trimester', 'food-safety', 'nutrition'],
    href: '/blog/first-trimester-food-safety',
    icon: Utensils,
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'foods-to-avoid-during-pregnancy',
    title: 'Foods to Avoid During Pregnancy: Complete Safety Guide',
    excerpt: 'Comprehensive guide to foods that should be avoided during pregnancy to keep you and your baby safe.',
    author: 'Dr. Michael Chen',
    date: 'September 28, 2025',
    readTime: '6 min read',
    category: 'Safety',
    featured: true,
    tags: ['food-safety', 'pregnancy-diet', 'safety'],
    href: '/blog/foods-to-avoid-during-pregnancy',
    icon: Shield,
    color: 'from-red-500 to-pink-500'
  },
  {
    id: 'pregnancy-nutrition-guide',
    title: 'Complete Pregnancy Nutrition Guide: What to Eat for a Healthy Baby',
    excerpt: 'Essential nutrients needed throughout your pregnancy journey for optimal baby development and maternal health.',
    author: 'Dr. Emily Rodriguez',
    date: 'September 27, 2025',
    readTime: '10 min read',
    category: 'Nutrition',
    featured: true,
    tags: ['nutrition', 'prenatal-vitamins', 'healthy-eating'],
    href: '/blog/pregnancy-nutrition-guide',
    icon: Heart,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'safe-medications-pregnancy',
    title: 'Safe Medications During Pregnancy: What You Can and Cannot Take',
    excerpt: 'Understanding which medications are safe during pregnancy and alternatives for common health issues.',
    author: 'Dr. Jennifer Park',
    date: 'September 26, 2025',
    readTime: '7 min read',
    category: 'Health',
    featured: false,
    tags: ['medications', 'pregnancy-safety', 'health'],
    href: '/blog/safe-medications-pregnancy',
    icon: Pill,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'pregnancy-apps-comparison',
    title: 'Best Pregnancy Apps 2025: Complete Comparison Guide',
    excerpt: 'Compare the top pregnancy apps including SafeMama, BabyCenter, What to Expect, and more.',
    author: 'Tech Review Team',
    date: 'September 25, 2025',
    readTime: '12 min read',
    category: 'Technology',
    featured: false,
    tags: ['apps', 'technology', 'comparison'],
    href: '/blog/pregnancy-apps-comparison',
    icon: Smartphone,
    color: 'from-teal-500 to-green-500'
  },
  {
    id: 'pregnancy-diet-guide',
    title: 'Pregnancy Diet Plan: Trimester-by-Trimester Nutrition Guide',
    excerpt: 'Detailed diet plans and meal ideas for each trimester of pregnancy to support healthy development.',
    author: 'Dr. Lisa Thompson',
    date: 'September 24, 2025',
    readTime: '9 min read',
    category: 'Nutrition',
    featured: false,
    tags: ['diet-plan', 'meal-planning', 'trimester-guide'],
    href: '/blog/pregnancy-diet-guide',
    icon: BookOpen,
    color: 'from-orange-500 to-red-500'
  },
  {
    id: 'pregnancy-exercise-guide',
    title: 'Safe Pregnancy Exercises: Stay Fit and Healthy During Pregnancy',
    excerpt: 'Exercise recommendations and safety guidelines for staying active throughout your pregnancy.',
    author: 'Dr. Amanda Foster',
    date: 'September 23, 2025',
    readTime: '8 min read',
    category: 'Fitness',
    featured: false,
    tags: ['exercise', 'fitness', 'prenatal-workout'],
    href: '/blog/pregnancy-exercise-guide',
    icon: Dumbbell,
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'pregnancy-food-safety-scanner',
    title: 'How Food Safety Scanners Help During Pregnancy',
    excerpt: 'Learn how modern technology like SafeMama helps expecting mothers make informed food choices.',
    author: 'SafeMama Team',
    date: 'September 22, 2025',
    readTime: '5 min read',
    category: 'Technology',
    featured: false,
    tags: ['food-scanner', 'technology', 'pregnancy-apps'],
    href: '/blog/pregnancy-food-safety-scanner',
    icon: Smartphone,
    color: 'from-indigo-500 to-purple-500'
  },
  {
    id: 'best-pregnancy-apps-2025',
    title: 'Top 10 Pregnancy Apps Every Expecting Mother Should Have',
    excerpt: 'Discover the most helpful pregnancy apps for tracking, health, nutrition, and baby development.',
    author: 'App Review Team',
    date: 'September 21, 2025',
    readTime: '11 min read',
    category: 'Technology',
    featured: false,
    tags: ['pregnancy-apps', 'mobile-apps', 'pregnancy-tracking'],
    href: '/blog/best-pregnancy-apps-2025',
    icon: Star,
    color: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'pregnancy-apps-comparison',
    title: 'SafeMama vs Other Pregnancy Apps: Detailed Comparison',
    excerpt: 'In-depth comparison of SafeMama with popular pregnancy apps like BabyCenter, Ovia, and What to Expect.',
    author: 'SafeMama Team',
    date: 'September 20, 2025',
    readTime: '13 min read',
    category: 'Technology',
    featured: false,
    tags: ['app-comparison', 'safemama', 'pregnancy-apps'],
    href: '/blog/pregnancy-apps-comparison',
    icon: Users,
    color: 'from-cyan-500 to-blue-500'
  }
]

const categories = ['All', 'Nutrition', 'Safety', 'Health', 'Technology', 'Fitness']

const BlogIndex: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPosts = filteredPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  return (
    <>
      <Helmet>
        <title>Pregnancy Blog | SafeMama - Expert Guidance for Expecting Mothers</title>
        <meta name="description" content="Expert pregnancy advice, nutrition guides, food safety tips, and health information for expecting mothers. Stay informed with SafeMama's comprehensive pregnancy blog." />
        <meta name="keywords" content="pregnancy blog, pregnancy nutrition, food safety, pregnancy health, expecting mothers, prenatal care" />
        
        <meta property="og:title" content="Pregnancy Blog | SafeMama - Expert Guidance for Expecting Mothers" />
        <meta property="og:description" content="Expert pregnancy advice, nutrition guides, food safety tips, and health information for expecting mothers." />
        <meta property="og:image" content={`${window.location.origin}/images/blog/pregnancy-blog-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/blog`} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Pregnancy
                <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Blog</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Expert guidance, nutrition tips, and safety advice for expecting mothers. 
                Stay informed with evidence-based articles from healthcare professionals.
              </p>
            </motion.div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
              {/* Search Bar */}
              <div className="relative flex-1 lg:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="text-gray-400 w-5 h-5" />
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedCategory === category
                          ? 'bg-primary-500 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Articles */}
          {featuredPosts.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredPosts.map((post, index) => {
                  const IconComponent = post.icon
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link to={post.href} className="block">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                          {/* Header Gradient */}
                          <div className={`h-32 bg-gradient-to-r ${post.color} flex items-center justify-center`}>
                            <IconComponent className="w-12 h-12 text-white" />
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                                {post.category}
                              </span>
                              <span className="flex items-center text-xs text-gray-500">
                                <Star className="w-3 h-3 mr-1 fill-current text-yellow-400" />
                                Featured
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center space-x-4">
                                <span className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {post.date}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {post.readTime}
                                </span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  )
                })}
              </div>
            </div>
          )}

          {/* All Articles */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Articles</h2>
            {regularPosts.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularPosts.map((post, index) => {
                  const IconComponent = post.icon
                  return (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (featuredPosts.length + index) * 0.1 }}
                      className="group"
                    >
                      <Link to={post.href} className="block">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                          {/* Header Gradient */}
                          <div className={`h-24 bg-gradient-to-r ${post.color} flex items-center justify-center`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                {post.category}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                              {post.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                              {post.excerpt}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-gray-500">
                              <div className="flex items-center space-x-4">
                                <span className="flex items-center">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {post.date}
                                </span>
                                <span className="flex items-center">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {post.readTime}
                                </span>
                              </div>
                              <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.article>
                  )
                })}
              </div>
            ) : (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            )}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mt-16 mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated with SafeMama</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Get the latest pregnancy tips, nutrition advice, and safety updates delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="w-full sm:w-auto bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogIndex
