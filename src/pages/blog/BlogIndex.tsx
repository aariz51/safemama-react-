import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, Heart, Shield } from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'
import { blogPosts, getFeaturedBlogPosts } from '../../data/blogPosts'

const BlogIndex: React.FC = () => {
  const featuredPosts = getFeaturedBlogPosts(3)
  const categories = [
    { name: 'Nutrition', icon: Heart, count: 6, color: 'bg-red-500' },
    { name: 'Food Safety', icon: Shield, count: 4, color: 'bg-green-500' },
    { name: 'Health & Wellness', icon: Heart, count: 5, color: 'bg-blue-500' },
    { name: 'Pregnancy Tips', icon: BookOpen, count: 8, color: 'bg-purple-500' }
  ]

  return (
    <>
      <Helmet>
        <title>Pregnancy Blog | SafeMama - Expert Advice for Expecting Mothers</title>
        <meta 
          name="description" 
          content="Expert pregnancy advice, food safety tips, and nutrition guidance for expecting mothers. Trusted information from healthcare professionals and pregnancy experts." 
        />
        <meta 
          name="keywords" 
          content="pregnancy blog, pregnancy advice, pregnancy nutrition, food safety pregnancy, pregnancy tips, expecting mothers" 
        />
        <link rel="canonical" href="https://safemama.co/blog/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              SafeMama <span className="text-gradient">Pregnancy Blog</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert advice, evidence-based information, and practical tips for your pregnancy journey. 
              Everything you need to make informed decisions for you and your baby.
            </p>
          </motion.div>

          {/* Categories */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Browse by Category</h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="p-6 text-center cursor-pointer group hover:shadow-xl">
                    <div className={`inline-flex items-center justify-center w-16 h-16 ${category.color} rounded-full mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-600 text-sm">{category.count} articles</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Featured Posts */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">Featured Articles</h2>
              <div className="hidden sm:flex text-sm text-gray-500">
                Latest expert-reviewed content
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                >
                  <Card className="overflow-hidden group cursor-pointer h-full">
                    <Link to={`/blog/${post.slug}`}>
                      <div className="relative overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="px-3 py-1 bg-white/90 text-primary-600 text-xs font-semibold rounded-full">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                          {post.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                          <div className="flex items-center">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(post.publishedAt).toLocaleDateString()}
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {post.readTime} min read
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            By {post.author}
                          </div>
                          <ArrowRight className="w-4 h-4 text-primary-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Posts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold text-gray-900">All Articles</h2>
              <div className="text-sm text-gray-500">
                {blogPosts.length} total articles
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <Card className="overflow-hidden group cursor-pointer">
                    <Link to={`/blog/${post.slug}`}>
                      <div className="flex">
                        <div className="flex-shrink-0">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-32 h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        
                        <div className="flex-1 p-6">
                          <div className="flex items-center mb-2">
                            <span className="px-2 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded">
                              {post.category}
                            </span>
                            <div className="ml-auto text-xs text-gray-500">
                              {post.readTime} min read
                            </div>
                          </div>
                          
                          <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>By {post.author}</span>
                            <div className="flex items-center">
                              <Calendar className="w-3 h-3 mr-1" />
                              {new Date(post.publishedAt).toLocaleDateString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-12 text-center bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Get the latest pregnancy tips, safety updates, and expert advice delivered to your inbox.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center max-w-md mx-auto gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
                />
                <Button variant="secondary" className="bg-white text-primary-600 hover:bg-gray-50">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-sm opacity-80 mt-4">
                Join 10,000+ expecting mothers getting weekly updates
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default BlogIndex
