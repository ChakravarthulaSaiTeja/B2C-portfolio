'use client'

import Link from 'next/link'
import Image from 'next/image'
import { services } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pb-20">
        {/* Spacer to prevent navbar overlap */}
        <div className="h-32 md:h-56 lg:h-64"></div>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl max-w-3xl mx-auto bg-gradient-to-r from-orange-400 via-pink-400 to-orange-400 bg-clip-text text-transparent font-semibold"
              style={{
                backgroundSize: '200% auto',
                animation: 'gradient 3s ease infinite',
              }}
            >
              Comprehensive 360° marketing solutions for your business
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="block h-full"
                >
                  {/* Animated Gradient Border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 -z-10" />
                  
                  {/* Card */}
                  <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-orange-200">
                    {/* Animated Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-50/50 via-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                    
                    {/* Image Container */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="relative w-full h-full"
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-blue-500/0 to-orange-500/0 group-hover:from-orange-500/20 group-hover:via-blue-500/20 group-hover:to-orange-500/20 transition-all duration-500" />
                      </motion.div>
                      
                      {/* Floating Number Badge */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={isInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
                        transition={{ 
                          duration: 0.5, 
                          delay: index * 0.1 + 0.3,
                          type: 'spring',
                          stiffness: 200
                        }}
                        className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-orange-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <span className="text-white font-bold text-lg">{index + 1}</span>
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 p-6">
                      <motion.h3 
                        className="text-2xl font-bold mb-3 group-hover:text-[#FF5722] transition-colors duration-300"
                        whileHover={{ x: 4 }}
                      >
                        {service.title}
                      </motion.h3>
                      <p className="text-gray-600 mb-4 line-clamp-3 group-hover:text-gray-700 transition-colors duration-300">
                        {service.description}
                      </p>
                      
                      {/* CTA Button */}
                      <motion.div 
                        className="flex items-center text-[#FF5722] font-semibold"
                        whileHover={{ x: 8 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        <span>Learn More</span>
                        <motion.div
                          animate={{ x: [0, 4, 0] }}
                          transition={{ 
                            duration: 1.5, 
                            repeat: Infinity,
                            ease: 'easeInOut'
                          }}
                        >
                          <ArrowRight size={20} className="ml-2" />
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Corner Accents */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/0 to-blue-500/0 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:from-orange-500/10 group-hover:to-blue-500/10" />
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/0 to-orange-500/0 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:from-blue-500/10 group-hover:to-orange-500/10" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
