'use client'

import { motion } from 'framer-motion'
import { 
  Target, 
  Users, 
  Award, 
  Globe, 
  Heart, 
  Lightbulb,
  Shield,
  Zap,
  Github,
  Twitter,
  Linkedin,
  Mail,
  MapPin,
  Phone
} from 'lucide-react'
import { StatCard } from '@/components/ui/Card'
import Button from '@/components/ui/Button'

// Sample data
const teamMembers = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    role: 'Founder & CEO',
    bio: 'Former Ethereum Foundation researcher with 10+ years in blockchain technology and zero-knowledge proofs.',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: '2',
    name: 'Marcus Rodriguez',
    role: 'CTO',
    bio: 'Ex-Chainlink engineer specializing in cryptographic protocols and distributed systems architecture.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: '3',
    name: 'Emily Watson',
    role: 'Head of Education',
    bio: 'MIT graduate with expertise in computer science education and curriculum development.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: '4',
    name: 'David Kim',
    role: 'Lead Developer',
    bio: 'Full-stack developer with deep experience in Web3 applications and smart contract development.',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face',
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  }
]

const values = [
  {
    id: '1',
    title: 'Innovation',
    description: 'We constantly push the boundaries of Web3 education, staying ahead of the latest developments in blockchain technology.',
    icon: <Lightbulb className="h-8 w-8 text-white" />
  },
  {
    id: '2',
    title: 'Excellence',
    description: 'We maintain the highest standards in our curriculum, ensuring every student receives world-class education.',
    icon: <Award className="h-8 w-8 text-white" />
  },
  {
    id: '3',
    title: 'Community',
    description: 'We foster a supportive learning environment where students can grow together and help each other succeed.',
    icon: <Users className="h-8 w-8 text-white" />
  },
  {
    id: '4',
    title: 'Accessibility',
    description: 'We believe Web3 education should be accessible to everyone, regardless of background or experience level.',
    icon: <Globe className="h-8 w-8 text-white" />
  },
  {
    id: '5',
    title: 'Security',
    description: 'We prioritize security in all our teachings, ensuring students understand the importance of secure development practices.',
    icon: <Shield className="h-8 w-8 text-white" />
  },
  {
    id: '6',
    title: 'Impact',
    description: 'We focus on real-world applications, preparing students to make meaningful contributions to the Web3 ecosystem.',
    icon: <Zap className="h-8 w-8 text-white" />
  }
]

const achievements = [
  { id: '1', value: '50K+', label: 'Students Trained', description: 'Across 120+ countries' },
  { id: '2', value: '95%', label: 'Job Placement Rate', description: 'Within 6 months' },
  { id: '3', value: '200+', label: 'Industry Partners', description: 'Leading Web3 companies' },
  { id: '4', value: '4.9/5', label: 'Student Rating', description: 'Based on 10K+ reviews' }
]

const milestones = [
  {
    year: '2020',
    title: 'Founded',
    description: 'ConnectSphere was founded with a vision to democratize Web3 education.'
  },
  {
    year: '2021',
    title: 'First Course Launch',
    description: 'Launched our flagship zero-knowledge proofs course with 1,000+ students.'
  },
  {
    year: '2022',
    title: 'Series A Funding',
    description: 'Raised $10M to expand our platform and reach global markets.'
  },
  {
    year: '2023',
    title: 'Global Expansion',
    description: 'Expanded to 50+ countries with localized content and support.'
  },
  {
    year: '2024',
    title: 'AI Integration',
    description: 'Integrated AI-powered learning assistants and personalized curricula.'
  }
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About ConnectSphere</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We&apos;re on a mission to democratize Web3 education and empower the next generation 
              of blockchain developers worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                At ConnectSphere, we believe that Web3 technology has the potential to transform 
                the world, but only if we have enough skilled developers to build it. Our mission 
                is to make Web3 education accessible, practical, and world-class.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We&apos;re not just teaching blockchain concepts – we&apos;re building the future workforce 
                that will create the decentralized applications of tomorrow.
              </p>
              <Button className="flex items-center space-x-2">
                <span>Join Our Mission</span>
                <Target className="h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400">
                  To create a world where anyone, anywhere, can learn and master Web3 technologies, 
                  regardless of their background or experience level.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our team consists of industry experts, researchers, and educators passionate about Web3 technology.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-primary-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm mb-4">{member.bio}</p>
                
                <div className="flex justify-center space-x-3">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-white transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-white transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              These core values guide everything we do at ConnectSphere.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-primary-500 to-secondary-500">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
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
              Our Impact
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and student success.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <StatCard
                key={achievement.id}
                value={achievement.value}
                label={achievement.label}
                description={achievement.description}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              From a small startup to a global Web3 education platform.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex items-start space-x-8"
                >
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">{milestone.year}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 glass rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
              Get in Touch
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have questions about ConnectSphere? We&apos;d love to hear from you.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center"
            >
              <Mail className="h-8 w-8 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-gray-400 mb-4">hello@connectsphere.io</p>
              <Button variant="secondary" size="sm">Send Email</Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center"
            >
              <Phone className="h-8 w-8 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-gray-400 mb-4">+1 (555) 123-4567</p>
              <Button variant="secondary" size="sm">Call Now</Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 text-center"
            >
              <MapPin className="h-8 w-8 text-primary-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-gray-400 mb-4">San Francisco, CA</p>
              <Button variant="secondary" size="sm">Get Directions</Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}