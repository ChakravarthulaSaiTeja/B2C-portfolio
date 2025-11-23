# B2C Advertisers - Portfolio Website

A modern, responsive Next.js portfolio website for B2C Advertisers - a leading advertising agency in Hyderabad since 2007.

## 🚀 Features

- **Modern Design**: Clean, professional, and futuristic UI with glassmorphism effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Performance Optimized**: Next.js 16 with Image optimization and code splitting
- **Smooth Animations**: Framer Motion and GSAP for engaging user experience
- **SEO Friendly**: Proper metadata, Open Graph tags, and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion, GSAP
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod validation
- **Carousel**: Swiper.js

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🌐 Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

### Vercel Configuration

The project is already configured for Vercel with:
- Automatic Next.js detection
- Image optimization enabled
- Environment variables support (if needed)

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── services/          # Services pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/             # React components
│   ├── layout/            # Header, Footer
│   ├── sections/          # Homepage sections
│   ├── forms/             # Form components
│   └── ui/                # UI components
├── lib/                    # Utilities and constants
│   ├── constants.ts       # Site data and configuration
│   ├── fonts.ts           # Font configuration
│   └── animations.ts      # Animation variants
└── public/                 # Static assets
    └── images/            # Image assets
```

## 🎨 Key Sections

- **Hero**: Animated hero section with background image carousel
- **About**: Company history and statistics
- **Services**: Service offerings with interactive cards
- **Clients**: Scrolling client brand logos
- **Featured Projects**: Project showcase
- **Featured Stats**: Key statistics with circular thumbnails
- **Work Process**: Company workflow visualization
- **Testimonials**: Client testimonials carousel

## 📝 Environment Variables

No environment variables are required for basic functionality. If you need to add any, create a `.env.local` file:

```env
# Example (if needed)
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🔧 Configuration

### Image Optimization

Images are automatically optimized by Next.js. Ensure images are placed in the `public/images/` directory.

### Fonts

Custom fonts are configured in `lib/fonts.ts` and loaded via Next.js font optimization.

## 📄 License

Private project - All rights reserved

## 👥 Contact

B2C Advertisers
- Email: bhanu@b2cadvertisers.com
- Phone: +91 9246568474
- Location: Hyderabad, India

---

Built with ❤️ using Next.js and Tailwind CSS

