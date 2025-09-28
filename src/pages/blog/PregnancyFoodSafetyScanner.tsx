import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Scan } from 'lucide-react'

const PregnancyFoodSafetyScanner: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Pregnancy Food Safety Scanner | Technology Guide - SafeMama</title>
        <meta name="description" content="Learn how AI-powered food safety scanning works during pregnancy. Technology behind SafeMama's instant food safety analysis." />
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Blog
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="flex items-center mb-6">
              <Scan className="w-8 h-8 text-green-500 mr-3" />
              <h1 className="text-4xl font-bold text-gray-900">AI Pregnancy Food Safety Scanner</h1>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              Discover how AI technology revolutionizes pregnancy food safety with instant scanning and analysis.
            </p>
            <div className="prose prose-lg max-w-none">
              <p>Content coming soon...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default PregnancyFoodSafetyScanner
