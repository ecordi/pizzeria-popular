"use client"

import Image from "next/image"
import { ChevronRight } from "lucide-react"
import type { MenuItem } from "@/lib/menu-data"
import { formatPrice } from "@/lib/menu-data"
import { Badge } from "@/components/ui/badge"

interface MenuItemCardProps {
  item: MenuItem
  onClick: () => void
}

export function MenuItemCard({ item, onClick }: MenuItemCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-card rounded-xl border border-border p-4 hover:shadow-lg hover:border-primary/30 transition-all duration-300 active:scale-[0.98] group text-left"
    >
      <div className="flex gap-4">
        {item.image && (
          <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-muted">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="96px"
            />
          </div>
        )}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-serif font-semibold text-foreground text-lg leading-tight">
                {item.name}
              </h3>
              <ChevronRight className="h-5 w-5 text-muted-foreground shrink-0 group-hover:text-primary transition-colors" />
            </div>
            {item.badge && (
              <Badge variant="secondary" className="mt-1 bg-primary/10 text-primary text-xs">
                {item.badge}
              </Badge>
            )}
            {item.description && (
              <p className="text-sm text-muted-foreground mt-1.5 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
          <div className="mt-2">
            <span className="font-bold text-primary text-lg">
              {item.variants ? `Desde ${formatPrice(Math.min(...item.variants.map(v => v.price)))}` : formatPrice(item.price)}
            </span>
          </div>
        </div>
      </div>
    </button>
  )
}
