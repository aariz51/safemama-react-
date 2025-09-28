import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Pill, Shield, AlertTriangle, CheckCircle, Search } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const MedicationGuide: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Pregnancy Medication Guide | SafeMama - Safe Medications During Pregnancy</title>
        <meta 
          name="description" 
          content="Comprehensive medication guide for pregnancy. Check which medications are safe during pregnancy with our expert-reviewed database of prescription and over-the-counter drugs." 
        />
        <meta 
          name="keywords" 
          content="pregnancy medication guide, safe medications pregnancy, pregnancy drugs, medication safety pregnancy, prescription drugs pregnancy" 
        />
        <link rel="canonical" href="https://safemama.co/tools/medication-guide/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <Pill className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Pregnancy Medication Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Check medication safety during pregnancy with our comprehensive database of prescription 
              and over-the-counter drugs. Get expert-reviewed safety information.
            </p>
          </motion.div>

          {/* Search Section */}
          <motion.div
            className="max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Search className="w-6 h-6 text-primary-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Search Medications</h2>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter medication name (e.g., Acetaminophen, Ibuprofen)..."
                    className="w-full px-4 py-4 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-lg"
                  />
                  <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>

                <Button className="w-full" size="lg">
                  Check Medication Safety
                </Button>
              </div>

              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-red-700 text-sm">
                  <strong>Important:</strong> Always consult your healthcare provider before taking any medication during pregnancy. 
                  This tool is for informational purposes only.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Common Medications */}
          <motion.div
            className="max-w-6xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Common Pregnancy Medications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Safe Medications */}
              <Card className="p-6 border-l-4 border-green-500">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Generally Safe</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Acetaminophen (Tylenol)</strong>
                      <p className="text-sm text-gray-600">Safe for pain and fever</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Prenatal Vitamins</strong>
                      <p className="text-sm text-gray-600">Essential for pregnancy</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Folic Acid</strong>
                      <p className="text-sm text-gray-600">Prevents birth defects</p>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Use with Caution */}
              <Card className="p-6 border-l-4 border-yellow-500">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-yellow-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Use with Caution</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Antihistamines</strong>
                      <p className="text-sm text-gray-600">Some are safe, consult doctor</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Certain Antibiotics</strong>
                      <p className="text-sm text-gray-600">Only specific types are safe</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Antacids</strong>
                      <p className="text-sm text-gray-600">Most are safe in moderation</p>
                    </div>
                  </li>
                </ul>
              </Card>

              {/* Avoid During Pregnancy */}
              <Card className="p-6 border-l-4 border-red-500">
                <div className="flex items-center mb-4">
                  <Shield className="w-6 h-6 text-red-500 mr-3" />
                  <h3 className="text-lg font-semibold text-gray-900">Avoid During Pregnancy</h3>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Ibuprofen (Advil)</strong>
                      <p className="text-sm text-gray-600">Especially after 20 weeks</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Aspirin</strong>
                      <p className="text-sm text-gray-600">High doses can be harmful</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <div>
                      <strong>Certain Acne Medications</strong>
                      <p className="text-sm text-gray-600">Can cause birth defects</p>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </motion.div>

          {/* Coming Soon Message */}
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="p-12 max-w-2xl mx-auto">
              <Pill className="w-16 h-16 text-primary-500 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Comprehensive Database Coming Soon
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We're working on a comprehensive medication database with detailed safety information 
                for thousands of medications during pregnancy.
              </p>
              <div className="bg-blue-50 rounded-lg p-6">
                <p className="text-blue-800 font-medium">
                  Get the full SafeMama app for instant medication scanning and AI-powered safety analysis.
                </p>
              </div>
            </Card>
          </motion.div>

          {/* App Promotion */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Get SafeMama App</h3>
                <p className="text-lg opacity-90 mb-6">
                  Scan medication packages instantly and get AI-powered safety recommendations 
                  tailored to your pregnancy stage.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <img
                    src="/images/badges/app-store-coming-soon.png"
                    alt="Download on App Store"
                    className="h-12 w-auto mx-auto sm:mx-0"
                  />
                  <img
                    src="/images/badges/google-play-coming-soon.png"
                    alt="Get it on Google Play"
                    className="h-12 w-auto mx-auto sm:mx-0"
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default MedicationGuide
