import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'gradient' | 'bordered'
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
    gradient: 'bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100',
    bordered: 'bg-white border-2 border-gray-200'
  }
  
  const paddings = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const hoverClasses = hover ? 'hover:shadow-2xl transform hover:-translate-y-1' : ''
  
  const cardClasses = `${baseClasses} ${variants[variant]} ${paddings[padding]} ${hoverClasses} ${className}`
  
  return (
    <motion.div
      className={cardClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}

export default Card
