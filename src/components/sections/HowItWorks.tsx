import React from 'react'
import { motion } from 'framer-motion'
import { Play, Scan, Brain, Shield, CheckCircle } from 'lucide-react'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Scan,
      number: "01",
      title: "Scan Any Item",
      description: "Simply point your camera at any food, medicine, or product package"
    },
    {
      icon: Brain,
      number: "02", 
      title: "AI Analysis",
      description: "Our advanced AI analyzes ingredients and cross-references safety databases"
    },
    {
      icon: Shield,
      number: "03",
      title: "Instant Results",
      description: "Get immediate safety recommendations tailored to your pregnancy stage"
    },
    {
      icon: CheckCircle,
      number: "04",
      title: "Peace of Mind",
      description: "Make confident decisions knowing you and your baby are protected"
    }
  ]

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-br from-pink-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-secondary-100 text-secondary-600 rounded-full text-sm font-medium mb-4">
            Simple & Easy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-gradient">SafeMama</span> Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the power of AI-driven pregnancy safety in just seconds. 
            See how thousands of mothers stay safe every day.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white rounded-2xl pregnancy-shadow overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ZN1taUwYjBk?autoplay=1&mute=1&controls=1&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=ZN1taUwYjBk"
                  title="How SafeMama Works - Demo Video"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-500/20 to-transparent pointer-events-none">
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <h3 className="font-semibold text-lg">SafeMama Demo</h3>
                      <p className="text-white/80 text-sm">See how easy pregnancy safety can be</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
                      <span className="text-white text-xs font-medium">LIVE DEMO</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-2xl opacity-20 blur-xl"></div>
            <motion.div 
              className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-accent-400 to-primary-400 rounded-full opacity-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>

          {/* Steps Section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                className="flex items-start space-x-4"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl flex items-center justify-center pregnancy-glow">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-400 rounded-full flex items-center justify-center">
                      <span className="text-xs font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div 
              className="pt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a
                href="https://dub.sh/safemama"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 pregnancy-glow"
              >
                <Scan className="w-5 h-5 mr-3" />
                Try SafeMama Now - It's Free!
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {[
            { value: "3 Seconds", label: "Average Scan Time" },
            { value: "99.8%", label: "Accuracy Rate" },
            { value: "50,000+", label: "Happy Mothers" },
            { value: "10,000+", label: "Daily Scans" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent mb-2">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
