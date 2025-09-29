import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Smartphone } from 'lucide-react'
import Button from '../ui/Button'

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Tools',
      href: '/tools',
      submenu: [
        { name: 'Due Date Calculator', href: '/tools/due-date-calculator' },
        { name: 'Food Safety Checker', href: '/tools/food-safety-checker' },
        { name: 'Nutrition Calculator', href: '/tools/nutrition-calculator' },
        { name: 'Medication Guide', href: '/tools/medication-guide' }
      ]
    },
    {
      name: 'Blog',
      href: '/blog',
      submenu: [
        { name: 'First Trimester Food Safety', href: '/blog/first-trimester-food-safety' },
        { name: 'Foods to Avoid During Pregnancy', href: '/blog/foods-to-avoid-during-pregnancy' },
        { name: 'Pregnancy Nutrition Guide', href: '/blog/pregnancy-nutrition-guide' },
        { name: 'Safe Medications', href: '/blog/safe-medications-pregnancy' },
        { name: 'Pregnancy Apps Comparison', href: '/blog/pregnancy-apps-comparison' }
      ]
    },
    { name: 'Compare Apps', href: '/compare' },
    { name: 'Safety Guides', href: '/safety-guides' }
  ]
  
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo - Enhanced Mobile Responsiveness */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0">
            <motion.span
              className="text-xl sm:text-2xl lg:text-2xl font-bold leading-tight"
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                color: isScrolled ? 'transparent' : '#ffffff'
              }}
            >
              SafeMama
            </motion.span>
          </Link>
          
          {/* Desktop Navigation - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : `${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-primary-600 hover:bg-primary-50/80`
                  }`}
                >
                  <span className="whitespace-nowrap">{item.name}</span>
                  {item.submenu && <ChevronDown className="w-4 h-4" />}
                </Link>
                
                {/* Dropdown Menu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-lg border border-primary-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* CTA Button - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <Button
              variant="primary"
              icon={Smartphone}
              href="https://dub.sh/safemama"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-4 lg:px-6 py-2 lg:py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-sm lg:text-base"
            >
              <span className="hidden lg:inline">Download App</span>
              <span className="lg:hidden">Download</span>
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors flex-shrink-0 ${
              isScrolled ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50' : 'text-white hover:text-primary-200 hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-primary-100 mt-2 rounded-b-xl shadow-lg overflow-hidden"
            >
              <div className="py-4 space-y-2 max-h-screen overflow-y-auto">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg mx-2 transition-colors ${
                        location.pathname === item.href
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.submenu && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="px-4 pt-4">
                  <Button
                    variant="primary"
                    icon={Smartphone}
                    href="https://dub.sh/safemama"
                    className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-center justify-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Download App
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
