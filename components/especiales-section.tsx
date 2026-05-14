'use client'

import { Star } from 'lucide-react'
import { ProductCard } from './product-card'
import { ESPECIALES } from '@/lib/products'

export function EspecialesSection() {
  return (
    <section id="especiales" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Sin Alcohol</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Especiales</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Nuestra seleccion especial sin alcohol, perfecta para disfrutar en cualquier momento.
          </p>
        </div>

        <div className="max-w-xs md:max-w-md mx-auto">
          {ESPECIALES.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border max-w-2xl mx-auto">
          <h4 className="font-semibold text-foreground mb-2">Maracumoy incluye:</h4>
          <p className="text-sm text-muted-foreground">
            Trozos de mango encima, 3 lonchas de mango, chamoy, tajin, una gomita y bolitas de chamoy.
            El de 16 oz incluye dulce bandera adicional.
          </p>
        </div>
      </div>
    </section>
  )
}
