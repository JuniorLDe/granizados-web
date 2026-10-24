'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Skull, Wine } from 'lucide-react'
import { HalloweenSticker } from '@/components/halloween-sticker'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <HalloweenSticker kind="bat" className="sticker-hero-bat" />
      <HalloweenSticker kind="witch" className="sticker-hero-witch" />
      <HalloweenSticker kind="skull" className="sticker-hero-skull" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Skull className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Noche de brujas en Los Jardines</span>
          </div>

          <div className="halloween-ribbon mb-6 flex items-center justify-center gap-3" aria-label="Especial de Halloween">
            <span aria-hidden="true">🎃</span>
            <span className="text-sm sm:text-base font-bold">TRAGOS QUE DAN ESCALOFRÍOS</span>
            <span aria-hidden="true">🦇</span>
          </div>

          <div className="mb-8">
            <Image
              src="/images/logo-transparent.png"
              alt="Logo MiSede CTG"
              width={220}
              height={120}
              className="mx-auto h-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="gradient-text neon-text">NO ES HIELO, ES PLACER</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-pretty">
            Una noche para antojarse: granizados encantados, combinaciones misteriosas y sabores sin licor.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground neon-border" asChild>
              <a href="#granizados" className="flex items-center gap-2">
                <span aria-hidden="true">🎃</span>
                Ver Menu
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-foreground" asChild>
              <a href="#contacto">Contactanos</a>
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">12+</p>
              <p className="text-sm text-muted-foreground">Sabores</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">4</p>
              <p className="text-sm text-muted-foreground">Tamanos</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-accent">100%</p>
              <p className="text-sm text-muted-foreground">Frescura</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
