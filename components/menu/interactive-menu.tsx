"use client"

import { useState, useCallback } from "react"
import Image from "next/image"
import { menuData, type MenuSection, type MenuCategory, type MenuItem } from "@/lib/menu-data"
import { MenuHeader } from "./menu-header"
import { MenuSectionCard } from "./menu-section-card"
import { MenuCategoryCard } from "./menu-category-card"
import { MenuItemCard } from "./menu-item-card"
import { MenuItemDetail } from "./menu-item-detail"
import { PromoBanner } from "./promo-banner"

type ViewState =
  | { type: "sections" }
  | { type: "categories"; section: MenuSection }
  | { type: "items"; section: MenuSection; category: MenuCategory }
  | { type: "detail"; section: MenuSection; category: MenuCategory; item: MenuItem }

export function InteractiveMenu() {
  const [viewState, setViewState] = useState<ViewState>({ type: "sections" })
  const [isAnimating, setIsAnimating] = useState(false)

  const navigateTo = useCallback((newState: ViewState) => {
    setIsAnimating(true)
    setTimeout(() => {
      setViewState(newState)
      setIsAnimating(false)
    }, 150)
  }, [])

  const handleBack = useCallback(() => {
    setIsAnimating(true)
    setTimeout(() => {
      switch (viewState.type) {
        case "categories":
          setViewState({ type: "sections" })
          break
        case "items":
          setViewState({ type: "categories", section: viewState.section })
          break
        case "detail":
          setViewState({
            type: "items",
            section: viewState.section,
            category: viewState.category,
          })
          break
      }
      setIsAnimating(false)
    }, 150)
  }, [viewState])

  const getTitle = () => {
    switch (viewState.type) {
      case "sections":
        return "Carta"
      case "categories":
        return viewState.section.name
      case "items":
        return viewState.category.name
      case "detail":
        return viewState.item.name
    }
  }

  const getSubtitle = () => {
    switch (viewState.type) {
      case "categories":
        return "Elegí una categoría"
      case "items":
        return `${viewState.section.name}`
      default:
        return undefined
    }
  }

  // Detail view has its own layout
  if (viewState.type === "detail") {
    return (
      <div
        className={`transition-opacity duration-150 ${isAnimating ? "opacity-0" : "opacity-100"}`}
      >
        <MenuItemDetail item={viewState.item} onBack={handleBack} />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Logo Header - Only on main view */}
      {viewState.type === "sections" && (
        <div className="bg-card border-b border-border">
          <div className="max-w-2xl mx-auto px-4 py-6">
            <div className="flex justify-center">
              <Image
                src="/images/logo.png"
                alt="Pizzería Popular"
                width={280}
                height={100}
                className="h-auto w-auto max-h-20"
                priority
              />
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <MenuHeader
        title={getTitle()}
        subtitle={getSubtitle()}
        showBack={viewState.type !== "sections"}
        onBack={handleBack}
      />

      {/* Content */}
      <main
        className={`max-w-2xl mx-auto px-4 py-6 transition-all duration-150 ${
          isAnimating ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
        }`}
      >
        {/* Promo Banner - Only on main sections view */}
        {viewState.type === "sections" && (
          <div className="mb-6">
            <PromoBanner />
          </div>
        )}

        {/* Sections View */}
        {viewState.type === "sections" && (
          <div className="space-y-4">
            <h2 className="font-serif text-xl font-semibold text-foreground mb-4">
              Explorá nuestra carta
            </h2>
            {menuData.map((section) => (
              <MenuSectionCard
                key={section.id}
                section={section}
                onClick={() =>
                  navigateTo({ type: "categories", section })
                }
              />
            ))}
          </div>
        )}

        {/* Categories View */}
        {viewState.type === "categories" && (
          <div className="space-y-3">
            {viewState.section.categories.map((category) => (
              <MenuCategoryCard
                key={category.id}
                name={category.name}
                icon={category.icon}
                itemCount={category.items.length}
                onClick={() =>
                  navigateTo({
                    type: "items",
                    section: viewState.section,
                    category,
                  })
                }
              />
            ))}
          </div>
        )}

        {/* Items View */}
        {viewState.type === "items" && (
          <div className="space-y-3">
            {viewState.category.items.map((item) => (
              <MenuItemCard
                key={item.id}
                item={item}
                onClick={() =>
                  navigateTo({
                    type: "detail",
                    section: viewState.section,
                    category: viewState.category,
                    item,
                  })
                }
              />
            ))}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-8">
        <div className="max-w-2xl mx-auto px-4 py-6 text-center">
          <p className="text-sm text-muted-foreground">
            Los precios pueden variar sin previo aviso
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Pizzería Popular © 2026
          </p>
        </div>
      </footer>
    </div>
  )
}
