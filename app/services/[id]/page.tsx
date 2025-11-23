import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { services } from '@/lib/constants'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface PageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.id)
  
  if (!service) {
    return {
      title: 'Service Not Found',
    }
  }

  return {
    title: service.title,
    description: service.description,
  }
}

export default function ServiceDetailPage({ params }: PageProps) {
  const service = services.find((s) => s.slug === params.id)

  if (!service) {
    notFound()
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white pb-20">
        {/* Spacer to prevent navbar overlap */}
        <div className="h-32 md:h-56 lg:h-64"></div>
        <div className="container mx-auto px-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold" style={{ fontFamily: 'var(--font-clash-display)' }}>
            {service.title}
          </h1>
        </div>
      </section>

      {/* Service Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 lg:h-[500px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold" style={{ fontFamily: 'var(--font-clash-display)' }}>
                {service.title}
              </h2>
              <p className="text-lg text-gray-700">{service.description}</p>
              <div className="pt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#FF5722] text-white px-8 py-4 rounded-lg hover:bg-[#FF481F] transition-colors duration-300 font-semibold"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

