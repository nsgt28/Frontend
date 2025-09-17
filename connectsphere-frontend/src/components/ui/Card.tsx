'use client'

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  glass?: boolean
  delay?: number
}

export default function Card({ 
  children, 
  className, 
  hover = true, 
  glass = false,
  delay = 0 
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={cn(
        'rounded-xl p-6 transition-all duration-300',
        glass ? 'glass' : 'bg-gray-800/50 border border-gray-700/50',
        hover && 'hover:border-primary-500/50',
        className
      )}
    >
      {children}
    </motion.div>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <Card delay={delay} className="text-center">
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </Card>
  )
}

interface StatCardProps {
  value: string
  label: string
  description?: string
  delay?: number
}

export function StatCard({ value, label, description, delay = 0 }: StatCardProps) {
  return (
    <Card delay={delay} className="text-center">
      <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
      <div className="text-lg font-semibold text-white mb-1">{label}</div>
      {description && (
        <div className="text-sm text-gray-400">{description}</div>
      )}
    </Card>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
  delay?: number
}

export function TestimonialCard({ 
  name, 
  role, 
  company, 
  content, 
  avatar, 
  rating, 
  delay = 0 
}: TestimonialCardProps) {
  return (
    <Card delay={delay} className="relative">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-white">{name}</div>
          <div className="text-sm text-gray-400">{role} at {company}</div>
        </div>
      </div>
      
      <div className="flex mb-3">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-gray-300 italic">&ldquo;{content}&rdquo;</p>
    </Card>
  )
}