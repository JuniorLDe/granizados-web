'use client'

import { useState } from 'react'
import { Wine, Sparkles, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Product, Size } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const { addItem } = useCart()

  const availableSizes = Object.keys(product.prices) as Size[]

  const handleAddToCart = () => {
    if (!selectedSize) return
    addItem(product, selectedSize)
    setSelectedSize(null)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="neon-card rounded-lg p-3 md:p-5 transition-all duration-300 flex flex-col h-full">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="text-sm md:text-lg font-bold text-foreground leading-tight">{product.name}</h3>
          <div className="flex items-center gap-1 mt-1">
            {product.hasAlcohol ? (
              <span className="inline-flex items-center gap-0.5 text-[10px] md:text-xs px-1.5 py-0.5 rounded-full bg-accent/20 text-accent">
                <Wine className="h-2.5 w-2.5 md:h-3 md:w-3" />
                <span className="hidden sm:inline">Con alcohol</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-0.5 text-[10px] md:text-xs px-1.5 py-0.5 rounded-full bg-secondary/20 text-secondary">
                <Sparkles className="h-2.5 w-2.5 md:h-3 md:w-3" />
                <span className="hidden sm:inline">Sin alcohol</span>
              </span>
            )}
          </div>
        </div>
      </div>

      <p className="text-[10px] md:text-sm text-muted-foreground mb-2 md:mb-4 flex-grow line-clamp-2">{product.description}</p>

      <div className="space-y-2">
        <div className="flex flex-wrap gap-1">
          {availableSizes.map((size) => {
            const price = product.prices[size]!
            return (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`flex-1 min-w-[50px] px-1.5 py-1 md:px-3 md:py-2 rounded-md text-[10px] md:text-sm font-medium transition-all ${
                  selectedSize === size
                    ? 'bg-primary text-primary-foreground neon-border'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                }`}
              >
                <div className="leading-tight">{size}</div>
                <div className="text-[8px] md:text-xs mt-0.5">{formatPrice(price)}</div>
              </button>
            )
          })}
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={!selectedSize}
          size="sm"
          className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-xs md:text-sm h-7 md:h-9"
        >
          <Plus className="h-3 w-3 md:h-4 md:w-4 mr-1" />
          <span className="hidden sm:inline">Agregar</span>
          <span className="sm:hidden">+</span>
        </Button>
      </div>
    </div>
  )
}
