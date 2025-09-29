import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Shield, 
  Search, 
  ChevronRight, 
  Clock, 
  User,
  BookOpen,
  Heart,
  Baby,
  Utensils,
  Pill,
  Home,
  Dumbbell,
  Plane,
  Briefcase,
  Filter,
  Download,
  Star,
  CheckCircle
} from 'lucide-react'

// Safety guides data
const safetyGuides = [
  {
    id: 'food-safety-guide',
    title: 'Complete Food Safety Guide During Pregnancy',
    description: 'Comprehensive guide to safe eating throughout your pregnancy journey',
    icon: Utensils,
    category: 'Nutrition',
    difficulty: 'Beginner',
    readTime: '12 min',
    featured: true,
    color: 'from-green-500 to-emerald-500',
    topics: ['Safe Foods', 'Foods to Avoid', 'Food Preparation', 'Restaurant Safety'],
    href: '/safety-guides/food-safety'
  },
  {
    id: 'medication-safety-guide',
    title: 'Medication Safety During Pregnancy',
    description: 'Essential guide to safe medications and alternatives during pregnancy',
    icon: Pill,
    category: 'Health',
    difficulty: 'Intermediate',
    readTime: '10 min',
    featured: true,
    color: 'from-blue-500 to-cyan-500',
    topics: ['Safe Medications', 'Alternatives', 'Consulting Healthcare', 'Emergency Situations'],
    href: '/safety-guides/medication-safety'
  },
  {
    id: 'exercise-safety-guide',
    title: 'Safe Exercise During Pregnancy',
    description: 'Guidelines for staying active and healthy throughout pregnancy',
    icon: Dumbbell,
    category: 'Fitness',
    difficulty: 'Beginner',
    readTime: '8 min',
    featured: true,
    color: 'from-pink-500 to-rose-500',
    topics: ['Safe Exercises', 'Activities to Avoid', 'Trimester Guidelines', 'Warning Signs'],
    href: '/safety-guides/exercise-safety'
  },
  {
    id: 'travel-safety-guide',
    title: 'Travel Safety for Expecting Mothers',
    description: 'Essential tips for safe travel during pregnancy',
    icon: Plane,
    category: 'Lifestyle',
    difficulty: 'Intermediate',
    readTime: '15 min',
    featured: false,
    color: 'from-indigo-500 to-purple-500',
    topics: ['Air Travel', 'Car Travel', 'International Travel', 'Health Precautions'],
    href: '/safety-guides/travel-safety'
  },
  {
    id: 'workplace-safety-guide',
    title: 'Workplace Safety During Pregnancy',
    description: 'Maintaining safety and health in your work environment',
    icon: Briefcase,
    category: 'Workplace',
    difficulty: 'Intermediate',
    readTime: '11 min',
    featured: false,
    color: 'from-orange-500 to-red-500',
    topics: ['Ergonomics', 'Chemical Safety', 'Rights & Accommodations', 'Stress Management'],
    href: '/safety-guides/workplace-safety'
  },
  {
    id: 'home-safety-guide',
    title: 'Creating a Safe Home Environment',
    description: 'Preparing your home for pregnancy and beyond',
    icon: Home,
    category: 'Home',
    difficulty: 'Beginner',
    readTime: '9 min',
    featured: false,
    color: 'from-teal-500 to-green-500',
    topics: ['Chemical Safety', 'Childproofing', 'Air Quality', 'Safety Equipment'],
    href: '/safety-guides/home-safety'
  },
  {
    id: 'first-trimester-guide',
    title: 'First Trimester Safety Essentials',
    description: 'Critical safety information for the first 12 weeks',
    icon: Baby,
    category: 'Trimester',
    difficulty: 'Beginner',
    readTime: '14 min',
    featured: false,
    color: 'from-purple-500 to-indigo-500',
    topics: ['Early Development', 'Critical Period Safety', 'Warning Signs', 'Prenatal Care'],
    href: '/safety-guides/first-trimester'
  },
  {
    id: 'mental-health-guide',
    title: 'Mental Health & Emotional Wellness',
    description: 'Supporting your mental health during pregnancy',
    icon: Heart,
    category: 'Mental Health',
    difficulty: 'Intermediate',
    readTime: '13 min',
    featured: false,
    color: 'from-rose-500 to-pink-500',
    topics: ['Emotional Changes', 'Support Systems', 'Professional Help', 'Self-Care'],
    href: '/safety-guides/mental-health'
  }
]

const categories = ['All', 'Nutrition', 'Health', 'Fitness', 'Lifestyle', 'Workplace', 'Home', 'Trimester', 'Mental Health']
const difficulties = ['All', 'Beginner', 'Intermediate', 'Advanced']

const SafetyGuides: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedDifficulty, setSelectedDifficulty] = useState('All')

  const filteredGuides = safetyGuides.filter(guide => {
    const matchesSearch = guide.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         guide.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesCategory = selectedCategory === 'All' || guide.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === 'All' || guide.difficulty === selectedDifficulty
    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const featuredGuides = filteredGuides.filter(guide => guide.featured)
  const regularGuides = filteredGuides.filter(guide => !guide.featured)

  return (
    <>
      <Helmet>
        <title>Pregnancy Safety Guides | SafeMama - Expert Safety Information</title>
        <meta name="description" content="Comprehensive pregnancy safety guides covering food safety, medication guidelines, exercise tips, and more. Expert advice for expecting mothers." />
        <meta name="keywords" content="pregnancy safety guides, pregnancy safety tips, food safety pregnancy, medication safety, exercise pregnancy, SafeMama guides" />
        
        <meta property="og:title" content="Pregnancy Safety Guides | SafeMama - Expert Safety Information" />
        <meta property="og:description" content="Comprehensive pregnancy safety guides covering food safety, medication guidelines, exercise tips, and more." />
        <meta property="og:image" content={`${window.location.origin}/images/safety-guides-og.jpg`} />
        <meta property="og:url" content={`${window.location.origin}/safety-guides`} />
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
              <div className="flex items-center justify-center mb-6">
                <Shield className="w-16 h-16 text-primary-500 mr-4" />
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
                  Safety
                  <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent"> Guides</span>
                </h1>
              </div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Comprehensive safety guides to help you navigate pregnancy with confidence. 
                Expert-reviewed information covering every aspect of pregnancy safety.
              </p>
            </motion.div>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search safety guides..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                {/* Category Filter */}
                <div className="flex items-center space-x-2">
                  <Filter className="text-gray-400 w-5 h-5" />
                  <span className="text-sm font-medium text-gray-700">Category:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
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

                {/* Difficulty Filter */}
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-700">Level:</span>
                  <div className="flex gap-2">
                    {difficulties.map((difficulty) => (
                      <button
                        key={difficulty}
                        onClick={() => setSelectedDifficulty(difficulty)}
                        className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                          selectedDifficulty === difficulty
                            ? 'bg-secondary-500 text-white'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {difficulty}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Guides */}
          {featuredGuides.length > 0 && (
            <div className="mb-12">
              <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                <Star className="w-6 h-6 mr-2 text-yellow-500" />
                Featured Safety Guides
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredGuides.map((guide, index) => {
                  const IconComponent = guide.icon
                  return (
                    <motion.div
                      key={guide.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="group"
                    >
                      <Link to={guide.href} className="block">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                          {/* Header */}
                          <div className={`h-32 bg-gradient-to-r ${guide.color} flex items-center justify-center relative`}>
                            <IconComponent className="w-12 h-12 text-white" />
                            <div className="absolute top-4 right-4">
                              <Star className="w-5 h-5 text-yellow-300 fill-current" />
                            </div>
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-3 py-1 bg-primary-100 text-primary-600 text-xs font-medium rounded-full">
                                {guide.category}
                              </span>
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                {guide.difficulty}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                              {guide.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4">
                              {guide.description}
                            </p>

                            {/* Topics */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {guide.topics.slice(0, 3).map((topic, topicIndex) => (
                                  <span
                                    key={topicIndex}
                                    className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded"
                                  >
                                    {topic}
                                  </span>
                                ))}
                                {guide.topics.length > 3 && (
                                  <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded">
                                    +{guide.topics.length - 3} more
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="flex items-center text-xs text-gray-500">
                                <Clock className="w-3 h-3 mr-1" />
                                {guide.readTime}
                              </span>
                              <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          )}

          {/* All Safety Guides */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Safety Guides</h2>
            {regularGuides.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {regularGuides.map((guide, index) => {
                  const IconComponent = guide.icon
                  return (
                    <motion.div
                      key={guide.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: (featuredGuides.length + index) * 0.1 }}
                      className="group"
                    >
                      <Link to={guide.href} className="block">
                        <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
                          {/* Header */}
                          <div className={`h-24 bg-gradient-to-r ${guide.color} flex items-center justify-center`}>
                            <IconComponent className="w-8 h-8 text-white" />
                          </div>
                          
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-full">
                                {guide.category}
                              </span>
                              <span className="px-2 py-1 bg-gray-50 text-gray-500 text-xs rounded-full">
                                {guide.difficulty}
                              </span>
                            </div>
                            
                            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                              {guide.title}
                            </h3>
                            
                            <p className="text-gray-600 text-sm mb-4">
                              {guide.description}
                            </p>

                            {/* Topics */}
                            <div className="mb-4">
                              <div className="flex flex-wrap gap-1">
                                {guide.topics.slice(0, 2).map((topic, topicIndex) => (
                                  <span
                                    key={topicIndex}
                                    className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded"
                                  >
                                    {topic}
                                  </span>
                                ))}
                                {guide.topics.length > 2 && (
                                  <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded">
                                    +{guide.topics.length - 2} more
                                  </span>
                                )}
                              </div>
                            </div>
                            
                            <div className="flex items-center justify-between">
                              <span className="flex items-center text-xs text-gray-500">
                                <Clock className="w-3 h-3 mr-1" />
                                {guide.readTime}
                              </span>
                              <ChevronRight className="w-4 h-4 text-primary-500 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>
            ) : filteredGuides.length === 0 ? (
              <div className="text-center py-12">
                <Shield className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No guides found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
              </div>
            ) : null}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mt-16 mb-8">
            <h3 className="text-2xl font-bold mb-4">Get Personalized Safety Recommendations</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Download SafeMama app for instant safety checks on food, medications, and products. 
              Get AI-powered recommendations tailored to your pregnancy stage.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://dub.sh/safemama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <Download className="w-5 h-5 mr-2" />
                Download SafeMama App
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SafetyGuides
