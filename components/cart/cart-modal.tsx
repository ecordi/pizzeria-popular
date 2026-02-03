"use client"

import { useState } from "react"
import { X, Plus, Minus, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/contexts/cart-context"
import { formatPrice } from "@/lib/menu-data"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { state, updateQuantity, removeItem, clearCart, generateWhatsAppMessage } = useCart()
  const [isGeneratingMessage, setIsGeneratingMessage] = useState(false)
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const [paymentMethod, setPaymentMethod] = useState("")

  if (!isOpen) return null

  const handleWhatsAppOrder = () => {
    if (!deliveryAddress.trim() || !paymentMethod) {
      alert("Por favor completa la dirección de entrega y método de pago")
      return
    }

    setIsGeneratingMessage(true)
    const message = generateWhatsAppMessage(deliveryAddress, paymentMethod)
    const encodedMessage = encodeURIComponent(message)
    // Replace with actual pizzeria WhatsApp number
    const whatsappUrl = `https://wa.me/5493513752645?text=${encodedMessage}`
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank')
    setIsGeneratingMessage(false)
    
    // Clear cart and form after sending
    clearCart()
    setDeliveryAddress("")
    setPaymentMethod("")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-end sm:items-center justify-center">
      <div className="bg-card w-full max-w-md max-h-[90vh] rounded-t-lg sm:rounded-lg shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h2 className="text-lg font-semibold">Tu Pedido</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto max-h-96 p-4">
          {state.items.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <p>Tu carrito está vacío</p>
              <p className="text-sm mt-1">Agrega algunos productos para continuar</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((cartItem, index) => {
                const price = cartItem.selectedVariant?.price || cartItem.item.price
                const subtotal = price * cartItem.quantity
                
                return (
                  <div key={`${cartItem.item.id}-${cartItem.selectedVariant?.id || 'default'}`} className="flex items-start gap-3 p-3 bg-secondary/20 rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium text-sm">{cartItem.item.name}</h3>
                      {cartItem.selectedVariant && (
                        <p className="text-xs text-muted-foreground">
                          {cartItem.selectedVariant.name}
                        </p>
                      )}
                      <p className="text-sm font-medium mt-1">
                        {formatPrice(price)} c/u
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(
                          cartItem.item.id,
                          cartItem.selectedVariant?.id,
                          cartItem.quantity - 1
                        )}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      
                      <span className="w-8 text-center text-sm font-medium">
                        {cartItem.quantity}
                      </span>
                      
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => updateQuantity(
                          cartItem.item.id,
                          cartItem.selectedVariant?.id,
                          cartItem.quantity + 1
                        )}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    
                    <div className="text-right">
                      <p className="text-sm font-medium">
                        {formatPrice(subtotal)}
                      </p>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-xs text-red-500 hover:text-red-700 h-auto p-0 mt-1"
                        onClick={() => removeItem(cartItem.item.id, cartItem.selectedVariant?.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-border p-4 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-lg font-semibold">Total:</span>
              <span className="text-lg font-bold text-primary">
                {formatPrice(state.total)}
              </span>
            </div>

            {/* Delivery Address */}
            <div className="space-y-2">
              <Label htmlFor="address">Dirección de Entrega *</Label>
              <Textarea
                id="address"
                placeholder="Ej: Av. Córdoba 1234, Piso 2, Depto A, Córdoba Capital"
                value={deliveryAddress}
                onChange={(e) => setDeliveryAddress(e.target.value)}
                className="min-h-[60px]"
              />
            </div>

            {/* Payment Method */}
            <div className="space-y-2">
              <Label htmlFor="payment">Método de Pago *</Label>
              <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona método de pago" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="efectivo">Efectivo</SelectItem>
                  <SelectItem value="transferencia">Transferencia Bancaria</SelectItem>
                  <SelectItem value="mercadopago">MercadoPago</SelectItem>
                  <SelectItem value="tarjeta">Tarjeta de Débito/Crédito</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Button
                onClick={handleWhatsAppOrder}
                disabled={isGeneratingMessage || !deliveryAddress.trim() || !paymentMethod}
                className="w-full bg-green-600 hover:bg-green-700 text-white disabled:opacity-50"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {isGeneratingMessage ? "Generando..." : "Pedir por WhatsApp"}
              </Button>
              
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full"
              >
                Vaciar Carrito
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
