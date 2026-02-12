"use client"

import { createContext, useContext, useReducer, ReactNode, useEffect, useState } from "react"
import type { MenuItem } from "@/lib/menu-data"

interface MenuVariant {
  id: string
  name: string
  price: number
}

export interface CartItem {
  item: MenuItem
  quantity: number
  selectedVariant?: MenuVariant
}

interface CartState {
  items: CartItem[]
  total: number
}

type CartAction =
  | { type: "ADD_ITEM"; payload: { item: MenuItem; variant?: MenuVariant } }
  | { type: "REMOVE_ITEM"; payload: { itemId: string; variantId?: string } }
  | { type: "UPDATE_QUANTITY"; payload: { itemId: string; variantId?: string; quantity: number } }
  | { type: "CLEAR_CART" }
  | { type: "RESTORE_CART"; payload: CartState }

interface CartContextType {
  state: CartState
  addItem: (item: MenuItem, variant?: MenuVariant) => void
  removeItem: (itemId: string, variantId?: string) => void
  updateQuantity: (itemId: string, variantId: string | undefined, quantity: number) => void
  clearCart: () => void
  getItemCount: () => number
  generateWhatsAppMessage: (deliveryAddress?: string, paymentMethod?: string) => string
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM": {
      const { item, variant } = action.payload
      
      // Create unique key for item + variant combination
      const itemKey = `${item.id}-${variant?.id || 'no-variant'}`
      
      const existingItemIndex = state.items.findIndex(
        (cartItem) => {
          const cartItemKey = `${cartItem.item.id}-${cartItem.selectedVariant?.id || 'no-variant'}`
          return cartItemKey === itemKey
        }
      )

      if (existingItemIndex >= 0) {
        // If item already exists, increase quantity
        const updatedItems = [...state.items]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        }
        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
        }
      }

      // If item doesn't exist, add as new item
      const newItem: CartItem = {
        item,
        quantity: 1,
        selectedVariant: variant,
      }

      const updatedItems = [...state.items, newItem]
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      }
    }

    case "REMOVE_ITEM": {
      const { itemId, variantId } = action.payload
      const updatedItems = state.items.filter(
        (cartItem) =>
          !(cartItem.item.id === itemId && cartItem.selectedVariant?.id === variantId)
      )
      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      }
    }

    case "UPDATE_QUANTITY": {
      const { itemId, variantId, quantity } = action.payload
      if (quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_ITEM", payload: { itemId, variantId } })
      }

      const updatedItems = state.items.map((cartItem) =>
        cartItem.item.id === itemId && cartItem.selectedVariant?.id === variantId
          ? { ...cartItem, quantity }
          : cartItem
      )

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
      }
    }

    case "CLEAR_CART":
      return {
        items: [],
        total: 0,
      }

    case "RESTORE_CART":
      return action.payload

    default:
      return state
  }
}

function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, cartItem) => {
    const price = cartItem.selectedVariant?.price || cartItem.item.price
    return total + price * cartItem.quantity
  }, 0)
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [], total: 0 })
  const [isHydrated, setIsHydrated] = useState(false)

  // Load from localStorage after hydration
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('pizzeria-cart')
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        // Restore the saved state
        dispatch({ type: "RESTORE_CART", payload: parsedCart })
      }
    } catch (error) {
      console.warn('Error loading cart from localStorage:', error)
    }
    setIsHydrated(true)
  }, [])

  // Save to localStorage whenever state changes (only after hydration)
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem('pizzeria-cart', JSON.stringify(state))
      } catch (error) {
        console.warn('Error saving cart to localStorage:', error)
      }
    }
  }, [state, isHydrated])

  const addItem = (item: MenuItem, variant?: MenuVariant) => {
    dispatch({ type: "ADD_ITEM", payload: { item, variant } })
  }

  const removeItem = (itemId: string, variantId?: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { itemId, variantId } })
  }

  const updateQuantity = (itemId: string, variantId: string | undefined, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { itemId, variantId, quantity } })
  }

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" })
    // Also clear from localStorage
    if (typeof window !== 'undefined') {
      localStorage.removeItem('pizzeria-cart')
    }
  }

  const getItemCount = () => {
    return state.items.reduce((count, item) => count + item.quantity, 0)
  }

  const generateWhatsAppMessage = (deliveryAddress?: string, paymentMethod?: string) => {
    if (state.items.length === 0) {
      return "Hola! Me gustaría hacer un pedido."
    }

    let message = "*WEB-ORDER \nPEDIDO - Pizzería Popular*\n\n"
    
    state.items.forEach((cartItem, index) => {
      const itemName = cartItem.item.name
      const variant = cartItem.selectedVariant
      const price = variant?.price || cartItem.item.price
      const quantity = cartItem.quantity
      
      message += `${index + 1}. *${itemName}*\n`
      if (variant) {
        message += `   Tamaño: ${variant.name}\n`
      }
      message += `   Cantidad: ${quantity}\n`
      message += `   Precio: $${price.toLocaleString()} c/u\n`
      message += `   Subtotal: $${(price * quantity).toLocaleString()}\n\n`
    })

    message += `*TOTAL: $${state.total.toLocaleString()}*\n\n`
    
    if (deliveryAddress) {
      message += `*DIRECCION DE ENTREGA:*\n${deliveryAddress}\n\n`
    }
    
    if (paymentMethod) {
      const paymentLabels: { [key: string]: string } = {
        efectivo: "Efectivo",
        transferencia: "Transferencia Bancaria", 
        mercadopago: "MercadoPago",
        tarjeta: "Tarjeta de Débito/Crédito"
      }
      message += `*METODO DE PAGO:* ${paymentLabels[paymentMethod] || paymentMethod}\n\n`
    }
    
    message += "Gracias por elegir Pizzería Popular!\n"
    return message
  }

  const value: CartContextType = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    getItemCount,
    generateWhatsAppMessage,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
