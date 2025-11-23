/**
 * Font Configuration
 * 
 * This file configures clean, modern sans-serif fonts using Next.js font optimization.
 */

import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

// ============================================================================
// INTER FONT FAMILY - Clean, Modern Sans-Serif
// ============================================================================

/**
 * Inter - Clean, modern sans-serif font for all text
 * Used for headings, body text, and all UI elements
 * 
 * Available weights:
 * - 300: Light
 * - 400: Regular
 * - 500: Medium
 * - 600: Semibold
 * - 700: Bold
 */
// Main Inter font instance
export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// Create Inter instances with old variable names for backward compatibility
export const clashDisplay = Inter({
  subsets: ['latin'],
  variable: '--font-clash-display',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const mangoGrotesque = Inter({
  subsets: ['latin'],
  variable: '--font-mango-grotesque',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const platform = Inter({
  subsets: ['latin'],
  variable: '--font-platform',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})
