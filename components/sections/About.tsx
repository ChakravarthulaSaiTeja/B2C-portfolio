/**
 * About Section Component
 * 
 * Displays company information, history, and key statistics.
 * Features classic paragraph styling with centered, professional layout.
 * 
 * Features:
 * - Company history and description
 * - Animated statistics cards
 * - Clean, centered typography
 * - Professional paragraph layout
 */

'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { scrollReveal } from '@/lib/animations'
import Counter from '@/components/ui/Counter'
import { companyStats } from '@/lib/constants'

export default function About() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden w-full">
      {/* Decorative Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/20 to-pink-100/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', right: '-10%' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-100/15 to-pink-100/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', left: '-10%' }} />
      
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-16 md:py-20">
        <div className="w-full">
          {/* Content */}
          <motion.div
            variants={scrollReveal}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="w-full space-y-16 md:space-y-20"
          >
            {/* Section Heading */}
            <div className="space-y-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-4"
              >
                <span className="text-sm font-semibold text-orange-700">Since 2007</span>
              </motion.div>
              <h2 
                className="section-title center-text text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] tracking-[-0.02em] text-gray-900"
                style={{ 
                  fontFamily: 'var(--font-clash-display)',
                  fontWeight: 700,
                  letterSpacing: '-0.03em'
                }}
              >
                <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-orange-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  360°
                </span>{' '}
                <span className="text-gray-900">Marketing Solutions</span>
              </h2>
              
              {/* Decorative Divider */}
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 rounded-full mx-auto" />
            </div>

            {/* Company Description - Centered Content */}
            <div className="w-full flex flex-col items-center">
              {/* Text Content - Centered with max-width */}
              <div className="space-y-10 md:space-y-12 w-full max-w-4xl">
                {/* First Paragraph */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="text-center"
                >
                  <p 
                    className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800"
                    style={{ 
                      fontFamily: 'var(--font-platform), -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.01em'
                    }}
                  >
                    <span className="text-4xl md:text-5xl lg:text-6xl font-bold float-left leading-none mr-3 mt-1 md:mt-2 lg:mt-1 bg-gradient-to-br from-orange-600 to-pink-600 bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-clash-display)' }}>B</span>
                    <span className="font-semibold text-gray-900">2C Advertisers</span>, established in <span className="font-bold text-orange-600">2007</span> in <span className="font-semibold text-gray-900">Hyderabad</span>, is a new-age branding, marketing and digital communication agency that is established to take your advertising endeavors to the next level. Started with a vision to create a platform to cater the clients with innovative solutions in print advertising. Adding corporate profiles to our portfolio in <span className="font-bold text-blue-600">2010</span>, reached <span className="font-bold text-orange-600">1 crore milestone in 2011</span>. Joined the digital era by upgrading ourselves in <span className="font-bold text-blue-600">2017</span>, now serving all medians from local signages to mass outdoor media like <span className="font-semibold text-gray-900">Hyderabad Metro</span>.
                  </p>
                </motion.div>
                
                {/* Second Paragraph - 360° Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-center space-y-6"
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-pink-500 to-purple-500 flex items-center justify-center shadow-lg">
                      <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-clash-display)' }}>360°</span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                      Comprehensive Approach
                    </h3>
                  </div>
                  <p 
                    className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800"
                    style={{ 
                      fontFamily: 'var(--font-platform), -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.01em'
                    }}
                  >
                    Employing a <span className="font-semibold text-orange-600">well-rounded 360-degree approach</span>, our approach lifts the image of your brand from a variety of vantage points. Right from <span className="font-medium text-gray-900">internal and external branding</span> to broadcast, <span className="font-medium text-gray-900">social media promotion</span> to SEO, <span className="font-medium text-gray-900">printing to website production</span>, <span className="font-bold text-pink-600">B2C has you covered</span>.
                  </p>
                </motion.div>
                
                {/* Third Paragraph - Quote Style */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-center relative py-8"
                >
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-6xl md:text-7xl font-bold text-orange-100 leading-none" style={{ fontFamily: 'var(--font-clash-display)' }}>"</div>
                  <p 
                    className="text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-800 italic relative z-10 mt-8"
                    style={{ 
                      fontFamily: 'var(--font-platform), -apple-system, BlinkMacSystemFont, "Segoe UI", "Inter", sans-serif',
                      fontWeight: 400,
                      letterSpacing: '0.01em'
                    }}
                  >
                    We at <span className="font-bold text-orange-600 not-italic">B2C</span> feel immensely honored to have been invited to render our services to your businesses. It is going to be the <span className="font-semibold text-pink-600 not-italic">steppingstone</span> for an upcoming association that is going to result in our <span className="font-bold text-gray-900 not-italic">mutual benefit</span> over a long period of time.
                  </p>
                  <div className="absolute bottom-0 right-1/2 transform translate-x-1/2 text-6xl md:text-7xl font-bold text-pink-100 leading-none" style={{ fontFamily: 'var(--font-clash-display)' }}>"</div>
                </motion.div>
              </div>

              {/* Image - Only visible on mobile/tablet, hidden on desktop, positioned below text */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="relative w-full max-w-4xl h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl lg:hidden mt-8 md:mt-12"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-purple-500/10 rounded-2xl z-10" />
                <Image
                  src="/images/assets/about-hero.jpg"
                  alt="B2C Advertisers - 360° Marketing Solutions"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 1024px) 100vw, 0px"
                  quality={90}
                  priority={false}
                />
                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent rounded-2xl z-10" />
              </motion.div>
            </div>

            {/* Statistics Cards - Premium 2-Column Layout for Desktop */}
            <div className="mt-20 md:mt-28 lg:mt-32 pt-16 md:pt-20 lg:pt-24 w-full">
              <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 lg:gap-10 w-full max-w-5xl mx-auto">
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={scrollReveal}
                      initial="initial"
                      whileInView="whileInView"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="group relative w-full"
                      whileHover={{ y: -8 }}
                    >
                      {/* Animated Gradient Border */}
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-500 rounded-2xl opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 animate-pulse" />
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 via-pink-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-500" />
                      
                      {/* Premium Glassmorphism Card */}
                      <div className="relative h-full min-h-[220px] md:min-h-[240px] lg:min-h-[280px] p-8 md:p-10 lg:p-12 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden w-full">
                        {/* Animated Background Gradient on Hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-pink-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Shimmer Effect on Hover */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                        
                        {/* Card Content */}
                        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8">
                          {/* Large Bold Number Display */}
                          <div 
                            className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-none text-gray-900"
                            style={{ fontFamily: 'var(--font-clash-display)' }}
                          >
                            <Counter end={stat.value} duration={2} />
                            {stat.suffix && (
                              <span className="text-4xl md:text-5xl lg:text-6xl text-orange-600">{stat.suffix}</span>
                            )}
                          </div>
                          
                          {/* Stat Label */}
                          <div className="space-y-2">
                            <h3 
                              className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900"
                              style={{ fontFamily: 'var(--font-clash-display)' }}
                            >
                              {stat.label}
                            </h3>
                          </div>
                        </div>
                      </div>
                    </motion.div>
              ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
