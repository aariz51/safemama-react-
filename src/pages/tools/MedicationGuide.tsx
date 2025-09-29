import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Search, Pill, Shield, AlertTriangle, CheckCircle, XCircle, Download, Smartphone, Star, Info, ArrowRight, Heart } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

interface Medication {
  name: string
  safe: boolean
  category: 'otc' | 'prescription' | 'supplement' | 'herbal'
  safetyLevel: 'safe' | 'caution' | 'avoid' | 'consult'
  reason: string
  alternatives?: string[]
  dosage?: string
  trimester_specific?: {
    first: 'safe' | 'caution' | 'avoid'
    second: 'safe' | 'caution' | 'avoid'
    third: 'safe' | 'caution' | 'avoid'
  }
}

const MedicationGuide: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [result, setResult] = useState<Medication | null>(null)
  const [loading, setLoading] = useState(false)
  const [notFound, setNotFound] = useState(false)

  // Enhanced medication database
  const medicationDatabase: Medication[] = [
    {
      name: 'acetaminophen',
      safe: true,
      category: 'otc',
      safetyLevel: 'safe',
      reason: 'Generally safe during pregnancy when used as directed. Preferred pain reliever and fever reducer.',
      alternatives: [],
      dosage: 'Maximum 3000mg per day, follow package instructions',
      trimester_specific: { first: 'safe', second: 'safe', third: 'safe' }
    },
    {
      name: 'tylenol',
      safe: true,
      category: 'otc',
      safetyLevel: 'safe',
      reason: 'Contains acetaminophen, which is generally safe during pregnancy when used as directed.',
      alternatives: [],
      dosage: 'Maximum 3000mg per day, follow package instructions',
      trimester_specific: { first: 'safe', second: 'safe', third: 'safe' }
    },
    {
      name: 'ibuprofen',
      safe: false,
      category: 'otc',
      safetyLevel: 'avoid',
      reason: 'May cause complications including premature closure of ductus arteriosus and reduced amniotic fluid.',
      alternatives: ['acetaminophen', 'tylenol'],
      dosage: 'Avoid during pregnancy',
      trimester_specific: { first: 'caution', second: 'caution', third: 'avoid' }
    },
    {
      name: 'aspirin',
      safe: false,
      category: 'otc',
      safetyLevel: 'caution',
      reason: 'Low-dose aspirin may be prescribed by doctors, but regular doses should be avoided due to bleeding risks.',
      alternatives: ['acetaminophen'],
      dosage: 'Only under medical supervision',
      trimester_specific: { first: 'caution', second: 'caution', third: 'avoid' }
    },
    {
      name: 'prenatal vitamin',
      safe: true,
      category: 'supplement',
      safetyLevel: 'safe',
      reason: 'Essential supplement providing folate, iron, and other nutrients critical for pregnancy.',
      alternatives: [],
      dosage: 'One daily or as recommended by healthcare provider',
      trimester_specific: { first: 'safe', second: 'safe', third: 'safe' }
    },
    {
      name: 'folic acid',
      safe: true,
      category: 'supplement',
      safetyLevel: 'safe',
      reason: 'Critical for preventing neural tube defects. Should be taken before conception and during pregnancy.',
      alternatives: ['folate', 'prenatal vitamin'],
      dosage: '400-800mcg daily',
      trimester_specific: { first: 'safe', second: 'safe', third: 'safe' }
    },
    {
      name: 'iron supplement',
      safe: true,
      category: 'supplement',
      safetyLevel: 'safe',
      reason: 'Often needed to prevent anemia during pregnancy. May cause constipation.',
      alternatives: ['iron-rich foods', 'prenatal vitamin with iron'],
      dosage: '27mg daily or as prescribed',
      trimester_specific: { first: 'safe', second: 'safe', third: 'safe' }
    },
    {
      name: 'antacid',
      safe: true,
      category: 'otc',
      safetyLevel: 'safe',
      reason: 'Calcium and magnesium-based antacids are generally safe for heartburn relief.',
      alternatives: ['dietary changes', 'smaller meals'],
      dosage: 'Follow package instructions, avoid aluminum-based',
      trimester_specific: { first: 'safe', second: 'safe', third: 'safe' }
    },
    {
      name: 'diphenhydramine',
      safe: true,
      category: 'otc',
      safetyLevel: 'caution',
      reason: 'Generally considered safe for allergies and nausea, but may cause drowsiness.',
      alternatives: ['loratadine', 'cetirizine'],
      dosage: 'Use only as needed, consult healthcare provider',
      trimester_specific: { first: 'caution', second: 'safe', third: 'safe' }
    },
    {
      name: 'vitamin d',
      safe: true,
      category: 'supplement',
      safetyLevel: 'safe',
      reason: 'Important for bone health and immune function. Many pregnant women are deficient.',
      alternatives: ['sunlight exposure', 'vitamin d-rich foods'],
      dosage: '600-1000 IU daily or as recommended',
      trimester_specific: { first: 'safe', second: 'safe', third: 'safe' }
    }
  ]

  const handleSearch = () => {
    if (!searchTerm.trim()) return

    setLoading(true)
    setNotFound(false)
    setResult(null)

    // Simulate API call delay
    setTimeout(() => {
      const found = medicationDatabase.find(
        med => med.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
               searchTerm.toLowerCase().includes(med.name.toLowerCase())
      )

      if (found) {
        setResult(found)
        setNotFound(false)
      } else {
        setResult(null)
        setNotFound(true)
      }
      setLoading(false)
    }, 800)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  const getSafetyColor = (level: string) => {
    switch (level) {
      case 'safe': return 'text-green-600 bg-green-50'
      case 'caution': return 'text-yellow-600 bg-yellow-50'
      case 'avoid': return 'text-red-600 bg-red-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getSafetyIcon = (level: string) => {
    switch (level) {
      case 'safe': return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'caution': return <AlertTriangle className="w-5 h-5 text-yellow-600" />
      case 'avoid': return <XCircle className="w-5 h-5 text-red-600" />
      default: return <Info className="w-5 h-5 text-gray-600" />
    }
  }

  return (
    <>
      <Helmet>
        <title>Pregnancy Medication Safety Guide | SafeMama - Safe Medications During Pregnancy</title>
        <meta 
          name="description" 
          content="Check if medications are safe during pregnancy. Search common drugs, supplements, and remedies for safety information and alternatives." 
        />
        <meta 
          name="keywords" 
          content="pregnancy medication safety, safe drugs pregnancy, pregnancy medicine guide, medication pregnancy, safe supplements pregnancy" 
        />
        <link rel="canonical" href="https://safemama.co/tools/medication-guide" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
              <Pill className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Medication Safety Guide
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Search medications, supplements, and remedies to check their safety during pregnancy. Get expert recommendations and safe alternatives.
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-8 mt-8 text-sm text-gray-600">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>4.8/5 Rating</span>
              </div>
              <div>500K+ searches</div>
              <div>Doctor reviewed</div>
            </div>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Search Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="p-8 mb-8">
                <div className="flex items-center mb-6">
                  <Search className="w-6 h-6 text-purple-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Check Medication Safety</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="Enter medication name (e.g., Tylenol, ibuprofen, prenatal vitamin...)"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyPress={handleKeyPress}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition-colors"
                    />
                    <Button 
                      onClick={handleSearch}
                      disabled={!searchTerm.trim() || loading}
                      size="lg"
                      icon={loading ? undefined : Search}
                    >
                      {loading ? 'Checking...' : 'Check Safety'}
                    </Button>
                  </div>
                  
                  <p className="text-sm text-gray-500">
                    Try searching: Tylenol, ibuprofen, prenatal vitamin, folic acid, iron supplement, antacid
                  </p>
                </div>

                {/* Important Warning */}
                <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div className="text-sm text-red-800">
                      <p className="font-semibold mb-1">Always Consult Your Healthcare Provider</p>
                      <p>
                        Never start, stop, or change medications without consulting your doctor. This tool provides general information only and cannot replace professional medical advice.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Results Section */}
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className={`p-8 mb-8 ${getSafetyColor(result.safetyLevel).split(' ')[1]} border-2 ${
                  result.safetyLevel === 'safe' ? 'border-green-200' :
                  result.safetyLevel === 'caution' ? 'border-yellow-200' :
                  'border-red-200'
                }`}>
                  <div className="flex items-center mb-6">
                    {getSafetyIcon(result.safetyLevel)}
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold capitalize text-gray-900">
                        {result.name}
                      </h3>
                      <div className="flex items-center mt-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSafetyColor(result.safetyLevel)}`}>
                          {result.safetyLevel === 'safe' ? '✅ Generally Safe' :
                           result.safetyLevel === 'caution' ? '⚠️ Use with Caution' :
                           result.safetyLevel === 'avoid' ? '❌ Avoid During Pregnancy' :
                           '👩‍⚕️ Consult Healthcare Provider'}
                        </span>
                        <span className="ml-3 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded capitalize">
                          {result.category === 'otc' ? 'Over-the-Counter' :
                           result.category === 'prescription' ? 'Prescription' :
                           result.category === 'supplement' ? 'Supplement' :
                           'Herbal/Natural'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Safety Information</h4>
                      <p className="text-gray-700">{result.reason}</p>
                    </div>
                    
                    {result.dosage && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Recommended Dosage</h4>
                        <p className="text-gray-700 font-medium">{result.dosage}</p>
                      </div>
                    )}
                    
                    {result.alternatives && result.alternatives.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {result.safe ? 'Related Options:' : 'Safe Alternatives:'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {result.alternatives.map((alt, index) => (
                            <span 
                              key={index}
                              className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize"
                            >
                              {alt}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Safety by Trimester:</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {(['first', 'second', 'third'] as const).map((trimester) => {
                          const safety = result.trimester_specific?.[trimester] || 'consult'
                          return (
                            <div key={trimester} className={`text-center p-4 rounded-lg border-2 ${
                              safety === 'safe' ? 'bg-green-50 border-green-200' :
                              safety === 'caution' ? 'bg-yellow-50 border-yellow-200' :
                              'bg-red-50 border-red-200'
                            }`}>
                              <div className="font-medium text-gray-900 capitalize mb-1">
                                {trimester} Trimester
                              </div>
                              <div className="flex items-center justify-center">
                                {getSafetyIcon(safety)}
                                <span className={`ml-2 text-sm font-medium ${getSafetyColor(safety).split(' ')[0]}`}>
                                  {safety === 'safe' ? 'Safe' :
                                   safety === 'caution' ? 'Caution' :
                                   'Avoid'}
                                </span>
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </Card>

                {/* App Promotion After Results */}
                <Card className="p-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                  <div className="text-center mb-6">
                    <Smartphone className="w-16 h-16 mx-auto mb-4 opacity-90" />
                    <h2 className="text-2xl font-bold mb-4">Get Complete Medication Database</h2>
                    <p className="text-lg opacity-90 max-w-2xl mx-auto">
                      Access our comprehensive medication database with 5,000+ drugs, personalized recommendations, and expert guidance in the SafeMama app.
                    </p>
                  </div>

                  {/* App Features */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Pill className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">5,000+ Medications</h3>
                      <p className="text-sm opacity-80">Complete prescription & OTC database</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Expert Reviews</h3>
                      <p className="text-sm opacity-80">Doctor-reviewed safety information</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-6 h-6" />
                      </div>
                      <h3 className="font-semibold mb-2">Personalized Advice</h3>
                      <p className="text-sm opacity-80">Based on your pregnancy stage</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                      </svg>
                      Download on App Store
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.safemama.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-white text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Get it on Google Play
                    </a>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Not Found Message with App Promotion */}
            {notFound && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 mb-8 text-center">
                  <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Medication not found in our basic database
                  </h3>
                  <p className="text-gray-600 mb-6">
                    We couldn't find "<strong>{searchTerm}</strong>" in our web tool database. But don't worry!
                  </p>
                  
                  <div className="bg-primary-50 rounded-lg p-6 mb-6">
                    <h4 className="font-semibold text-primary-900 mb-3">
                      💊 Get comprehensive medication safety information in the SafeMama app
                    </h4>
                    <ul className="text-primary-800 text-sm space-y-2 text-left max-w-md mx-auto">
                      <li>• Search 5,000+ medications and supplements</li>
                      <li>• Get personalized safety recommendations</li>
                      <li>• Access trimester-specific guidance</li>
                      <li>• Expert-reviewed drug interactions</li>
                      <li>• Direct consultation with healthcare professionals</li>
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                    <a
                      href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                      </svg>
                      Download on App Store
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.safemama.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-primary-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-primary-700 transition-colors"
                    >
                      <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                      Get it on Google Play
                    </a>
                  </div>
                </Card>
              </motion.div>
            )}

            {/* Popular Searches */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Popular Medication Searches
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {['Tylenol', 'Ibuprofen', 'Prenatal Vitamin', 'Folic Acid', 'Iron Supplement', 'Antacid', 'Aspirin', 'Vitamin D'].map((med) => (
                    <button
                      key={med}
                      onClick={() => {
                        setSearchTerm(med.toLowerCase())
                        setTimeout(() => {
                          const found = medicationDatabase.find(
                            medication => medication.name.toLowerCase().includes(med.toLowerCase()) ||
                                         med.toLowerCase().includes(medication.name.toLowerCase())
                          )
                          if (found) {
                            setResult(found)
                            setNotFound(false)
                          } else {
                            setResult(null)
                            setNotFound(true)
                          }
                        }, 100)
                      }}
                      className="p-3 bg-gray-50 hover:bg-gray-100 rounded-lg text-gray-700 hover:text-gray-900 transition-colors text-left"
                    >
                      <ArrowRight className="w-4 h-4 inline mr-2" />
                      {med}
                    </button>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Educational Content */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  Medication Safety During Pregnancy
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">General Guidelines</h3>
                    <ul className="text-gray-600 text-sm space-y-2 leading-relaxed">
                      <li>• Always consult your healthcare provider before taking any medication</li>
                      <li>• Provide a complete list of all medications and supplements to your doctor</li>
                      <li>• Never stop prescribed medications without medical supervision</li>
                      <li>• Be cautious with herbal remedies - "natural" doesn't always mean safe</li>
                      <li>• Read all labels carefully and follow dosing instructions</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">FDA Pregnancy Categories</h3>
                    <ul className="text-gray-600 text-sm space-y-2 leading-relaxed">
                      <li>• <strong>Category A:</strong> Safe - adequate human studies show no risk</li>
                      <li>• <strong>Category B:</strong> Probably safe - animal studies show no risk</li>
                      <li>• <strong>Category C:</strong> Use with caution - benefits may outweigh risks</li>
                      <li>• <strong>Category D:</strong> Use only if necessary - some risk documented</li>
                      <li>• <strong>Category X:</strong> Avoid - risk outweighs any benefit</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Final Disclaimer */}
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="p-6 bg-red-50 border-red-200">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-red-800">
                    <p className="font-semibold mb-1">Important Medical Disclaimer</p>
                    <p>
                      This tool provides general educational information only and should never replace professional medical advice. 
                      Medication safety during pregnancy is complex and individualized. Always consult your healthcare provider or pharmacist 
                      before making any decisions about medications during pregnancy or breastfeeding.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MedicationGuide
