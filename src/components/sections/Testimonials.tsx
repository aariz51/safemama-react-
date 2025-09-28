import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Heart } from 'lucide-react'
import Card from '../ui/Card'

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      rating: 5,
      text: "SafeMama gave me the confidence I needed during my pregnancy. The AI scanning feature is incredibly accurate and saved me from worrying about every single ingredient. I've recommended it to all my pregnant friends!",
      avatar: "SJ",
      trimester: "2nd Trimester"
    },
    {
      name: "Emily Chen",
      location: "London, UK", 
      rating: 5,
      text: "As a first-time mom, I was constantly anxious about what I could and couldn't eat. SafeMama's instant scanning gave me peace of mind. The expert Q&A feature is absolutely brilliant - I got answers to questions I didn't even know I had.",
      avatar: "EC",
      trimester: "3rd Trimester"
    },
    {
      name: "Maria Rodriguez",
      location: "Toronto, Canada",
      rating: 5,
      text: "The medication scanner feature saved me multiple trips to the doctor. SafeMama helped me understand which over-the-counter medicines were safe during my pregnancy. It's like having a pregnancy expert in your pocket!",
      avatar: "MR",
      trimester: "1st Trimester"
    },
    {
      name: "Priya Patel",
      location: "Melbourne, Australia",
      rating: 5,
      text: "I love how SafeMama considers cultural foods too. As someone who eats a lot of Indian cuisine, it was wonderful to see the app understand spices and traditional foods. The recommendations were spot-on every time.",
      avatar: "PP",
      trimester: "2nd Trimester"
    },
    {
      name: "Lisa Thompson",
      location: "Dublin, Ireland",
      rating: 5,
      text: "SafeMama became my pregnancy companion from day one. The scan history feature helped me track what I'd checked before, and sharing results with my doctor made our consultations much more productive. Highly recommended!",
      avatar: "LT",
      trimester: "3rd Trimester"
    },
    {
      name: "Anna Weber",
      location: "Berlin, Germany",
      rating: 5,
      text: "The multilingual support and global product recognition impressed me. SafeMama understood European products perfectly and provided accurate safety information. It's truly a global solution for expecting mothers.",
      avatar: "AW",
      trimester: "1st Trimester"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-pink-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pregnancy-dots"></div>
      
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
            What Our Mothers Say
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-gradient">50,000+ Mothers</span>
            <br />Worldwide
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from expecting mothers who found peace of mind with SafeMama. 
            Join our growing community of confident, informed parents.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card variant="pregnancy" className="h-full p-8 group hover:shadow-2xl">
                {/* Quote Icon */}
                <div className="flex items-center justify-between mb-6">
                  <Quote className="w-10 h-10 text-primary-400 opacity-50" />
                  <div className="text-right">
                    <div className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                      {testimonial.trimester}
                    </div>
                  </div>
                </div>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 leading-relaxed mb-6 text-base">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center mt-auto">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mr-4 pregnancy-glow">
                    <span className="text-white font-semibold text-lg">
                      {testimonial.avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.location}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Trust Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          {[
            { value: "4.8★", label: "Average Rating" },
            { value: "99%", label: "Would Recommend" },
            { value: "150+", label: "Countries" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary-500 via-secondary-500 to-accent-500 rounded-3xl p-12 text-white pregnancy-shadow"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-12 h-12 text-white mr-4" />
            <h3 className="text-2xl font-bold text-white">
              Join Our Growing Community
            </h3>
          </div>
          
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
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
        </motion.div>
      </div>
      
      {/* Floating Hearts */}
      <div className="absolute top-20 left-10 w-6 h-6 text-primary-300 opacity-20 animate-gentle-float">
        <Heart className="w-full h-full fill-current" />
      </div>
      <div className="absolute bottom-20 right-20 w-8 h-8 text-accent-300 opacity-20 animate-gentle-float" style={{ animationDelay: '2s' }}>
        <Heart className="w-full h-full fill-current" />
      </div>
      <div className="absolute top-1/2 right-10 w-4 h-4 text-secondary-300 opacity-20 animate-gentle-float" style={{ animationDelay: '4s' }}>
        <Heart className="w-full h-full fill-current" />
      </div>
    </section>
  )
}

export default Testimonials
