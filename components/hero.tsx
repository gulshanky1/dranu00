'use client'

import { useEffect, useRef } from 'react'
import { Sparkles, Star, Users, Globe, Award } from 'lucide-react'

const PHONE_NUMBER = '+971567462803,'
const WHATSAPP_URL = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
  'Hello Dr. Anuradha Rai, I would like to book a consultation.'
)}`

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

function CosmicOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    let t = 0

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * window.devicePixelRatio
      canvas.height = rect.height * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const stars = Array.from({ length: 90 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.4 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.4 + 0.2,
    }))

    const zodiacSymbols = ['♈','♉','♊','♋','♌','♍','♎','♏','♐','♑','♒','♓']

    const planets = [
      { orbit: 0.28, speed: 0.4,  size: 0.028, color: '#f97316', symbol: '☉', offset: 0 },
      { orbit: 0.28, speed: 0.4,  size: 0.022, color: '#a78bfa', symbol: '☽', offset: Math.PI },
      { orbit: 0.44, speed: -0.25, size: 0.025, color: '#34d399', symbol: '♃', offset: 1 },
      { orbit: 0.44, speed: -0.25, size: 0.018, color: '#fb923c', symbol: '♂', offset: Math.PI + 1 },
      { orbit: 0.60, speed: 0.15,  size: 0.022, color: '#60a5fa', symbol: '♄', offset: 0.5 },
    ]

    const draw = () => {
      const W = canvas.width / window.devicePixelRatio
      const H = canvas.height / window.devicePixelRatio
      const cx = W / 2
      const cy = H / 2
      const R = Math.min(W, H) / 2        // max radius that fits
      ctx.clearRect(0, 0, W, H)
      t += 0.008

      // Deep space bg
      const bg = ctx.createRadialGradient(cx, cy, 0, cx, cy, R * 0.82)
      bg.addColorStop(0,   'oklch(0.28 0.09 192)')
      bg.addColorStop(0.55,'oklch(0.16 0.05 192)')
      bg.addColorStop(1,   'transparent')
      ctx.beginPath()
      ctx.arc(cx, cy, R * 0.82, 0, Math.PI * 2)
      ctx.fillStyle = bg
      ctx.fill()

      // Stars
      stars.forEach(s => {
        const alpha = 0.25 + 0.75 * Math.abs(Math.sin(t * s.speed + s.phase))
        ctx.beginPath()
        ctx.arc(s.x * W, s.y * H, s.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255,255,255,${alpha * 0.85})`
        ctx.fill()
      })

      // Orbit rings
      ;[
        { r: 0.28, speed: 0.4,   color: 'rgba(45,212,191,0.18)', dash: [5,4] },
        { r: 0.44, speed: -0.25, color: 'rgba(251,146,60,0.13)',  dash: [4,5] },
        { r: 0.60, speed: 0.15,  color: 'rgba(45,212,191,0.09)', dash: [7,5] },
      ].forEach(o => {
        ctx.save()
        ctx.translate(cx, cy)
        ctx.beginPath()
        ctx.arc(0, 0, o.r * R, 0, Math.PI * 2)
        ctx.setLineDash(o.dash)
        ctx.strokeStyle = o.color
        ctx.lineWidth = 1
        ctx.stroke()
        ctx.setLineDash([])
        ctx.restore()
      })

      // Core glow
      const coreR = R * 0.18
      const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR)
      cg.addColorStop(0,   'oklch(0.88 0.14 192)')
      cg.addColorStop(0.45,'oklch(0.62 0.18 192 / 0.9)')
      cg.addColorStop(0.8, 'oklch(0.40 0.12 192 / 0.55)')
      cg.addColorStop(1,   'transparent')
      ctx.beginPath()
      ctx.arc(cx, cy, coreR, 0, Math.PI * 2)
      ctx.fillStyle = cg
      ctx.fill()

      // Pulse
      const pulse = 0.65 + 0.35 * Math.sin(t * 2)
      const pg = ctx.createRadialGradient(cx, cy, 0, cx, cy, coreR * 0.55 * pulse)
      pg.addColorStop(0, 'rgba(255,255,255,0.95)')
      pg.addColorStop(0.5,'rgba(45,212,191,0.55)')
      pg.addColorStop(1, 'transparent')
      ctx.beginPath()
      ctx.arc(cx, cy, coreR * 0.55 * pulse, 0, Math.PI * 2)
      ctx.fillStyle = pg
      ctx.fill()

      // OM symbol
      const fontSize = Math.max(14, R * 0.095)
      ctx.save()
      ctx.font = `bold ${fontSize}px serif`
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillStyle = 'rgba(255,255,255,0.96)'
      ctx.shadowColor = 'rgba(45,212,191,0.9)'
      ctx.shadowBlur = 14
      ctx.fillText('ॐ', cx, cy)
      ctx.restore()

      // Light rays
      for (let i = 0; i < 8; i++) {
        const angle = (i / 8) * Math.PI * 2 + t * 0.1
        const len = R * (0.21 + 0.07 * Math.sin(t * 2 + i))
        ctx.save()
        ctx.translate(cx, cy)
        ctx.rotate(angle)
        const rg = ctx.createLinearGradient(0, 0, len, 0)
        rg.addColorStop(0, 'rgba(45,212,191,0.45)')
        rg.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.moveTo(coreR * 0.55, 0)
        ctx.lineTo(len, 0)
        ctx.strokeStyle = rg
        ctx.lineWidth = 1.5
        ctx.stroke()
        ctx.restore()
      }

      // Planets
      planets.forEach(p => {
        const angle = t * p.speed + p.offset
        const pr = p.orbit * R
        const px = cx + Math.cos(angle) * pr
        const py = cy + Math.sin(angle) * pr
        const ps = p.size * R

        const glow = ctx.createRadialGradient(px, py, 0, px, py, ps * 2.8)
        glow.addColorStop(0, p.color + 'bb')
        glow.addColorStop(1, 'transparent')
        ctx.beginPath()
        ctx.arc(px, py, ps * 2.8, 0, Math.PI * 2)
        ctx.fillStyle = glow
        ctx.fill()

        ctx.beginPath()
        ctx.arc(px, py, ps, 0, Math.PI * 2)
        ctx.fillStyle = p.color
        ctx.fill()

        const symSize = Math.max(8, ps + 3)
        ctx.font = `${symSize}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = 'rgba(255,255,255,0.92)'
        ctx.fillText(p.symbol, px, py)
      })

      // Zodiac ring
      zodiacSymbols.forEach((sym, i) => {
        const angle = (i / 12) * Math.PI * 2 + t * 0.07
        const zr = R * 0.76
        const sx = cx + Math.cos(angle) * zr
        const sy = cy + Math.sin(angle) * zr
        const zSize = Math.max(9, R * 0.038)
        ctx.font = `${zSize}px serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillStyle = `rgba(45,212,191,${0.35 + 0.3 * Math.sin(t + i)})`
        ctx.fillText(sym, sx, sy)
      })

      raf = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-full block" />
}

const stats = [
  { icon: Award,  number: '20+',   label: 'Years Experience', even: true  },
  { icon: Users,  number: '10K+',  label: 'Global Clients',   even: false },
  { icon: Star,   number: '5.0★',  label: 'Award Winning',    even: true  },
  { icon: Globe,  number: 'Dubai', label: 'Based in UAE',      even: false },
]

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20 pb-12">

      {/* Backgrounds */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-teal-50/70 via-white to-orange-50/50" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle, #0d9488 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute -z-10 top-0 right-0 w-[500px] h-[500px] bg-teal-200/15 rounded-full blur-3xl" />
      <div className="absolute -z-10 bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/20 rounded-full blur-3xl" />

      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 items-center">

          {/* ── Left: Text ── */}
          <div className="space-y-7 text-center lg:text-left order-2 lg:order-1">

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 border border-teal-200 text-teal-700 text-sm font-semibold shadow-sm">
              <Sparkles className="w-4 h-4 fill-teal-500 text-teal-500" />
              Transforming Lives Through Ancient Wisdom
            </div>

            <div className="space-y-3">
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.05] tracking-tight">
                Dr. Anuradha
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-500 to-orange-500">
                  Rai
                </span>
              </h1>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <span className="h-px w-8 bg-orange-400" />
                <p className="text-sm font-semibold text-orange-500 tracking-wide uppercase">
                  Ph.D. Silver Medalist · Sanskrit, Varanasi
                </p>
              </div>
            </div>

            <p className="text-lg text-gray-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
              World-renowned{' '}
              <span className="font-semibold text-gray-700">Vedic Astrologer</span>,{' '}
              <span className="font-semibold text-gray-700">Numerologist</span>,{' '}
              <span className="font-semibold text-gray-700">Vastu Consultant</span> &{' '}
              <span className="font-semibold text-gray-700">Spiritual Healer</span> with
              over two decades of transformational guidance.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold text-sm shadow-[0_4px_20px_rgba(13,148,136,0.35)] hover:shadow-[0_6px_28px_rgba(13,148,136,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Book Consultation
              </a>
              <a
                href="#about"
                className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-gray-200 text-gray-600 font-semibold text-sm hover:border-teal-300 hover:text-teal-700 hover:bg-teal-50/50 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['RK','PS','AM','MJ'].map((initials) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 border-2 border-white flex items-center justify-center text-white text-[10px] font-bold"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-400">
                  Trusted by <span className="font-semibold text-gray-600">10,000+</span> clients worldwide
                </p>
              </div>
            </div>
          </div>

          {/* ── Right: Cosmic Orb only — no text ── */}
          <div className="relative flex items-center justify-center order-1 lg:order-2">
            {/* Ambient outer glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full bg-gradient-to-br from-teal-300/15 to-orange-200/15 blur-3xl" />
            </div>

            {/* Canvas — square, fully fluid */}
            <div className="relative w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] md:w-[420px] md:h-[420px] lg:w-[460px] lg:h-[460px]">
              <CosmicOrb />
            </div>
          </div>
        </div>

        {/* ── Stats Bar ── */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
          {stats.map((stat, i) => {
            const Icon = stat.icon
            return (
              <div
                key={i}
                className="flex flex-col items-center gap-2 rounded-2xl bg-white/80 border border-gray-100 shadow-sm px-3 py-4 sm:px-4 sm:py-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 backdrop-blur-sm"
              >
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${stat.even ? 'bg-teal-50' : 'bg-orange-50'}`}>
                  <Icon className={`w-5 h-5 ${stat.even ? 'text-teal-600' : 'text-orange-500'}`} />
                </div>
                <p className={`text-xl sm:text-2xl font-bold ${stat.even ? 'text-teal-600' : 'text-orange-500'}`}>
                  {stat.number}
                </p>
                <p className="text-xs text-gray-400 text-center">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}