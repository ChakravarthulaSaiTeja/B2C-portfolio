/**
 * Testimonials Section Component
 * 
 * Modern client reviews section with Clutch integration.
 * Features a dark header with rating display and white testimonial cards.
 * 
 * Features:
 * - Dark background header with Clutch rating
 * - White rounded testimonial cards
 * - Swiper carousel with autoplay
 * - Profile pictures and client information
 * - Modern, clean design
 * - Responsive layout
 */

'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { testimonials } from '@/lib/constants'
import Image from 'next/image'
import { Star } from 'lucide-react'

export default function Testimonials() {
  const headerRef = useRef<HTMLDivElement>(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-100px' })

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden w-full">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', left: '-10%' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-pink-500/10 via-orange-500/10 to-transparent rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', right: '-10%' }} />

      <div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 relative z-10 py-16 md:py-20">
        {/* Section Header with Clutch Rating */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 60 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut',
          }}
          className="text-center mb-16 md:mb-20 lg:mb-24"
        >
          {/* Title */}
          <h2
            className="section-title center-text text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-12 md:mb-16"
            style={{ fontFamily: 'var(--font-mango-grotesque)' }}
          >
            Client Reviews
          </h2>

          {/* Clutch Rating Display */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            {/* Clutch Logo */}
            <div className="relative w-20 h-20 md:w-24 md:h-24">
              <Image
                src="/images/testimonials/logo.png"
                alt="Clutch Logo"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 80px, 96px"
              />
            </div>

            {/* Rating Info */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-white text-3xl md:text-4xl font-bold" style={{ fontFamily: 'var(--font-mango-grotesque)' }}>
                  4.9/5
                </span>
                {/* Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 md:w-6 md:h-6 fill-[#EF2B10] text-[#EF2B10]"
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-400 text-sm md:text-base">
                Based on 24 reviews on Clutch
              </p>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative flex justify-center">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-gray-400 !opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active !bg-orange-500 !opacity-100',
          }}
          breakpoints={{
            768: {
                slidesPerView: 1,
            },
            1024: {
                slidesPerView: 1,
            },
          }}
            className="!pb-16 w-full max-w-4xl"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
                {/* Testimonial Card */}
                <div className="bg-white rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-2xl border border-gray-100 w-full">
                  {/* Testimonial Text */}
                  <div className="mb-10 md:mb-12">
                    <p
                      className="text-block text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-800"
                      style={{ fontFamily: 'var(--font-mango-grotesque)' }}
                    >
                      &quot;{testimonial.text}&quot;
                    </p>
                  </div>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 md:gap-6">
                    {/* Avatar */}
                    {testimonial.avatar && (
                      <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden flex-shrink-0 border-2 border-gray-200">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 64px, 80px"
                        />
                </div>
                    )}

                    {/* Name and Company */}
                <div>
                      <h4
                        className="text-lg md:text-xl font-semibold text-gray-900 mb-1"
                        style={{ fontFamily: 'var(--font-mango-grotesque)' }}
                      >
                        {testimonial.name}
                      </h4>
                      <p className="text-sm md:text-base text-gray-600">
                        {testimonial.company}
                      </p>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        </div>
      </div>
    </section>
  )
}
