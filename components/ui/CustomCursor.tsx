/**
 * Custom Cursor Component
 * 
 * Custom animated cursor that replaces the default browser cursor on desktop.
 * Features smooth spring animations, hover states, and click animations.
 * 
 * Features:
 * - Smooth spring-based cursor movement
 * - Hover detection for interactive elements
 * - Click animation feedback
 * - Trailing dots effect
 * - Automatically disabled on mobile devices
 * - Mix-blend-difference for visibility on all backgrounds
 */

'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  // Cursor state
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  // Motion values for cursor position
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  // Spring configuration for smooth cursor movement
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    /**
     * Check if device is mobile
     * Custom cursor is disabled on mobile devices
     */
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Don't initialize cursor on mobile
    if (isMobile) return

    /**
     * Update cursor position on mouse move
     */
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16) // Offset by half cursor width
      cursorY.set(e.clientY - 16) // Offset by half cursor height
      if (!isVisible) setIsVisible(true)
    }

    /**
     * Handle mouse down (clicking state)
     */
    const handleMouseDown = () => setIsClicking(true)
    
    /**
     * Handle mouse up (release clicking state)
     */
    const handleMouseUp = () => setIsClicking(false)

    /**
     * Detect hover over interactive elements
     * Checks for links, buttons, and elements with pointer cursor
     */
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isInteractive: boolean =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        !!target.closest('a') ||
        !!target.closest('button') ||
        !!target.closest('[role="button"]') ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsHovering(isInteractive)
    }

    /**
     * Reset hover state when mouse leaves interactive element
     */
    const handleMouseOut = () => {
      setIsHovering(false)
    }

    // Event listeners
    window.addEventListener('mousemove', moveCursor)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    // Hide default browser cursor
    document.body.style.cursor = 'none'

    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile)
      window.removeEventListener('mousemove', moveCursor)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.body.style.cursor = 'auto' // Restore default cursor
    }
  }, [cursorX, cursorY, isVisible, isMobile])

  // Don't render on mobile or before first mouse movement
  if (isMobile || !isVisible) return null

  return (
    <>
      {/* Main Cursor Dot - Smooth spring animation */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      >
        <motion.div
          className="w-8 h-8 rounded-full bg-white"
          animate={{
            scale: isHovering ? 1.5 : isClicking ? 0.8 : 1,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
          }}
        />
      </motion.div>

      {/* Outer Ring - Follows cursor with slight delay */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      >
        <motion.div
          className="w-12 h-12 rounded-full border-2 border-white/30"
          animate={{
            scale: isHovering ? 1.8 : isClicking ? 0.6 : 1,
            opacity: isHovering ? 0.5 : 0.3,
          }}
          transition={{
            type: 'spring',
            stiffness: 500,
            damping: 28,
          }}
        />
      </motion.div>

      {/* Trailing Dots - Animated trail effect */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 pointer-events-none z-[9997]"
          style={{
            x: cursorX,
            y: cursorY,
          }}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-white/40"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.2, // Stagger animation for each dot
              ease: 'easeInOut',
            }}
            style={{
              x: (i + 1) * 8, // Offset each dot
              y: (i + 1) * 8,
            }}
          />
        </motion.div>
      ))}
    </>
  )
}
