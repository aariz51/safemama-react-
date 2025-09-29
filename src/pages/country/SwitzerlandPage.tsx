import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { MapPin, Heart, Shield, Smartphone, Star, Download, Users, Award, Zap, Apple } from 'lucide-react'
import Button from '../../components/ui/Button'
import Card from '../../components/ui/Card'

const SwitzerlandPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>SafeMama Suisse | Application IA Grossesse Sécurisée | Schweiz Schwangerschafts-App</title>
        <meta 
          name="description" 
          content="SafeMama Suisse - Application de sécurité grossesse alimentée par IA. Vérificateur sécurité alimentaire, guide médicaments pour mères suisses. Téléchargez maintenant!" 
        />
        <meta 
          name="keywords" 
          content="SafeMama Suisse, application grossesse Suisse, sécurité alimentaire grossesse, directives grossesse Suisse, tracker grossesse Zurich, assistant grossesse IA, Genève application grossesse, Berne grossesse, Basel schwangerschaft" 
        />
        <link rel="canonical" href="https://safemama.co/switzerland" />
        <meta property="og:title" content="SafeMama Suisse | Application IA pour Mères Suisses" />
        <meta property="og:description" content="Plateforme de sécurité grossesse IA suivant les directives de santé suisses. Approuvée par 15.000+ mères suisses." />
        <meta property="og:image" content="https://safemama.co/images/og/safemama-switzerland.jpg" />
        <meta property="og:url" content="https://safemama.co/switzerland" />
        <meta name="geo.region" content="CH" />
        <meta name="geo.placename" content="Switzerland" />
        <meta name="geo.position" content="46.818188;8.227512" />
        <meta name="ICBM" content="46.818188, 8.227512" />
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
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-600 to-white rounded-full mb-8 border-4 border-red-600">
              <MapPin className="w-12 h-12 text-red-600" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              SafeMama <span className="text-red-600">🇨🇭 Suisse</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8">
              Intelligence Artificielle de qualité suisse pour <strong>15.000+ mères suisses</strong> de Genève à Zurich. 
              Conforme aux directives de l'Office Fédéral de la Santé Publique.
            </p>

            {/* Swiss Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">15K+</div>
                <div className="text-sm text-gray-600">Mères Suisses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">26</div>
                <div className="text-sm text-gray-600">Cantons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">4.9★</div>
                <div className="text-sm text-gray-600">Évaluation App Store</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">24/7</div>
                <div className="text-sm text-gray-600">Support Multilingue</div>
              </div>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a
                href="https://apps.apple.com/ch/app/safemama-pregnancy-app/id6748413103"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-black text-white font-semibold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors text-lg"
              >
                <Apple className="w-6 h-6 mr-3" />
                Télécharger sur App Store
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.safemama.app&gl=CH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-red-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-red-700 transition-colors text-lg"
              >
                <svg className="w-6 h-6 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Obtenir sur Google Play
              </a>
            </div>
          </motion.div>

          {/* Swiss-Specific Features */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-r from-red-50 to-white border-red-200">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🇨🇭 Qualité Suisse Premium
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Standards Suisses OFSP</h3>
                  <p className="text-gray-600">
                    Conforme aux directives de l'Office Fédéral de la Santé Publique et aux normes de qualité suisses.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Assurance Maladie Intégrée</h3>
                  <p className="text-gray-600">
                    Compatible avec le système de santé suisse et supporte toutes les caisses maladie principales.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Support Trilingue</h3>
                  <p className="text-gray-600">
                    Disponible en français, allemand et italien pour servir toute la Suisse.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Popular Swiss Cities */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Approuvé dans toute la Suisse
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-red-600">4,500+</div>
                  <div className="text-gray-600">Zurich</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">3,200+</div>
                  <div className="text-gray-600">Genève</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">2,800+</div>
                  <div className="text-gray-600">Basel</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">2,400+</div>
                  <div className="text-gray-600">Berne</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-red-600">2,100+</div>
                  <div className="text-gray-600">Lausanne</div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Swiss Pricing */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Card className="p-12 bg-gradient-to-r from-red-600 to-red-700 text-white max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">🇨🇭 Prix Premium Suisse</h2>
              <div className="text-5xl font-bold mb-2">CHF 8.90/mois</div>
              <p className="text-xl opacity-90 mb-8">
                Qualité suisse premium à un prix équitable. Aucun frais caché, résiliation à tout moment.
              </p>
              <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button variant="secondary" size="lg" className="bg-white text-red-600 hover:bg-gray-100">
                  Commencer l'essai gratuit
                </Button>
              </div>
              <p className="text-sm opacity-75 mt-4">
                * Prix en Francs Suisses. Essai gratuit de 7 jours pour toutes les nouvelles utilisatrices suisses.
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default SwitzerlandPage
