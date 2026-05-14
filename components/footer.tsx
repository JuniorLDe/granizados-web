import Image from 'next/image'
import Link from 'next/link'

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
              <p className="text-sm text-muted-foreground">Granizados con Estilo</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link href="#granizados" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Granizados
            </Link>
            <Link href="#especiales" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Especiales
            </Link>
            <Link href="#cremosos" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Cremosos
            </Link>
            <Link href="#combinados" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Combinados
            </Link>
            <Link href="#contacto" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>

          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">Los Jardines, Cartagena</p>
            <a href="tel:+573107083539" className="text-sm text-primary hover:text-primary/80">
              310 708 3539
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
