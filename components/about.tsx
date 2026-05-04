'use client'

import { BookOpen, GraduationCap, Sparkles, Heart, Star } from 'lucide-react'
import { useIntersection } from '@/hooks/use-intersection'
import Image from 'next/image'

export function About() {
  const [ref, isVisible] = useIntersection()

  return (
    <section
      id="about"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-50/60 via-white to-orange-50/40 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/30 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-teal-600 bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full">
            <Star className="w-3 h-3 fill-teal-500 text-teal-500" />
            Meet Your Guide
          </span>
        </div>

        {/* Equal-height grid */}
        <div className="grid md:grid-cols-2 gap-8 items-stretch">

          {/* ── Left – Content Card ── */}
          <div
            ref={ref}
            className={`
              flex flex-col justify-between
              rounded-3xl border border-white/80 bg-white/70 backdrop-blur-sm
              shadow-[0_8px_32px_oklch(0.2_0.01_200/0.08)]
              p-8 lg:p-10
              transition-all duration-700
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {/* Header */}
            <div className="space-y-3 mb-8">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-teal-400">
                  Dr. Anuradha Rai
                </span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                With over two decades of dedicated practice, Dr. Anuradha Rai has
                transformed thousands of lives through the ancient science of Vedic
                astrology and spiritual healing. Her unique blend of intuitive
                guidance and practical wisdom creates lasting transformation for
                clients worldwide.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
              {[
                {
                  icon: GraduationCap,
                  title: 'PhD in Sanskrit',
                  description: 'From Varanasi, specializing in Vedic texts and ancient wisdom',
                  color: 'from-teal-500 to-teal-600',
                  bg: 'bg-teal-50',
                },
                {
                  icon: BookOpen,
                  title: '20+ Years Experience',
                  description: 'Mastery in Vedic astrology, numerology, and Vastu consultancy',
                  color: 'from-orange-500 to-orange-600',
                  bg: 'bg-orange-50',
                },
                {
                  icon: Sparkles,
                  title: 'Clairvoyance & Intuition',
                  description: 'Deep intuitive guidance combined with astrological precision',
                  color: 'from-teal-500 to-teal-600',
                  bg: 'bg-teal-50',
                },
                {
                  icon: Heart,
                  title: 'Holistic Approach',
                  description: 'Simplifying complex concepts for practical life application',
                  color: 'from-orange-500 to-orange-600',
                  bg: 'bg-orange-50',
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <div
                    key={index}
                    className={`flex gap-3 rounded-2xl ${item.bg} border border-white p-4 hover:shadow-md transition-shadow duration-200`}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} text-white shadow-sm`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm text-gray-800 leading-snug mb-0.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-gray-500 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

           
          </div>

          {/* ── Right – Image Card ── */}
          <div
            className={`
              relative flex flex-col
              rounded-3xl overflow-hidden
              shadow-[0_8px_32px_oklch(0.2_0.01_200/0.10)]
              transition-all duration-700 delay-150
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            {/* Gradient background fill */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-orange-400" />

            {/* Subtle pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `radial-gradient(circle at 20% 20%, white 1px, transparent 1px),
                                  radial-gradient(circle at 80% 80%, white 1px, transparent 1px)`,
                backgroundSize: '40px 40px',
              }}
            />

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center h-full p-8 lg:p-10 text-center gap-6">

              {/* Image frame */}
              <div className="relative">
                <div className="absolute inset-0 rounded-[32px] bg-white/20 blur-xl scale-110" />
                <div className="relative w-52 h-56 lg:w-64 lg:h-72 rounded-[32px] overflow-hidden border-4 border-white/40 shadow-2xl">
                  <Image
                    src="/user.jpeg"
                    alt="Dr. Anuradha Rai"
                    fill
                    className="object-cover object-top"
                  />
                </div>

                {/* PhD Badge */}
                <div className="absolute -bottom-3 -right-3 bg-orange-500 text-white rounded-2xl px-4 py-2 shadow-lg">
                  <div className="text-sm font-bold leading-none">PhD</div>
                  <div className="text-[10px] opacity-90 mt-0.5">Sanskrit</div>
                </div>
              </div>

              {/* Name & title */}
              <div>
                <h3 className="text-2xl font-bold text-white drop-shadow">
                  Dr. Anuradha Rai
                </h3>
                <p className="text-teal-100 text-sm mt-1 font-medium tracking-wide">
                  Vedic Astrologer & Spiritual Healer
                </p>
              </div>

              {/* Stats row */}
              <div className="flex items-center gap-6 text-white">
                {[
                  { value: '20+', label: 'Years' },
                  { value: '2K+', label: 'Clients' },
                  { value: '4.9★', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold leading-none">{stat.value}</div>
                    <div className="text-xs text-teal-100 mt-1 uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative quote */}
              <blockquote className="text-white/80 text-sm italic leading-relaxed max-w-xs border-t border-white/20 pt-5">
                "Aligning ancient wisdom with modern lives, one soul at a time."
              </blockquote>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}