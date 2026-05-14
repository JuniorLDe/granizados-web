import { CartProvider } from "@/lib/cart-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { GranizadosSection } from "@/components/granizados-section"
import { EspecialesSection } from "@/components/especiales-section"
import { CremososSection } from "@/components/cremosos-section"
import { CombinadosSection } from "@/components/combinados-section"
import { CartSection } from "@/components/cart-section"
import { OrderForm } from "@/components/order-form"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <GranizadosSection />
          <EspecialesSection />
          <CremososSection />
          <CombinadosSection />
          <CartSection />
          <OrderForm />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </CartProvider>
  )
}
