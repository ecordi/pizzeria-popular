"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, Check } from "lucide-react"
import type { MenuItem } from "@/lib/menu-data"
import { formatPrice } from "@/lib/menu-data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface MenuItemDetailProps {
  item: MenuItem
  onBack: () => void
}

export function MenuItemDetail({ item, onBack }: MenuItemDetailProps) {
  const [selectedVariant, setSelectedVariant] = useState(
    item.variants ? item.variants[0] : null
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-64 sm:h-80 bg-muted">
        {item.image ? (
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.name}
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary">
            <span className="text-6xl">🍕</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Back button */}
        <Button
          type="button"
          variant="secondary"
          size="icon"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onBack()
          }}
          className="absolute top-4 left-4 rounded-full shadow-lg bg-card/90 backdrop-blur-sm"
          aria-label="Volver atrás"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        {/* Badge */}
        {item.badge && (
          <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
            {item.badge}
          </Badge>
        )}
      </div>

      {/* Content */}
      <div className="px-4 pb-8 -mt-12 relative">
        <div className="bg-card rounded-2xl shadow-xl border border-border p-6">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-foreground">
            {item.name}
          </h1>
          
          {item.description && (
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Variants */}
          {item.variants && item.variants.length > 0 && (
            <div className="mt-6">
              <h3 className="font-semibold text-foreground mb-3">
                Elegí tu tamaño
              </h3>
              <div className="space-y-2">
                {item.variants.map((variant) => (
                  <button
                    key={variant.name}
                    type="button"
                    onClick={() => setSelectedVariant(variant)}
                    className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                      selectedVariant?.name === variant.name
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          selectedVariant?.name === variant.name
                            ? "border-primary bg-primary"
                            : "border-muted-foreground"
                        }`}
                      >
                        {selectedVariant?.name === variant.name && (
                          <Check className="h-3 w-3 text-primary-foreground" />
                        )}
                      </div>
                      <span className="font-medium text-foreground">{variant.name}</span>
                    </div>
                    <span className="font-bold text-primary">
                      {formatPrice(variant.price)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Single Price */}
          {!item.variants && (
            <div className="mt-6 flex items-center justify-between p-4 bg-secondary rounded-xl">
              <span className="text-muted-foreground">Precio</span>
              <span className="text-2xl font-bold text-primary">
                {formatPrice(item.price)}
              </span>
            </div>
          )}

          {/* Total */}
          {item.variants && selectedVariant && (
            <div className="mt-6 flex items-center justify-between p-4 bg-primary/10 rounded-xl">
              <span className="font-medium text-foreground">Total</span>
              <span className="text-2xl font-bold text-primary">
                {formatPrice(selectedVariant.price)}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
