import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Smartphone, Globe } from 'lucide-react'
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
        { name: 'Medication Guide', href: '/tools/medication-guide' },
        { 
          name: 'Baby Growth Calculator', 
          href: '/tools/baby-growth-calculator',
          description: 'Track baby development week by week'
        }
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
    { name: 'Safety Guides', href: '/safety-guides' },
    {
      name: 'Country',
      href: '#',
      submenu: [
        { name: '🇺🇸 United States', href: '/us' },
        { name: '🇬🇧 United Kingdom', href: '/uk' },
        { name: '🇨🇦 Canada', href: '/canada' },
        { name: '🇦🇺 Australia', href: '/australia' },
        { name: '🇩🇪 Germany', href: '/germany' },
        { name: '🇨🇭 Switzerland', href: '/switzerland' },
        { name: '🇳🇱 Netherlands', href: '/netherlands' },
        { name: '🇸🇪 Sweden', href: '/sweden' }
      ]
    }
  ]
  
  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-primary-100' : 'bg-white/90 backdrop-blur-sm shadow-sm border-b border-primary-50'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile-First Navigation Layout */}
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group flex-shrink-0">
            <motion.span
              className="text-lg sm:text-xl md:text-2xl font-bold leading-tight"
              whileHover={{ scale: 1.02 }}
              style={{
                background: 'linear-gradient(135deg, #ec4899 0%, #0ea5e9 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              SafeMama
            </motion.span>
          </Link>
          
          {/* FIXED: Mobile-Visible Navigation - Show on all screens */}
          <div className="hidden sm:flex items-center space-x-1 md:space-x-2 lg:space-x-4 flex-1 justify-center max-w-2xl mx-4">
            {navigation.slice(0, 5).map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href === '#' ? location.pathname : item.href}
                  className={`flex items-center space-x-1 px-2 md:px-3 py-2 rounded-lg text-xs md:text-sm font-medium transition-colors whitespace-nowrap ${
                    location.pathname === item.href
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-primary-600 hover:text-primary-700 hover:bg-primary-50'
                  }`}
                >
                  <span className="flex items-center">
                    {item.name === 'Country' && <Globe className="w-3 h-3 md:w-4 md:h-4 mr-1" />}
                    {item.name}
                  </span>
                  {item.submenu && <ChevronDown className="w-3 h-3 md:w-4 md:h-4" />}
                </Link>
                
                {/* Dropdown Menu - Desktop Only */}
                {item.submenu && (
                  <div className={`absolute top-full left-0 mt-2 ${item.name === 'Country' ? 'w-56' : 'w-64'} bg-white rounded-xl shadow-lg border border-primary-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 hidden lg:block`}>
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
          
          {/* Download Button - Hidden on small mobile */}
          <div className="hidden md:flex items-center space-x-4 flex-shrink-0">
            <Button 
              variant="primary" 
              icon={Smartphone}
              href="https://dub.sh/safemama"
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white font-semibold px-3 md:px-4 lg:px-6 py-2 lg:py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 text-xs md:text-sm lg:text-base"
            >
              <span className="hidden lg:inline">Download App</span>
              <span className="lg:hidden">Download</span>
            </Button>
          </div>
          
          {/* Mobile menu button - Only for very small screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="sm:hidden p-2 rounded-md transition-colors flex-shrink-0 text-primary-600 hover:text-primary-700 hover:bg-primary-50"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Only for very small screens */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="sm:hidden bg-white/95 backdrop-blur-md border-t border-primary-100 mt-2 rounded-b-xl shadow-lg overflow-hidden"
            >
              <div className="py-4 space-y-2 max-h-screen overflow-y-auto">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      to={item.href === '#' ? location.pathname : item.href}
                      className={`block px-4 py-3 text-base font-medium rounded-lg mx-2 transition-colors flex items-center ${
                        location.pathname === item.href
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name === 'Country' && <Globe className="w-4 h-4 mr-2" />}
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
                
                {/* Mobile Download Button */}
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
