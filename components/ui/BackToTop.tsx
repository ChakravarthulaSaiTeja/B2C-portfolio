/**
 * Back to Top Button Component
 * 
 * Floating button that appears when user scrolls down.
 * Clicking it smoothly scrolls back to the top of the page.
 * 
 * Features:
 * - Appears after scrolling 300px
 * - Smooth scroll animation
 * - Fade in/out animations
 * - Fixed position in bottom-right corner
 */

'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  /**
   * Scroll event listener
   * Shows button when user scrolls past 300px
   */
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  /**
   * Smooth scroll to top
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#FF5722] text-white p-3 rounded-full shadow-lg hover:bg-[#FF481F] transition-colors duration-300 z-50"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
