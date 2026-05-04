'use client'

import { Award, Star, Trophy, Medal } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const achievements = [
  {
    year: 2014,
    title: 'Indian Jyotish Jagriti Award',
    description: 'Recognized for outstanding contribution to Vedic astrology and its modern application.',
    highlight: true,
    icon: Trophy,
    color: 'from-orange-400 to-orange-600',
    badge: 'Featured Award',
  },
  {
    year: 2014,
    title: 'International Chairman Award',
    description: 'Honored for exceptional leadership and service in the global astrology community.',
    highlight: false,
    icon: Award,
    color: 'from-teal-400 to-teal-600',
    badge: null,
  },
  {
    year: 2012,
    title: 'International President Award',
    description: 'Presented for distinguished practice and promotion of ancient Vedic sciences worldwide.',
    highlight: false,
    icon: Medal,
    color: 'from-teal-400 to-teal-600',
    badge: null,
  },
  {
    year: 2010,
    title: 'Master of Astrology Award',
    description: 'A mark of mastery in predictive astrology, numerology, and spiritual counseling.',
    highlight: false,
    icon: Star,
    color: 'from-orange-400 to-orange-600',
    badge: null,
  },
  {
    year: 2009,
    title: 'Excellence Award',
    description: 'Awarded for consistent excellence in client guidance and Vastu consultancy.',
    highlight: false,
    icon: Award,
    color: 'from-teal-400 to-teal-600',
    badge: null,
  },
]

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return [ref, visible] as const
}

function TimelineItem({
  achievement,
  index,
  isLast,
}: {
  achievement: typeof achievements[0]
  index: number
  isLast: boolean
}) {
  const [ref, visible] = useScrollReveal()
  const isLeft = index % 2 === 0
  const Icon = achievement.icon

  return (
    <div
      ref={ref}
      className={`relative grid md:grid-cols-[1fr_64px_1fr] items-start gap-0 transition-all duration-700 ease-out
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* ── Left slot ── */}
      <div className={`hidden md:flex justify-end pr-6 pt-3 ${isLeft ? '' : 'invisible'}`}>
        {isLeft && <Card achievement={achievement} align="right" />}
      </div>

      {/* ── Centre spine ── */}
      <div className="flex flex-col items-center">
        {/* Dot */}
        <div
          className={`relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br ${achievement.color}
            flex items-center justify-center shadow-lg flex-shrink-0
            ring-4 ring-white transition-transform duration-500
            ${visible ? 'scale-100' : 'scale-0'}`}
          style={{ transitionDelay: `${index * 80 + 200}ms` }}
        >
          <Icon className="w-6 h-6 text-white fill-white" />
        </div>

        {/* Line segment below (not on last) */}
        {!isLast && (
          <div
            className={`w-0.5 flex-1 min-h-[56px] transition-all duration-700
              ${visible
                ? 'bg-gradient-to-b from-teal-400 to-teal-200 opacity-100'
                : 'bg-transparent opacity-0'}`}
            style={{ transitionDelay: `${index * 80 + 350}ms` }}
          />
        )}
      </div>

      {/* ── Right slot ── */}
      <div className={`hidden md:flex justify-start pl-6 pt-3 ${!isLeft ? '' : 'invisible'}`}>
        {!isLeft && <Card achievement={achievement} align="left" />}
      </div>

      {/* ── Mobile: always show card below icon ── */}
      <div className="md:hidden col-span-full mt-3 px-4">
        <Card achievement={achievement} align="left" />
      </div>
    </div>
  )
}

function Card({
  achievement,
  align,
}: {
  achievement: typeof achievements[0]
  align: 'left' | 'right'
}) {
  return (
    <div
      className={`group relative w-full max-w-sm rounded-2xl bg-white border
        ${achievement.highlight
          ? 'border-orange-200 shadow-[0_4px_24px_oklch(0.7_0.15_50/0.15)]'
          : 'border-gray-100 shadow-[0_4px_20px_oklch(0.2_0.01_200/0.06)]'}
        hover:shadow-[0_8px_32px_oklch(0.2_0.01_200/0.12)]
        hover:-translate-y-1 transition-all duration-300 overflow-hidden`}
    >
      {/* Top accent line */}
      <div className={`h-1 w-full bg-gradient-to-r ${achievement.color}`} />

      <div className="p-5">
        {/* Year + badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className={`text-base font-bold bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent`}>
            {achievement.year}
          </span>
          {achievement.badge && (
            <span className="px-2.5 py-0.5 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold uppercase tracking-wider border border-orange-100">
              {achievement.badge}
            </span>
          )}
        </div>

        <h3 className="font-semibold text-gray-800 text-sm leading-snug mb-1.5">
          {achievement.title}
        </h3>
        <p className="text-xs text-gray-400 leading-relaxed">
          {achievement.description}
        </p>
      </div>
    </div>
  )
}

function LeadershipCard() {
  const [ref, visible] = useScrollReveal()

  return (
    <div
      ref={ref}
      className={`relative rounded-3xl overflow-hidden transition-all duration-700
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700" />
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '20px 20px',
        }}
      />
      {/* Glows */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-400/20 rounded-full blur-3xl" />

      <div className="relative flex flex-col sm:flex-row items-center sm:items-start gap-6 p-8 sm:p-10">
        {/* Icon */}
        <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-lg">
          <Star className="w-8 h-8 text-orange-300 fill-orange-300" />
        </div>

        {/* Text */}
        <div className="text-center sm:text-left">
          <span className="inline-block text-[10px] font-bold tracking-widest uppercase text-teal-200 mb-2">
            Leadership Position
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-2">
            Chairperson, Krishnamurti Institute of Astrology
          </h3>
          <p className="text-teal-100 text-sm leading-relaxed max-w-xl">
            Leading the premier institution for astrological education and practice across Asia,
            guiding the next generation of astrologers and spiritual practitioners.
          </p>
          <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-orange-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse" />
            Asia Region · Active Role
          </div>
        </div>
      </div>
    </div>
  )
}

export function Achievements() {
  const headerRef = useRef<HTMLDivElement>(null)
  const [headerVisible, setHeaderVisible] = useState(false)

  useEffect(() => {
    const el = headerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="achievements"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/40 to-white -z-10" />
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center space-y-3 mb-14 transition-all duration-700
            ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-600 bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full">
            Recognition
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Achievements &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">
              Recognition
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Recognized globally for excellence in Vedic astrology and spiritual practice
          </p>
        </div>

        {/* Leadership card */}
        <div className="mb-14">
          <LeadershipCard />
        </div>

        {/* Timeline label */}
        <div
          className={`flex items-center gap-3 mb-8 transition-all duration-700
            ${headerVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-teal-200" />
          <span className="text-xs font-bold tracking-widest uppercase text-teal-500 px-3">
            Awards Timeline
          </span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-teal-200" />
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {achievements.map((achievement, index) => (
            <TimelineItem
              key={index}
              achievement={achievement}
              index={index}
              isLast={index === achievements.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}