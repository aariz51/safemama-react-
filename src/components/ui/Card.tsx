import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'bordered' | 'pregnancy' | 'soft'
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  hover = true,
  padding = 'md'
}) => {
  const baseClasses = 'rounded-2xl transition-all duration-300'
  
  const variants = {
    default: 'bg-white shadow-lg border border-gray-100',
    gradient: 'bg-gradient-to-br from-white to-primary-50/30 shadow-lg border border-primary-100',
    pregnancy: 'bg-gradient-to-br from-pink-50 via-white to-blue-50 shadow-lg border border-primary-100',
    soft: 'bg-gradient-to-br from-primary-50/50 to-secondary-50/50 shadow-md border border-primary-100/50',
    bordered: 'bg-white border-2 border-primary-200 shadow-sm'
  }
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const hoverClasses = hover ? 'hover:shadow-2xl hover:shadow-primary-500/10 transform hover:-translate-y-1 hover:border-primary-200' : ''
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`
  
  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { 
        y: -4,
        boxShadow: '0 20px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04)'
      } : {}}
    >
      {children}
    </motion.div>
  )
}

export default Card
