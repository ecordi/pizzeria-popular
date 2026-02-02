"use client"

import Image from "next/image"

export function PromoBanner() {
  return (
    <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-lg">
      <Image
        src="/images/promo-banner.png"
        alt="¡Festejá con nosotros!"
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 640px"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
    </div>
  )
}
