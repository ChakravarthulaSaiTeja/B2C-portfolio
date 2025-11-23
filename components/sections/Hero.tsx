/**
 * Hero Section Component
 * 
 * The main hero section displayed at the top of the homepage.
 * Features animated text reveal and a scroll indicator.
 * 
 * Features:
 * - Word-by-word animation for title
 * - Character-by-character animation for subtitle
 * - Animated scroll indicator
 * - Full-screen background image with overlay
 */

'use client'

import { motion, AnimatePresence, type Variants } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

// ============================================================================
// CONSTANTS
// ============================================================================

/**
 * Array of hero background images for the fade transition loop
 * Images will fade in and out in sequence, looping continuously
 */
const heroImages = [
  '/images/assets/hero-banner-1.jpg',
  '/images/assets/hero-banner-2.jpg',
]

// ============================================================================
// ANIMATION HELPERS
// ============================================================================

/**
 * Splits text into words for word-by-word animation
 */
const splitText = (text: string) => text.split(' ')

/**
 * Animation variants for individual words
 * Each word fades in and moves up with a staggered delay
 */
const wordVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1, // 0.1s delay between each word
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number], // Custom easing for smooth animation
    },
  }),
}

/**
 * Animation variants for subtitle
 * Fades in with scale and upward movement
 */
const subtitleVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.8, // Start after title animation
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
}

/**
 * Animation variants for background image fade transition
 * Controls the fade-out and fade-in effect between images
 */
const imageVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1 },
  exit: { opacity: 0 },
}

// ============================================================================
// COMPONENT
// ============================================================================

export default function Hero() {
  // Current image index for the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Split title into words for animation
  const titleLine1 = splitText('Experience')
  const titleLine2 = splitText('B2C Advertisers Impact')
  const subtitleLine1 = '360° Marketing Solutions'
  const subtitleLine2 = 'Since 2007'

  /**
   * Auto-advance image carousel with fade transition
   * Changes image every 5 seconds with a smooth fade-out/fade-in effect
   */
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden w-full max-w-full">
      {/* Background Images with Fade Transition */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 1.5, ease: 'easeInOut' }, // Smooth 1.5s fade transition
            }}
            className="absolute inset-0"
          >
        <Image
              src={heroImages[currentImageIndex]}
              alt={`B2C Advertisers Hero Background ${currentImageIndex + 1}`}
          fill
          className="object-cover"
              style={
                currentImageIndex === 1
                  ? { objectPosition: 'center center' }
                  : undefined
              }
              priority={currentImageIndex === 0}
              quality={currentImageIndex === 0 ? 90 : 75}
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-[900px] mx-auto px-4 text-center">
        {/* Animated Title */}
        <motion.h1
          initial="hidden"
          animate="visible"
          className="center-text text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-8 md:mb-12 leading-[0.9] tracking-tight"
          style={{ fontFamily: 'var(--font-clash-display)' }}
        >
          {/* First Line: "Experience" */}
          <motion.span
            className="block mb-3 md:mb-6"
            initial="hidden"
            animate="visible"
          >
            {titleLine1.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordVariants}
                className="inline-block mr-8 md:mr-12 lg:mr-16 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent drop-shadow-2xl"
                style={{
                  textShadow: '0 0 40px rgba(255, 255, 255, 0.3)',
                }}
          >
                {word}{i < titleLine1.length - 1 && '\u00A0'}
              </motion.span>
            ))}
          </motion.span>

          {/* Second Line: "B2C Advertisers Impact" */}
          <motion.span
            className="block"
            initial="hidden"
            animate="visible"
          >
            {titleLine2.map((word, i) => (
              <motion.span
                key={i}
                custom={i + titleLine1.length} // Continue delay from first line
                variants={wordVariants}
                className={`inline-block mr-8 md:mr-12 lg:mr-16 ${
                  i === 0 || i === 1 
                    ? 'bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent' 
                    : 'text-white'
                } drop-shadow-2xl`}
                style={{
                  textShadow: i === 0 || i === 1 
                    ? '0 0 50px rgba(59, 130, 246, 0.4)' 
                    : '0 0 40px rgba(255, 255, 255, 0.3)',
                  fontWeight: i === 0 || i === 1 ? 700 : 600,
                }}
          >
                {word}{i < titleLine2.length - 1 && '\u00A0'}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Animated Subtitle - Character by character */}
        <div className="w-full flex flex-col items-center mt-10 md:mt-16">
          {/* First Line: "360° Marketing Solutions" */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="center-text text-xl md:text-2xl lg:text-2xl xl:text-3xl font-light tracking-wider"
            style={{ 
              fontFamily: 'var(--font-mango-grotesque)',
              fontWeight: 300,
              letterSpacing: '0.15em',
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.2)',
            }}
          >
            {subtitleLine1.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2 + i * 0.03, // Start after title, 0.03s per character
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {/* Preserve spaces */}
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.p>
          
          {/* Second Line: "Since 2007" */}
          <motion.p
            variants={subtitleVariants}
            initial="hidden"
            animate="visible"
            className="center-text text-xl md:text-2xl lg:text-2xl xl:text-3xl font-light tracking-wider mt-2 md:mt-4"
            style={{ 
              fontFamily: 'var(--font-mango-grotesque)',
              fontWeight: 300,
              letterSpacing: '0.15em',
              color: 'rgba(255, 255, 255, 0.95)',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(59, 130, 246, 0.2)',
            }}
          >
            {subtitleLine2.split('').map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 1.2 + subtitleLine1.length * 0.03 + 0.2 + i * 0.03, // Start after first line
                  duration: 0.3,
                  ease: 'easeOut',
                }}
                className="inline-block"
              >
                {/* Preserve spaces */}
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.p>
        </div>
      </div>

      {/* Scroll Indicator - Animated mouse scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, repeat: Infinity, repeatType: 'reverse', duration: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          {/* Animated scroll dot */}
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </section>
  )
}
