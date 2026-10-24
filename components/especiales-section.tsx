'use client'

import { Star } from 'lucide-react'
import { ProductCard } from './product-card'
import { ESPECIALES } from '@/lib/products'
import { HalloweenSticker } from '@/components/halloween-sticker'

export function EspecialesSection() {
  return (
    <section id="sin-licor" className="py-20 relative">
      <HalloweenSticker kind="witch" className="sticker-special-witch" />
      <HalloweenSticker kind="skull" className="sticker-special-skull" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <Star className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium text-accent">Sin Licor</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Sin Licor</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Disfruta nuestros sabores sin alcohol: Maracumoy, Mora Azul SL, Bubbaloo SL y Manzana Verde SL.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
          {ESPECIALES.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-8 p-4 rounded-xl bg-muted/30 border border-border max-w-2xl mx-auto">
          <h4 className="font-semibold text-foreground mb-2">Maracumoy incluye:</h4>
          <p className="text-sm text-muted-foreground">
            Trozos de mango encima, 3 lonchas de mango, chamoy, tajin, una gomita y bolitas de chamoy.
            El de 16 oz incluye dulce bandera adicional. Maracumoy está disponible en 12 y 16 oz.
          </p>
        </div>
      </div>
    </section>
  )
}

