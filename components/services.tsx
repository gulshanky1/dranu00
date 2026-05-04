'use client'

import { Zap, Grid3x3, Home, Lightbulb } from 'lucide-react'
import { useIntersection } from '@/hooks/use-intersection'

const services = [
  {
    icon: Grid3x3,
    title: 'Numerology',
    description: 'Unlock the hidden meanings behind numbers in your life and discover your life path, destiny, and personal potential.',
  },
  {
    icon: Zap,
    title: 'Vedic Astrology',
    description: 'Ancient wisdom revealing planetary influences, birth chart readings, and personalized astrological guidance for your journey.',
  },
  {
    icon: Home,
    title: 'Vastu Consultancy',
    description: 'Harmonize your living and working spaces with ancient Vastu principles to attract positive energy and success.',
  },
  {
    icon: Lightbulb,
    title: 'Spiritual Healing',
    description: 'Deep transformative sessions combining intuitive guidance, energy work, and spiritual practices for holistic wellness.',
  },
]

export function Services() {
  const [ref, isVisible] = useIntersection()

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={ref} className={`text-center space-y-4 mb-16 transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <h2 className="heading-md text-foreground">
            Services & Offerings
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Comprehensive spiritual and astrological services designed to guide you toward clarity, healing, and transformation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="glow-card group cursor-pointer"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="p-8 space-y-4">
                  {/* Icon */}
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-teal-600 text-white group-hover:shadow-lg transition-shadow">
                    <Icon className="w-7 h-7" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="heading-sm text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  
                </div>
              </div>
            )
          })}
        </div>

        {/* Why Choose Section */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Accurate Predictions', icon: '✓' },
            { label: 'Practical Remedies', icon: '⚡' },
            { label: 'Personalized Solutions', icon: '❤️' },
            { label: 'Spiritual + Practical', icon: '🌟' },
          ].map((benefit, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg bg-gradient-to-br from-teal-50/50 to-saffron-50/50 border border-teal-100/30"
            >
              <div className="text-3xl mb-2">{benefit.icon}</div>
              <p className="font-semibold text-foreground/80">{benefit.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
