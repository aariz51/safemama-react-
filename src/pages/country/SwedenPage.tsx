import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Heart, Shield, Smartphone, Star, Download, Users, Award, Zap, Apple } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const SwedenPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama Sverige | AI Graviditets Säkerhetsapp | Svenska Riktlinjer</title>
        <meta 
          name="description" 
          content="SafeMama Sverige - AI-driven graviditetssäkerhetsapp enligt svenska hälsoriktlinjer. Matsäkerhetskontroll och medicinguide för svenska mödrar." 
        />
        <meta 
          name="keywords" 
          content="SafeMama Sverige, graviditetsapp Sverige, matsäkerhet graviditet, svenska graviditetsriktlinjer, graviditetstracker Stockholm, AI graviditetsassistent, Göteborg graviditetsapp, Malmö graviditet" 
        />
        <link rel="canonical" href="https://safemama.co/sweden" />
        <meta name="geo.region" content="SE" />
        <meta name="geo.placename" content="Sweden" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-100 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-full mb-8">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SafeMama <span className="text-blue-600">🇸🇪 Sverige</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Intelligent AI-teknik för <strong>8.000+ svenska mödrar</strong> från Stockholm till Göteborg. 
              Enligt Socialstyrelsen och svenska vårdrichtlinjer.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://apps.apple.com/se/app/safemama-pregnancy-app/id6748413103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors text-lg"
              >
                <Apple className="w-6 h-6 mr-3" />
                Ladda ner från App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safemama.app&gl=SE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Hämta på Google Play
              </a>
            </div>

            {/* Swedish Pricing */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="p-12 bg-gradient-to-r from-blue-500 to-yellow-500 text-white max-w-2xl mx-auto">
                <h2 className="text-3xl font-bold mb-4">🇸🇪 Svenska Priser</h2>
                <div className="text-5xl font-bold mb-2">69 kr/månad</div>
                <p className="text-xl opacity-90 mb-8">
                  Premium graviditetsbegledn ing till ett rättvist svenskt pris. Inga dolda avgifter.
                </p>
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  Starta gratis provperiod
                </Button>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SwedenPage
