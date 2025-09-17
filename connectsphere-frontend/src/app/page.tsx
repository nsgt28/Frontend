'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Users, 
  BookOpen, 
  ArrowRight, 
  CheckCircle,
  Star,
  Play,
  Code
} from 'lucide-react'
import { FeatureCard, TestimonialCard } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Sample data
const features = [
  {
    id: '1',
    title: 'Zero-Knowledge Proofs',
    description: 'Master the fundamentals of ZKPs with hands-on tutorials and real-world applications.',
    icon: <Shield className="h-6 w-6 text-white" />,
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: '2',
    title: 'Interactive Learning',
    description: 'Learn through interactive coding challenges and live blockchain experiments.',
    icon: <Code className="h-6 w-6 text-white" />,
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: '3',
    title: 'Expert Mentorship',
    description: 'Get guidance from industry experts and connect with a global community.',
    icon: <Users className="h-6 w-6 text-white" />,
    color: 'from-green-500 to-blue-500'
  },
  {
    id: '4',
    title: 'Certification',
    description: 'Earn verifiable certificates and showcase your Web3 expertise to employers.',
    icon: <BookOpen className="h-6 w-6 text-white" />,
    color: 'from-orange-500 to-red-500'
  }
]

const steps = [
  {
    id: '1',
    title: 'Sign Up',
    description: 'Create your account and choose your learning path',
    icon: <Users className="h-8 w-8 text-white" />
  },
  {
    id: '2',
    title: 'Learn',
    description: 'Access comprehensive courses and hands-on projects',
    icon: <BookOpen className="h-8 w-8 text-white" />
  },
  {
    id: '3',
    title: 'Practice',
    description: 'Build real projects and participate in coding challenges',
    icon: <Code className="h-8 w-8 text-white" />
  },
  {
    id: '4',
    title: 'Certify',
    description: 'Earn certificates and join our alumni network',
    icon: <Star className="h-8 w-8 text-white" />
  }
]

const testimonials = [
  {
    id: '1',
    name: 'Sarah Chen',
    role: 'Blockchain Developer',
    company: 'Ethereum Foundation',
    content: 'ConnectSphere transformed my understanding of zero-knowledge proofs. The hands-on approach and expert mentorship made complex concepts accessible.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'Security Engineer',
    company: 'Chainlink',
    content: 'The interactive learning platform is incredible. I went from zero knowledge to building ZK circuits in just 3 months.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Research Scientist',
    company: 'MIT',
    content: 'ConnectSphere offers the most comprehensive Web3 education I&apos;ve found. The quality of content and community support is outstanding.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5
  }
]

const stats = [
  { id: '1', value: '50K+', label: 'Students', description: 'Active learners worldwide' },
  { id: '2', value: '200+', label: 'Courses', description: 'Comprehensive curriculum' },
  { id: '3', value: '95%', label: 'Success Rate', description: 'Job placement rate' },
  { id: '4', value: '24/7', label: 'Support', description: 'Always here to help' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">Master Web3</span>
              <br />
              <span className="text-white">with Zero-Knowledge</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join the next generation of blockchain developers. Learn zero-knowledge proofs, 
              build real projects, and connect with industry experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="flex items-center space-x-2">
                <span>Start Learning Free</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg" className="flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Watch Demo</span>
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-20"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-16 h-16 bg-gradient-to-r from-accent-500 to-primary-500 rounded-full opacity-20"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose ConnectSphere?
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We provide the most comprehensive Web3 education with cutting-edge technology and expert guidance.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.id}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get started in minutes and begin your Web3 journey with our structured learning path.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Students Say
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Join thousands of successful graduates who have transformed their careers with ConnectSphere.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Web3 Journey?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join ConnectSphere today and become part of the next generation of blockchain innovators. 
              Start learning for free and unlock your potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="flex items-center space-x-2">
                <span>Get Started Free</span>
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="lg">
                View Pricing
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>24/7 support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}