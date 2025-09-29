import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Heart, Shield, Smartphone, Star, Download, Users, Award, Zap, Apple, DollarSign, Building } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const USPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama USA | AI Pregnancy Safety App | FDA Guidelines | #1 Pregnancy Scanner America</title>
        <meta 
          name="description" 
          content="SafeMama USA - America's #1 AI-powered pregnancy safety app. FDA-compliant food scanner, medication guide for expecting mothers. Trusted by 150,000+ American families. Download now!" 
        />
        <meta 
          name="keywords" 
          content="SafeMama USA, pregnancy app America, FDA pregnancy guidelines, pregnancy safety scanner US, American pregnancy tracker, AI pregnancy assistant USA, pregnancy safety New York, Los Angeles pregnancy app, Chicago pregnancy guide, Houston pregnancy safety, pregnancy app United States, FDA compliant pregnancy app" 
        />
        <link rel="canonical" href="https://safemama.co/us" />
        <meta property="og:title" content="SafeMama USA | America's #1 AI Pregnancy Safety App" />
        <meta property="og:description" content="FDA-compliant AI pregnancy safety platform trusted by 150,000+ American mothers from coast to coast." />
        <meta property="og:image" content="https://safemama.co/images/og/safemama-usa.jpg" />
        <meta property="og:url" content="https://safemama.co/us" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
        <meta name="geo.position" content="39.8283;-98.5795" />
        <meta name="ICBM" content="39.8283, -98.5795" />
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
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mb-8">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SafeMama <span className="text-blue-600">🇺🇸 USA</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              America's #1 AI-powered pregnancy safety platform for <strong>150,000+ American mothers</strong> from New York to California. 
              FDA-compliant guidance you can trust for your American family.
            </p>

            {/* American Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">150K+</div>
                <div className="text-sm text-gray-600">American Families</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">50</div>
                <div className="text-sm text-gray-600">States Covered</div>
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
                href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors text-lg"
              >
                <Apple className="w-6 h-6 mr-3" />
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safemama.app&gl=US"
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

          {/* American-Specific Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-red-50 border-blue-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🇺🇸 Made in America, For American Mothers
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">FDA Compliant</h3>
                  <p className="text-gray-600">
                    All safety recommendations follow FDA pregnancy category guidelines and USDA food safety standards for American families.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">US Healthcare Integration</h3>
                  <p className="text-gray-600">
                    Seamlessly integrates with American healthcare systems, insurance plans, and medical providers nationwide.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">American Products Database</h3>
                  <p className="text-gray-600">
                    Comprehensive database with American brands including Walmart, Target, Whole Foods, and local grocery chains.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Major US Cities */}
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
                  <div className="text-2xl font-bold text-blue-600">35,000+</div>
                  <div className="text-gray-600">New York, NY</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">28,000+</div>
                  <div className="text-gray-600">Los Angeles, CA</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">18,000+</div>
                  <div className="text-gray-600">Chicago, IL</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">15,000+</div>
                  <div className="text-gray-600">Houston, TX</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-blue-600">12,000+</div>
                  <div className="text-gray-600">Phoenix, AZ</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* American Testimonials */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What American Moms Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "As a first-time mom in NYC, SafeMama gave me confidence navigating American food choices. The FDA compliance gives me peace of mind!"
                </p>
                <div className="font-semibold text-gray-900">Jennifer R.</div>
                <div className="text-sm text-gray-600">New York, NY</div>
              </Card>
              
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Living in LA with so many food options, SafeMama helps me make safe choices for my baby. The restaurant scanner is incredible!"
                </p>
                <div className="font-semibold text-gray-900">Maria S.</div>
                <div className="text-sm text-gray-600">Los Angeles, CA</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "The integration with my American healthcare provider and insurance made tracking my pregnancy so much easier. Thank you SafeMama!"
                </p>
                <div className="font-semibold text-gray-900">Ashley M.</div>
                <div className="text-sm text-gray-600">Chicago, IL</div>
              </Card>
            </div>
          </motion.div>

          {/* Premium American Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <Card className="p-8 bg-gradient-to-r from-blue-500 to-red-500 text-white">
              <h2 className="text-3xl font-bold mb-8 text-center">🌟 Premium American Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex items-start space-x-4">
                  <DollarSign className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Insurance Integration</h3>
                    <p className="opacity-90">Works with major US insurance providers including Aetna, Blue Cross, Kaiser Permanente, and more.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Building className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">American Brands Database</h3>
                    <p className="opacity-90">Complete database of American food brands, restaurant chains, and local grocery store products.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">FDA Medication Guide</h3>
                    <p className="opacity-90">Comprehensive FDA Category A, B, C, D, X medication safety guide with American drug names.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-yellow-300 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">American Experts</h3>
                    <p className="opacity-90">Access to American board-certified OB/GYNs and registered dietitians for personalized advice.</p>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* American Pricing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-12 bg-gradient-to-r from-blue-600 to-red-600 text-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">🇺🇸 Premium American Pricing</h2>
              <div className="text-5xl font-bold mb-2">$4.99/month</div>
              <p className="text-xl opacity-90 mb-8">
                Premium pregnancy safety guidance at an affordable American price. Cancel anytime, no questions asked.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Start Free Trial
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                * Prices in US Dollars. 7-day free trial for all new American users. HSA/FSA eligible.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default USPage
