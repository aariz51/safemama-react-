import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Shield, Lock, Eye, UserCheck, Globe, Mail } from 'lucide-react'
import Card from '../../components/ui/Card'

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        {
          subtitle: "Personal Data",
          items: [
            "Name, email address, and mobile number when you register",
            "Pregnancy and health information you voluntarily provide",
            "Trimester, dietary preferences, and known allergies"
          ]
        },
        {
          subtitle: "User-Generated Content",
          items: [
            "Images of products you scan using our AI scanner",
            "Questions you ask our 'Ask an Expert' feature",
            "Topics for personalized pregnancy guides"
          ]
        },
        {
          subtitle: "Technical Data",
          items: [
            "Device ID and usage patterns for service optimization",
            "App performance data and crash reports",
            "Location data (only when explicitly granted)"
          ]
        }
      ]
    },
    {
      title: "How We Use Your Information",
      icon: UserCheck,
      content: [
        {
          subtitle: "Core Services",
          items: [
            "Provide personalized AI-driven analysis of products",
            "Answer your pregnancy and health-related questions",
            "Create and manage your SafeMama account"
          ]
        },
        {
          subtitle: "Service Improvement",
          items: [
            "Monitor usage to prevent fraud and abuse",
            "Ensure compliance with free tier limits",
            "Improve our AI algorithms and recommendations"
          ]
        },
        {
          subtitle: "Communication",
          items: [
            "Send important updates about the app",
            "Process payments and manage subscriptions",
            "Provide customer support when requested"
          ]
        }
      ]
    },
    {
      title: "Third-Party Services",
      icon: Globe,
      content: [
        {
          subtitle: "AI & Backend Services",
          items: [
            "OpenAI, L.L.C.: Powers our scanning and expert Q&A features",
            "Supabase, Inc.: Provides backend infrastructure and authentication",
            "Content and images sent to these services are subject to their privacy policies"
          ]
        },
        {
          subtitle: "Payment Processing",
          items: [
            "Stripe, Razorpay, and Dodo: Process premium subscription payments",
            "Payment data is handled directly by these secure payment processors",
            "We do not store your payment card information"
          ]
        }
      ]
    }
  ]

  return (
    <>
      <Helmet>
        <title>Privacy Policy - SafeMama | Your Data Protection & Privacy Rights</title>
        <meta name="description" content="Learn how SafeMama protects your privacy and handles your personal data. Our comprehensive privacy policy explains data collection, usage, and your rights." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://safemama.co/privacy/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information when you use SafeMama.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span className="font-medium">Last Updated: January 15, 2025</span>
            </div>
          </motion.div>

          {/* Quick Summary */}
          <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 text-primary-600 mr-3" />
                Privacy at a Glance
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Shield className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">We Don't Sell Data</h3>
                  <p className="text-sm text-gray-600">Your personal information is never sold to third parties</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Lock className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Secure by Design</h3>
                  <p className="text-sm text-gray-600">Industry-standard encryption protects your data</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <UserCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">You're in Control</h3>
                  <p className="text-sm text-gray-600">Manage your data and privacy settings anytime</p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Detailed Sections */}
          <div className="space-y-12 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <section.icon className="w-6 h-6 text-primary-600 mr-3" />
                    {section.title}
                  </h2>
                  
                  <div className="space-y-6">
                    {section.content.map((subsection, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">{subsection.subtitle}</h3>
                        <ul className="space-y-2">
                          {subsection.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start">
                              <span className="w-2 h-2 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Medical Disclaimer */}
          <motion.div className="mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Card className="p-8 bg-yellow-50 border-yellow-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">⚠️ Important Medical Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed">
                The information provided by SafeMama, including all AI-generated content, is for informational purposes only 
                and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of 
                your physician or other qualified health provider with any questions you may have regarding a medical condition.
              </p>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}>
            <Card className="p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
              <p className="text-lg opacity-90 mb-6">
                We're here to help. Contact us if you have any questions about this privacy policy or how we handle your data.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="mailto:contact@safemama.co" 
                  className="inline-flex items-center bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  contact@safemama.co
                </a>
                <span className="text-white/80">•</span>
                <span className="text-white/90">Response within 24 hours</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default PrivacyPolicy
