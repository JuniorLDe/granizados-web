'use client'

import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useCart } from '@/lib/cart-context'

export function CartSection() {
  const { items, removeItem, updateQuantity, updateNotes, total, itemCount } = useCart()

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  if (items.length === 0) {
    return (
      <section id="carrito" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted/50 mb-6">
              <ShoppingBag className="h-10 w-10 text-muted-foreground" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Tu carrito esta vacio</h2>
            <p className="text-muted-foreground mb-6">Agrega algunos granizados deliciosos</p>
            <Button asChild className="bg-primary hover:bg-primary/90">
              <a href="#granizados">Ver Menu</a>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="carrito" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <ShoppingBag className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">{itemCount} productos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="gradient-text">Tu Carrito</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4 mb-8">
            {items.map((item, index) => {
              const itemPrice = item.product.prices[item.size] || 0
              const itemTotal = itemPrice * item.quantity

              return (
                <div key={index} className="neon-card rounded-xl p-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-foreground">{item.product.name}</h3>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                          {item.size}
                        </span>
                      </div>
                      {item.selectedFlavors && item.selectedFlavors.length > 0 && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Sabores: {item.selectedFlavors.join(', ')}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground">
                        {formatPrice(itemPrice)} c/u
                      </p>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(index, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-8 text-center font-medium">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => updateQuantity(index, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <p className="font-bold text-primary min-w-[80px] text-right">
                        {formatPrice(itemTotal)}
                      </p>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-destructive hover:text-destructive"
                        onClick={() => removeItem(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="mt-3">
                    <Input
                      placeholder="Notas (ej: sin gomitas, extra chamoy...)"
                      value={item.notes || ''}
                      onChange={(e) => updateNotes(index, e.target.value)}
                      className="bg-muted/50 border-border text-sm"
                    />
                  </div>
                </div>
              )
            })}
          </div>

          <div className="neon-card rounded-xl p-6">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span className="gradient-text">{formatPrice(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
