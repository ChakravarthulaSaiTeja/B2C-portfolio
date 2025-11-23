/**
 * Animation Variants for Framer Motion
 * 
 * This file contains reusable animation variants for consistent animations
 * throughout the application. All animations use Framer Motion's Variants API.
 */

import { Variants } from 'framer-motion'

// ============================================================================
// FADE IN ANIMATIONS
// ============================================================================

/**
 * Fade in with upward movement
 * Used for elements that should fade in while moving up
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

/**
 * Simple fade in animation
 * Used for elements that should only fade in without movement
 */
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

/**
 * Fade in from the left
 * Used for elements entering from the left side
 */
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

/**
 * Fade in from the right
 * Used for elements entering from the right side
 */
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 20,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
}

// ============================================================================
// STAGGER ANIMATIONS
// ============================================================================

/**
 * Stagger container for animating children sequentially
 * Used for lists and grids where items should animate one after another
 * 
 * @example
 * <motion.div variants={staggerContainer} initial="initial" animate="animate">
 *   {items.map(item => <motion.div variants={fadeInUp}>{item}</motion.div>)}
 * </motion.div>
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1, // Delay between each child animation (in seconds)
    },
  },
}

// ============================================================================
// SCALE ANIMATIONS
// ============================================================================

/**
 * Scale in animation
 * Used for elements that should scale up while fading in
 */
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
}

// ============================================================================
// HOVER ANIMATIONS
// ============================================================================

/**
 * Scale up on hover
 * Used for interactive elements that should grow slightly on hover
 */
export const hoverScale = {
  scale: 1.05,
  transition: {
    duration: 0.3,
  },
}

/**
 * Lift up on hover
 * Used for cards and buttons that should move up on hover
 */
export const hoverLift = {
  y: -8,
  transition: {
    duration: 0.3,
  },
}

// ============================================================================
// SCROLL-TRIGGERED ANIMATIONS
// ============================================================================

/**
 * Scroll reveal animation
 * Most commonly used animation for sections that should animate when scrolled into view
 * 
 * Features:
 * - Fades in from opacity 0
 * - Moves up from y: 50
 * - Triggers when element enters viewport
 * - Only animates once (once: true)
 * - Starts animating 100px before element enters viewport
 * 
 * @example
 * <motion.div variants={scrollReveal} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
 *   Content here
 * </motion.div>
 */
export const scrollReveal: Variants = {
  initial: {
    opacity: 0,
    y: 50,
  },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99], // Custom easing curve for smooth animation
    },
  },
  viewport: {
    once: true, // Only animate once when first entering viewport
    margin: '-100px', // Start animation 100px before element enters viewport
  },
}
