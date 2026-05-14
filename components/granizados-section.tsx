'use client'

import { Wine } from 'lucide-react'
import { ProductCard } from './product-card'
import { GRANIZADOS } from '@/lib/products'

export function GranizadosSection() {
  return (
    <section id="granizados" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-4">
            <Wine className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Con Alcohol</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Granizados</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestros granizados clasicos con ese toque especial que te encanta. 
            Todos vienen con deliciosos toppings incluidos.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-4">
          {GRANIZADOS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border">
          <h4 className="font-semibold text-foreground mb-2">Toppings por tamano:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><span className="text-primary font-medium">9 oz ($9,000):</span> Mini chicles, 2 gomitas de gusano, burbujitas dulces</li>
            <li><span className="text-primary font-medium">12 oz ($12,000):</span> Todo lo anterior + chupeta</li>
            <li><span className="text-primary font-medium">16 oz ($15,000):</span> Todo lo anterior + dulce en forma de bandera</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
