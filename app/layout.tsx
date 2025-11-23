/**
 * Root Layout
 * 
 * The root layout component that wraps all pages.
 * Sets up fonts, metadata, and global components.
 * 
 * Features:
 * - Font configuration (ClashDisplay, MangoGrotesque, Platform)
 * - SEO metadata and Open Graph tags
 * - Global components (Header, Footer, BackToTop, CustomCursor)
 */

import type { Metadata } from 'next'
import { clashDisplay, mangoGrotesque, platform } from '@/lib/fonts'
import { siteConfig } from '@/lib/constants'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import BackToTop from '@/components/ui/BackToTop'
import CustomCursor from '@/components/ui/CustomCursor'

// ============================================================================
// METADATA
// ============================================================================

/**
 * SEO and Open Graph metadata
 * Used for search engines and social media sharing
 */
export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, // Template for page-specific titles
  },
  description: siteConfig.description,
  icons: {
    icon: [
      { url: '/images/favicon/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/favicon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: '/images/favicon/favicon.png',
  },
  openGraph: {
    type: 'website',
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    images: [siteConfig.ogImage],
  },
  metadataBase: new URL(siteConfig.url),
}

// ============================================================================
// ROOT LAYOUT
// ============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${clashDisplay.variable} ${mangoGrotesque.variable} ${platform.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        {/* Custom cursor effect (desktop only) */}
          <CustomCursor />
        
        {/* Global Wrapper - Centers all content with max-width */}
        <div className="mx-auto max-w-[1440px] overflow-x-hidden px-4 md:px-6 lg:px-8 w-full">
        {/* Global Header Navigation */}
          <Header />
        
        {/* Main Content Area */}
          <main id="main-content">{children}</main>
        
        {/* Global Footer */}
          <Footer />
        </div>
        
        {/* Back to Top Button */}
          <BackToTop />
      </body>
    </html>
  )
}
