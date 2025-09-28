import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Smartphone,
  Heart,
  Shield,
  Users,
  BookOpen
} from 'lucide-react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  
  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Download', href: 'https://dub.sh/safemama' }
    ],
    tools: [
      { name: 'Due Date Calculator', href: '/tools/due-date-calculator' },
      { name: 'Food Safety Checker', href: '/tools/food-safety-checker' },
      { name: 'Nutrition Calculator', href: '/tools/nutrition-calculator' },
      { name: 'Medication Guide', href: '/tools/medication-guide' }
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Safety Guides', href: '#guides' },
      { name: 'Compare Apps', href: '/compare' },
      { name: 'Country Guides', href: '#country-guides' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ]
  }
  
  const socialLinks = [
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Instagram', href: '#', icon: Instagram },
    { name: 'LinkedIn', href: '#', icon: Linkedin }
  ]
  
  const stats = [
    { icon: Users, value: '50,000+', label: 'Happy Mothers' },
    { icon: Shield, value: '4.8★', label: 'App Store Rating' },
    { icon: Heart, value: '10,000+', label: 'Safe Scans Daily' },
    { icon: BookOpen, value: '100+', label: 'Safety Guides' }
  ]
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-primary-900/10 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pregnancy-dots opacity-5"></div>
      
      {/* Stats Section */}
      <div className="border-b border-gray-700/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl mb-4 mx-auto">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <img
                src="/images/logo/safemama-logo.png"
                alt="SafeMama Logo"
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                SafeMama
              </span>
            </Link>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Peace of Mind in Every Scan - Your AI Pregnancy Safety Assistant. 
              Trusted by over 50,000 expecting mothers worldwide for safe pregnancy decisions.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">Worldwide - Serving Global Families</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:support@safemama.co" className="text-gray-300 hover:text-white transition-colors">
                  support@safemama.co
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-300">24/7 Support Available</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center justify-center w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 rounded-xl transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Footer Links */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Tools</h4>
              <ul className="space-y-3">
                {footerLinks.tools.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-primary-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Download Section */}
      <div className="border-t border-gray-700/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Start Your Safe Pregnancy Journey Today</h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of expecting mothers who trust SafeMama for their pregnancy safety decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <motion.a
                href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <img
                  src="/images/badges/app-store-coming-soon.png"
                  alt="Download on App Store"
                  className="h-14 w-auto"
                />
              </motion.a>
              
              <motion.a
                href="https://play.google.com/store/apps/details?id=com.safemama.app"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <img
                  src="/images/badges/google-play-coming-soon.png"
                  alt="Get it on Google Play"
                  className="h-14 w-auto"
                />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-700/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-300 text-sm">
              © {currentYear} SafeMama. All rights reserved. Made with ❤️ for expecting mothers worldwide.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <a href="#privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="#terms" className="hover:text-primary-400 transition-colors">Terms of Service</a>
              <a href="#cookies" className="hover:text-primary-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
