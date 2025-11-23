'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import { clientBrands } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Clients() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const topRowRef = useRef<HTMLDivElement>(null)
  const bottomRowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    // Detect mobile device for reduced animations
    const isMobile = window.innerWidth < 768
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      // Animate section title
      if (titleRef.current) {
        if (isMobile || prefersReducedMotion) {
          gsap.from(titleRef.current, {
            y: 40,
            opacity: 0,
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            duration: 0.8,
            ease: 'power2.out',
          })
        } else {
          gsap.from(titleRef.current, {
            y: 60,
            opacity: 0,
            transformPerspective: 1200,
            z: -100,
            rotateX: 8,
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            duration: 1.4,
            ease: 'power3.out',
          })
        }
      }

      // Animate scrolling rows
      const rows = [topRowRef.current, bottomRowRef.current].filter(Boolean) as HTMLElement[]

      rows.forEach((row, index) => {
        if (!row) return

        if (isMobile || prefersReducedMotion) {
          gsap.from(row, {
            y: 50,
            opacity: 0,
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            duration: 0.8,
            ease: 'power2.out',
            delay: index * 0.1,
          })
        } else {
          gsap.from(row, {
            y: 80,
            opacity: 0,
            transformPerspective: 1200,
            z: -120,
            rotateX: 10,
            scrollTrigger: {
              trigger: row,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            duration: 1.5,
            ease: 'power3.out',
            delay: index * 0.2,
          })
        }
      })

      // Animate individual logo cards (simplified on mobile)
      const logoCards = gsap.utils.toArray<HTMLElement>('.logo-card')

      logoCards.forEach((card, index) => {
        if (isMobile || prefersReducedMotion) {
          gsap.from(card, {
            scale: 0.9,
            opacity: 0,
            y: 30,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            duration: 0.7,
            ease: 'power2.out',
            delay: (index % 12) * 0.03,
          })
        } else {
          gsap.from(card, {
            scale: 0.8,
            opacity: 0,
            y: 40,
            transformPerspective: 1200,
            z: -80,
            rotateY: index % 2 === 0 ? -10 : 10,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
            duration: 1.2,
            ease: 'power3.out',
            delay: (index % 12) * 0.05,
          })
        }
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // Split brands into two rows
  const topBrands = clientBrands.slice(0, 6)
  const bottomBrands = clientBrands.slice(6)

  return (
    <section
      ref={sectionRef}
      className="relative bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden w-full"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100/15 via-pink-100/15 to-transparent rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', left: '-10%' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-pink-100/15 via-orange-100/15 to-transparent rounded-full blur-3xl translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', right: '-10%' }} />

      <div className="w-full relative z-10 py-16 md:py-20">
        {/* Section Title */}
        <div ref={titleRef} className="mb-16 md:mb-20 lg:mb-24">
          <h2
            className="section-title center-text text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-gray-500"
            style={{ fontFamily: 'var(--font-clash-display)' }}
          >
            Clients
          </h2>
        </div>

        {/* Scrolling Brand Logos Container */}
        <div className="relative">
          {/* Top Row - Scrolling Left */}
          <div ref={topRowRef} className="mb-6 md:mb-8 overflow-hidden w-full">
            <div className="flex items-center animate-scroll-left w-max">
              {/* First set of logos */}
              {topBrands.map((brand, index) => (
                <div
                  key={`top-${index}`}
                  className="logo-card flex-shrink-0 px-4 md:px-6"
                >
                  <div className="group relative">
                    {/* Glassmorphism Card */}
                    <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden">
                      {/* Animated Gradient Border on Hover */}
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      
                      {/* Shimmer Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      
                      {/* Logo Image */}
                      <div className="relative z-10 flex items-center justify-center h-16 md:h-20 w-24 md:w-32">
                        <Image
                          src={brand}
                          alt={`Client Brand ${index + 1}`}
                          width={120}
                          height={80}
                          className="object-contain h-full w-full opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                          loading="lazy"
                          quality={75}
                        />
                      </div>
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/5 to-orange-500/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless infinite loop */}
              {topBrands.map((brand, index) => (
                <div
                  key={`top-dup-${index}`}
                  className="logo-card flex-shrink-0 px-4 md:px-6"
                >
                  <div className="group relative">
                    <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="relative z-10 flex items-center justify-center h-16 md:h-20 w-24 md:w-32">
                        <Image
                          src={brand}
                          alt={`Client Brand ${index + 1}`}
                          width={120}
                          height={80}
                          className="object-contain h-full w-full opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                          loading="lazy"
                          quality={75}
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/5 to-orange-500/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Scrolling Right */}
          <div ref={bottomRowRef} className="overflow-hidden w-full">
            <div className="flex items-center animate-scroll-right w-max">
              {/* First set of logos */}
              {bottomBrands.map((brand, index) => (
                <div
                  key={`bottom-${index}`}
                  className="logo-card flex-shrink-0 px-4 md:px-6"
                >
                  <div className="group relative">
                    <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="relative z-10 flex items-center justify-center h-16 md:h-20 w-24 md:w-32">
                        <Image
                          src={brand}
                          alt={`Client Brand ${index + 7}`}
                          width={120}
                          height={80}
                          className="object-contain h-full w-full opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/5 to-orange-500/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless infinite loop */}
              {bottomBrands.map((brand, index) => (
                <div
                  key={`bottom-dup-${index}`}
                  className="logo-card flex-shrink-0 px-4 md:px-6"
                >
                  <div className="group relative">
                    <div className="relative bg-white/80 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden">
                      <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-pink-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      <div className="relative z-10 flex items-center justify-center h-16 md:h-20 w-24 md:w-32">
                        <Image
                          src={brand}
                          alt={`Client Brand ${index + 7}`}
                          width={120}
                          height={80}
                          className="object-contain h-full w-full opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                        />
                      </div>
                      <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-orange-500/5 to-pink-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/5 to-orange-500/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
