'use client'

import { Metadata } from 'next'
import ContactForm from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  
  const isHeroInView = useInView(heroRef, { once: true, margin: '-100px' })
  const isInfoInView = useInView(infoRef, { once: true, margin: '-100px' })
  const isFormInView = useInView(formRef, { once: true, margin: '-100px' })

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'bhanu@b2cadvertisers.com',
      href: 'mailto:bhanu@b2cadvertisers.com',
      color: 'from-orange-500 to-pink-500',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 9246568474',
      href: 'tel:+919246568474',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '3rd Floor, Oyster Complex, Greenlands Road Somajiguda, Begumpet, Hyderabad, TG - 500016',
      href: null,
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
      href: null,
      color: 'from-green-500 to-emerald-500',
    },
  ]

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white pb-20 relative overflow-hidden">
        {/* Spacer to prevent navbar overlap */}
        <div className="h-32 md:h-56 lg:h-64"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/20 via-pink-500/20 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-transparent rounded-full blur-3xl translate-y-1/2 translate-x-1/2 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 60 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isHeroInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                Contact Us
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            >
              Let's discuss how we can help grow your business
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 lg:p-12 border border-gray-100 hover:shadow-2xl transition-shadow duration-500">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="mb-8"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <MessageSquare className="text-white" size={24} />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold">
                      Send us a Message
                    </h2>
                  </div>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </motion.div>
                <ContactForm />
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              ref={infoRef}
              initial={{ opacity: 0, x: 50 }}
              animate={isInfoInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-orange-500 via-pink-500 to-orange-500 bg-clip-text text-transparent">
                    Get in Touch
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon
                    return (
                      <motion.div
                        key={info.title}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="group"
                      >
                        {info.href ? (
                          <a
                            href={info.href}
                            className="block bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300 group-hover:border-orange-200"
                          >
                            <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                              <Icon className="text-white" size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-orange-600 transition-colors">
                              {info.title}
                            </h3>
                            <p className="text-gray-700 group-hover:text-gray-900 transition-colors break-words">
                              {info.content}
                            </p>
                          </a>
                        ) : (
                          <div className="block bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                            <div className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center mb-4`}>
                              <Icon className="text-white" size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-2 text-gray-900">
                              {info.title}
                            </h3>
                            <p className="text-gray-700 break-words">
                              {info.content}
                            </p>
                          </div>
                        )}
                      </motion.div>
                    )
                  })}
                </div>

                {/* Additional CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInfoInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="mt-8 p-6 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-2xl border-2 border-orange-300 shadow-lg"
                >
                  <h3 className="font-bold text-xl mb-2 bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                    Need Immediate Assistance?
                  </h3>
                  <p className="text-gray-700 mb-4 font-medium">
                    Call us directly for urgent inquiries
                  </p>
                  <a
                    href="tel:+919246568474"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-orange-600 hover:to-pink-600 transition-all duration-300 hover:scale-105"
                  >
                    <Phone size={20} />
                    Call Now
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
