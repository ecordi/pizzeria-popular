"use client"

import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MenuHeaderProps {
  title: string
  subtitle?: string
  showBack: boolean
  onBack: () => void
}

export function MenuHeader({ title, subtitle, showBack, onBack }: MenuHeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-2xl mx-auto px-4 py-3">
        <div className="flex items-center gap-3">
          {showBack && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                try {
                  onBack()
                } catch (error) {
                  console.warn("Back navigation error:", error)
                }
              }}
              className="shrink-0 -ml-2 hover:bg-secondary transition-colors"
              aria-label="Volver atrás"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          )}
          <div className="flex-1 min-w-0">
            <h1 className="font-serif text-xl font-bold text-foreground truncate">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
