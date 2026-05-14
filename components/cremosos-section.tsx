'use client'

import { IceCream } from 'lucide-react'
import { ProductCard } from './product-card'
import { CREMOSOS } from '@/lib/products'

export function CremososSection() {
  return (
    <section id="cremosos" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 mb-4">
            <IceCream className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">Cremosos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Cremosos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestra linea cremosa con sabores unicos. Baileys con alcohol y Quipitos sin alcohol.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 md:gap-4 max-w-2xl mx-auto">
          {CREMOSOS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border max-w-2xl mx-auto">
          <h4 className="font-semibold text-foreground mb-2">Precios Cremosos:</h4>
          <ul className="text-sm text-muted-foreground space-y-1">
            <li><span className="text-secondary font-medium">9 oz:</span> $11,000</li>
            <li><span className="text-secondary font-medium">12 oz:</span> $14,000</li>
            <li><span className="text-secondary font-medium">16 oz:</span> $18,000 (incluye gomita dulce bandera)</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
