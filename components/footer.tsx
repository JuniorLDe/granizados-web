import Image from 'next/image'
import Link from 'next/link'
import { CONTACT_PHONE_DISPLAY, CONTACT_PHONE_E164 } from '@/lib/contact'

export function Footer() {
  return (
    <footer className="border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="Mi Sede CTG"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="font-bold text-lg gradient-text">Mi Sede CTG</p>
              <p className="text-sm text-muted-foreground">Sabores que embrujan</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#granizados" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Granizados
            </Link>
            <Link href="#sin-licor" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sin Licor
            </Link>
            <Link href="#combinados" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Combinados
            </Link>
            <Link href="#contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">🎃 Los Jardines, Cartagena</p>
            <a href={`tel:${CONTACT_PHONE_E164}`} className="text-sm text-primary hover:text-primary/80">
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Mi Sede CTG. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
