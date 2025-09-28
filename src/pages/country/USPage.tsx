import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'

const USPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama US | Pregnancy Safety Scanner for American Mothers</title>
        <meta name="description" content="SafeMama pregnancy safety scanner for US mothers. FDA-compliant food safety guidance for American expecting mothers." />
      </Helmet>

      <div className="min-h-screen bg-white pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">SafeMama for US Mothers</h1>
            <p className="text-xl text-gray-600">FDA-compliant pregnancy safety guidance coming soon...</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default USPage
