/**
 * Featured Projects Section Component
 * 
 * Displays featured projects in a modern two-column masonry layout.
 * Each project shows an image, title, description, and category tags.
 * 
 * Features:
 * - Two-column responsive grid (3 projects left, 3 projects right)
 * - Scroll-triggered animations with Framer Motion
 * - Hover effects with glassmorphism and gradient borders
 * - Modern, futuristic design
 * - Category tags with badges
 */

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { featuredProjects } from '@/lib/constants'

/**
 * Reusable ProjectCard component with scroll-triggered animations
 */
interface ProjectCardProps {
  project: {
    id: number
    title: string
    description: string
    image: string
    categories?: string[]
  }
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      }}
      className="mb-16 md:mb-20 lg:mb-24 last:mb-0 group"
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-2xl mb-6 bg-gray-100">
        <Link href="/services" className="block">
          <div className="relative w-full h-80 md:h-96 lg:h-[450px] overflow-hidden">
            {/* Animated Gradient Border on Hover */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
            
            <div className="relative z-10 w-full h-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
                quality={80}
              />
              {/* Overlay Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </Link>
      </div>

      {/* Project Content */}
      <div className="space-y-5">
        <h3
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 group-hover:text-orange-500 transition-colors duration-300"
          style={{ fontFamily: 'var(--font-clash-display)' }}
        >
          <Link href="/services" className="hover:underline">
            {project.title}
          </Link>
        </h3>
        
        {/* Description */}
        {project.description && (
          <p 
            className="text-block text-base md:text-lg text-gray-600 leading-relaxed"
            style={{ fontFamily: 'var(--font-mango-grotesque)' }}
          >
            {project.description}
          </p>
        )}

        {/* Category Tags */}
        {project.categories && project.categories.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-3">
            {project.categories.map((category, idx) => (
              <span
                key={idx}
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wider text-gray-700 bg-gray-100 rounded-full border border-gray-200 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-all duration-300"
                style={{ fontFamily: 'var(--font-clash-display)' }}
              >
                {category}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const titleRef = useRef<HTMLDivElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section className="relative bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden w-full">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/10 via-pink-100/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', left: '-10%' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-pink-100/10 via-orange-100/10 to-transparent rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', right: '-10%' }} />

      <div className="w-full relative z-10 py-16 md:py-20">
        {/* Section Title */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="mb-16 md:mb-20 lg:mb-24 text-center"
        >
          <div className="relative inline-block">
            {/* Decorative Elements */}
            <div className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 opacity-20 blur-sm" />
            <div className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full bg-gradient-to-br from-pink-500 to-orange-500 opacity-20 blur-sm" />
            
            {/* Main Title */}
            <h2
              className="section-title center-text text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight relative z-10"
              style={{ 
                fontFamily: 'var(--font-clash-display)',
                fontWeight: 700,
                letterSpacing: '-0.02em'
              }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            
            {/* Underline Accent */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 md:w-32 md:h-1.5 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full" />
          </div>
        </motion.div>

        {/* Projects Grid - Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 place-items-center">
          {/* Left Column - First 3 Projects */}
          <div className="space-y-0">
            {featuredProjects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {/* Right Column - Last 3 Projects */}
          <div className="space-y-0">
            {featuredProjects.slice(3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
