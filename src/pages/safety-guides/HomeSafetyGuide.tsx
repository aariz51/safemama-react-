import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowLeft,
  Clock, 
  User,
  Share2,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Home,
  Shield,
  BookOpen,
  ChevronRight,
  Download,
  Smartphone,
  Facebook,
  Twitter,
  Linkedin,
  Copy,
  Check,
  Droplets,
  Wind,
  Zap,
  Baby
} from 'lucide-react'

const HomeSafetyGuide: React.FC = () => {
  const [copiedLink, setCopiedLink] = useState(false)

  // Share functions
  const shareUrl = `${window.location.origin}/safety-guides/home-safety`
  const shareTitle = 'Creating a Safe Home Environment During Pregnancy | SafeMama'
  
  const handleShare = (platform: string) => {
    let url = ''
    
    switch (platform) {
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
        break
      case 'twitter':
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`
        break
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`
        break
      case 'copy':
        navigator.clipboard.writeText(shareUrl)
        setCopiedLink(true)
        setTimeout(() => setCopiedLink(false), 2000)
        return
    }
    
    if (url) {
      window.open(url, '_blank', 'width=600,height=400')
    }
  }

  // Table of Contents
  const tableOfContents = [
    { id: 'chemical-safety', title: 'Household Chemical Safety', icon: Droplets, color: 'text-red-600' },
    { id: 'childproofing', title: 'Early Childproofing', icon: Baby, color: 'text-blue-600' },
    { id: 'air-quality', title: 'Air Quality & Ventilation', icon: Wind, color: 'text-green-600' },
    { id: 'safety-equipment', title: 'Essential Safety Equipment', icon: Shield, color: 'text-purple-600' }
  ]

  return (
    <>
      <Helmet>
        <title>Creating a Safe Home Environment During Pregnancy | SafeMama Safety Guide</title>
        <meta name="description" content="Preparing your home for pregnancy and beyond. Learn about chemical safety, childproofing, air quality, and essential safety equipment for expecting families." />
        <meta name="keywords" content="home safety pregnancy, pregnancy home preparation, household chemical safety, childproofing during pregnancy" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
                {/* Back Button */}
                <div className="p-6 border-b border-gray-200">
                  <Link 
                    to="/safety-guides" 
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Safety Guides
                  </Link>
                </div>

                {/* Header */}
                <div className="relative h-64 sm:h-80 bg-gradient-to-r from-teal-500 to-green-500">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <Home className="w-16 h-16 mx-auto mb-4" />
                      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Safe Home Environment</h1>
                      <p className="text-xl text-teal-100">Preparing Your Home for Pregnancy & Beyond</p>
                    </div>
                  </div>
                  <div className="absolute bottom-6 left-6">
                    <div className="flex items-center space-x-4 text-white/90 text-sm">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        <span>9 min read</span>
                      </div>
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>Beginner Level</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  {/* Share Buttons */}
                  <div className="flex items-center justify-between border-b border-gray-200 pb-6 mb-8">
                    <div className="flex items-center space-x-4">
                      <span className="text-sm font-medium text-gray-700">Share Guide:</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleShare('facebook')}
                          className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                          aria-label="Share on Facebook"
                        >
                          <Facebook className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleShare('twitter')}
                          className="p-2 bg-blue-400 text-white rounded-full hover:bg-blue-500 transition-colors"
                          aria-label="Share on Twitter"
                        >
                          <Twitter className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleShare('linkedin')}
                          className="p-2 bg-blue-800 text-white rounded-full hover:bg-blue-900 transition-colors"
                          aria-label="Share on LinkedIn"
                        >
                          <Linkedin className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleShare('copy')}
                          className="p-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors"
                          aria-label="Copy link"
                        >
                          {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Introduction */}
                  <div className="mb-12">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Creating a safe home environment during pregnancy protects both you and your growing baby. This guide covers chemical safety, air quality, early childproofing, and essential safety preparations.
                    </p>
                    
                    <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">
                      <h3 className="flex items-center font-semibold text-teal-800 mb-3">
                        <Shield className="w-5 h-5 mr-2" />
                        Home Safety Priorities During Pregnancy
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-teal-700">
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Eliminate harmful chemicals and toxins
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Improve indoor air quality
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Install essential safety equipment
                          </li>
                        </ul>
                        <ul className="space-y-2 text-teal-700">
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Begin early childproofing preparations
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Create designated safe spaces
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                            Plan for emergency preparedness
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 1: Chemical Safety */}
                  <section id="chemical-safety" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Droplets className="w-6 h-6 mr-3 text-red-600" />
                      Household Chemical Safety
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">🚫 Chemicals to Remove or Replace:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Oven cleaners and degreasers
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Bleach and ammonia-based cleaners
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Aerosol sprays and air fresheners
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Pesticides and insecticides
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Paint strippers and solvents
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">✅ Safe Cleaning Alternatives:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            White vinegar and baking soda
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Castile soap and water solutions
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Lemon juice for natural freshening
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Eco-friendly, non-toxic brands
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Essential oils for natural scents
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <h3 className="font-semibold text-yellow-800 mb-4">🧽 DIY Safe Cleaning Recipes:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-yellow-700 mb-3">All-Purpose Cleaner:</h4>
                          <ul className="space-y-1 text-yellow-600 text-sm">
                            <li>• 1 cup white vinegar</li>
                            <li>• 1 cup water</li>
                            <li>• 2 tbsp liquid castile soap</li>
                            <li>• 10 drops essential oil (optional)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-700 mb-3">Glass Cleaner:</h4>
                          <ul className="space-y-1 text-yellow-600 text-sm">
                            <li>• 2 cups water</li>
                            <li>• 1/2 cup white vinegar</li>
                            <li>• 1/4 cup rubbing alcohol</li>
                            <li>• Spray bottle</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-700 mb-3">Scrubbing Paste:</h4>
                          <ul className="space-y-1 text-yellow-600 text-sm">
                            <li>• 1/2 cup baking soda</li>
                            <li>• Liquid castile soap to form paste</li>
                            <li>• Great for bathtubs and sinks</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-yellow-700 mb-3">Fabric Softener:</h4>
                          <ul className="space-y-1 text-yellow-600 text-sm">
                            <li>• 1 cup white vinegar</li>
                            <li>• 20 drops lavender oil</li>
                            <li>• Add to rinse cycle</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 2: Early Childproofing */}
                  <section id="childproofing" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Baby className="w-6 h-6 mr-3 text-blue-600" />
                      Early Childproofing Preparations
                    </h2>
                    
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      While your baby won't be mobile for months, starting childproofing during pregnancy helps create safer habits and prepares your home gradually.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="font-semibold text-blue-800 mb-4">🔒 Essential Safety Items:</h3>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Cabinet and drawer safety latches
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Electrical outlet covers and plugs
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Corner guards for sharp furniture
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Safety gates for stairs and rooms
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-600" />
                            Door knob covers and locks
                          </li>
                        </ul>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">🏠 Room-by-Room Checklist:</h3>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium text-purple-700 mb-1">Kitchen:</h4>
                            <p className="text-purple-600 text-sm">Cabinet locks, stove knob covers, fridge locks</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-purple-700 mb-1">Bathroom:</h4>
                            <p className="text-purple-600 text-sm">Toilet locks, faucet covers, medicine cabinet locks</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-purple-700 mb-1">Living Room:</h4>
                            <p className="text-purple-600 text-sm">TV anchors, cord covers, fireplace guards</p>
                          </div>
                          <div>
                            <h4 className="font-medium text-purple-700 mb-1">Bedroom:</h4>
                            <p className="text-purple-600 text-sm">Window guards, dresser anchors, small object storage</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6">
                      <h3 className="font-semibold text-orange-800 mb-4">⏰ Timeline for Childproofing:</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-orange-700 mb-2">During Pregnancy:</h4>
                          <ul className="space-y-1 text-orange-600 text-sm">
                            <li>• Install cabinet locks</li>
                            <li>• Secure heavy furniture</li>
                            <li>• Remove choking hazards</li>
                            <li>• Install safety gates</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-700 mb-2">0-6 Months:</h4>
                          <ul className="space-y-1 text-orange-600 text-sm">
                            <li>• Outlet covers</li>
                            <li>• Cord management</li>
                            <li>• Sharp corner protection</li>
                            <li>• Door knob covers</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-orange-700 mb-2">6+ Months:</h4>
                          <ul className="space-y-1 text-orange-600 text-sm">
                            <li>• Stair gates active use</li>
                            <li>• Window safety guards</li>
                            <li>• Toilet and appliance locks</li>
                            <li>• Final safety inspection</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 3: Air Quality */}
                  <section id="air-quality" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Wind className="w-6 h-6 mr-3 text-green-600" />
                      Air Quality & Ventilation
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                        <h3 className="font-semibold text-green-800 mb-4">🌱 Improving Indoor Air Quality:</h3>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Use air purifiers with HEPA filters
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Open windows for natural ventilation
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Add houseplants (pregnancy-safe varieties)
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Change HVAC filters regularly
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-green-600" />
                            Use exhaust fans in bathrooms and kitchen
                          </li>
                        </ul>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                        <h3 className="font-semibold text-red-800 mb-4">⚠️ Air Quality Hazards to Avoid:</h3>
                        <ul className="space-y-2 text-red-700">
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Cigarette smoke and secondhand smoke
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Strong chemical odors and fumes
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Scented candles and synthetic fragrances
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Mold and excessive humidity
                          </li>
                          <li className="flex items-start">
                            <XCircle className="w-4 h-4 mr-2 mt-0.5 text-red-600" />
                            Dust mites and pet dander (if allergic)
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-teal-50 border border-teal-200 rounded-lg p-6">
                      <h3 className="font-semibold text-teal-800 mb-4">🌿 Pregnancy-Safe Houseplants:</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div>
                          <h4 className="font-medium text-teal-700 mb-2">Air-Purifying Plants:</h4>
                          <ul className="space-y-1 text-teal-600 text-sm">
                            <li>• Spider plant</li>
                            <li>• Boston fern</li>
                            <li>• Bamboo palm</li>
                            <li>• Rubber plant</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-teal-700 mb-2">Low-Maintenance Options:</h4>
                          <ul className="space-y-1 text-teal-600 text-sm">
                            <li>• Snake plant</li>
                            <li>• Peace lily</li>
                            <li>• Pothos</li>
                            <li>• Dracaena</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-teal-700 mb-2">Plants to Avoid:</h4>
                          <ul className="space-y-1 text-red-600 text-sm">
                            <li>• Oleander</li>
                            <li>• Lily varieties</li>
                            <li>• Philodendron</li>
                            <li>• Dieffenbachia</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Section 4: Safety Equipment */}
                  <section id="safety-equipment" className="mb-12">
                    <h2 className="flex items-center text-2xl font-bold text-gray-900 mb-6">
                      <Shield className="w-6 h-6 mr-3 text-purple-600" />
                      Essential Safety Equipment
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
                        <h3 className="font-semibold text-purple-800 mb-4">🔥 Fire & Carbon Monoxide Safety:</h3>
                        <ul className="space-y-2 text-purple-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Install smoke detectors in every room
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Add carbon monoxide detectors
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Keep fire extinguishers accessible
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Plan and practice escape routes
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-purple-600" />
                            Test batteries monthly
                          </li>
                        </ul>
                      </div>

                      <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
                        <h3 className="font-semibold text-indigo-800 mb-4">🏥 Emergency Preparedness:</h3>
                        <ul className="space-y-2 text-indigo-700">
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Stock first aid kit with pregnancy supplies
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Keep emergency contact list visible
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Prepare emergency supply kit
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Install emergency lighting
                          </li>
                          <li className="flex items-start">
                            <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-indigo-600" />
                            Keep portable radio with batteries
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-6">
                      <h3 className="font-semibold text-gray-800 mb-4">📋 Monthly Home Safety Checklist:</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Safety Devices:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>☐ Test smoke and CO detector batteries</li>
                            <li>☐ Check fire extinguisher pressure</li>
                            <li>☐ Inspect electrical cords and outlets</li>
                            <li>☐ Test GFCI outlets in bathrooms and kitchen</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">General Safety:</h4>
                          <ul className="space-y-2 text-gray-600">
                            <li>☐ Check stair railings and banisters</li>
                            <li>☐ Inspect childproof latches and locks</li>
                            <li>☐ Review emergency evacuation plan</li>
                            <li>☐ Update emergency contact information</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* App Download Section */}
                  <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center mb-8">
                    <h3 className="text-2xl font-bold mb-4">Create Your Safe Home with SafeMama</h3>
                    <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                      Download SafeMama app to scan household products for pregnancy safety and get personalized home safety recommendations.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <a
                        href="https://apps.apple.com/us/app/safemama-pregnancy-app/id6748413103"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download on App Store
                      </a>
                      <a
                        href="https://play.google.com/store/apps/details?id=com.safemama.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-white text-primary-600 font-semibold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Get on Google Play
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Table of Contents */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="flex items-center text-lg font-bold text-gray-900 mb-4">
                    <BookOpen className="w-5 h-5 mr-2 text-primary-500" />
                    Guide Contents
                  </h3>
                  <nav className="space-y-2">
                    {tableOfContents.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center p-3 rounded-lg text-sm transition-colors hover:bg-gray-50 hover:text-primary-600 group"
                      >
                        <item.icon className={`w-4 h-4 mr-3 ${item.color} group-hover:text-primary-600`} />
                        <span>{item.title}</span>
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Get SafeMama App */}
                <div className="bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl p-6 text-white">
                  <div className="text-center">
                    <Smartphone className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Get SafeMama Free</h3>
                    <p className="text-primary-100 mb-4 text-sm">
                      Scan household products instantly to ensure they're safe for pregnancy and your growing family.
                    </p>
                    <a
                      href="https://dub.sh/safemama"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-full bg-white text-primary-600 font-semibold py-3 px-4 rounded-xl hover:bg-gray-100 transition-colors"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download App
                    </a>
                  </div>
                </div>

                {/* Related Guides */}
                <div className="bg-white rounded-2xl shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Related Guides</h3>
                  <div className="space-y-3">
                    <Link to="/safety-guides/food-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Food Safety Guide</span>
                    </Link>
                    <Link to="/safety-guides/workplace-safety" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Zap className="w-5 h-5 mr-3 text-orange-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">Workplace Safety</span>
                    </Link>
                    <Link to="/safety-guides/first-trimester" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group">
                      <Baby className="w-5 h-5 mr-3 text-blue-500 group-hover:text-primary-600" />
                      <span className="text-sm font-medium">First Trimester Safety</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomeSafetyGuide
