"use client"

import { ChevronRight } from "lucide-react"

interface MenuCategoryCardProps {
  name: string
  icon: string
  itemCount: number
  onClick: () => void
}

export function MenuCategoryCard({ name, icon, itemCount, onClick }: MenuCategoryCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-card rounded-xl border border-border p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 active:scale-[0.98] group text-left"
    >
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-serif font-semibold text-foreground text-lg truncate">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">
            {itemCount} {itemCount === 1 ? "opción" : "opciones"}
          </p>
        </div>
        <ChevronRight className="h-6 w-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
      </div>
    </button>
  )
}
