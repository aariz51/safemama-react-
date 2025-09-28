import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Calendar, Clock, User, Share2, Heart, Zap } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const PregnancyNutritionGuide: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Complete Pregnancy Nutrition Guide 2025 | Essential Nutrients - SafeMama</title>
        <meta 
          name="description" 
          content="Complete pregnancy nutrition guide with essential nutrients, meal plans, and expert advice for every trimester. Evidence-based nutrition for expecting mothers." 
        />
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Complete Pregnancy Nutrition Guide 2025
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Essential nutrients, meal plans, and expert advice for every trimester. Evidence-based nutrition for expecting mothers.
            </p>
            
            <Card className="p-8">
              <div className="flex items-center mb-6">
                <Heart className="w-6 h-6 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Essential Pregnancy Nutrients</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">First Trimester Focus</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Folic Acid: 600mcg daily</li>
                    <li>• Iron: 27mg daily</li>
                    <li>• Calcium: 1000mg daily</li>
                    <li>• Protein: 71g daily</li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900">Key Food Sources</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Leafy greens for folate</li>
                    <li>• Lean meats for iron</li>
                    <li>• Dairy for calcium</li>
                    <li>• Fish for omega-3s</li>
                  </ul>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default PregnancyNutritionGuide
