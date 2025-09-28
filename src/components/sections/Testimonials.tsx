import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Heart } from 'lucide-react'
import Card from '../ui/Card'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'First-time Mom',
      location: 'New York, USA',
      avatar: '/images/testimonials/sarah.jpg',
      rating: 5,
      text: 'SafeMama gave me the confidence I needed during my pregnancy. Every time I had a question about food safety, I could get instant answers. The AI-powered scanning is incredibly accurate and the explanations are so detailed.',
      highlight: 'Gave me confidence I needed',
      weeks: '32 weeks pregnant'
    },
    {
      id: 2,
      name: 'Emma Thompson',
      role: 'Mother of Two',
      location: 'London, UK',
      avatar: '/images/testimonials/emma.jpg',
      rating: 5,
      text: 'As a working mom, SafeMama was a lifesaver. I could quickly scan products while grocery shopping and get immediate feedback. The app helped me make better food choices for both pregnancies.',
      highlight: 'A lifesaver for working moms',
      weeks: 'New mom'
    },
    {
      id: 3,
      name: 'Priya Patel',
      role: 'Nutrition Enthusiast',
      location: 'Mumbai, India',
      avatar: '/images/testimonials/priya.jpg',
      rating: 5,
      text: 'I love how comprehensive SafeMama is. Not just scanning, but also the detailed guides and expert Q&A feature. It\'s like having a pregnancy nutritionist in your pocket 24/7.',
      highlight: 'Like having a nutritionist in your pocket',
      weeks: '28 weeks pregnant'
    },
    {
      id: 4,
      name: 'Jessica Williams',
      role: 'Health-conscious Mom',
      location: 'Sydney, Australia',
      avatar: '/images/testimonials/jessica.jpg',
      rating: 5,
      text: 'The medication safety feature was incredibly helpful. I could check if my prescriptions were safe during pregnancy and get detailed information to discuss with my doctor.',
      highlight: 'Medication safety feature was incredible',
      weeks: 'New mom'
    },
    {
      id: 5,
      name: 'Maria Garcia',
      role: 'Expecting Mother',
      location: 'Barcelona, Spain',
      avatar: '/images/testimonials/maria.jpg',
      rating: 5,
      text: 'SafeMama helped me navigate the confusing world of pregnancy nutrition. The cultural food recommendations were spot-on, and I loved that it understood my dietary preferences.',
      highlight: 'Helped navigate pregnancy nutrition',
      weeks: '24 weeks pregnant'
    },
    {
      id: 6,
      name: 'Lisa Chen',
      role: 'Tech Professional',
      location: 'Toronto, Canada',
      avatar: '/images/testimonials/lisa.jpg',
      rating: 5,
      text: 'The user interface is beautiful and intuitive. Even my husband started using it to help with grocery shopping. We both feel more confident about our food choices now.',
      highlight: 'Beautiful and intuitive interface',
      weeks: '16 weeks pregnant'
    }
  ]
  
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-5"></div>
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-secondary-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            What Mothers Say
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Loved by <span className="text-gradient">50,000+</span>
            <br />Expecting Mothers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from real mothers who trust SafeMama for their pregnancy safety decisions.
          </p>
        </motion.div>
        
        {/* Overall Rating */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center justify-center bg-white rounded-2xl px-8 py-6 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold text-gray-900">4.8 out of 5</div>
                <div className="text-gray-600">Based on 10,000+ reviews</div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full relative group hover:shadow-xl">
                {/* Quote Icon */}
                <div className="absolute top-6 right-6 w-8 h-8 text-primary-200 opacity-50">
                  <Quote className="w-full h-full fill-current" />
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                {/* Highlight */}
                <div className="bg-primary-50 rounded-lg p-3 mb-6">
                  <p className="text-primary-700 font-medium text-sm">
                    💜 "{testimonial.highlight}"
                  </p>
                </div>
                
                {/* User Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.role} • {testimonial.location}
                    </div>
                    <div className="text-xs text-primary-600 font-medium mt-1">
                      {testimonial.weeks}
                    </div>
                  </div>
                </div>
                
                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </Card>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-white rounded-3xl p-12 shadow-lg border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-red-500 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900">
                Join Our Growing Community
              </h3>
            </div>
            
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Be part of a supportive community of expecting mothers who prioritize 
              safety and make informed decisions together.
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
