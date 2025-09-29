import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Heart, Shield, Smartphone, Star, Download, Users, Award, Zap, Apple } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const CanadaPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama Canada | AI Pregnancy Safety App for Canadian Moms | Health Canada Approved Guidelines</title>
        <meta 
          name="description" 
          content="SafeMama Canada - AI-powered pregnancy safety app following Health Canada guidelines. Food safety checker, medication guide, and expert Q&A for Canadian expecting mothers. Download now!" 
        />
        <meta 
          name="keywords" 
          content="SafeMama Canada, pregnancy app Canada, food safety pregnancy Canada, Health Canada pregnancy guidelines, Canadian pregnancy tracker, AI pregnancy assistant Canada, pregnancy safety Toronto, Vancouver pregnancy app, Montreal pregnancy guide, Calgary pregnancy safety" 
        />
        <link rel="canonical" href="https://safemama.co/canada" />
        <meta property="og:title" content="SafeMama Canada | AI Pregnancy Safety App for Canadian Moms" />
        <meta property="og:description" content="AI-powered pregnancy safety platform following Health Canada guidelines. Trusted by 50,000+ Canadian mothers." />
        <meta property="og:image" content="https://safemama.co/images/og/safemama-canada.jpg" />
        <meta property="og:url" content="https://safemama.co/canada" />
        <meta name="geo.region" content="CA" />
        <meta name="geo.placename" content="Canada" />
        <meta name="geo.position" content="60.0;-96.0" />
        <meta name="ICBM" content="60.0, -96.0" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-8">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SafeMama <span className="text-red-500">🇨🇦 Canada</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              AI-powered pregnancy safety platform trusted by <strong>50,000+ Canadian mothers</strong> from Toronto to Vancouver. 
              Following Health Canada guidelines for safe, healthy pregnancies.
            </p>

            {/* Canadian Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">50K+</div>
                <div className="text-sm text-gray-600">Canadian Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">13</div>
                <div className="text-sm text-gray-600">Provinces & Territories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">4.8★</div>
                <div className="text-sm text-gray-600">App Store Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://apps.apple.com/ca/app/safemama-pregnancy-app/id6748413103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors text-lg"
              >
                <Apple className="w-6 h-6 mr-3" />
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safemama.app&gl=CA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Get it on Google Play
              </a>
            </div>
          </motion.div>

          {/* Canadian-Specific Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-r from-red-50 to-white border-red-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🍁 Built for Canadian Mothers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Health Canada Compliant</h3>
                  <p className="text-gray-600">
                    All safety recommendations follow Health Canada's Prenatal Nutrition Guidelines and food safety standards.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Canadian Healthcare Integration</h3>
                  <p className="text-gray-600">
                    Seamlessly works with provincial healthcare systems and supports OHIP, MSP, and other provincial plans.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Coast-to-Coast Support</h3>
                  <p className="text-gray-600">
                    Expert support available in English and French, serving mothers from St. John's to Victoria.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Popular Canadian Cities */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Trusted Across Canada
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">12,000+</div>
                  <div className="text-gray-600">Toronto, ON</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">8,500+</div>
                  <div className="text-gray-600">Vancouver, BC</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">7,200+</div>
                  <div className="text-gray-600">Montreal, QC</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">4,800+</div>
                  <div className="text-gray-600">Calgary, AB</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">3,600+</div>
                  <div className="text-gray-600">Ottawa, ON</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Canadian Testimonials */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Canadian Moms Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "As a first-time mom in Toronto, SafeMama gave me the confidence to make safe food choices. The Health Canada guidelines integration is fantastic!"
                </p>
                <div className="font-semibold text-gray-900">Sarah M.</div>
                <div className="text-sm text-gray-600">Toronto, Ontario</div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Living in Vancouver, I needed quick answers about local foods and restaurants. SafeMama's AI scanner works perfectly with Canadian products!"
                </p>
                <div className="font-semibold text-gray-900">Michelle L.</div>
                <div className="text-sm text-gray-600">Vancouver, BC</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The bilingual support and Canadian healthcare integration made my pregnancy journey so much smoother. Merci SafeMama!"
                </p>
                <div className="font-semibold text-gray-900">Émilie D.</div>
                <div className="text-sm text-gray-600">Montreal, Quebec</div>
              </Card>
            </div>
          </motion.div>

          {/* Canadian Pricing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-12 bg-gradient-to-r from-red-500 to-red-600 text-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">🇨🇦 Special Canadian Pricing</h2>
              <div className="text-5xl font-bold mb-2">CAD $6.99/month</div>
              <p className="text-xl opacity-90 mb-8">
                Premium pregnancy safety guidance at an affordable Canadian price. No hidden fees, cancel anytime.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                * Prices in Canadian Dollars. Free trial available for all new Canadian users.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default CanadaPage
