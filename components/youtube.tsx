'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Play, ChevronLeft, ChevronRight, Youtube, ExternalLink, Loader2, AlertCircle } from 'lucide-react'
import { useIntersection } from '@/hooks/use-intersection'

const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@dr.anuradharai' // 🔁 replace
const YOUTUBE_PLAYLIST_URL = `https://www.youtube.com/playlist?list=${process.env.NEXT_PUBLIC_YOUTUBE_PLAYLIST_ID || ''}`

type Video = {
  id: string
  title: string
  description: string
  thumbnail: string
  publishedAt: string
}

function VideoCard({
  video,
  isActive,
  onClick,
}: {
  video: Video
  isActive: boolean
  onClick: () => void
}) {
  return (
    <div
      onClick={onClick}
      className={`group relative flex-shrink-0 w-[272px] sm:w-[296px] rounded-2xl overflow-hidden cursor-pointer border-2 transition-all duration-300
        ${isActive
          ? 'border-teal-500 shadow-[0_0_0_4px_rgba(20,184,166,0.15)] -translate-y-1'
          : 'border-transparent hover:border-teal-200 hover:-translate-y-1'
        } bg-white shadow-[0_4px_20px_oklch(0.2_0.01_200/0.07)] hover:shadow-[0_8px_28px_oklch(0.2_0.01_200/0.12)]`}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-gray-900 overflow-hidden">
        <img
          src={video.thumbnail || `https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
          alt={video.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          width={296}
          height={167}
        />
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-300
            ${isActive
              ? 'bg-teal-500 scale-100'
              : 'bg-white/90 group-hover:bg-teal-500 scale-90 group-hover:scale-100'}`}
          >
            <Play className={`w-4 h-4 ml-0.5 transition-colors
              ${isActive ? 'text-white' : 'text-gray-800 group-hover:text-white'}`}
              fill="currentColor"
            />
          </div>
        </div>

        {/* Active pill */}
        {isActive && (
          <div className="absolute top-2 left-2 bg-teal-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            Playing
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3.5">
        <h4 className="text-sm font-semibold text-gray-800 line-clamp-2 leading-snug mb-1.5">
          {video.title}
        </h4>
        <p className="text-[11px] text-gray-400">
          {new Date(video.publishedAt).toLocaleDateString('en-IN', {
            year: 'numeric', month: 'short', day: 'numeric',
          })}
        </p>
      </div>
    </div>
  )
}

export function YouTubeSection() {
  const [ref, isVisible] = useIntersection()
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const hasFetched = useRef(false)

  // Fetch once when section becomes visible
  useEffect(() => {
    if (!isVisible || hasFetched.current) return
    hasFetched.current = true

    fetch('/api/youtube')
      .then((r) => r.json())
      .then((data) => {
        if (data.error) throw new Error(data.error)
        setVideos(data.videos)
      })
      .catch((e) => setError(e.message || 'Failed to load videos'))
      .finally(() => setLoading(false))
  }, [isVisible])

  const handleSelect = useCallback((index: number) => {
    setActiveIndex(index)
    setIsPlaying(true)
    window.scrollTo({ top: (document.getElementById('videos')?.offsetTop ?? 0) - 100, behavior: 'smooth' })
  }, [])

  const scrollSlider = (dir: 'left' | 'right') => {
    sliderRef.current?.scrollBy({ left: dir === 'left' ? -316 : 316, behavior: 'smooth' })
  }

  const activeVideo = videos[activeIndex]

  return (
    <section id="videos" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-teal-50/30 to-white" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div
          ref={ref}
          className={`text-center space-y-3 mb-12 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-red-500 bg-red-50 border border-red-100 px-4 py-1.5 rounded-full">
            <Youtube className="w-3.5 h-3.5" />
            YouTube Channel
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Watch &{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-orange-500">
              Learn
            </span>
          </h2>
          <p className="text-base text-gray-500 max-w-xl mx-auto">
            Free spiritual guidance, Vedic astrology lessons, and healing sessions
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <Loader2 className="w-10 h-10 text-teal-500 animate-spin" />
            <p className="text-sm text-gray-400">Loading videos from YouTube…</p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="flex flex-col items-center justify-center py-20 gap-4 text-center">
            <div className="w-14 h-14 rounded-2xl bg-red-50 flex items-center justify-center">
              <AlertCircle className="w-7 h-7 text-red-400" />
            </div>
            <div>
              <p className="font-semibold text-gray-700">Could not load videos</p>
              <p className="text-sm text-gray-400 mt-1">{error}</p>
            </div>
            <button
              onClick={() => { hasFetched.current = false; setLoading(true); setError('') }}
              className="px-5 py-2 rounded-full bg-teal-600 text-white text-sm font-semibold hover:bg-teal-700 transition-colors cursor-pointer"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Content */}
        {!loading && !error && videos.length > 0 && (
          <>
            {/* ── Featured Player ── */}
            <div className="mb-10 rounded-3xl overflow-hidden bg-gray-900 shadow-[0_20px_60px_oklch(0.2_0.01_200/0.18)]">
              {isPlaying && activeVideo ? (
                <div className="aspect-video w-full">
                  <iframe
                    key={activeVideo.id}
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0&modestbranding=1`}
                    title={activeVideo.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              ) : activeVideo ? (
                <div
                  className="relative aspect-video cursor-pointer group"
                  onClick={() => setIsPlaying(true)}
                >
                  <img
                    src={activeVideo.thumbnail}
                    alt={activeVideo.title}
                    className="w-full h-full object-cover"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/20 transition-colors" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                    </div>
                  </div>

                  {/* Title bar */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-white font-semibold text-base sm:text-xl leading-snug line-clamp-2">
                      {activeVideo.title}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm mt-1">
                      {new Date(activeVideo.publishedAt).toLocaleDateString('en-IN', {
                        year: 'numeric', month: 'long', day: 'numeric',
                      })}
                    </p>
                  </div>
                </div>
              ) : null}
            </div>

            {/* ── Carousel ── */}
            <div className="relative">
              {/* Edge fades */}
              <div className="absolute left-0 top-0 bottom-4 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-4 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              <div
                ref={sliderRef}
                className="flex gap-4 overflow-x-auto pb-4 px-2"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {videos.map((video, i) => (
                  <VideoCard
                    key={video.id}
                    video={video}
                    isActive={i === activeIndex}
                    onClick={() => handleSelect(i)}
                  />
                ))}
                <div className="flex-shrink-0 w-2" />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-3 mt-5">
                <button
                  onClick={() => scrollSlider('left')}
                  aria-label="Scroll left"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-200 cursor-pointer"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs text-gray-400 font-medium tabular-nums">
                  {activeIndex + 1} / {videos.length}
                </span>
                <button
                  onClick={() => scrollSlider('right')}
                  aria-label="Scroll right"
                  className="w-10 h-10 rounded-full border border-gray-200 bg-white shadow-sm flex items-center justify-center text-gray-500 hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* ── Subscribe CTA ── */}
            {/* ── Subscribe CTA ── */}
<div className="mt-12 relative rounded-3xl overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900" />
  <div
    className="absolute inset-0 opacity-[0.04]"
    style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
      backgroundSize: '20px 20px',
    }}
  />
  <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
  <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-600/10 rounded-full blur-3xl" />

  <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 px-6 sm:px-10 py-8 sm:py-10">

    {/* Left — icon + text + stats */}
    <div className="flex items-center gap-4 text-center sm:text-left">
      <div className="w-14 h-14 rounded-2xl bg-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
        <Youtube className="w-7 h-7 text-white" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-white">Subscribe for Free Guidance</h3>
        <p className="text-gray-400 text-sm mt-0.5">
          New videos every week
        </p>
        {/* Live video count badge */}
        <div className="flex items-center gap-1.5 mt-1.5 justify-center sm:justify-start">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs text-gray-300 font-medium tabular-nums">
            {videos.length} videos across 3 playlists
          </span>
        </div>
      </div>
    </div>

    {/* Right — playlist links + subscribe */}
    <div className="flex flex-col sm:flex-row items-center gap-3 flex-shrink-0 w-full sm:w-auto">

      {/* 3 playlist links */}
      <div className="flex gap-2">
        {[
          { label: 'Playlist 1', id: 'PLfRpjkJ_fyYkqE-k-A5Lkyofnj52o5zjD' },
          { label: 'Playlist 2', id: 'PLfRpjkJ_fyYmR1q56uV2HkUqJvLfHKJMf' },
          { label: 'Playlist 3', id: 'PLfRpjkJ_fyYmKIUZO-u-q6wcHBY3k7drY' },
        ].map((pl) => (
          <a
            key={pl.id}
            href={`https://www.youtube.com/playlist?list=${pl.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full border border-white/15 text-gray-300 text-xs font-semibold hover:bg-white/10 hover:text-white hover:border-white/30 transition-all duration-200"
          >
            <ExternalLink className="w-3 h-3" />
            {pl.label}
          </a>
        ))}
      </div>

      {/* Subscribe button */}
      <a
        href={YOUTUBE_CHANNEL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-red-600 hover:bg-red-500 text-white text-sm font-bold shadow-lg transition-all duration-200 hover:-translate-y-0.5 w-full sm:w-auto justify-center"
      >
        <Youtube className="w-4 h-4" />
        Subscribe
      </a>
    </div>
  </div>
</div>
          </>
        )}
      </div>
    </section>
  )
}