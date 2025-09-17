'use client'

import { motion } from 'framer-motion'

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  text?: string
  fullScreen?: boolean
}

export default function Loading({ 
  size = 'md', 
  text = 'Loading...', 
  fullScreen = false 
}: LoadingProps) {
  const sizes = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  }

  const containerClasses = fullScreen 
    ? 'fixed inset-0 bg-gray-900/80 backdrop-blur-sm flex items-center justify-center z-50'
    : 'flex items-center justify-center p-8'

  return (
    <div className={containerClasses}>
      <div className="text-center">
        <motion.div
          className={`${sizes[size]} border-4 border-gray-600 border-t-primary-500 rounded-full mx-auto mb-4`}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
        {text && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium"
          >
            {text}
          </motion.p>
        )}
      </div>
    </div>
  )
}

export function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
  }

  return (
    <motion.div
      className={`${sizes[size]} border-2 border-gray-600 border-t-primary-500 rounded-full`}
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
    />
  )
}

export function LoadingDots() {
  return (
    <div className="flex space-x-1">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-primary-500 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  )
}