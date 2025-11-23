'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Counter from '@/components/ui/Counter'
import { featuredStats } from '@/lib/constants'

/**
 * Reusable StatBlock component with scroll-triggered animations
 * Each stat block fades in and moves upward when it enters the viewport
 * 
 * Animation specifications:
 * - Fade in: opacity 0 → 1
 * - Slide up: y: 60 → 0
 * - Duration: 0.6s
 * - Easing: easeOut
 * - Staggered delays: 0s, 0.2s, 0.4s, 0.6s (0.2s between each block)
 * - Triggers only once when entering viewport
 */
interface StatBlockProps {
  children: React.ReactNode
  index: number
}

function StatBlock({ children, index }: StatBlockProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{
        duration: 0.6,
        delay: index * 0.2, // Staggered delays: 0s, 0.2s, 0.4s, 0.6s
        ease: 'easeOut',
      }}
      className="mb-24 md:mb-32 lg:mb-40 last:mb-0"
    >
      {children}
    </motion.div>
  )
}

export default function FeaturedStats() {
  const statImages = [
    '/images/stats/stat-1.png',
    '/images/stats/stat-2.png',
    '/images/stats/stat-3.png',
    '/images/stats/stat-4.png',
    '/images/stats/stat-8.png',
    '/images/stats/stat-9.png',
  ]

  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden w-full">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/10 via-pink-100/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', right: '-10%' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-pink-100/10 via-orange-100/10 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', left: '-10%' }} />

      <div className="w-full relative z-10 py-16 md:py-20">
        <h2 className="section-title center-text mb-16 md:mb-20 lg:mb-24">Featured Stats</h2>
        <div className="flex justify-center gap-10 flex-wrap text-center">
        {featuredStats.map((stat, index) => (
          <StatBlock key={index} index={index}>
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center justify-center">
              {/* Left Side: Content */}
              <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center">
                {/* Emoji Badge */}
                <div className="stat-emoji">
                  <span className="text-sm md:text-base text-gray-900 font-semibold">
                    ({stat.emoji})
                  </span>
                </div>

                {/* Main Label */}
                <h3
                  className="center-text stat-label text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-500 leading-[0.95] tracking-tight"
                  style={{ 
                    fontFamily: 'var(--font-clash-display)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em'
                  }}
                >
                  {stat.label}
                </h3>

                {/* Sublabel */}
                <p className="center-text stat-sublabel text-lg md:text-xl lg:text-2xl text-gray-600 font-semibold">
                  {stat.sublabel}
                </p>
              </div>

              {/* Right Side: Circular Image Grid */}
              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="stat-image-grid">
                  <div className="grid grid-cols-3 gap-4 md:gap-6">
                    {statImages.map((image, imgIndex) => (
                      <div
                        key={imgIndex}
                        className="stat-image-item group relative"
                      >
                        <div className="relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden bg-white border-2 border-white shadow-lg hover:shadow-2xl transition-all duration-500">
                          {/* Gradient Border on Hover */}
                          <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-500 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                          
                          <div className="relative z-10 w-full h-full">
                            <Image
                              src={image}
                              alt=""
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                              quality={75}
                            />
                          </div>
                          
                          {/* Glow Effect on Hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-pink-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-pink-500/10 group-hover:to-orange-500/10 transition-all duration-500 rounded-full" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom: Large Number */}
            <div className="mt-12 md:mt-16 lg:mt-20 text-center">
              <div className="center-text stat-number text-8xl md:text-9xl lg:text-[180px] xl:text-[200px] font-bold text-gray-500 leading-none" style={{ 
                fontFamily: 'var(--font-clash-display)',
                fontWeight: 700,
                letterSpacing: '-0.03em'
              }}>
                {index === 2 ? (
                  <span>
                    <span className="text-8xl md:text-9xl lg:text-[180px] xl:text-[200px]">#</span>
                    {stat.displayValue}
                  </span>
                ) : stat.displayValue ? (
                  <span>{stat.displayValue}</span>
                ) : (
                  <span>
                    <Counter end={stat.value} duration={2} />
                    <span className="text-8xl md:text-9xl lg:text-[180px] xl:text-[200px]">+</span>
                  </span>
                )}
              </div>
            </div>
          </StatBlock>
        ))}
        </div>
      </div>
    </section>
  )
}
