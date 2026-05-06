'use client'

import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useIntersection } from '@/hooks/use-intersection'
import { useRef, useState, useEffect, useCallback } from 'react'

const testimonials = [
  {
    name: 'Amit Raj',
    location: 'Dubai, UAE',
    text: "I was very impressed with Dr. Anuradha ji… deep knowledge of Vedic Jyotish. Their predictions regarding my career were incredibly accurate and the remedies suggested were simple yet effective. She listened to all my problems and explained the planetary positions clearly. I feel much more confident and inspired after our session.",
    rating: 5,
    initials: 'AR',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'Onnkar Shukla',
    location: 'Dubai, UAE',
    text: "Dr Anuradha possess immense knowledge about astrology and she is very precise in predicting things. I have never come across such an astrologer who is so accurate. All her predictions came true and that too date wise. Highly recommend!",
    rating: 5,
    initials: 'OS',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Tulip Chatterjee',
    location: 'Dubai, UAE',
    text: "Highly recommend her. Her dates and predictions are very accurate. She gave me a lot of assurance, confidence and guidance during my low phase.",
    rating: 5,
    initials: 'TC',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'Mahendra Shah',
    location: 'Dubai, UAE',
    text: "I have been consulting Dr Anuradha for over 4/5 years now. She is the first person I have come across in my 62 years of life that has predicted everything right. She has given me precise dates and precise time to do something.",
    rating: 5,
    initials: 'MS',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Niharika Nigam',
    location: 'Dubai, UAE',
    text: "She is amazing. Not only is she an excellent Astrologer, but she also has a healing aura of an Empath. The way she walks you through any doshas or issues in Kundali is a healing process — also a rejuvenating one! Great predictions too.",
    rating: 5,
    initials: 'NN',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'Shreya Kasturi Rangan',
    location: 'Dubai, UAE',
    text: "Dr Anuradha Rai is a wonderful person, an incredible astrologer and an accurate numerologist. Dr Anuradha's perfect predictions starting from the past left me astonished as I had not told her anything beforehand.",
    rating: 5,
    initials: 'SK',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Rakesh Anand',
    location: 'Dubai, UAE',
    text: "Dr. Anuradha is a thorough professional and I would like to thank her for guiding me in the right direction. Her predictions are accurate and she has profound knowledge and great insight about astrology.",
    rating: 5,
    initials: 'RA',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'Timothy Ronin',
    location: 'Dubai, UAE',
    text: "I am a typical westerner with no experience of Vedic astrology. Firstly, this is a highly educated woman with a PhD. She was very insightful.",
    rating: 5,
    initials: 'TR',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'rshweta kalyan',
    location: 'Dubai, UAE',
    text: "Anuradha ma'am is a great person. She is very experienced and supportive in her field. A true guide who tried to make you understand that problems are part of life but there are solutions. Through her guidance she gives confidence to come out successfully from all the problems.",
    rating: 5,
    initials: 'RK',
    color: 'from-teal-400 to-teal-600',
  },
  {
    name: 'mohit kumar',
    location: 'Dubai, UAE',
    text: "Dr Anuradha is an accomplished astrologer. She is very thorough in her analysis, readings and explanations. Her readings are accurate to the point of exact dates of events. Blessed to meet her.",
    rating: 5,
    initials: 'MK',
    color: 'from-orange-400 to-orange-600',
  },
]

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="relative flex-shrink-0 w-[320px] sm:w-[360px] lg:w-[380px] flex flex-col rounded-3xl bg-white border border-gray-100 shadow-[0_4px_24px_oklch(0.2_0.01_200/0.07)] hover:shadow-[0_8px_32px_oklch(0.2_0.01_200/0.12)] transition-shadow duration-300 p-7 group">
      {/* Decorative quote icon */}
      <div className="absolute top-5 right-6 opacity-[0.06] group-hover:opacity-[0.10] transition-opacity">
        <Quote className="w-16 h-16 text-teal-600 fill-teal-600" />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
        "{testimonial.text}"
      </p>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-teal-100 via-orange-100 to-transparent mb-5" />

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-sm shadow-sm flex-shrink-0`}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-semibold text-gray-800 text-sm leading-tight">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">{testimonial.location}</p>
        </div>
        {/* Verified badge */}
        <div className="ml-auto flex-shrink-0 bg-teal-50 text-teal-600 text-[10px] font-semibold px-2.5 py-1 rounded-full border border-teal-100">
          Verified
        </div>
      </div>
    </div>
  )
}

export function Testimonials() {
  const [ref, isVisible] = useIntersection()
  const sliderRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const cardWidth = 396 // card width + gap (380 + 16)
  const total = testimonials.length

  const scrollTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(index, total - 1))
    setActiveIndex(clamped)
    sliderRef.current?.scrollTo({ left: clamped * cardWidth, behavior: 'smooth' })
  }, [total])

  const next = useCallback(() => {
    const nextIndex = activeIndex >= total - 1 ? 0 : activeIndex + 1
    scrollTo(nextIndex)
  }, [activeIndex, total, scrollTo])

  const prev = useCallback(() => {
    const prevIndex = activeIndex <= 0 ? total - 1 : activeIndex - 1
    scrollTo(prevIndex)
  }, [activeIndex, total, scrollTo])

  // Auto-play
  useEffect(() => {
    if (isHovered) return
    autoPlayRef.current = setInterval(next, 3500)
    return () => { if (autoPlayRef.current) clearInterval(autoPlayRef.current) }
  }, [next, isHovered])

  // Sync dot on native scroll
  useEffect(() => {
    const el = sliderRef.current
    if (!el) return
    const handler = () => {
      const index = Math.round(el.scrollLeft / cardWidth)
      setActiveIndex(index)
    }
    el.addEventListener('scroll', handler, { passive: true })
    return () => el.removeEventListener('scroll', handler)
  }, [])

  return (
    <section
      id="testimonials"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/30 to-white -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center space-y-3 mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-600 bg-teal-50 border border-teal-100 px-4 py-1.5 rounded-full mb-2">
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">
              Global Clients
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Hear from those whose lives have been transformed through spiritual guidance
          </p>
        </div>

        {/* Slider wrapper */}
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Left fade */}
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none rounded-l-3xl" />
          {/* Right fade */}
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none rounded-r-3xl" />

          {/* Scrollable track */}
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto scroll-smooth pb-4 px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
            {/* Extra padding sentinel */}
            <div className="flex-shrink-0 w-4" />
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-8">
          {/* Prev */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-200"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? 'w-6 h-2.5 bg-teal-600'
                    : 'w-2.5 h-2.5 bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-200"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Signature Quote */}
        <div className="mt-20">
          <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-700" />
            <div className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '24px 24px',
              }}
            />
            <blockquote className="relative p-10 sm:p-14 text-center">
              <Quote className="w-10 h-10 text-white/20 fill-white/20 mx-auto mb-4" />
              <p className="text-xl sm:text-2xl font-serif text-white italic leading-relaxed">
                "As an astrologer, my purpose is to help you realize your horoscope's potential
                and navigate planetary cycles with wisdom and grace."
              </p>
              <footer className="mt-6 text-teal-200 font-semibold text-sm tracking-wide">
                — Dr. Anuradha Rai
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}