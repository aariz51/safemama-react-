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
    <section 
      style={{
        position: 'relative',
        width: '100vw',
        height: '110vh', // Increased height to prevent cut-off
        minHeight: '110vh',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}
    >
      {/* Background Video - Full viewport coverage */}
      <video 
        ref={videoRef}
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        controls={false}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2
        }}
      >
        <source src={siteConfig.videoUrl} type="video/mp4" />
      </video>
      
      {/* Fallback Background */}
      <div 
        className="hero-fallback-bg"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, #ec4899 0%, #0ea5e9 50%, #eab308 100%)',
          display: 'none',
          zIndex: -1
        }}
      />
      
      {/* Pregnancy-themed overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(236,72,153,0.2) 0%, rgba(14,165,233,0.15) 30%, rgba(234,179,8,0.1) 70%, rgba(34,197,94,0.15) 100%)',
          zIndex: 1
        }}
      />

      {/* Hero Content - Fixed positioning and spacing */}
      <div 
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 0,
          margin: 0,
          paddingTop: '80px', // Space for header
          paddingBottom: '60px' // Space for stats
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side Text Content - IMPROVED */}
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Badge - Fixed positioning and visibility */}
              <motion.div
                className="inline-flex items-center px-4 py-2 rounded-full mb-8 border"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  backgroundColor: 'rgba(236, 72, 153, 0.15)',
                  borderColor: 'rgba(236, 72, 153, 0.3)',
                  backdropFilter: 'blur(10px)',
                  color: '#ffffff',
                  position: 'relative',
                  zIndex: 20
                }}
              >
                <Shield className="w-4 h-4 mr-2" style={{ color: '#ec4899' }} />
                <span className="text-sm font-medium">{siteConfig.hero.badge}</span>
              </motion.div>

              {/* Heading - SIMPLIFIED AND BETTER */}
              <motion.h1
                className="font-bold leading-tight mb-8 text-4xl sm:text-5xl lg:text-6xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ 
                  color: '#ffffff',
                  textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(236, 72, 153, 0.9)' // ✅ STRONGER SHADOW
                }}
              >
                {siteConfig.hero.title}
              </motion.h1>

              {/* Subtitle - IMPROVED */}
              <motion.p
                className="text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                style={{ 
                  color: '#ffffff',
                  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(236, 72, 153, 0.9)' // ✅ STRONGER SHADOW
                }}
              >
                {siteConfig.hero.subtitle}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.a
                  href={siteConfig.hero.cta.primary.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg font-medium px-8 py-4 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: '#ec4899',
                    color: '#ffffff',
                    boxShadow: '0 4px 15px rgba(236, 72, 153, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#db2777';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(236, 72, 153, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = '#ec4899';
                    e.currentTarget.style.transform = 'translateY(0px)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(236, 72, 153, 0.3)';
                  }}
                >
                  <Shield className="w-5 h-5 mr-3" />
                  {siteConfig.hero.cta.primary.label}
                </motion.a>

                <motion.a
                  href={siteConfig.hero.cta.secondary.href}
                  className="inline-flex items-center rounded-lg font-medium px-8 py-4 text-base transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    border: '2px solid #0ea5e9',
                    color: '#ffffff',
                    backgroundColor: 'rgba(14, 165, 233, 0.1)',
                    backdropFilter: 'blur(10px)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = '#0ea5e9';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(14, 165, 233, 0.1)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  <Play className="w-5 h-5 mr-3" />
                  {siteConfig.hero.cta.secondary.label}
                </motion.a>
              </motion.div>

              {/* Stats - Fixed cut-off issue */}
              <motion.div
                className="grid grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                style={{ 
                  marginBottom: '40px' // Extra space to prevent cut-off
                }}
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <stat.icon 
                        className="w-6 h-6 mr-2" 
                        style={{ color: '#eab308' }}
                      />
                      <span 
                        className="text-2xl md:text-3xl font-bold"
                        style={{ 
                          color: '#ffffff',
                          textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8), 2px 2px 4px rgba(236, 72, 153, 0.9)' // ✅ STRONGER SHADOW
                        }}
                      >
                        {stat.value}
                      </span>
                    </div>
                    <p 
                      className="text-sm font-medium"
                      style={{ 
                        color: '#ffffff',
                        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(236, 72, 153, 0.9)', // ✅ STRONGER SHADOW
                        minHeight: '20px' // Ensure text has space
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Side Phone Mockups - KEEPING ALL 3 ORIGINAL IMAGES */}
            <motion.div
              className="relative z-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="flex justify-center items-center space-x-4">
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
                      className={`h-96 w-auto object-contain ${
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
                      className="absolute inset-0 rounded-3xl blur-xl"
                      style={{
                        background: 'linear-gradient(to top, rgba(236, 72, 153, 0.2), transparent)'
                      }}
                    ></div>
                  </motion.div>
                ))}
              </div>
              
              <div 
                className="absolute -inset-10 rounded-full blur-3xl"
                style={{
                  background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1), transparent)'
                }}
              ></div>
            </motion.div>
          </div>
          
          {/* Scroll Indicator - Repositioned */}
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center"
              style={{ 
                color: '#ffffff',
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8), 1px 1px 2px rgba(236, 72, 153, 0.9)' // ✅ STRONGER SHADOW
              }}
            >
              <span className="text-sm mb-2">Scroll to explore</span>
              <ArrowRight className="w-6 h-6 rotate-90" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
