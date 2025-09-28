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

  // Custom App Store and Google Play components
  const AppStoreBadge = () => (
    <motion.a
      href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div className="bg-black text-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
        <svg className="w-8 h-8" viewBox="0 0 384 512" fill="currentColor">
          <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
        </svg>
        <div>
          <div className="text-xs">Download on the</div>
          <div className="text-lg font-semibold -mt-1">App Store</div>
        </div>
      </div>
    </motion.a>
  )

  const GooglePlayBadge = () => (
    <motion.a
      href="https://play.google.com/store/apps/details?id=com.safemama.app"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block"
    >
      <div className="bg-black text-white rounded-lg px-6 py-3 flex items-center space-x-3 hover:bg-gray-800 transition-colors">
        <svg className="w-8 h-8" viewBox="0 0 512 512" fill="currentColor">
          <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
        </svg>
        <div>
          <div className="text-xs">Get it on</div>
          <div className="text-lg font-semibold -mt-1">Google Play</div>
        </div>
      </div>
    </motion.a>
  )
  
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pregnancy-dots opacity-10"></div>
      
      {/* Stats Section */}
      <div className="border-b border-gray-600/50 relative z-10">
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
                <div className="text-gray-200 text-sm font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Main Footer Content - Enhanced Visibility */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 via-secondary-400 to-accent-400 bg-clip-text text-transparent">
                SafeMama
              </span>
            </Link>
            
            <p className="text-gray-200 mb-6 text-lg leading-relaxed">
              Peace of Mind in Every Scan - Your AI Pregnancy Safety Assistant. 
              Trusted by over 50,000 expecting mothers worldwide for safe pregnancy decisions.
            </p>
            
            <div className="space-y-3 mb-8">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span className="text-gray-200">Worldwide - Serving Global Families</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary-400" />
                <a href="mailto:support@safemama.co" className="text-gray-200 hover:text-white transition-colors">
                  support@safemama.co
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary-400" />
                <span className="text-gray-200">24/7 Support Available</span>
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
                  className="flex items-center justify-center w-12 h-12 bg-gray-700 hover:bg-gradient-to-r hover:from-primary-500 hover:to-secondary-500 rounded-xl transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Footer Links - Enhanced Visibility */}
          <div className="lg:col-span-3 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-200 hover:text-primary-400 transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Tools</h4>
              <ul className="space-y-3">
                {footerLinks.tools.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-200 hover:text-primary-400 transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Resources</h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-200 hover:text-primary-400 transition-colors duration-200 font-medium"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-bold mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-200 hover:text-primary-400 transition-colors duration-200 font-medium"
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
      
      {/* Download Section with Custom Badges */}
      <div className="border-t border-gray-600/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Start Your Safe Pregnancy Journey Today</h3>
            <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
              Join thousands of expecting mothers who trust SafeMama for their pregnancy safety decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <AppStoreBadge />
              <GooglePlayBadge />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-600/50 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="text-gray-200 text-sm">
              © {currentYear} SafeMama. All rights reserved. Made with ❤️ for expecting mothers worldwide.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-200">
              <a href="#privacy" className="hover:text-primary-400 transition-colors font-medium">Privacy Policy</a>
              <a href="#terms" className="hover:text-primary-400 transition-colors font-medium">Terms of Service</a>
              <a href="#cookies" className="hover:text-primary-400 transition-colors font-medium">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
