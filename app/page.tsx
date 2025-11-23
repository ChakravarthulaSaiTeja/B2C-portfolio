/**
 * Home Page
 * 
 * Main landing page that combines all section components.
 * Sections are displayed in order from top to bottom.
 * 
 * Page Structure:
 * 1. Hero - Full-screen hero section with animated title
 * 2. About - Company information and statistics
 * 3. Services - List of services offered
 * 4. Clients - Scrolling client brand logos
 * 5. FeaturedProjects - Showcase of featured projects
 * 6. FeaturedStats - Key statistics with circular thumbnails
 * 7. WorkProcess - Company work process steps
 * 8. Testimonials - Client testimonials carousel
 */

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Clients from '@/components/sections/Clients'
import FeaturedStats from '@/components/sections/FeaturedStats'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import WorkProcess from '@/components/sections/WorkProcess'
import Testimonials from '@/components/sections/Testimonials'

/**
 * Section Divider Component
 * Adds visual separation between sections
 * Simplified design for mobile, more decorative for desktop
 */
function SectionDivider() {
  return (
    <div className="relative w-full py-6 md:py-12 lg:py-16" style={{ fontFamily: 'Times New Roman, serif' }}>
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gray-300/30 md:via-gray-300/50 to-transparent" />
      </div>
      {/* Decorative dots - hidden on mobile, shown on desktop */}
      <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-60" />
        <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 opacity-40" />
        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 opacity-60" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <Clients />
      <SectionDivider />
      <FeaturedProjects />
      <SectionDivider />
      <FeaturedStats />
      <SectionDivider />
      <WorkProcess />
      <SectionDivider />
      <Testimonials />
    </>
  )
}
