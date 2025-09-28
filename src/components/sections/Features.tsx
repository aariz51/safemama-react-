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
      gradient: 'from-blue-500 to-purple-600',
      image: '/images/css/images/app-screenshots/screen_scan-view.png'
    },
    {
      icon: Brain,
      title: 'Smart Safety Analysis',
      description: 'Advanced AI analyzes ingredients and provides clear safety recommendations with detailed explanations.',
      gradient: 'from-purple-500 to-pink-600',
      image: '/images/css/images/app-screenshots/screen_results-safe.png'
    },
    {
      icon: MessageCircle,
      title: 'Ask an Expert',
      description: 'Get personalized answers to your pregnancy questions from our AI-powered expert system.',
      gradient: 'from-pink-500 to-red-600',
      image: '/images/css/images/app-screenshots/screen_guide.png'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Guides',
      description: 'Access detailed pregnancy guides, nutrition tips, and safety information curated by experts.',
      gradient: 'from-green-500 to-teal-600',
      image: '/images/css/images/app-screenshots/screen_dashboard.png'
    },
    {
      icon: Search,
      title: 'Manual Search',
      description: 'Search for specific foods, medicines, or ingredients when scanning isn\'t possible.',
      gradient: 'from-yellow-500 to-orange-600',
      image: '/images/css/images/app-screenshots/screen_history.png'
    },
    {
      icon: Clock,
      title: 'Scan History',
      description: 'Keep track of all your scans with detailed history and bookmarking for easy reference.',
      gradient: 'from-indigo-500 to-blue-600',
      image: '/images/css/images/app-screenshots/screen_history.png'
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
  
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-gray-50 to-white">
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
              <Card className="h-full group cursor-pointer">
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
                
                {/* Feature Image */}
                <div className="relative overflow-hidden rounded-xl">
                  <motion.img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
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
        
        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white"
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
            <motion.a
              href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <img
                src="/images/badges/app-store-coming-soon.png"
                alt="Download on App Store"
                className="h-14 w-auto"
              />
            </motion.a>
            
            <motion.a
              href="https://play.google.com/store/apps/details?id=com.safemama.app"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <img
                src="/images/badges/google-play-coming-soon.png"
                alt="Get it on Google Play"
                className="h-14 w-auto"
              />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
