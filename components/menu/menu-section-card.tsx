"use client"

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
      className="w-full bg-card rounded-2xl border border-border p-6 hover:shadow-xl hover:border-primary/30 transition-all duration-300 active:scale-[0.98] group text-left"
    >
      <div className="flex items-center gap-5">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-secondary to-muted flex items-center justify-center text-5xl group-hover:scale-110 transition-transform duration-500 shadow-inner">
          {section.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h2 className="font-serif font-bold text-foreground text-2xl truncate group-hover:text-primary transition-colors">
            {section.name}
          </h2>
          <p className="text-sm text-muted-foreground mt-1">
            {section.categories.length} {section.categories.length === 1 ? "categoría" : "categorías"} · {totalItems} platos
          </p>
        </div>
        <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors">
          <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
        </div>
      </div>
    </button>
  )
}
