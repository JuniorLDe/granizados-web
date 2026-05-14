'use client'

import { useState } from 'react'
import { Send, Loader2, CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { useCart } from '@/lib/cart-context'

export function OrderForm() {
  const { items, total, clearCart } = useCart()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    notes: ''
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (items.length === 0) return

    setIsSubmitting(true)

    const orderDetails = items.map(item => {
      const price = item.product.prices[item.size] || 0
      let detail = `- ${item.product.name} (${item.size}) x${item.quantity} = ${formatPrice(price * item.quantity)}`
      if (item.selectedFlavors && item.selectedFlavors.length > 0) {
        detail += `\n  Sabores: ${item.selectedFlavors.join(', ')}`
      }
      if (item.notes) {
        detail += `\n  Nota: ${item.notes}`
      }
      return detail
    }).join('\n\n')

    const emailBody = `
NUEVO PEDIDO - MI SEDE CTG
==========================

DATOS DEL CLIENTE:
- Nombre: ${formData.name}
- Telefono: ${formData.phone}
- Email: ${formData.email}
- Direccion: ${formData.address}

PRODUCTOS:
${orderDetails}

TOTAL: ${formatPrice(total)}

NOTAS ADICIONALES:
${formData.notes || 'Ninguna'}

==========================
Pedido realizado desde la web
    `.trim()

    try {
      const whatsappMessage = `Nuevo Pedido - MI SEDE CTG

Nombre: ${formData.name}
Telefono: ${formData.phone}
Email: ${formData.email}
Direccion: ${formData.address}

Productos:
${orderDetails}

TOTAL: ${formatPrice(total)}

Notas adicionales:
${formData.notes || 'Ninguna'}`

      const whatsappUrl = `https://wa.me/573107083539?text=${encodeURIComponent(whatsappMessage)}`
      window.open(whatsappUrl, '_blank')

      setIsSuccess(true)
      clearCart()
      setFormData({ name: '', phone: '', email: '', address: '', notes: '' })
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      console.error('Error abriendo WhatsApp:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (items.length === 0) {
    return null
  }

  if (isSuccess) {
    return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold mb-2">Pedido Enviado</h2>
            <p className="text-muted-foreground">
              Tu pedido ha sido enviado correctamente. Te contactaremos pronto para confirmar.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Finalizar Pedido</span>
          </h2>
          <p className="text-muted-foreground">
            Completa tus datos para enviar tu pedido
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="neon-card rounded-xl p-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre completo *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="bg-muted/50"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Celular *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="310 708 3539"
                  className="bg-muted/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Correo electronico *</Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="tu@email.com"
                className="bg-muted/50"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Direccion completa *</Label>
              <Textarea
                id="address"
                required
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Calle, numero, barrio, referencias..."
                className="bg-muted/50 min-h-[80px]"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notas adicionales</Label>
              <Textarea
                id="notes"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                placeholder="Alguna modificacion, alergia, indicacion especial..."
                className="bg-muted/50 min-h-[80px]"
              />
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total a pagar:</span>
                <span className="gradient-text">{formatPrice(total)}</span>
              </div>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary hover:bg-primary/90"
              size="lg"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Enviar Pedido
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
