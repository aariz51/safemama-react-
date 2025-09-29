import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Heart, Shield, Smartphone, Star, Download, Users, Award, Zap, Apple, Crown, Building } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const UKPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama UK | AI Pregnancy Safety App | NHS Guidelines | #1 Pregnancy Scanner Britain</title>
        <meta 
          name="description" 
          content="SafeMama UK - Britain's #1 AI-powered pregnancy safety app. NHS-compliant food scanner, medication guide for expecting mothers. Trusted by 80,000+ British families. Download now!" 
        />
        <meta 
          name="keywords" 
          content="SafeMama UK, pregnancy app Britain, NHS pregnancy guidelines, pregnancy safety scanner UK, British pregnancy tracker, AI pregnancy assistant UK, pregnancy safety London, Manchester pregnancy app, Birmingham pregnancy guide, Glasgow pregnancy safety, pregnancy app United Kingdom, NHS compliant pregnancy app, NICE guidelines pregnancy" 
        />
        <link rel="canonical" href="https://safemama.co/uk" />
        <meta property="og:title" content="SafeMama UK | Britain's #1 AI Pregnancy Safety App" />
        <meta property="og:description" content="NHS-compliant AI pregnancy safety platform trusted by 80,000+ British mothers from London to Edinburgh." />
        <meta property="og:image" content="https://safemama.co/images/og/safemama-uk.jpg" />
        <meta property="og:url" content="https://safemama.co/uk" />
        <meta name="geo.region" content="GB" />
        <meta name="geo.placename" content="United Kingdom" />
        <meta name="geo.position" content="55.378051;-3.435973" />
        <meta name="ICBM" content="55.378051, -3.435973" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-100 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-600 to-red-600 rounded-full mb-8">
              <Crown className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SafeMama <span className="text-blue-600">🇬🇧 UK</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Britain's leading AI-powered pregnancy safety platform for <strong>80,000+ British mothers</strong> from London to Edinburgh. 
              NHS-compliant guidance trusted by families across the United Kingdom.
            </p>

            {/* British Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">80K+</div>
                <div className="text-sm text-gray-600">British Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4</div>
                <div className="text-sm text-gray-600">UK Nations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9★</div>
                <div className="text-sm text-gray-600">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">#1</div>
                <div className="text-sm text-gray-600">Pregnancy Safety App</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://apps.apple.com/gb/app/safemama-pregnancy-app/id6748413103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors text-lg"
              >
                <Apple className="w-6 h-6 mr-3" />
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safemama.app&gl=GB"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>
          </motion.div>

          {/* British-Specific Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-red-50 border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🇬🇧 Built for British Mothers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">NHS & NICE Compliant</h3>
                  <p className="text-gray-600">
                    All safety recommendations follow NHS pregnancy guidelines, NICE standards, and FSA food safety requirements.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">NHS Integration</h3>
                  <p className="text-gray-600">
                    Seamlessly integrates with NHS services, GP practices, and midwifery care across England, Scotland, Wales, and Northern Ireland.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">British Brands Database</h3>
                  <p className="text-gray-600">
                    Comprehensive database with British brands including Tesco, Sainsbury's, ASDA, Morrisons, and local shops.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Major UK Cities */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Trusted Across the United Kingdom
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-blue-600">25,000+</div>
                  <div className="text-gray-600">London</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">12,000+</div>
                  <div className="text-gray-600">Manchester</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">10,000+</div>
                  <div className="text-gray-600">Birmingham</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">8,500+</div>
                  <div className="text-gray-600">Glasgow</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">7,200+</div>
                  <div className="text-gray-600">Edinburgh</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* British Testimonials */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What British Mums Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "As a first-time mum in London, SafeMama gave me confidence with NHS-approved guidance. The British food database is spot on!"
                </p>
                <div className="font-semibold text-gray-900">Emma T.</div>
                <div className="text-sm text-gray-600">London, England</div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Living in Manchester, SafeMama helps me navigate British food choices safely. The integration with my NHS midwife is brilliant!"
                </p>
                <div className="font-semibold text-gray-900">Sarah L.</div>
                <div className="text-sm text-gray-600">Manchester, England</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The NHS compliance and NICE guideline integration gave me complete peace of mind during my pregnancy journey in Scotland."
                </p>
                <div className="font-semibold text-gray-900">Fiona M.</div>
                <div className="text-sm text-gray-600">Glasgow, Scotland</div>
              </Card>
            </div>
          </motion.div>

          {/* Premium British Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="p-8 bg-gradient-to-r from-blue-600 to-red-600 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">👑 Premium British Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <Crown className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">NHS Integration</h3>
                    <p className="opacity-90">Direct integration with NHS patient records, GP practices, and midwifery services across all UK nations.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Building className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">British Brands Database</h3>
                    <p className="opacity-90">Complete database of British food brands, restaurant chains, and local UK grocery store products.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">MHRA Medication Guide</h3>
                    <p className="opacity-90">Comprehensive MHRA-approved medication safety guide with British drug names and NHS formulary.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">British Experts</h3>
                    <p className="opacity-90">Access to GMC-registered consultants and NHS midwives for personalized British healthcare advice.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Regional UK Coverage */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Complete UK Coverage
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">🏴󠁧󠁢󠁥󠁮󠁧󠁿 England</h3>
                  <p className="text-sm text-gray-600">NHS England guidelines</p>
                  <p className="text-2xl font-bold text-blue-600">55,000+</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-blue-600 mb-2">🏴󠁧󠁢󠁳󠁣󠁴󠁿 Scotland</h3>
                  <p className="text-sm text-gray-600">NHS Scotland standards</p>
                  <p className="text-2xl font-bold text-blue-600">15,000+</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">🏴󠁧󠁢󠁷󠁬󠁳󠁿 Wales</h3>
                  <p className="text-sm text-gray-600">NHS Wales protocols</p>
                  <p className="text-2xl font-bold text-red-600">7,000+</p>
                </div>
                <div className="text-center p-4 bg-red-50 rounded-lg">
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Northern Ireland</h3>
                  <p className="text-sm text-gray-600">HSC guidelines</p>
                  <p className="text-2xl font-bold text-red-600">3,000+</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* British Pricing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-12 bg-gradient-to-r from-blue-600 to-red-600 text-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">🇬🇧 Premium British Pricing</h2>
              <div className="text-5xl font-bold mb-2">£3.99/month</div>
              <p className="text-xl opacity-90 mb-8">
                Premium pregnancy safety guidance at a fair British price. Cancel anytime, no fuss, no questions asked.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                * Prices in British Pounds. 7-day free trial for all new UK users. VAT included.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default UKPage
