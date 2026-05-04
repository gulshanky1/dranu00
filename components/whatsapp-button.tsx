'use client'

import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  const whatsappNumber = '+971567462803' // Dubai number
  const message = encodeURIComponent('Hello Dr. Anuradha, I would like to book a consultation.')
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=${message}`

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contact us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white" />
    </a>
  )
}
