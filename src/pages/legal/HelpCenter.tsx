import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Search, 
  HelpCircle, 
  Book, 
  MessageCircle, 
  Settings,
  Smartphone,
  CreditCard,
  Shield,
  Users,
  ChevronRight,
  ChevronDown,
  Mail,
  Phone,
  Clock,
  ExternalLink
} from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  
  const categories = [
    {
      icon: Smartphone,
      title: "Getting Started",
      description: "Learn how to use SafeMama's core features",
      count: 8,
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Shield,
      title: "AI Scanner & Safety",
      description: "How the AI scanner works and safety analysis",
      count: 12,
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: CreditCard,
      title: "Subscription & Billing",
      description: "Premium plans, payments, and account management",
      count: 10,
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Settings,
      title: "Account Settings",
      description: "Profile, privacy settings, and preferences",
      count: 6,
      color: "from-orange-500 to-red-500"
    },
    {
      icon: MessageCircle,
      title: "Ask an Expert",
      description: "How to use the AI Q&A feature effectively",
      count: 5,
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Book,
      title: "Pregnancy Guides",
      description: "Using personalized pregnancy content",
      count: 7,
      color: "from-pink-500 to-rose-500"
    }
  ]

  const popularArticles = [
    {
      title: "How to scan products with SafeMama",
      category: "Getting Started",
      views: "15.2k views",
      readTime: "3 min read"
    },
    {
      title: "Understanding safety ratings: Safe, Caution, Avoid",
      category: "AI Scanner & Safety",
      views: "12.8k views", 
      readTime: "5 min read"
    },
    {
      title: "How to upgrade to SafeMama Premium",
      category: "Subscription & Billing",
      views: "9.1k views",
      readTime: "2 min read"
    },
    {
      title: "Setting up your pregnancy profile",
      category: "Getting Started",
      views: "8.5k views",
      readTime: "4 min read"
    },
    {
      title: "Getting accurate answers from Ask an Expert",
      category: "Ask an Expert",
      views: "7.3k views",
      readTime: "3 min read"
    },
    {
      title: "Troubleshooting camera and scanning issues",
      category: "AI Scanner & Safety",
      views: "6.9k views",
      readTime: "6 min read"
    }
  ]

  const faqs = [
    {
      question: "Is SafeMama free to use?",
      answer: "SafeMama offers both free and premium tiers. Free users get 3 scans and 3 Ask Expert questions for life. Premium subscribers get unlimited access to all features including unlimited scans, personalized guides, and priority support."
    },
    {
      question: "How accurate is the AI scanner?",
      answer: "Our AI scanner uses advanced machine learning trained on medical literature and pregnancy safety data. While highly accurate, it should complement, not replace, professional medical advice. Always consult your healthcare provider for specific medical concerns."
    },
    {
      question: "Can I use SafeMama in multiple countries?",
      answer: "Yes! SafeMama works worldwide and adapts to local food safety regulations. Our database includes products from major markets including US, UK, Canada, Australia, and many European countries."
    },
    {
      question: "How do I cancel my Premium subscription?",
      answer: "You can cancel your subscription anytime through your account settings or directly through the App Store/Google Play Store. Your Premium features will remain active until the end of your current billing period."
    },
    {
      question: "Is my personal data secure?",
      answer: "Absolutely. We use enterprise-grade security and comply with international privacy standards including GDPR. Your pregnancy data is encrypted and never shared with third parties for marketing purposes."
    },
    {
      question: "Can I export my scan history?",
      answer: "Yes, Premium subscribers can export their complete scan history, pregnancy journey data, and AI-generated guides in PDF format through the account settings."
    },
    {
      question: "What if the scanner can't identify a product?",
      answer: "If automatic scanning fails, you can use our manual search feature (Premium) or ask our expert AI system for guidance. Our database is continuously updated with new products."
    },
    {
      question: "Do you offer customer support in other languages?",
      answer: "Currently, SafeMama is available in English with customer support provided in English. We're working on expanding to more languages based on user demand."
    }
  ]

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      action: "contact@safemama.co",
      href: "mailto:contact@safemama.co",
      availability: "24/7"
    },
    {
      icon: MessageCircle,
      title: "In-App Chat",
      description: "Chat with our support team in real-time",
      action: "Open App Chat",
      href: "https://dub.sh/safemama",
      availability: "Mon-Fri 9AM-6PM EST"
    },
    {
      icon: Book,
      title: "Knowledge Base",
      description: "Browse detailed guides and tutorials",
      action: "Browse Articles",
      href: "#knowledge-base",
      availability: "Always Available"
    }
  ]

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <Helmet>
        <title>Help Center - SafeMama | Support, FAQs & Guides</title>
        <meta name="description" content="Get help with SafeMama pregnancy app. Find answers to common questions, browse guides, and contact our support team for assistance." />
        <meta name="keywords" content="SafeMama help, pregnancy app support, FAQ, customer service, how to use SafeMama" />
        <link rel="canonical" href="https://safemama.co/help/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <motion.div 
            className="mb-8" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />Back to Home
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div 
            className="text-center mb-16" 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How can we help you?
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Find answers to common questions, browse helpful guides, or get in touch with our support team.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto relative">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for help articles, FAQs, or topics..."
                  className="w-full pl-12 pr-4 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 shadow-lg"
                />
              </div>
            </div>
          </motion.div>

          {/* Help Categories */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                  <div className="p-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${category.color} rounded-xl mb-4`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{category.count} articles</span>
                      <ChevronRight className="w-5 h-5 text-gray-400" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Popular Articles */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Articles</h2>
            <Card>
              <div className="divide-y divide-gray-200">
                {popularArticles.map((article, index) => (
                  <div key={index} className="p-6 hover:bg-gray-50 cursor-pointer transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{article.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                            {article.category}
                          </span>
                          <span>{article.views}</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-gray-400 ml-4" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-4xl mx-auto">
              {filteredFAQs.length > 0 ? (
                <div className="space-y-4">
                  {filteredFAQs.map((faq, index) => (
                    <Card key={index} className="overflow-hidden">
                      <button
                        onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                        className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                          {expandedFAQ === index ? (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      {expandedFAQ === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-12">
                  <HelpCircle className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or browse our categories above.</p>
                </Card>
              )}
            </div>
          </motion.div>

          {/* Contact Support */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Still Need Help?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {contactOptions.map((option, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full mb-4">
                      <option.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm">{option.description}</p>
                    <div className="flex items-center justify-center text-xs text-gray-500 mb-4">
                      <Clock className="w-3 h-3 mr-1" />
                      {option.availability}
                    </div>
                    <Button
                      variant={index === 0 ? "primary" : "outline"}
                      size="sm"
                      href={option.href}
                      className="w-full"
                      icon={option.href.startsWith('http') ? ExternalLink : undefined}
                    >
                      {option.action}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
          >
            <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                <p className="text-primary-100 mb-6">
                  Access commonly requested information and features
                </p>
                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    variant="secondary" 
                    href="/privacy"
                    className="bg-white text-primary-600 hover:bg-gray-100"
                  >
                    Privacy Policy
                  </Button>
                  <Button 
                    variant="secondary" 
                    href="/terms"
                    className="bg-white text-primary-600 hover:bg-gray-100"
                  >
                    Terms of Service
                  </Button>
                  <Button 
                    variant="outline" 
                    href="/delete-account"
                    className="border-white text-white hover:bg-white hover:text-primary-600"
                  >
                    Delete Account
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default HelpCenter
