import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, Shield, Smartphone, Heart } from 'lucide-react'

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  
  const faqs = [
    {
      category: 'General',
      icon: HelpCircle,
      questions: [
        {
          question: 'What is SafeMama and how does it work?',
          answer: 'SafeMama is an AI-powered pregnancy safety app that helps expecting mothers make informed decisions about food, medicine, and product safety. Simply scan any item with your phone camera, and our advanced AI analyzes ingredients to provide instant safety recommendations tailored for pregnancy.'
        },
        {
          question: 'Is SafeMama free to use?',
          answer: 'SafeMama offers both free and premium plans. The free tier includes 3 scans and 3 expert questions. Premium plans start at $4.99/month and include unlimited scans, expert Q&A, personalized guides, and comprehensive safety analysis.'
        },
        {
          question: 'How accurate is SafeMama\'s AI analysis?',
          answer: 'Our AI is trained on medical databases and research from leading health organizations. While SafeMama provides reliable guidance based on current medical knowledge, we always recommend consulting with your healthcare provider for personalized medical advice.'
        },
        {
          question: 'Can I use SafeMama in my country?',
          answer: 'Yes! SafeMama is available worldwide in 150+ countries. Our AI recognizes products from global markets and provides region-specific safety recommendations based on local food safety standards.'
        }
      ]
    },
    {
      category: 'Safety & Privacy',
      icon: Shield,
      questions: [
        {
          question: 'Is my personal information safe with SafeMama?',
          answer: 'Absolutely. We take privacy seriously and use industry-standard encryption to protect your data. We never share your personal information with third parties, and you have full control over your data at all times.'
        },
        {
          question: 'Are the safety recommendations medically reviewed?',
          answer: 'Yes, our AI recommendations are based on guidelines from major health organizations including WHO, FDA, and medical research institutions. However, always consult your doctor for personalized medical advice.'
        },
        {
          question: 'What if I get conflicting information from my doctor?',
          answer: 'Your healthcare provider\'s advice should always take precedence. SafeMama is designed to complement, not replace, professional medical care. Use our information to have informed discussions with your healthcare team.'
        }
      ]
    },
    {
      category: 'Technical',
      icon: Smartphone,
      questions: [
        {
          question: 'Which devices and platforms does SafeMama support?',
          answer: 'SafeMama is available on both iOS and Android devices. We support iPhone 7 and newer, and Android devices running Android 7.0 or later. The app works on phones and tablets.'
        },
        {
          question: 'Do I need an internet connection to use SafeMama?',
          answer: 'An internet connection is required for scanning and AI analysis. However, your scan history and some basic guides can be accessed offline. We\'re working on expanding offline capabilities.'
        },
        {
          question: 'How do I update my pregnancy information in the app?',
          answer: 'You can update your due date, dietary preferences, allergies, and other pregnancy information anytime in the app settings. This helps us provide more personalized and accurate recommendations.'
        }
      ]
    },
    {
      category: 'Features',
      icon: Heart,
      questions: [
        {
          question: 'What types of products can I scan with SafeMama?',
          answer: 'You can scan food items, beverages, medications, supplements, cosmetics, and household products. Our AI analyzes ingredient lists, nutritional information, and safety data relevant to pregnancy.'
        },
        {
          question: 'Can I ask questions beyond just scanning products?',
          answer: 'Yes! The "Ask an Expert" feature lets you ask any pregnancy-related questions about nutrition, symptoms, lifestyle, and safety. Our AI provides comprehensive answers based on medical knowledge.'
        },
        {
          question: 'How do I share scan results with my healthcare provider?',
          answer: 'SafeMama includes easy sharing features. You can export scan results, questions, and recommendations as PDF reports to share during medical appointments for informed discussions with your healthcare team.'
        }
      ]
    }
  ]
  
  const toggleFAQ = (categoryIndex: number, questionIndex: number) => {
    const globalIndex = faqs.slice(0, categoryIndex).reduce((sum, cat) => sum + cat.questions.length, 0) + questionIndex
    setOpenIndex(openIndex === globalIndex ? null : globalIndex)
  }
  
  const getGlobalIndex = (categoryIndex: number, questionIndex: number) => {
    return faqs.slice(0, categoryIndex).reduce((sum, cat) => sum + cat.questions.length, 0) + questionIndex
  }
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about SafeMama. Can't find what you're looking for? 
            Contact our support team anytime.
          </p>
        </motion.div>
        
        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              className="mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center mb-8">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-xl mr-4">
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {category.category}
                </h3>
              </div>
              
              {/* Questions */}
              <div className="space-y-4">
                {category.questions.map((faq, questionIndex) => {
                  const globalIndex = getGlobalIndex(categoryIndex, questionIndex)
                  const isOpen = openIndex === globalIndex
                  
                  return (
                    <div
                      key={questionIndex}
                      className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100"
                    >
                      <button
                        onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:bg-gray-100"
                      >
                        <span className="font-semibold text-gray-900 text-lg pr-8">
                          {faq.question}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 0 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="flex-shrink-0"
                        >
                          {isOpen ? (
                            <Minus className="w-6 h-6 text-primary-600" />
                          ) : (
                            <Plus className="w-6 h-6 text-gray-400" />
                          )}
                        </motion.div>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 pt-2">
                              <p className="text-gray-700 leading-relaxed text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Contact Support CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-12 border border-primary-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Our support team is here to help you 24/7. Get personalized answers to your pregnancy safety questions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="mailto:support@safemama.co"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors duration-200"
              >
                Email Support
              </motion.a>
              <motion.a
                href="#live-chat"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-xl hover:bg-primary-600 hover:text-white transition-all duration-200"
              >
                Live Chat
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
