'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Snowflake, Wine } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Fondo oscuro con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Logo de fondo borroso y transparente */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px]">
          <Image
            src="/images/logo.jpg"
            alt=""
            fill
            className="object-contain blur-2xl opacity-15 animate-slow-pulse"
            priority
          />
        </div>
      </div>

      {/* Efectos de luz neon sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
            <Snowflake className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Los Jardines, Cartagena</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="gradient-text">Granizados</span>
            <br />
            <span className="text-foreground">con Estilo</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl text-pretty">
            Disfruta los granizados mas frios y deliciosos de Cartagena. 
            Con y sin alcohol, para todos los gustos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground neon-border" asChild>
              <a href="#granizados" className="flex items-center gap-2">
                <Wine className="h-5 w-5" />
                Ver Menu
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-foreground" asChild>
              <a href="#contacto">Contactanos</a>
            </Button>
          </div>

          <div className="flex items-center gap-8 mt-12">
            <div className="text-center">
              <p className="text-3xl font-bold text-secondary">7+</p>
              <p className="text-sm text-muted-foreground">Sabores</p>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="text-center">
              <p className="text-3xl font-bold text-primary">3</p>
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
