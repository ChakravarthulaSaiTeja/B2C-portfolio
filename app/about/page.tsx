'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import AboutStats from '@/components/sections/AboutStats'

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const storyRef = useRef<HTMLDivElement>(null)
  const missionRef = useRef<HTMLDivElement>(null)
  
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isStoryInView = useInView(storyRef, { once: true, margin: '-100px' })
  const isMissionInView = useInView(missionRef, { once: true, margin: '-100px' })

  return (
    <div className="pb-20">
      {/* Our Story Section */}
      <section className="pb-20 md:pb-32 bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Spacer to prevent navbar overlap */}
        <div className="h-32 md:h-56 lg:h-64"></div>
        <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-7xl">
          <div>
            <motion.div
              ref={storyRef}
              initial={{ opacity: 0, y: 60 }}
              animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="mb-24 md:mb-32"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isStoryInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                className="space-y-6 max-w-4xl mx-auto"
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 scroll-mt-32 md:scroll-mt-56 lg:scroll-mt-64 text-center">
                  Our Story
                </h2>
              <div className="space-y-5 text-white/90 text-lg leading-relaxed text-center text-justify">
                <p>
                  <span className="font-semibold text-orange-400">B2C Advertisers</span>, established in <span className="font-bold text-orange-400">2007</span> in Hyderabad, is a new-age branding, marketing and digital
                  communication agency that is established to take your advertising endeavors to the next level.
                </p>
                <p>
                  Started with a vision to create a platform to cater the clients with innovative solutions in print
                  advertising. Adding corporate profiles to our portfolio in <span className="font-semibold text-blue-400">2010</span>, reached <span className="font-bold text-orange-400">1 crore milestone in 2011</span>.
                </p>
                <p>
                  Joined the digital era by upgrading ourselves in <span className="font-semibold text-blue-400">2017</span>, now serving all medians from local signages to
                  mass outdoor media like <span className="font-semibold text-white">Hyderabad Metro</span>.
                </p>
              </div>
            </motion.div>
          </motion.div>
          </div>

          {/* Stats */}
          <div className="mb-32 md:mb-48 lg:mb-56">
            <AboutStats />
          </div>

          {/* Mission & Vision - Two Column Layout */}
          <motion.div
            ref={missionRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isMissionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12"
          >
            {/* Mission - Left Side (White text on dark) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className="space-y-6 pr-4 md:pr-8"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                Our Mission
              </h3>
              <div className="space-y-5 text-white/90 text-lg leading-relaxed text-center text-justify">
                <p>
                  To provide innovative and effective marketing solutions that help businesses grow and succeed in the
                  competitive market.
                </p>
                <p>
                  We believe marketing should be an enabler, not a barrier. That's why we focus on creating intuitive, scalable, and maintainable solutions that grow with your business.
                </p>
              </div>
            </motion.div>

            {/* Vision - Right Side (Gradient Box) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isMissionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              className="relative p-8 md:p-10 lg:p-12 rounded-3xl bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 overflow-hidden"
            >
              {/* Subtle overlay for text readability */}
              <div className="absolute inset-0 bg-black/10" />
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
                  Our Vision
                </h3>
                <p className="text-white/95 text-lg leading-relaxed text-center text-justify">
                  To be the leading advertising agency in India, known for creativity, innovation, and exceptional
                  results.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
