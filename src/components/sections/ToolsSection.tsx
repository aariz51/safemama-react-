import React from 'react'
import { motion } from 'framer-motion'
import { Calculator, Shield, Search, Calendar, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Card from '../ui/Card'

const ToolsSection: React.FC = () => {
  const tools = [
    {
      icon: Calculator,
      title: 'Due Date Calculator',
      description: 'Calculate your due date with precision',
      href: '/tools/due-date-calculator',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Shield,
      title: 'Food Safety Checker',
      description: 'Check food safety during pregnancy',
      href: '/tools/food-safety-checker',
      color: 'from-green-500 to-teal-600'
    },
    {
      icon: Search,
      title: 'Nutrition Calculator',
      description: 'Track your pregnancy nutrition needs',
      href: '/tools/nutrition-calculator',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Calendar,
      title: 'Medication Guide',
      description: 'Safe medications during pregnancy',
      href: '/tools/medication-guide',
      color: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Pregnancy Tools</h2>
          <p className="text-xl text-gray-600">Essential calculators and guides for your pregnancy journey</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Link key={tool.title} to={tool.href}>
              <Card className="p-6 h-full group cursor-pointer hover:shadow-xl">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${tool.color} rounded-lg mb-4`}>
                  <tool.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                <div className="flex items-center text-primary-600 text-sm font-medium">
                  Try now <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ToolsSection
