/**
 * Header Component - Futuristic & Modern Design
 * 
 * Main navigation header with responsive mobile menu.
 * Features a futuristic glassmorphism design with animated effects.
 * 
 * Features:
 * - Glassmorphism effect with animated gradient borders
 * - Futuristic hover effects with glow and shine
 * - Smooth scroll-based styling transitions
 * - Animated active route indicators
 * - Modern mobile menu with slide animations
 * - Neon accent colors and smooth transitions
 */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Phone, Mail, MapPin, Globe, Twitter, Instagram } from 'lucide-react'
import { navLinks } from '@/lib/constants'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Header() {
  // State for scroll detection
  const [isScrolled, setIsScrolled] = useState(false)
  // State for mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  /**
   * Scroll event listener
   * Changes header style when user scrolls past 50px
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /**
   * Toggle mobile menu
   */
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  /**
   * Close mobile menu when clicking outside or on link
   */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 w-full overflow-x-hidden ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >

      <nav className="w-full">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 md:gap-2.5 group relative z-10">
            {/* Favicon Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative flex-shrink-0"
            >
              <Image
                src="/images/favicon/favicon.png"
                alt="B2C Advertisers"
                width={24}
                height={24}
                className="w-6 h-6 md:w-7 md:h-7 object-contain"
                priority
              />
            </motion.div>
            {/* Company Name */}
            <motion.span
              whileHover={{ scale: 1.02 }}
              className={`relative text-lg md:text-xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
              style={{ fontFamily: 'var(--font-clash-display)' }}
            >
              B2C Advertisers
            </motion.span>
          </Link>

          {/* Desktop Navigation - Clean and properly spaced */}
          <ul className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link, index) => {
              // Check if current route is active
              const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group relative block"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.3 }}
                      className={`relative py-2 text-sm font-semibold uppercase tracking-[0.1em] transition-colors duration-300 ${
                      isScrolled 
                        ? isActive
                            ? 'text-orange-600'
                            : 'text-gray-700 hover:text-orange-600'
                        : isActive
                          ? 'text-white'
                            : 'text-white/90 hover:text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-clash-display)' }}
                  >
                      {/* Text content */}
                      <span className="relative z-10">{link.name}</span>
                      
                      {/* Active indicator - Gradient underline */}
                    {isActive && (
                        <motion.div
                        layoutId="activeIndicator"
                          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500"
                        initial={false}
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                    </motion.div>
                  </Link>
                </li>
              )
            })}
          </ul>

          {/* Mobile Menu Toggle Button */}
          <motion.button
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
            className={`md:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-800 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu - Two Column Futuristic Design */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop overlay with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMobileMenu}
              className="fixed inset-0 bg-black/70 backdrop-blur-md z-40 md:hidden"
            />
            
            {/* Menu panel - Full screen two-column layout */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-[100vw] bg-white z-50 md:hidden overflow-y-auto"
            >
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-transparent to-blue-50/30 pointer-events-none" />
              
              <div className="flex flex-col lg:flex-row h-full min-h-screen relative z-10">
                {/* Left Column - Navigation */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full lg:w-1/2 bg-white p-8 md:p-12 lg:p-16 relative"
                >
                  {/* Logo */}
                  <motion.div
                    initial={{ opacity: 0, y: -30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
                    className="flex items-center gap-4 mb-16 group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-12 h-12"
                    >
                      <Image
                        src="/images/favicon/favicon.png"
                        alt="B2C Advertisers"
                        fill
                        className="object-contain transition-transform duration-300"
                      />
                    </motion.div>
                    <motion.span
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-2xl font-bold text-gray-900 underline decoration-orange-500 decoration-2 underline-offset-4"
                      style={{ fontFamily: 'var(--font-clash-display)' }}
                    >
                      B2C Advertisers
                    </motion.span>
                  </motion.div>

                  {/* Navigation Menu Items */}
                  <ul className="space-y-2">
                    {navLinks.map((link, index) => {
                      const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href))
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -50, scale: 0.95 }}
                          animate={{ opacity: 1, x: 0, scale: 1 }}
                          transition={{ 
                            delay: 0.2 + index * 0.1, 
                            duration: 0.5, 
                            ease: [0.22, 1, 0.36, 1]
                          }}
                          whileHover={{ x: 10 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="group relative flex items-center gap-4 py-4 px-2 rounded-xl transition-all duration-300 hover:bg-orange-50/50"
                          >
                            {/* Animated background on hover */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                              initial={false}
                            />
                            
                            {/* Number */}
                            <motion.span
                              whileHover={{ scale: 1.2, x: 5 }}
                              className="text-2xl font-bold text-gray-300 group-hover:text-orange-600 transition-colors duration-300 w-12 relative z-10"
                              style={{ fontFamily: 'var(--font-clash-display)' }}
                            >
                              {String(index + 1).padStart(2, '0')}
                            </motion.span>
                            
                            {/* Link Text */}
                            <motion.span
                              whileHover={{ scale: 1.05 }}
                              className={`text-3xl md:text-4xl font-bold transition-colors duration-300 relative z-10 ${
                                isActive
                                  ? 'text-orange-600'
                                  : 'text-gray-900 group-hover:text-orange-600'
                              }`}
                              style={{ fontFamily: 'var(--font-clash-display)' }}
                            >
                              {link.name}
                            </motion.span>
                            
                            {/* Active indicator */}
                            {isActive && (
                              <motion.div
                                layoutId="mobileActiveIndicator"
                                className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-blue-500 rounded-r-full"
                                initial={false}
                                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                              />
                            )}
                          </Link>
                        </motion.li>
                      )
                    })}
                  </ul>
                </motion.div>

                {/* Right Column - Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-12 lg:p-16 relative"
                >
                  {/* Close Button */}
                  <motion.button
                    onClick={toggleMobileMenu}
                    whileHover={{ scale: 1.15, rotate: 90, boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                    className="absolute top-8 right-8 w-14 h-14 rounded-full bg-white hover:bg-orange-50 border-2 border-gray-200 hover:border-orange-500 flex items-center justify-center transition-all duration-300 group shadow-xl z-20"
                    aria-label="Close menu"
                  >
                    <X size={24} className="text-gray-900 group-hover:text-orange-600 transition-colors" />
                  </motion.button>

                  {/* Get In Touch Section */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6, ease: 'easeOut' }}
                    className="space-y-12"
                  >
                    <motion.h2
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                      className="text-4xl md:text-5xl font-bold text-gray-900 mb-12"
                      style={{ fontFamily: 'var(--font-clash-display)' }}
                    >
                      Get In Touch
                    </motion.h2>

                    {/* Contact Details */}
                    <div className="space-y-10">
                      {/* Phone */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        whileHover={{ x: 5 }}
                        className="space-y-3 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-3 mb-2"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Phone className="w-6 h-6 text-orange-600" />
                          </motion.div>
                          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Phone
                          </span>
                        </motion.div>
                        <motion.a
                          href="tel:+919246568474"
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="text-2xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-300 block"
                          style={{ fontFamily: 'var(--font-clash-display)' }}
                        >
                          +91 9246568474
                        </motion.a>
                      </motion.div>

                      {/* Email */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        whileHover={{ x: 5 }}
                        className="space-y-3 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-3 mb-2"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <Mail className="w-6 h-6 text-orange-600" />
                          </motion.div>
                          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Email
                          </span>
                        </motion.div>
                        <motion.a
                          href="mailto:bhanu@b2cadvertisers.com"
                          whileHover={{ scale: 1.05, x: 5 }}
                          className="text-xl font-bold text-gray-900 hover:text-orange-600 transition-colors duration-300 block break-all"
                          style={{ fontFamily: 'var(--font-clash-display)' }}
                        >
                          bhanu@b2cadvertisers.com
                        </motion.a>
                      </motion.div>

                      {/* Address */}
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7, duration: 0.5 }}
                        whileHover={{ x: 5 }}
                        className="space-y-3 group"
                      >
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="flex items-center gap-3 mb-2"
                        >
                          <motion.div
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.5 }}
                          >
                            <MapPin className="w-6 h-6 text-orange-600" />
                          </motion.div>
                          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                            Address
                          </span>
                        </motion.div>
                        <motion.p
                          whileHover={{ scale: 1.02 }}
                          className="text-lg font-bold text-gray-900 leading-relaxed"
                          style={{ fontFamily: 'var(--font-clash-display)' }}
                        >
                          3rd Floor, Oyster Complex,<br />
                          Greenlands Road Somajiguda,<br />
                          Begumpet, Hyderabad,<br />
                          TG - 500016
                        </motion.p>
                      </motion.div>
                    </div>

                    {/* Social Media */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      className="pt-8"
                    >
                      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
                        Follow us
                      </p>
                      <div className="flex items-center gap-4">
                        {[
                          { icon: Globe, href: 'https://b2cadvertisers.com', label: 'Website' },
                          { icon: Twitter, href: 'https://twitter.com/b2cadvertisers', label: 'Twitter' },
                          { icon: Instagram, href: 'https://instagram.com/b2cadvertisers', label: 'Instagram' },
                        ].map((social, index) => {
                          const Icon = social.icon
                          return (
                            <motion.a
                              key={social.label}
                              href={social.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.9 + index * 0.1, type: 'spring', stiffness: 200 }}
                              whileHover={{ scale: 1.2, rotate: 5, y: -5 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-14 h-14 rounded-full bg-white border-2 border-gray-200 hover:border-orange-600 hover:bg-gradient-to-br hover:from-orange-50 hover:to-blue-50 flex items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-xl"
                              aria-label={social.label}
                            >
                              <Icon className="w-6 h-6 text-gray-600 group-hover:text-orange-600 transition-colors" />
                            </motion.a>
                          )
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
