export interface Feature {
  id: string
  title: string
  description: string
  icon: string
  color: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  social: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export interface Statistic {
  id: string
  value: string
  label: string
  description?: string
}

export interface Step {
  id: string
  title: string
  description: string
  icon: string
}

export interface Value {
  id: string
  title: string
  description: string
  icon: string
}

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export interface SocialLink {
  platform: string
  href: string
  icon: string
}