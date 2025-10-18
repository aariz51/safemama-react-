/*
 * To change the background video, edit the videoUrl below
 * Background video implementation using Cloudinary
 */

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Smartphone, Star, Users, Shield, Play, ArrowRight } from 'lucide-react'
import Button from '../ui/Button'

// Configuration - UPDATED with better, simpler text
const siteConfig = {
  videoUrl: "https://res.cloudinary.com/dclcda1je/video/upload/v1756622668/Firefly_Gentle_floating_motion_of_the_soft_orbs_and_elements_subtle_gradient_shifts_peaceful_and_c_1_rpiwgj.mp4",
  hero: {
    badge: "Trusted by 50,000+ Expecting Mothers",
    title: "Your AI Pregnancy Safety Companion", // ✅ SIMPLIFIED TITLE
    subtitle: "Instantly check if food, medicine, and products are safe during pregnancy. Get personalized recommendations you can trust.", // ✅ BETTER SUBTITLE
    cta: { 
      primary: { label: "Get SafeMama Free", href: "https://dub.sh/safemama" }, // ✅ BETTER CTA
      secondary: { label: "Watch Demo", href: "#how-it-works" }
    }
  }
}

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // ✅ KEEPING ALL 3 ORIGINAL IMAGES
  const mockupImages = [
    {
      src: '/images/mockups/safemama-scan-feature.png',
      alt: 'SafeMama Scan Feature',
      delay: 0.2
    },
    {
      src: '/images/mockups/safemama-results-screen.png',
      alt: 'SafeMama Results Screen',
      delay: 0.4
    },
    {
      src: '/images/mockups/safemama-features-overview.png',
      alt: 'SafeMama Features Overview',
      delay: 0.6
    }
  ]

  const stats = [
    { value: '50,000+', label: 'Happy Mothers', icon: Users },
    { value: '4.8★', label: 'App Rating', icon: Star },
    { value: '10,000+', label: 'Daily Scans', icon: Shield }
  ]

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        video.muted = true
        video.volume = 0
        
        video.play().catch(() => {
          const fallbackBg = document.querySelector('.hero-fallback-bg') as HTMLElement
          if (fallbackBg) {
            fallbackBg.style.display = 'block'
          }
        }).then(() => {
          const fallbackBg = document.querySelector('.hero-fallback-bg') as HTMLElement
          if (fallbackBg) {
            fallbackBg.style.display = 'none'
          }
        })
      }

      const handleError = () => {
        const fallbackBg = document.querySelector('.hero-fallback-bg') as HTMLElement
        if (fallbackBg) {
          fallbackBg.style.display = 'block'
        }
      }

      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('error', handleError)
      video.load()

      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Background Video - Responsive coverage */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        controls={false}
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={siteConfig.videoUrl} type="video/mp4" />
      </video>
      
      {/* Fallback Background */}
      <div 
        className="hero-fallback-bg absolute inset-0 bg-gradient-to-br from-pink-500 via-blue-500 to-yellow-500 hidden z-0"
      />
      
      {/* Pregnancy-themed overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-blue-500/15 via-yellow-500/10 to-green-500/15 z-10" />

      {/* Hero Content - MOBILE-FIRST RESPONSIVE ORDERING */}
      <div className="relative z-20 w-full min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* MOBILE: Text First (order-1), DESKTOP: Text Left (lg:order-1) */}
            <motion.div
              className="text-center lg:text-left order-1 lg:order-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge - Fixed positioning and visibility */}
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full mb-6 border bg-pink-500/15 border-pink-500/30 backdrop-blur-sm text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Shield className="w-4 h-4 mr-2 text-pink-400" />
                <span className="text-sm font-medium">{siteConfig.hero.badge}</span>
              </motion.div>

              {/* Heading - MOBILE OPTIMIZED */}
              <motion.h1
                className="font-bold leading-tight mb-6 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(236, 72, 153, 0.9)'
                }}
              >
                {siteConfig.hero.title}
              </motion.h1>

              {/* Subtitle - MOBILE OPTIMIZED */}
              <motion.p
                className="text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(236, 72, 153, 0.9)'
                }}
              >
                {siteConfig.hero.subtitle}
              </motion.p>

              {/* CTA Buttons - MOBILE OPTIMIZED */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.a
                  href={siteConfig.hero.cta.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg font-medium px-6 sm:px-8 py-3 sm:py-4 text-base transition-all duration-300 bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Shield className="w-5 h-5 mr-3" />
                  {siteConfig.hero.cta.primary.label}
                </motion.a>

                <motion.a
                  href={siteConfig.hero.cta.secondary.href}
                  className="inline-flex items-center justify-center rounded-lg font-medium px-6 sm:px-8 py-3 sm:py-4 text-base transition-all duration-300 border-2 border-blue-400 text-white bg-blue-400/10 backdrop-blur-sm hover:bg-blue-400 hover:text-white"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Play className="w-5 h-5 mr-3" />
                  {siteConfig.hero.cta.secondary.label}
                </motion.a>
              </motion.div>

              {/* Stats - MOBILE OPTIMIZED */}
              <motion.div
                className="grid grid-cols-3 gap-4 sm:gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center mb-2">
                      <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 mr-2 text-yellow-400" />
                    </div>
                    <span 
                      className="text-xl sm:text-2xl lg:text-3xl font-bold text-white block"
                      style={{
                        textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(236, 72, 153, 0.9)'
                      }}
                    >
                      {stat.value}
                    </span>
                    <p 
                      className="text-xs sm:text-sm font-medium text-white mt-1"
                      style={{
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(236, 72, 153, 0.9)',
                        minHeight: '16px'
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* MOBILE: Images Second (order-2), DESKTOP: Images Right (lg:order-2) */}
            <motion.div
              className="relative z-10 order-2 lg:order-2 mb-8 lg:mb-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-center items-center space-x-2 sm:space-x-4">
                {mockupImages.map((image, index) => (
                  <motion.div
                    key={image.alt}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: image.delay }}
                  >
                    <motion.img
                      src={image.src}
                      alt={image.alt}
                      className={`h-64 sm:h-80 lg:h-96 w-auto object-contain ${
                        index === 1 ? 'scale-110' : ''
                      }`}
                      loading="lazy"
                      animate={{ y: [0, -10, 0] }}
                      transition={{
                        duration: 4 + index,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      style={{
                        filter: 'drop-shadow(0 10px 20px rgba(236, 72, 153, 0.3)) drop-shadow(0 6px 6px rgba(14, 165, 233, 0.2))'
                      }}
                    />
                    
                    <div 
                      className="absolute inset-0 rounded-3xl -z-10 blur-xl"
                      style={{
                        background: 'linear-gradient(to top, rgba(236, 72, 153, 0.2), transparent)'
                      }}
                    ></div>
                  </motion.div>
                ))}
              </div>
              
              <div 
                className="absolute -inset-10 rounded-full -z-20 blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1), transparent)'
                }}
              ></div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - MOBILE OPTIMIZED */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 hidden sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center text-white"
          style={{
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(236, 72, 153, 0.9)'
          }}
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowRight className="w-6 h-6 rotate-90" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
