"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import type { MenuSection } from "@/lib/menu-data"

interface MenuSectionCardProps {
  section: MenuSection
  onClick: () => void
}

export function MenuSectionCard({ section, onClick }: MenuSectionCardProps) {
  const totalItems = section.categories.reduce(
    (acc, cat) => acc + cat.items.length,
    0
  )

  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-card rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 active:scale-[0.98] group text-left relative"
    >
      {/* Imagen de fondo con overlay */}
      {section.image && (
        <div className="absolute inset-0 z-0">
          <Image
            src={section.image}
            alt={section.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 672px"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>
      )}
      
      {/* Contenido */}
      <div className="relative z-10 flex items-center gap-5 p-6">
        <div className="flex-1 min-w-0">
          <h2 className="font-serif font-bold text-white text-2xl truncate group-hover:text-primary transition-colors drop-shadow-lg">
            {section.name}
          </h2>
          <p className="text-sm text-white/90 mt-1 drop-shadow">
            {section.categories.length} {section.categories.length === 1 ? "categoría" : "categorías"} · {totalItems} platos
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary transition-colors">
          <ChevronRight className="h-6 w-6 text-white group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>
    </button>
  )
}
