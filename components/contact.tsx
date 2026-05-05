'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, Send, MessageCircle, Star } from 'lucide-react'
import { useIntersection } from '@/hooks/use-intersection'

const PHONE_NUMBER = '971567462803'
const WHATSAPP_BASE = `https://wa.me/${PHONE_NUMBER}`

function whatsappUrl(message: string) {
  return `${WHATSAPP_BASE}?text=${encodeURIComponent(message)}`
}

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const contactInfo = [
  {
    icon: MapPin,
    label: 'Location',
    value: 'Dubai, UAE',
    href: null,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 97156 74628',
    href: `tel:+${PHONE_NUMBER}`,
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'astrologydubai@gmail.com',
    href: 'mailto:astrologydubai@gmail.com',
  },
]

const quickMessages = [
  { label: '🔮 Vedic Astrology', message: 'Hello Dr. Anuradha Rai, I am interested in a Vedic Astrology consultation.' },
  { label: '🔢 Numerology', message: 'Hello Dr. Anuradha Rai, I would like to know more about Numerology readings.' },
  { label: '🏡 Vastu Shastra', message: 'Hello Dr. Anuradha Rai, I need Vastu consultancy for my space.' },
  { label: '✨ Spiritual Healing', message: 'Hello Dr. Anuradha Rai, I am interested in Spiritual Healing sessions.' },
]

export function Contact() {
  const [ref, isVisible] = useIntersection()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const text = `Hello Dr. Anuradha Rai,

My name is ${formData.name}.
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.subject || 'Not specified'}

${formData.message}`
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-teal-50/40 to-white -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto">

        {/* ── Hero CTA Banner ── */}
        <div
          ref={ref}
          className={`relative mb-16 rounded-3xl overflow-hidden transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-teal-600 via-teal-500 to-teal-700" />
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '24px 24px',
            }}
          />
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-teal-300/20 rounded-full blur-2xl" />

          <div className="relative px-8 py-12 sm:px-14 sm:py-16 flex flex-col items-center text-center gap-5">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-teal-200 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              Available Now
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
              Ready to Transform <br className="hidden sm:block" />
              <span className="text-orange-300">Your Life?</span>
            </h2>
            <p className="text-teal-100 text-base max-w-xl">
              Take the first step towards clarity, healing, and spiritual growth.
              Connect directly on WhatsApp for instant guidance.
            </p>

            {/* Star rating */}
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-orange-300 text-orange-300" />
              ))}
              <span className="text-teal-200 text-sm ml-1">5.0 · 2,000+ happy clients</span>
            </div>

            {/* Main CTA */}
            <a
              href={whatsappUrl('Hello Dr. Anuradha Rai, I would like to book a consultation.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-base shadow-[0_4px_24px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_32px_rgba(37,211,102,0.55)] transition-all duration-300 hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Book Consultation on WhatsApp
            </a>
          </div>
        </div>

        {/* ── Main Grid ── */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">

          {/* ── Left: Info + Quick Messages ── */}
          <div className="lg:col-span-2 space-y-6">

            {/* Contact info card */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_oklch(0.2_0.01_200/0.06)] p-6">
              <h3 className="font-bold text-gray-800 text-base mb-5">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => {
                  const Icon = item.icon
                  const content = (
                    <div className="flex gap-3 items-start group">
                      <div className="w-9 h-9 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0 group-hover:bg-teal-100 transition-colors">
                        <Icon className="w-4 h-4 text-teal-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                        <p className="text-sm font-semibold text-gray-700">{item.value}</p>
                      </div>
                    </div>
                  )
                  return item.href ? (
                    <a key={i} href={item.href} className="block hover:opacity-80 transition-opacity">
                      {content}
                    </a>
                  ) : (
                    <div key={i}>{content}</div>
                  )
                })}
              </div>
            </div>

            {/* Quick WhatsApp messages */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_oklch(0.2_0.01_200/0.06)] p-6">
              <div className="flex items-center gap-2 mb-4">
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <h3 className="font-bold text-gray-800 text-base">Quick Connect</h3>
              </div>
              <p className="text-xs text-gray-400 mb-4">Tap to open WhatsApp with a pre-filled message</p>
              <div className="space-y-2">
                {quickMessages.map((qm, i) => (
                  <a
                    key={i}
                    href={whatsappUrl(qm.message)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-gray-50 hover:bg-teal-50 border border-gray-100 hover:border-teal-200 text-sm font-medium text-gray-700 hover:text-teal-700 transition-all duration-200 group"
                  >
                    <span>{qm.label}</span>
                    <WhatsAppIcon className="w-4 h-4 text-gray-300 group-hover:text-[#25D366] transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-[0_4px_24px_oklch(0.2_0.01_200/0.06)] p-6">
              <p className="text-xs text-gray-400 mb-4 font-medium uppercase tracking-wider">Follow Dr. Anuradha Rai</p>
              <div className="flex gap-2">
                {[
                  { label: 'f', color: 'hover:bg-blue-600', title: 'Facebook', url: 'https://www.facebook.com/p/Dr-Anuradha-Rai-Astrologer-100077443485606/' },
                  { label: '📷', color: 'hover:bg-pink-600', title: 'Instagram', url: 'https://www.instagram.com/raianuradha/' },
                  { label: '▶', color: 'hover:bg-red-600', title: 'YouTube', url: 'https://www.youtube.com/@dr.anuradharai/about' },
                  { label: '𝕏', color: 'hover:bg-gray-900', title: 'Twitter/X', url: 'https://x.com/dubaiastrologer' },
                ].map((s) => (
                  <a
                    key={s.title}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.title}
                    className={`w-10 h-10 rounded-xl bg-gray-100 text-gray-600 ${s.color} hover:text-white transition-all duration-200 flex items-center justify-center text-sm font-bold`}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* ── Right: WhatsApp Form ── */}
          <form
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-3xl bg-white border border-gray-100 shadow-[0_8px_32px_oklch(0.2_0.01_200/0.08)] overflow-hidden"
          >
            {/* Form header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-700 px-8 py-6 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/15 border border-white/20 flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white text-base">Send a Message</h3>
                <p className="text-teal-200 text-xs">We'll reply on WhatsApp instantly</p>
              </div>
              <div className="ml-auto flex items-center gap-1.5 text-xs font-semibold text-green-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Online
              </div>
            </div>

            <div className="p-8 space-y-5">
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent focus:bg-white transition-all text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent focus:bg-white transition-all text-sm"
                  />
                </div>
              </div>

              {/* Service */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Service Interest *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent focus:bg-white transition-all text-sm"
                >
                  <option value="">Select a service</option>
                  <option value="Vedic Astrology">🔮 Vedic Astrology</option>
                  <option value="Numerology">🔢 Numerology</option>
                  <option value="Vastu Shastra">🏡 Vastu Shastra</option>
                  <option value="Spiritual Healing">✨ Spiritual Healing</option>
                  <option value="Other">💬 Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell Dr. Anuradha about your spiritual journey and what you're seeking guidance on..."
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent focus:bg-white transition-all text-sm resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold text-sm shadow-[0_4px_16px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.45)] transition-all duration-300 hover:-translate-y-0.5 group"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Send via WhatsApp
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-center text-xs text-gray-400">
                Clicking "Send" will open WhatsApp with your message pre-filled
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}