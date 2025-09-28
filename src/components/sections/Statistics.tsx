import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Star, Shield, BookOpen, Heart, Globe, Award, Zap } from 'lucide-react'

const Statistics: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  
  const stats = [
    {
      icon: Users,
      value: 50000,
      suffix: '+',
      label: 'Happy Mothers',
      description: 'Trusted by expecting mothers worldwide',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      icon: Star,
      value: 4.8,
      suffix: '★',
      label: 'App Store Rating',
      description: 'Consistently high ratings across platforms',
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      icon: Shield,
      value: 10000,
      suffix: '+',
      label: 'Daily Scans',
      description: 'Safe scans performed every day',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      icon: BookOpen,
      value: 100,
      suffix: '+',
      label: 'Safety Guides',
      description: 'Comprehensive pregnancy safety resources',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Heart,
      value: 99,
      suffix: '%',
      label: 'User Satisfaction',
      description: 'Users report feeling more confident',
      gradient: 'from-pink-500 to-red-600'
    },
    {
      icon: Globe,
      value: 150,
      suffix: '+',
      label: 'Countries Served',
      description: 'Global reach across all continents',
      gradient: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Award,
      value: 15,
      suffix: '+',
      label: 'Awards Won',
      description: 'Recognition from health & tech industry',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      icon: Zap,
      value: 2,
      suffix: 's',
      label: 'Average Scan Time',
      description: 'Lightning-fast AI analysis',
      gradient: 'from-orange-500 to-red-600'
    }
  ]
  
  // Animated counter hook
  const useCounter = (end: number, duration: number = 2000) => {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
      if (!isVisible) return
      
      let startTime: number
      let animationId: number
      
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = timestamp - startTime
        const percentage = Math.min(progress / duration, 1)
        
        setCount(Math.floor(end * percentage))
        
        if (percentage < 1) {
          animationId = requestAnimationFrame(animate)
        }
      }
      
      animationId = requestAnimationFrame(animate)
      
      return () => cancelAnimationFrame(animationId)
    }, [end, duration, isVisible])
    
    return count
  }
  
  return (
    <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onViewportEnter={() => setIsVisible(true)}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            The Numbers Speak for
            <span className="text-gradient"> Themselves</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            SafeMama has earned the trust of expecting mothers worldwide through 
            consistent delivery of accurate, reliable pregnancy safety information.
          </p>
        </motion.div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const animatedValue = useCounter(stat.value, 2000 + index * 200)
            
            return (
              <motion.div
                key={stat.label}
                className="relative group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 h-full">
                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Value */}
                  <div className="mb-4">
                    <span className="text-4xl md:text-5xl font-bold text-gray-900">
                      {animatedValue.toLocaleString()}
                    </span>
                    <span className="text-2xl font-bold text-gradient ml-1">
                      {stat.suffix}
                    </span>
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {stat.label}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stat.description}
                  </p>
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </motion.div>
            )
          })}
        </div>
        
        {/* Trust Indicators */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-8 text-lg">
            Trusted by healthcare professionals and expecting mothers in
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {[
              'United States', 'United Kingdom', 'Canada', 'Australia', 
              'Germany', 'France', 'Japan', 'Singapore'
            ].map((country, index) => (
              <motion.span
                key={country}
                className="text-gray-500 font-medium"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1 + index * 0.1 }}
              >
                {country}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-50 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-16 h-16 bg-secondary-100 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 w-12 h-12 bg-yellow-100 rounded-full opacity-50 animate-float" style={{ animationDelay: '4s' }}></div>
    </section>
  )
}

export default Statistics
