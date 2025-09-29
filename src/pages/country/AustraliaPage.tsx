import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Heart, Shield, Smartphone, Star, Download, Users, Award, Zap, Apple } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const AustraliaPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama Australia | AI Pregnancy Safety App for Australian Mums | ACOG Guidelines</title>
        <meta 
          name="description" 
          content="SafeMama Australia - AI-powered pregnancy safety app following Australian health guidelines. Food safety checker, medication guide for Aussie expecting mothers. Download now!" 
        />
        <meta 
          name="keywords" 
          content="SafeMama Australia, pregnancy app Australia, food safety pregnancy Australia, Australian pregnancy guidelines, pregnancy tracker Sydney, AI pregnancy assistant Australia, pregnancy safety Melbourne, Brisbane pregnancy app, Perth pregnancy guide, Adelaide pregnancy safety, Australian mums pregnancy" 
        />
        <link rel="canonical" href="https://safemama.co/australia" />
        <meta property="og:title" content="SafeMama Australia | AI Pregnancy Safety App for Australian Mums" />
        <meta property="og:description" content="AI-powered pregnancy safety platform following Australian health guidelines. Trusted by 35,000+ Australian mothers." />
        <meta property="og:image" content="https://safemama.co/images/og/safemama-australia.jpg" />
        <meta property="og:url" content="https://safemama.co/australia" />
        <meta name="geo.region" content="AU" />
        <meta name="geo.placename" content="Australia" />
        <meta name="geo.position" content="-25.274398;133.775136" />
        <meta name="ICBM" content="-25.274398, 133.775136" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-yellow-100 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mb-8">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SafeMama <span className="text-green-600">🇦🇺 Australia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Fair dinkum pregnancy safety for <strong>35,000+ Australian mums</strong> from Sydney to Perth. 
              Following Australian Department of Health guidelines for safe pregnancies down under.
            </p>

            {/* Australian Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">35K+</div>
                <div className="text-sm text-gray-600">Aussie Mums</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">8</div>
                <div className="text-sm text-gray-600">States & Territories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">4.9★</div>
                <div className="text-sm text-gray-600">Play Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">24/7</div>
                <div className="text-sm text-gray-600">Aussie Support</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://apps.apple.com/au/app/safemama-pregnancy-app/id6748413103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors text-lg"
              >
                <Apple className="w-6 h-6 mr-3" />
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safemama.app&gl=AU"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-green-700 transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>
          </motion.div>

          {/* Australian-Specific Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌏 Made for Australian Mums
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Australian Health Guidelines</h3>
                  <p className="text-gray-600">
                    All recommendations follow Australian Department of Health pregnancy guidelines and food standards.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Medicare Integration</h3>
                  <p className="text-gray-600">
                    Works seamlessly with Australian healthcare system and supports Medicare bulk billing practices.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Aussie Products</h3>
                  <p className="text-gray-600">
                    Comprehensive database includes popular Australian brands like Woolworths, Coles, and local products.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Popular Australian Cities */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Trusted Coast to Coast
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">12,000+</div>
                  <div className="text-gray-600">Sydney, NSW</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">9,500+</div>
                  <div className="text-gray-600">Melbourne, VIC</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">6,200+</div>
                  <div className="text-gray-600">Brisbane, QLD</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">4,100+</div>
                  <div className="text-gray-600">Perth, WA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">3,200+</div>
                  <div className="text-gray-600">Adelaide, SA</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Australian Pricing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-12 bg-gradient-to-r from-green-500 to-yellow-500 text-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">🇦🇺 Fair Dinkum Australian Pricing</h2>
              <div className="text-5xl font-bold mb-2">AUD $7.99/month</div>
              <p className="text-xl opacity-90 mb-8">
                Premium pregnancy safety guidance at a fair price for Australian families. No hidden fees, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                * Prices in Australian Dollars. 7-day free trial for all new Aussie users.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default AustraliaPage
