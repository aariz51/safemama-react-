import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Mail, 
  MessageCircle, 
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Smartphone
} from 'lucide-react'
import Card from '../../components/ui/Card'
import Button from '../../components/ui/Button'

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: '',
    message: '',
    priority: 'medium'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get detailed help via email",
      contact: "contact@safemama.co",
      response: "Within 24 hours",
      color: "from-blue-500 to-cyan-500",
      href: "mailto:contact@safemama.co"
    },
    {
      icon: MessageCircle,
      title: "In-App Chat",
      description: "Live chat with our support team",
      contact: "Available in SafeMama app",
      response: "Real-time during business hours",
      color: "from-green-500 to-emerald-500",
      href: "https://dub.sh/safemama"
    },
    {
      icon: Phone,
      title: "Emergency Support",
      description: "For urgent technical issues",
      contact: "Available for Premium users",
      response: "Mon-Fri 9AM-6PM EST",
      color: "from-red-500 to-pink-500",
      href: "#emergency"
    }
  ]

  const supportCategories = [
    "General Question",
    "Technical Issue",
    "Account & Billing",
    "Feature Request",
    "Bug Report",
    "Partnership Inquiry",
    "Privacy & Data",
    "Other"
  ]

  const businessInfo = {
    address: "SafeMama Headquarters\nWorldwide Operations\nServing Global Families",
    hours: {
      weekday: "Monday - Friday: 9:00 AM - 6:00 PM EST",
      weekend: "Saturday - Sunday: Email support only"
    },
    social: [
      { icon: Facebook, href: "https://www.facebook.com/SafemamaApp", name: "Facebook" },
      { icon: Twitter, href: "https://x.com/RasheedAariz", name: "Twitter" },
      { icon: Instagram, href: "https://www.instagram.com/safemama_app/", name: "Instagram" },
      { icon: Linkedin, href: "https://www.linkedin.com/in/aariz-rasheed-5487a7348/", name: "LinkedIn" }
    ]
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <motion.div 
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-green-50 border-green-200">
              <div className="p-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-green-900 mb-4">
                  Message Sent Successfully!
                </h2>
                <p className="text-green-700 mb-6">
                  Thank you for contacting SafeMama. We've received your message and will respond within 24 hours.
                </p>
                <div className="bg-green-100 p-4 rounded-lg mb-6">
                  <p className="text-sm text-green-800">
                    <strong>Reference ID:</strong> SM-{Date.now()}<br/>
                    <strong>Category:</strong> {formData.category}<br/>
                    <strong>Priority:</strong> {formData.priority.charAt(0).toUpperCase() + formData.priority.slice(1)}
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Button 
                    variant="primary" 
                    href="/"
                    className="bg-green-600 hover:bg-green-700"
                  >
                    Return to Home
                  </Button>
                  <Button 
                    variant="outline" 
                    href="/help"
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    Visit Help Center
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Contact Us - SafeMama | Customer Support & Help</title>
        <meta name="description" content="Get in touch with SafeMama's customer support team. We're here to help with questions about pregnancy safety, app features, and technical support." />
        <meta name="keywords" content="SafeMama contact, customer support, help desk, pregnancy app support, contact SafeMama team" />
        <link rel="canonical" href="https://safemama.co/contact/" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 pt-24">
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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-6">
              <MessageCircle className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're here to help! Reach out with questions about pregnancy safety, app features, or any other concerns.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <Card>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Category *
                        </label>
                        <select
                          name="category"
                          value={formData.category}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                          required
                        >
                          <option value="">Select a category</option>
                          {supportCategories.map((category) => (
                            <option key={category} value={category}>
                              {category}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Priority
                        </label>
                        <select
                          name="priority"
                          value={formData.priority}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="low">Low</option>
                          <option value="medium">Medium</option>
                          <option value="high">High</option>
                          <option value="urgent">Urgent</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Brief description of your inquiry"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Please provide as much detail as possible about your question or issue..."
                        required
                      ></textarea>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <AlertCircle className="w-5 h-5 text-blue-500 mr-2 mt-0.5" />
                        <p className="text-sm text-blue-700">
                          <strong>Privacy Note:</strong> We'll only use your information to respond to your inquiry. 
                          Check our <Link to="/privacy" className="underline">Privacy Policy</Link> for more details.
                        </p>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full"
                      icon={Send}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Contact Methods */}
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Other Ways to Reach Us</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <div key={index} className="border-l-4 border-primary-500 pl-4">
                        <div className="flex items-start">
                          <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-r ${method.color} rounded-full mr-3 flex-shrink-0`}>
                            <method.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{method.title}</h4>
                            <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                            <p className="text-sm font-medium text-primary-600">{method.contact}</p>
                            <p className="text-xs text-gray-500">{method.response}</p>
                            {method.href.startsWith('http') && (
                              <Button
                                variant="outline"
                                size="sm"
                                href={method.href}
                                className="mt-2"
                                icon={ExternalLink}
                              >
                                Open
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Business Hours */}
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Support Hours
                  </h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-gray-900">Live Support</p>
                      <p className="text-sm text-gray-600">{businessInfo.hours.weekday}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email Support</p>
                      <p className="text-sm text-gray-600">24/7 - We respond within 24 hours</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Weekends</p>
                      <p className="text-sm text-gray-600">{businessInfo.hours.weekend}</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Company Info */}
              <Card>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Company Information
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-gray-900 mb-2">Address</p>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{businessInfo.address}</p>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 mb-3">Follow Us</p>
                      <div className="flex space-x-3">
                        {businessInfo.social.map((social, index) => (
                          <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center w-10 h-10 bg-gray-100 hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 rounded-lg transition-all duration-300 hover:text-white"
                          >
                            <social.icon className="w-5 h-5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Quick Download */}
              <Card className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white">
                <div className="p-6 text-center">
                  <Smartphone className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-lg font-bold mb-2">Try SafeMama Today</h3>
                  <p className="text-primary-100 mb-4 text-sm">
                    Join thousands of expecting mothers using SafeMama for pregnancy safety.
                  </p>
                  <Button 
                    variant="secondary" 
                    href="https://dub.sh/safemama"
                    className="bg-white text-primary-600 hover:bg-gray-100"
                    icon={ExternalLink}
                  >
                    Download App
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs
