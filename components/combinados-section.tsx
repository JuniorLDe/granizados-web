'use client'

import { useState } from 'react'
import { Blend, Plus, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { COMBINABLE_FLAVORS, Size } from '@/lib/products'
import { useCart } from '@/lib/cart-context'

export function CombinadosSection() {
  const [selectedFlavors, setSelectedFlavors] = useState<string[]>([])
  const [selectedSize, setSelectedSize] = useState<Size | null>(null)
  const { addItem } = useCart()

  const sizes: { size: Size; price: number }[] = [
    { size: '9oz', price: 9000 },
    { size: '12oz', price: 12000 },
    { size: '16oz', price: 15000 },
  ]

  const toggleFlavor = (flavor: string) => {
    if (selectedFlavors.includes(flavor)) {
      setSelectedFlavors(selectedFlavors.filter(f => f !== flavor))
    } else if (selectedFlavors.length < 4) {
      setSelectedFlavors([...selectedFlavors, flavor])
    }
  }

  const handleAddToCart = () => {
    if (selectedFlavors.length < 2 || !selectedSize) return
    
    const combinadoProduct = {
      id: `combinado-${Date.now()}`,
      name: 'Combinado',
      category: 'combinados' as const,
      description: `Mezcla de: ${selectedFlavors.join(', ')}`,
      hasAlcohol: true,
      prices: { '9oz': 9000, '12oz': 12000, '16oz': 15000 },
      toppings: {
        '9oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces',
        '12oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta',
        '16oz': 'Mini chicles, 2 gomitas de gusano, burbujitas dulces, chupeta, dulce bandera'
      }
    }
    
    addItem(combinadoProduct, selectedSize, selectedFlavors)
    setSelectedFlavors([])
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
    <section id="combinados" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Blend className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Crea tu mezcla</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Combinados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mezcla tus sabores favoritos de granizados basicos en un solo vaso. 
            Selecciona de 2 a 4 sabores al mismo precio.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="neon-card rounded-xl p-4 md:p-6">
            <h3 className="text-sm md:text-lg font-bold mb-3">Selecciona tus sabores (2-4):</h3>
            
            <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4 md:mb-6">
              {COMBINABLE_FLAVORS.map((flavor) => (
                <button
                  key={flavor}
                  onClick={() => toggleFlavor(flavor)}
                  className={`px-2 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
                    selectedFlavors.includes(flavor)
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                >
                  {flavor}
                  {selectedFlavors.includes(flavor) && (
                    <X className="h-2.5 w-2.5 md:h-3 md:w-3 ml-1 inline" />
                  )}
                </button>
              ))}
            </div>

            {selectedFlavors.length > 0 && (
              <div className="mb-4 md:mb-6 p-2 md:p-3 rounded-lg bg-primary/10 border border-primary/30">
                <p className="text-xs md:text-sm font-medium text-primary">Tu mezcla:</p>
                <p className="text-sm md:text-base text-foreground">{selectedFlavors.join(' + ')}</p>
              </div>
            )}

            <h3 className="text-sm md:text-lg font-bold mb-3">Selecciona tamano:</h3>
            <div className="flex gap-2 md:gap-3 mb-4 md:mb-6">
              {sizes.map(({ size, price }) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`flex-1 px-2 py-2 md:px-4 md:py-3 rounded-lg text-xs md:text-sm font-medium transition-all ${
                    selectedSize === size
                      ? 'bg-primary text-primary-foreground neon-border'
                      : 'bg-muted/50 text-muted-foreground hover:bg-muted'
                  }`}
                >
                  <div>{size}</div>
                  <div className="text-[10px] md:text-xs mt-0.5">{formatPrice(price)}</div>
                </button>
              ))}
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={selectedFlavors.length < 2 || !selectedSize}
              className="w-full bg-primary hover:bg-primary/90 disabled:opacity-50 text-xs md:text-sm"
              size="sm"
            >
              <Plus className="h-3 w-3 md:h-4 md:w-4 mr-1" />
              Agregar Combinado
            </Button>

            {selectedFlavors.length < 2 && (
              <p className="text-xs text-muted-foreground text-center mt-3">
                Selecciona al menos 2 sabores para crear tu combinado
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
