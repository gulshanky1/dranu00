import type { Metadata } from 'next'
import { Geist, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: 'Dr. Anuradha Rai - Vedic Astrologer & Spiritual Healer',
  description: 'World-renowned Vedic astrologer, numerologist, and spiritual healer based in Dubai. PhD in Sanskrit, 20+ years experience with global clients.',
  generator: 'Next.js',
  keywords: 'Vedic astrology, numerology, Vastu consultancy, spiritual healing, astrologer Dubai',
  authors: [{ name: 'Dr. Anuradha Rai' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  icons: {
    icon: [
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/logo.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/logo.png',
        type: 'image/svg+xml',
      },
    ],
    apple: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${geist.className} font-sans antialiased bg-background text-foreground`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
