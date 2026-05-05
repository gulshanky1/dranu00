'use client'

import Image from "next/image"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-gradient-to-b from-white/50 to-teal-50/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-600 to-teal-700 flex items-center justify-center text-white text-sm font-bold">
                <Image src="/logo.png" alt="Logo" width={24} height={24} className="rounded-full" />
              </div>
              <span className="font-serif font-bold text-foreground">
                Dr. Anuradha Rai
              </span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              World-renowned Vedic astrologer, numerologist, and spiritual healer dedicated to guiding souls toward their highest potential.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Services</h4>
            <ul className="space-y-2">
              {['Numerology', 'Vedic Astrology', 'Vastu Consultancy', 'Spiritual Healing'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-foreground/60 hover:text-teal-600 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">About</h4>
            <ul className="space-y-2">
              {[
                { label: 'About Me', href: '#about' },
                { label: 'Achievements', href: '#achievements' },
                { label: 'Testimonials', href: '#testimonials' },
                { label: 'Contact', href: '#contact' },
              ].map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-sm text-foreground/60 hover:text-teal-600 transition-colors">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm text-foreground/60">
              <li>
                <a href="mailto:astrologydubai@gmail.com" className="hover:text-teal-600 transition-colors break-all">
                  astrologydubai@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+971" className="hover:text-teal-600 transition-colors">
                  +971567462803,  +971503603426
                </a>
              </li>
              <li>Midtown by Deyaar Dania  District midtown Dubai</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-border mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-foreground/60">
            © {currentYear} Dr. Anuradha Rai. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-sm text-foreground/60 hover:text-teal-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-foreground/60 hover:text-teal-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>

       
      </div>
    </footer>
  )
}
