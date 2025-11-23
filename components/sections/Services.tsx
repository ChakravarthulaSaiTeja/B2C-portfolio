'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Image from 'next/image'
import Link from 'next/link'
import { services } from '@/lib/constants'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface Service {
  id: number
  title: string
  slug: string
  description: string
  image: string
}

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return

    // Detect mobile device for reduced animations
    const isMobile = window.innerWidth < 768
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      const serviceItems = gsap.utils.toArray<HTMLElement>('.service-item')
      const cleanupFunctions: (() => void)[] = []

      serviceItems.forEach((item, itemIndex) => {
        const number = item.querySelector('.service-number') as HTMLElement
        const title = item.querySelector('.service-title') as HTMLElement
        const description = item.querySelector('.service-description') as HTMLElement
        const link = item.querySelector('.service-link') as HTMLElement
        const image = item.querySelector('.service-image') as HTMLElement
        const imageWrapper = item.querySelector('.service-image-wrapper') as HTMLElement

        const isEven = itemIndex % 2 === 0
        const contentElements = [number, title, description, link, image].filter(Boolean)

        // Reduced complexity for mobile
        if (!isMobile && !prefersReducedMotion) {
          gsap.set(item, {
            transformPerspective: 1200,
            transformStyle: 'preserve-3d',
          })

          if (imageWrapper) {
            gsap.set(imageWrapper, {
              transformPerspective: 1200,
              transformStyle: 'preserve-3d',
            })
          }
        }

        // Simplified animations for mobile
        if (isMobile || prefersReducedMotion) {
          gsap.set(contentElements, {
            y: 40,
            opacity: 0,
          })

          if (image) {
            gsap.set(image, {
              scale: 0.95,
              opacity: 0,
            })
          }
        } else {
          gsap.set(contentElements, {
            y: 80,
            opacity: 0,
            z: -120,
            rotateX: 10,
            rotateY: isEven ? -4 : 4,
          })

          if (image) {
            gsap.set(image, {
              scale: 0.92,
              opacity: 0,
              z: -150,
              rotateX: 12,
              rotateY: isEven ? 6 : -6,
            })
          }
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            once: false,
          },
        })

        const textElements = [number, title, description, link].filter(Boolean)
        const animationDuration = isMobile || prefersReducedMotion ? 0.8 : 1.5
        const staggerDelay = isMobile || prefersReducedMotion ? 0.1 : 0.15

        textElements.forEach((el, index) => {
          if (isMobile || prefersReducedMotion) {
            tl.to(
              el,
              {
                y: 0,
                opacity: 1,
                duration: animationDuration,
                ease: 'power2.out',
              },
              index * staggerDelay
            )
          } else {
            tl.to(
              el,
              {
                y: 0,
                opacity: 1,
                z: 0,
                rotateX: 0,
                rotateY: 0,
                duration: animationDuration,
                ease: 'power3.out',
              },
              index * staggerDelay
            )
          }
        })

        if (image) {
          if (isMobile || prefersReducedMotion) {
            tl.to(
              image,
              {
                scale: 1,
                opacity: 1,
                duration: animationDuration,
                ease: 'power2.out',
              },
              textElements.length * staggerDelay
            )
          } else {
            tl.to(
              image,
              {
                scale: 1,
                opacity: 1,
                z: 0,
                rotateX: 0,
                rotateY: 0,
                duration: 1.6,
                ease: 'power3.out',
              },
              textElements.length * staggerDelay
            )
          }

          // Parallax only on desktop
          if (!isMobile && !prefersReducedMotion) {
            ScrollTrigger.create({
              trigger: item,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 0.8,
              onUpdate: (self) => {
                const progress = self.progress
                const parallaxAmount = 15 + progress * 8
                const rotateAmount = (progress - 0.5) * 2
                gsap.set(image, {
                  y: parallaxAmount,
                  rotateY: rotateAmount * 1.5,
                })
              },
            })
          }

          // 3D tilt only on desktop
          if (!isMobile) {
            const handleMouseMove = (e: MouseEvent) => {
              const rect = image.getBoundingClientRect()
              const x = e.clientX - rect.left
              const y = e.clientY - rect.top
              const centerX = rect.width / 2
              const centerY = rect.height / 2
              const rotateX = ((y - centerY) / centerY) * -8
              const rotateY = ((x - centerX) / centerX) * 8

              gsap.to(image, {
                rotateX,
                rotateY,
                duration: 0.6,
                ease: 'power2.out',
              })
            }

            const handleMouseLeave = () => {
              gsap.to(image, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.8,
                ease: 'power2.out',
              })
            }

            image.addEventListener('mousemove', handleMouseMove)
            image.addEventListener('mouseleave', handleMouseLeave)

            cleanupFunctions.push(() => {
              image.removeEventListener('mousemove', handleMouseMove)
              image.removeEventListener('mouseleave', handleMouseLeave)
            })
          }
        }
      })

      return () => {
        cleanupFunctions.forEach((cleanup) => cleanup())
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-b from-gray-50 via-white to-white overflow-hidden w-full">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-100/20 via-blue-100/20 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', right: '-10%' }} />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-100/20 via-orange-100/20 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" style={{ maxWidth: '50%', left: '-10%' }} />
      
      <div className="w-full relative z-10 py-16 md:py-20">
        <div className="mb-16 md:mb-20 lg:mb-24 text-center">
          <h2
            className="section-title center-text text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-gray-500"
            style={{ fontFamily: 'var(--font-clash-display)' }}
          >
            Services
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10 justify-items-center items-center max-w-5xl mx-auto w-full">
          {services.map((service: Service, index: number) => {
            const isEven = index % 2 === 0

            return (
            <div
              key={service.id}
                className="service-item group relative rounded-2xl overflow-hidden w-full max-w-md"
            >
                {/* Animated Gradient Border */}
                <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-500 via-blue-500 to-orange-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500" />
                <div className="absolute -inset-0.5 bg-gradient-to-br from-orange-400 via-blue-400 to-orange-400 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500" />
                
                {/* Glassmorphism Card */}
                <div className="relative bg-white/90 backdrop-blur-xl border border-white/50 rounded-2xl overflow-hidden shadow-lg group-hover:shadow-2xl group-hover:shadow-orange-500/20 transition-all duration-500">
                  {/* Animated Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50/30 via-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                  
                  {/* Content */}
                  <div className="relative z-10 p-6 md:p-8 lg:p-10 flex flex-col h-full">
                    <div className="flex-1 space-y-4 md:space-y-6">
                    <div
                        className="service-number text-5xl md:text-6xl lg:text-7xl font-bold leading-none bg-gradient-to-br from-orange-200 via-blue-200 to-orange-200 bg-clip-text text-transparent group-hover:from-orange-400 group-hover:via-blue-400 group-hover:to-orange-400 transition-all duration-500"
                        style={{ fontFamily: 'var(--font-clash-display)' }}
                      >
                        {String(index + 1).padStart(2, '0')}.
                </div>
                
                      <h3
                        className="service-title text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight group-hover:text-gray-800 transition-colors duration-300"
                        style={{ fontFamily: 'var(--font-clash-display)' }}
                      >
                      <Link
                        href={`/services/${service.slug}`}
                          className="hover:text-orange-600 transition-colors duration-300"
                      >
                        {service.title}
                      </Link>
                      </h3>

                      <p className="service-description text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {service.description}
                    </p>
                    </div>

                    <div className="service-link pt-4 md:pt-6">
                      <Link
                        href={`/services/${service.slug}`}
                        className="group/btn inline-flex items-center gap-2 text-sm md:text-base font-semibold uppercase tracking-[0.1em] text-orange-600 hover:text-orange-700 transition-colors duration-300 relative"
                        style={{ fontFamily: 'var(--font-clash-display)' }}
                      >
                        <span className="relative z-10">See Our Services</span>
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1"
                        >
                          <path
                            d="M1 11L11 1M11 1H1M11 1V11"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {/* Animated underline */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 group-hover/btn:w-full transition-all duration-500" />
                      </Link>
                </div>
                
                    <div className="service-image-wrapper relative w-full h-48 md:h-56 lg:h-64 mt-6 md:mt-8 rounded-xl overflow-hidden bg-gray-100 border border-gray-200/50 group-hover:border-orange-300/50 transition-colors duration-500">
                      <div className="service-image relative w-full h-full">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                          loading="lazy"
                          quality={75}
                      />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                        {/* Glow effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-blue-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-blue-500/10 group-hover:to-orange-500/10 transition-all duration-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Corner Accents */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/5 to-blue-500/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/5 to-orange-500/5 rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
