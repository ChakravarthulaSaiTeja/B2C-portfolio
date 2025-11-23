/**
 * Counter Component
 * 
 * Animated number counter that counts from 0 to a target value.
 * The animation only triggers when the component enters the viewport.
 * 
 * Features:
 * - Smooth ease-out animation
 * - Viewport detection (only animates when visible)
 * - Configurable duration
 * - Uses requestAnimationFrame for smooth 60fps animation
 * 
 * @param {number} end - Target number to count to
 * @param {number} duration - Animation duration in seconds (default: 2)
 */

'use client'

import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

export default function Counter({ end, duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true }) // Only trigger once when entering viewport

  useEffect(() => {
    // Don't start animation until component is in viewport
    if (!isInView) return

    let startTime: number | null = null
    const startValue = 0

    /**
     * Animation function using requestAnimationFrame
     * Creates smooth 60fps animation with ease-out easing
     */
    const animate = (currentTime: number) => {
      // Initialize start time on first frame
      if (startTime === null) startTime = currentTime
      
      // Calculate progress (0 to 1)
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)

      // Ease-out cubic function for smooth deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3)
      
      // Calculate current count value
      const currentCount = Math.floor(startValue + (end - startValue) * easeOut)

      setCount(currentCount)

      // Continue animation if not complete
      if (progress < 1) {
        requestAnimationFrame(animate)
      } else {
        // Ensure final value is exact
        setCount(end)
      }
    }

    // Start animation
    requestAnimationFrame(animate)
  }, [isInView, end, duration])

  return <span ref={ref}>{count}</span>
}
