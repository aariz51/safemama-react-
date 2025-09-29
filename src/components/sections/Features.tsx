import React from 'react'
import { motion } from 'framer-motion'
import { 
  Scan, 
  Brain, 
  Shield, 
  MessageCircle,
  BookOpen,
  Search,
  Clock,
  Heart,
  Users,
  Smartphone
} from 'lucide-react'
import Card from '../ui/Card'

const Features: React.FC = () => {
  const features = [
    {
      icon: Scan,
      title: 'AI-Powered Scanning',
      description: 'Scan any food, medicine, or product with your camera. Get instant AI-powered safety analysis tailored for pregnancy.',
      gradient: 'from-primary-500 to-secondary-500',
      image: '/images/mockups/safemama-scan-feature.png' // ✅ Correct scanning screen
    },
    {
      icon: Brain,
      title: 'Smart Safety Analysis',
      description: 'Advanced AI analyzes ingredients and provides clear safety recommendations with detailed explanations.',
      gradient: 'from-secondary-500 to-accent-500',
      image: '/images/mockups/safemama-analysis-screen.png' // ❌ CREATE THIS - Analysis/results screen
    },
    {
      icon: MessageCircle,
      title: 'Ask an Expert',
      description: 'Get personalized answers to your pregnancy questions from our AI-powered expert system.',
      gradient: 'from-accent-500 to-success-500',
      image: '/images/mockups/safemama-features-overview.png' // ✅ Correct expert screen
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Guides',
      description: 'Access detailed pregnancy guides, nutrition tips, and safety information curated by experts.',
      gradient: 'from-success-500 to-primary-500',
      image: '/images/mockups/safemama-guide-screen.png' // ❌ CREATE THIS - Guide/info screen
    },
    {
      icon: Search,
      title: 'Manual Search',
      description: 'Search for specific foods, medicines, or ingredients when scanning isn\'t possible.',
      gradient: 'from-primary-600 to-secondary-600',
      image: '/images/mockups/safemama-search-screen.png' // ❌ CREATE THIS - Search screen
    },
    {
      icon: Clock,
      title: 'Scan History',
      description: 'Keep track of all your scans with detailed history and bookmarking for easy reference.',
      gradient: 'from-secondary-600 to-accent-600',
      image: '/images/mockups/safemama-scan-history.png'
 // ❌ CREATE THIS - History screen
    }
  ]
  
  const benefits = [
    {
      icon: Shield,
      title: 'Peace of Mind',
      description: 'Make confident decisions about what\'s safe during pregnancy with AI-backed recommendations.'
    },
    {
      icon: Heart,
      title: 'Always Accessible',
      description: '24/7 access to pregnancy safety information right in your pocket, anytime you need it.'
    },
    {
      icon: Users,
      title: 'Doctor-Friendly',
      description: 'Share scan results and questions with your healthcare provider for informed discussions.'
    },
    {
      icon: Smartphone,
      title: 'Empowered Decisions',
      description: 'Take control of your pregnancy journey with instant access to safety information.'
    }
  ]

  // Custom App Store and Google Play components
  const AppStoreBadge = () => (
    <motion.a
      href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div className="bg-black text-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
        <svg className="w-8 h-8" viewBox="0 0 384 512" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
        </svg>
        <div>
          <div className="text-xs">Download on the</div>
          <div className="text-lg font-semibold -mt-1">App Store</div>
        </div>
      </div>
    </motion.a>
  )

  const GooglePlayBadge = () => (
    <motion.a
      href="https://play.google.com/store/apps/details?id=com.safemama.app"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div className="bg-black text-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
        <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
        </svg>
        <div>
          <div className="text-xs">Get it on</div>
          <div className="text-lg font-semibold -mt-1">Google Play</div>
        </div>
      </div>
    </motion.a>
  )
  
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Powerful Features
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything You Need for a
            <span className="text-gradient"> Safe Pregnancy</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SafeMama combines cutting-edge AI technology with expert medical knowledge 
            to give you instant, reliable pregnancy safety guidance.
          </p>
        </motion.div>
        
        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="pregnancy" className="h-full group cursor-pointer">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                
                {/* Feature Image - Proper mapping */}
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-contain bg-gray-50 group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.02 }}
                    onError={(e) => {
                      // Fallback to scanning image if specific image not found
                      e.currentTarget.src = '/images/mockups/safemama-scan-feature.png'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* Benefits Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
            Why Choose <span className="text-gradient">SafeMama?</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300 pregnancy-glow">
                  <benefit.icon className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* CTA Section with Custom App Store Badges */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-12 text-white pregnancy-shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Start Your Safe Pregnancy Journey?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of expecting mothers who trust SafeMama for their pregnancy safety decisions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <AppStoreBadge />
            <GooglePlayBadge />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
