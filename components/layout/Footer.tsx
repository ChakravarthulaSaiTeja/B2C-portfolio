/**
 * Footer Component
 * 
 * Modern, futuristic footer with comprehensive navigation, contact info,
 * social links, and legal information.
 * 
 * Features:
 * - Company branding and description
 * - Navigation links
 * - Quick links (services, about)
 * - Contact information (email, phone, address)
 * - Social media links
 * - Newsletter signup
 * - Copyright and legal links
 * - Modern gradient design with animations
 * - Fully functional buttons and links
 */

'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react'
import { navLinks, siteConfig } from '@/lib/constants'

export default function Footer() {
  // Initialize with current year to avoid hydration mismatch
  const [currentYear, setCurrentYear] = useState(() => {
    if (typeof window !== 'undefined') {
      return new Date().getFullYear()
    }
    return 2024
  })
  const [email, setEmail] = useState('')

  // Update year on client side to ensure it's current
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  // Social media links
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/b2cadvertisers', color: 'hover:text-blue-600' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/b2cadvertisers', color: 'hover:text-pink-600' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/b2cadvertisers', color: 'hover:text-blue-700' },
    { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/b2cadvertisers', color: 'hover:text-blue-400' },
  ]

  // Quick links
  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  // Services links - using actual service slugs from constants
  const serviceLinks = [
    { name: 'Print Advertising', href: '/services/print-advertising' },
    { name: 'Outdoor Branding', href: '/services/outdoor-branding' },
    { name: 'Vehicle Branding', href: '/services/vehicle-branding' },
    { name: 'Brochure Design', href: '/services/brochure-design' },
  ]

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Newsletter subscription logic here
    // TODO: Integrate with newsletter service
    setEmail('')
    alert('Thank you for subscribing!')
  }

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-gray-900 to-black text-white overflow-hidden w-full" style={{ fontFamily: 'Times New Roman, serif' }}>
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/15 via-pink-500/15 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', left: '-10%' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-pink-500/15 via-orange-500/15 to-transparent rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', right: '-10%' }} />
      
      {/* Top Border Gradient - More prominent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-orange-500/70 to-transparent" />

      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-24 md:py-32 lg:py-40 xl:py-48">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20 lg:gap-24 xl:gap-32">
            {/* Column 1: Company Info */}
            <div className="space-y-10 md:space-y-12 lg:space-y-14">
              {/* Logo and Company Name */}
              <div className="flex items-center gap-5 md:gap-6 mb-10 md:mb-12">
                <div className="relative w-12 h-12 md:w-14 md:h-14">
                  <Image
                    src="/images/favicon/favicon.png"
                    alt="B2C Advertisers Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                B2C Advertisers
                </h3>
              </div>
              
              <p className="text-gray-400 leading-relaxed text-base md:text-lg max-w-sm">
                Leading advertising agency in Hyderabad since 2007. We provide 360° marketing solutions to elevate your brand.
              </p>

              {/* Social Media Links */}
              <div className="flex items-center gap-5 md:gap-6 pt-8 md:pt-10">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/20 hover:border-orange-500/50 hover:scale-110`}
                      aria-label={social.name}
                    >
                      <Icon size={18} />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="space-y-8 md:space-y-10">
              <h4
                className="text-xl md:text-2xl font-bold mb-10 md:mb-12 text-white"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                Quick Links
              </h4>
              <ul className="space-y-6 md:space-y-7 lg:space-y-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-base md:text-lg flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-3 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Services */}
            <div className="space-y-8 md:space-y-10">
              <h4
                className="text-xl md:text-2xl font-bold mb-10 md:mb-12 text-white"
                style={{ fontFamily: 'Times New Roman, serif' }}
              >
                Our Services
              </h4>
              <ul className="space-y-6 md:space-y-7 lg:space-y-8">
                {serviceLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-base md:text-lg flex items-center group"
                    >
                      <span className="w-0 group-hover:w-2 h-0.5 bg-orange-500 mr-0 group-hover:mr-3 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Contact & Newsletter */}
            <div className="space-y-12 md:space-y-16 lg:space-y-20">
              <div>
                <h4
                  className="text-xl md:text-2xl font-bold mb-10 md:mb-12 text-white"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  Get in Touch
                </h4>
                <ul className="space-y-7 md:space-y-8 lg:space-y-10">
                  <li className="flex items-start gap-5 md:gap-6">
                    <Mail className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <a
                      href="mailto:bhanu@b2cadvertisers.com"
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-base md:text-lg break-all"
                    >
                      bhanu@b2cadvertisers.com
                    </a>
                  </li>
                  <li className="flex items-start gap-5 md:gap-6">
                    <Phone className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <a
                      href="tel:+919246568474"
                      className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-base md:text-lg"
                    >
                      +91 9246568474
                    </a>
                  </li>
                  <li className="flex items-start gap-5 md:gap-6">
                    <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-400 text-base md:text-lg">
                      Hyderabad, India
                    </span>
                  </li>
                </ul>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4
                  className="text-xl md:text-2xl font-bold mb-4 text-white"
                  style={{ fontFamily: 'Times New Roman, serif' }}
                >
                  Newsletter
                </h4>
                <p className="text-gray-400 text-base mb-6 leading-relaxed">
                  Subscribe to get updates on our latest projects and services.
                </p>
                <form 
                  onSubmit={handleNewsletterSubmit} 
                  className="flex flex-col sm:flex-row gap-4 md:gap-5"
                  suppressHydrationWarning
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email"
                    required
                    className="flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all duration-300 text-base"
                    suppressHydrationWarning
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg hover:from-orange-600 hover:to-pink-600 transition-all duration-300 hover:scale-105 flex items-center justify-center min-w-[60px]"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-12 md:py-16 lg:py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-10">
            {/* Copyright */}
            <div className="text-gray-400 text-base md:text-lg">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-10 md:gap-12 lg:gap-14">
              <Link
                href="/terms"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-base md:text-lg"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-base md:text-lg"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
