import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, FileText, AlertTriangle, CreditCard, User, Shield, Mail } from 'lucide-react'
import Card from '../../components/ui/Card'

const TermsOfService: React.FC = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      icon: FileText,
      content: "By using our mobile application, SafeMama (the 'App'), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the App. These terms constitute a legally binding agreement between you and SafeMama."
    },
    {
      title: "Medical Disclaimer",
      icon: AlertTriangle,
      content: "THIS IS THE MOST IMPORTANT SECTION. The SafeMama App and all its content, including AI-generated responses from features like 'Product Scan' and 'Ask an Expert,' are provided for informational and educational purposes only. This content is not intended to be a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your doctor or another qualified health provider with any questions you may have regarding your pregnancy or a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this App."
    },
    {
      title: "Subscriptions and Payments",
      icon: CreditCard,
      content: "We offer both free and paid ('Premium') subscription plans. Free plans are subject to usage limits (e.g., 3 scans per month, 3 expert questions). Premium plans include monthly ($4.99) and yearly ($49.99) options. Payments are billed in advance on a recurring basis. Your subscription will automatically renew unless you cancel it. All plans are subject to fair use policies to prevent abuse of our AI services."
    },
    {
      title: "User Accounts",
      icon: User,
      content: "You are responsible for safeguarding your account and for any activities or actions under your password. You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account. We reserve the right to suspend or terminate accounts that violate these terms."
    },
    {
      title: "Limitation of Liability",
      icon: Shield,
      content: "In no event shall SafeMama, nor its directors, employees, partners, or agents, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the App, whether based on warranty, contract, tort (including negligence) or any other legal theory."
    }
  ]

  return (
    <>
      <Helmet>
        <title>Terms of Service - SafeMama | User Agreement & App Terms</title>
        <meta name="description" content="Read SafeMama's terms of service. Understand your rights and responsibilities when using our AI-powered pregnancy safety app." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://safemama.co/terms/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              These terms and conditions outline the rules and regulations for the use of SafeMama's mobile application and services.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <span className="font-medium">Last Updated: January 15, 2025</span>
            </div>
          </motion.div>

          {/* Important Notice */}
          <motion.div className="mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Card className="p-8 bg-red-50 border-red-200">
              <div className="flex items-start">
                <AlertTriangle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-red-900 mb-4">Important Medical Disclaimer</h2>
                  <p className="text-red-800 leading-relaxed text-lg">
                    SafeMama provides <strong>informational content only</strong> and is not a substitute for professional medical advice. 
                    Always consult your healthcare provider for medical decisions during pregnancy.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Terms Sections */}
          <div className="space-y-8 mb-16">
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <section.icon className={`w-6 h-6 mr-3 ${
                      section.title === 'Medical Disclaimer' ? 'text-red-600' : 'text-primary-600'
                    }`} />
                    {index + 1}. {section.title}
                  </h2>
                  <div className={`prose prose-lg max-w-none ${
                    section.title === 'Medical Disclaimer' ? 'text-red-800' : 'text-gray-700'
                  }`}>
                    <p className="leading-relaxed">{section.content}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Terms */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h3>
              <p className="text-gray-700">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                We will provide notice of any changes by posting the new Terms on this page and updating the "Last Updated" date.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Governing Law</h3>
              <p className="text-gray-700">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which SafeMama operates, 
                without regard to its conflict of law provisions.
              </p>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div className="text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 1 }}>
            <Card className="p-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <h2 className="text-2xl font-bold mb-4">Questions About These Terms?</h2>
              <p className="text-lg opacity-90 mb-6">
                If you have any questions about these Terms and Conditions, please contact us.
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
                <span className="text-white/90">Legal team responds within 48 hours</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default TermsOfService
