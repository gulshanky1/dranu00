'use client'

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
                ✦
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
                  +971 50 XXX XXXX
                </a>
              </li>
              <li>Dubai, UAE</li>
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

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/971"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-8 right-8 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 z-40"
          aria-label="WhatsApp"
        >
          <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.2-5.044 5.91-5.044 9.868 0 3.582.989 5.9 2.775 7.364 1.592 1.276 3.896 1.997 6.322 1.997.516 0 1.021-.027 1.518-.08 4.761-.369 8.144-4.1 8.427-8.5.098-1.45-.248-2.95-1.072-4.307-.704-1.108-1.899-2.113-3.582-2.715-1.326-.467-2.847-.667-4.383-.667z"/>
          </svg>
        </a>
      </div>
    </footer>
  )
}
