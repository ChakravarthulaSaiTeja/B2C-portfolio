'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { companyStats } from '@/lib/constants'
import Counter from '@/components/ui/Counter'

export default function AboutStats() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="mb-20 md:mb-24"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 max-w-5xl mx-auto">
        {companyStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
            className="group relative"
            whileHover={{ y: -8 }}
          >
            {/* Animated Gradient Border */}
            <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 via-blue-400 to-orange-400 rounded-2xl opacity-50 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500" />
            
            {/* Glassmorphism Card - Dark Theme */}
            <div className="relative h-full min-h-[140px] md:min-h-[160px] p-6 md:p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg hover:shadow-2xl hover:shadow-orange-500/30 transition-all duration-500 overflow-hidden">
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              
              {/* Content */}
              <div className="relative z-10 text-center space-y-4">
                <div 
                  className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-none"
                  style={{ 
                    fontFamily: 'var(--font-clash-display)',
                    fontWeight: 700,
                    letterSpacing: '-0.05em'
                  }}
                >
                  <Counter end={stat.value} duration={2} />
                  <span className="text-4xl md:text-5xl lg:text-6xl lowercase">{stat.suffix}</span>
                </div>
                <p 
                  className="text-sm md:text-base font-semibold text-white/80 uppercase tracking-[0.15em]"
                  style={{ fontFamily: 'var(--font-clash-display)' }}
                >
                  {stat.label}
                </p>
              </div>
              
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-blue-500/20 to-orange-500/20 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

