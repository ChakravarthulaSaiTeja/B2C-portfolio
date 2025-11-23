/**
 * Work Process Section Component
 * 
 * Displays the company's work process steps in a modern, dark-themed layout.
 * Shows how B2C Advertisers executes projects from strategy to analysis.
 * 
 * Features:
 * - Dark background with white/light gray text
 * - Two-column layout (heading left, steps right)
 * - Scroll-triggered animations with Framer Motion
 * - Staggered animation delays
 * - Clean, minimalist, high-contrast design
 */

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { workProcess } from '@/lib/constants'

/**
 * Reusable ProcessStep component with scroll-triggered animations and interactions
 */
interface ProcessStepProps {
  step: {
    number: string
    title: string
    description: string
  }
  index: number
}

function ProcessStep({ step, index }: ProcessStepProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -40 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      whileHover={{ x: 8 }}
      className="group relative mb-12 md:mb-16 lg:mb-20 last:mb-0 cursor-pointer"
    >
      {/* Connecting Line (except for last item) */}
      {index < 3 && (
        <div className="absolute left-6 top-16 md:top-20 w-0.5 h-full md:h-20 bg-gradient-to-b from-orange-500/50 via-pink-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}

      <div className="flex items-start gap-6 md:gap-8">
        {/* Step Number Badge */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
          transition={{
            duration: 0.6,
            delay: index * 0.2 + 0.2,
            ease: 'backOut',
          }}
          className="relative flex-shrink-0"
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-500/30 group-hover:shadow-xl group-hover:shadow-orange-500/50 transition-all duration-300 group-hover:scale-110">
            <span
              className="text-white text-lg md:text-xl font-bold"
              style={{ fontFamily: 'var(--font-mango-grotesque)' }}
            >
              {step.number}
            </span>
          </div>
          {/* Pulse Animation on Hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 opacity-0 group-hover:opacity-30"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        </motion.div>

        {/* Step Content */}
        <div className="flex-1 pt-1">
          <motion.h3
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.3,
            }}
            className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-5 group-hover:text-orange-400 transition-colors duration-300"
            style={{ fontFamily: 'var(--font-mango-grotesque)' }}
          >
            {step.title}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2 + 0.4,
            }}
            className="text-base md:text-lg lg:text-xl text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
          >
            {step.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  )
}

export default function WorkProcess() {
  const titleRef = useRef<HTMLDivElement>(null)
  const isTitleInView = useInView(titleRef, { once: true, margin: '-100px' })

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden w-full">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-500/5 via-pink-500/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', right: '-10%' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-500/5 via-orange-500/5 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', left: '-10%' }} />
      
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/30 to-transparent" />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-start">
          {/* Left: Section Title */}
            <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            className="relative lg:sticky lg:top-24"
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isTitleInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
              }}
              className="text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-gray-400 mb-8 block"
              style={{ fontFamily: 'var(--font-mango-grotesque)' }}
            >
              How we Work
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isTitleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="section-title center-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] mb-12"
              style={{ 
                fontFamily: 'var(--font-mango-grotesque)',
                fontWeight: 700,
                letterSpacing: '-0.03em'
              }}
            >
                Our <br />
              <span className="relative inline-block">
                Execution Process
                {/* Underline Animation */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={isTitleInView ? { width: '100%' } : { width: 0 }}
                  transition={{
                    duration: 1,
                    delay: 0.8,
                    ease: 'easeOut',
                  }}
                  className="absolute bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-pink-500"
                />
              </span>
            </motion.h2>
            
            {/* Animated Decorative Circle */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={isTitleInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
              transition={{
                duration: 0.8,
                delay: 0.6,
                ease: 'backOut',
              }}
              className="relative w-20 h-20 md:w-24 md:h-24"
            >
              <div className="absolute inset-0 bg-white rounded-full border-2 border-gray-700 shadow-lg" />
              {/* Glow Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-pink-500/20 rounded-full blur-xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </motion.div>
                </motion.div>

          {/* Right: Process Steps List */}
          <div className="space-y-0 pt-4">
            {workProcess.map((step, index) => (
              <ProcessStep key={index} step={step} index={index} />
              ))}
          </div>
        </div>
      </div>
    </section>
  )
}
