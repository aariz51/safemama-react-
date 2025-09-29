import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Heart, Shield, Smartphone, Star, Download, Users, Award, Zap, Apple } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const GermanyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama Deutschland | KI-gestützte Schwangerschafts-Sicherheits-App | Nach deutschen Richtlinien</title>
        <meta 
          name="description" 
          content="SafeMama Deutschland - KI-gestützte Schwangerschafts-Sicherheits-App nach deutschen Gesundheitsrichtlinien. Lebensmittelsicherheit, Medikamentenleitfaden für werdende Mütter." 
        />
        <meta 
          name="keywords" 
          content="SafeMama Deutschland, Schwangerschafts-App Deutschland, Lebensmittelsicherheit Schwangerschaft, deutsche Schwangerschaftsrichtlinien, Schwangerschafts-Tracker Berlin, KI Schwangerschafts-Assistent, München Schwangerschafts-App, Hamburg Schwangerschaft, Köln Schwangerschaftsleitfaden" 
        />
        <link rel="canonical" href="https://safemama.co/germany" />
        <meta property="og:title" content="SafeMama Deutschland | KI-gestützte Schwangerschafts-App" />
        <meta property="og:description" content="KI-gestützte Schwangerschafts-Sicherheitsplattform nach deutschen Gesundheitsrichtlinien. Von 25.000+ deutschen Müttern vertraut." />
        <meta property="og:image" content="https://safemama.co/images/og/safemama-germany.jpg" />
        <meta property="og:url" content="https://safemama.co/germany" />
        <meta name="geo.region" content="DE" />
        <meta name="geo.placename" content="Germany" />
        <meta name="geo.position" content="51.165691;10.451526" />
        <meta name="ICBM" content="51.165691, 10.451526" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-yellow-100 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Hero Section */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mb-8">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SafeMama <span className="text-red-600">🇩🇪 Deutschland</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Künstliche Intelligenz für <strong>25.000+ deutsche Mütter</strong> von Berlin bis München. 
              Nach deutschen Gesundheitsrichtlinien für sichere Schwangerschaften entwickelt.
            </p>

            {/* German Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">25K+</div>
                <div className="text-sm text-gray-600">Deutsche Nutzerinnen</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">16</div>
                <div className="text-sm text-gray-600">Bundesländer</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">4.9★</div>
                <div className="text-sm text-gray-600">App Store Bewertung</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Deutscher Support</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://apps.apple.com/de/app/safemama-pregnancy-app/id6748413103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors text-lg"
              >
                <Apple className="w-6 h-6 mr-3" />
                Im App Store laden
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safemama.app&gl=DE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Bei Google Play
              </a>
            </div>
          </motion.div>

          {/* German-Specific Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-r from-red-50 to-yellow-50 border-red-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🇩🇪 Für deutsche Mütter entwickelt
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Deutsche Gesundheitsrichtlinien</h3>
                  <p className="text-gray-600">
                    Alle Empfehlungen entsprechen den Richtlinien der Deutschen Gesellschaft für Gynäkologie und Geburtshilfe.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Krankenversicherung Integration</h3>
                  <p className="text-gray-600">
                    Nahtlose Integration mit dem deutschen Gesundheitssystem und Unterstützung für gesetzliche und private Krankenkassen.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Deutsche Produkte</h3>
                  <p className="text-gray-600">
                    Umfassende Datenbank mit deutschen Marken wie Edeka, Rewe, Aldi und lokalen Produkten.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Popular German Cities */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Vertraut in ganz Deutschland
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">8,500+</div>
                  <div className="text-gray-600">Berlin</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">6,200+</div>
                  <div className="text-gray-600">München</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">4,100+</div>
                  <div className="text-gray-600">Hamburg</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">3,800+</div>
                  <div className="text-gray-600">Köln</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">2,400+</div>
                  <div className="text-gray-600">Frankfurt</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* German Pricing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-12 bg-gradient-to-r from-red-500 to-yellow-500 text-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">🇩🇪 Deutsche Preise</h2>
              <div className="text-5xl font-bold mb-2">€5,99/Monat</div>
              <p className="text-xl opacity-90 mb-8">
                Premium Schwangerschaftsbetreuung zu einem fairen deutschen Preis. Keine versteckten Kosten, jederzeit kündbar.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Kostenlose Testversion starten
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                * Preise in Euro. 7-tägige kostenlose Testversion für alle neuen deutschen Nutzerinnen.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default GermanyPage
