import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Smartphone } from 'lucide-react'

const SafemamaVsWebMD: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama vs WebMD Pregnancy 2025 | Detailed App Comparison</title>
        <meta name="description" content="Compare SafeMama vs WebMD Pregnancy apps. Features, pricing, and which is better for expecting mothers." />
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Link to="/compare" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Comparison
            </Link>
          </motion.div>
          
          <div className="text-center">
            <Smartphone className="w-16 h-16 text-primary-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">SafeMama vs WebMD Pregnancy</h1>
            <p className="text-xl text-gray-600">Detailed comparison coming soon...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SafemamaVsWebMD
