/**
 * Constants and Configuration
 * 
 * This file contains all static data, configuration, and constants used throughout the application.
 * Centralizing this data makes it easier to maintain and update content.
 */

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

/**
 * Site metadata and configuration
 * Used for SEO, Open Graph tags, and site-wide settings
 */
export const siteConfig = {
  name: 'B2C Advertisers',
  description: 'Leading advertising agency in Hyderabad since 2007. We provide 360° marketing solutions including print advertising, outdoor branding, digital marketing, and transit media.',
  url: 'https://b2cadvertisers.com',
  ogImage: '/images/og-image.jpg',
}

// ============================================================================
// NAVIGATION
// ============================================================================

/**
 * Main navigation links
 * Used in the header and mobile menu
 */
export const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
]

// ============================================================================
// SERVICES DATA
// ============================================================================

/**
 * Services offered by B2C Advertisers
 * Each service includes:
 * - id: Unique identifier
 * - title: Service name
 * - slug: URL-friendly identifier
 * - description: Service description
 * - image: Path to service image
 */
export const services = [
  {
    id: 1,
    title: 'Print Advertising',
    slug: 'print-advertising',
    description: 'B2C Advertisers knows how to leverage the power of print media effectively to maximize your brand\'s inert potential and create a lasting impression on your target audience.',
    image: '/images/assets/service-1.jpg',
  },
  {
    id: 2,
    title: 'Outdoor Branding',
    slug: 'outdoor-branding',
    description: 'B2C Advertisers are proud city slickers who understand the art of brand-building in the urban market.',
    image: '/images/assets/service-2.png',
  },
  {
    id: 3,
    title: 'Vehicle Branding',
    slug: 'vehicle-branding',
    description: 'B2C Advertisers provides vehicle branding solutions that will accelerate your business and ensure you hit the right gear.',
    image: '/images/assets/service-3.png',
  },
  {
    id: 4,
    title: 'Brochure Design',
    slug: 'brochure-design',
    description: 'B2C Advertisers designs and develops brochures that seek to connect with customers and tell them a story they can relate to as people, not as customers.',
    image: '/images/assets/service-4.png',
  },
]

// ============================================================================
// WORK PROCESS
// ============================================================================

/**
 * Company work process steps
 * Displayed in the "How we Work" section
 */
export const workProcess = [
  {
    number: '01',
    title: 'Strategy Planning',
    description: 'Understand the business goals and strategising targeted audience.',
  },
  {
    number: '02',
    title: 'Marketing Technology',
    description: 'Selecting Marketing Technology that materialize the stategy plan.',
  },
  {
    number: '03',
    title: 'Execution & Production',
    description: 'Design, Review and POC followed by Planned Execution and Production.',
  },
  {
    number: '04',
    title: 'Measuring & Analysis',
    description: 'Measure every sector of the campaign and analyse the results for a continuous improvement.',
  },
]

// ============================================================================
// COMPANY STATISTICS
// ============================================================================

/**
 * Company statistics displayed in the About section
 * Used with the Counter component for animated numbers
 */
export const companyStats = [
  { value: 18, suffix: 'Y', label: 'Experience in Advertising' },
  { value: 1086, suffix: '+', label: 'Corporate Clients' },
]

// ============================================================================
// FEATURED STATISTICS
// ============================================================================

/**
 * Featured statistics with emojis and detailed labels
 * Displayed in the FeaturedStats section with circular image thumbnails
 * 
 * @property {number} value - Numeric value for counter animation
 * @property {string} suffix - Suffix to display after number (+, K, L, etc.)
 * @property {string} label - Main label text
 * @property {string} sublabel - Additional descriptive text
 * @property {string} emoji - Emoji to display
 * @property {string} [displayValue] - Optional custom display value (e.g., "10K+", "15L+")
 */
export const featuredStats = [
  { 
    value: 2000, 
    suffix: '+', 
    label: 'Verified Outdoor Sites',
    sublabel: '(Billboards, Gantries, Kiosks)',
    emoji: 'Nice!'
  },
  { 
    value: 5000, 
    suffix: '+', 
    label: 'Targeted Print Options',
    sublabel: '(Regional + English Dailies)',
    emoji: 'Ho Ho!'
  },
  { 
    value: 10000, 
    suffix: '+', 
    label: 'High-Visibility Transit Media',
    sublabel: '(Autos, Buses, Metro Panels)',
    emoji: 'Holy Moly!',
    displayValue: '10K+'
  },
  { 
    value: 150000, 
    suffix: '+', 
    label: 'Digital Ad Placements',
    sublabel: '(Hyperlocal Targeting by Pin Code)',
    emoji: 'Nice!',
    displayValue: '15L+'
  },
]

// ============================================================================
// CLIENT BRANDS
// ============================================================================

/**
 * Client brand logo paths
 * Used in the Clients section for scrolling brand display
 */
export const clientBrands = [
  '/images/clients/client-1.png',
  '/images/clients/client-2.png',
  '/images/clients/client-3.png',
  '/images/clients/client-4.png',
  '/images/clients/client-5.png',
  '/images/clients/client-6.png',
  '/images/clients/client-7.png',
  '/images/clients/client-8.png',
  '/images/clients/client-9.png',
  '/images/clients/client-10.png',
  '/images/clients/client-11.png',
  '/images/clients/client-12.png',
]

// ============================================================================
// FEATURED PROJECTS
// ============================================================================

/**
 * Featured projects showcase
 * Displayed in the FeaturedProjects section
 * 
 * @property {number} id - Unique project identifier
 * @property {string} title - Project title
 * @property {string} description - Project description
 * @property {string} image - Path to project image
 * @property {string[]} categories - Project category tags
 */
export const featuredProjects = [
  {
    id: 1,
    title: 'OutDoor Advertisement',
    description: 'Comprehensive outdoor advertising solutions that maximize brand visibility and impact across strategic locations.',
    image: '/images/assets/featured-project-1.jpg',
    categories: ['Design', 'Location Identification', 'Execution'],
  },
  {
    id: 2,
    title: 'VEHICLE CAMPAIGNS',
    description: 'Mobile advertising campaigns that deliver maximum impressions with location-centric targeting and quick response capabilities.',
    image: '/images/assets/featured-project-2.jpg',
    categories: ['More Impressions', 'Location Centric', 'Quick Response'],
  },
  {
    id: 3,
    title: 'Business Gifts',
    description: 'Custom branded business gifts and on-desk products that strengthen client relationships and enhance brand recall.',
    image: '/images/assets/featured-project-3.jpg',
    categories: ['On-Desk Products', 'Branding', 'Creative Gifts'],
  },
  {
    id: 4,
    title: 'METRO TRAIN BRANDING',
    description: 'High-impact metro train branding solutions that reach millions of commuters daily with corporate branding excellence.',
    image: '/images/assets/featured-project-4.jpg',
    categories: ['Corporate Branding', 'Public Transport Advertising'],
  },
  {
    id: 5,
    title: 'BILL BOARDS',
    description: 'Premium billboard advertising in metro cities offering high visibility and extensive coverage for maximum brand exposure.',
    image: '/images/assets/featured-project-5.jpg',
    categories: ['High Visibility', 'Metro City Branding', 'Large Coverage'],
  },
  {
    id: 6,
    title: 'Mobile App Advertisement',
    description: 'Strategic mobile app advertising that penetrates target markets through popular apps, delivering effective digital branding solutions.',
    image: '/images/assets/featured-project-6.jpg',
    categories: ['Penetrate Brand with Popular Apps', 'Digital Branding'],
  },
]

// ============================================================================
// TESTIMONIALS
// ============================================================================

/**
 * Client testimonials
 * Displayed in the Testimonials section with rating stars
 * 
 * @property {number} id - Unique testimonial identifier
 * @property {string} name - Client name
 * @property {string} company - Client company/position
 * @property {string} text - Testimonial text
 * @property {number} rating - Star rating (1-5)
 * @property {string} avatar - Path to client avatar image
 */
export const testimonials = [
  {
    id: 1,
    name: 'Albert Juan',
    company: 'CEO & Founder, Archin Studio',
    text: 'Agntix studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity.',
    rating: 5,
    avatar: '/images/avatars/avatar-1.png',
  },
  {
    id: 2,
    name: 'Koen Chegg',
    company: 'CEO & Founder, Archin Studio',
    text: 'Agntix studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity.',
    rating: 5,
    avatar: '/images/avatars/avatar-2.jpg',
  },
  {
    id: 3,
    name: 'Warren Daniel',
    company: 'CEO & Founder, Archin Studio',
    text: 'Agntix studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity.',
    rating: 5,
    avatar: '/images/avatars/avatar-3.jpg',
  },
  {
    id: 4,
    name: 'Elvin Bond',
    company: 'CEO & Founder, Archin Studio',
    text: 'Agntix studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity.',
    rating: 5,
    avatar: '/images/avatars/avatar-4.jpg',
  },
  {
    id: 5,
    name: 'Abbas',
    company: 'CEO & Founder, Archin Studio',
    text: 'Agntix studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity.',
    rating: 5,
    avatar: '/images/avatars/avatar-5.jpg',
  },
  {
    id: 6,
    name: 'Jessamine Mumtaz',
    company: 'CEO & Founder, Archin Studio',
    text: 'Agntix studio ability to create a high quality UI is stands out. It\'s something we placed a premium on. A studio with passionate, professional, fun and full creativity.',
    rating: 5,
    avatar: '/images/avatars/avatar-6.png',
  },
]
