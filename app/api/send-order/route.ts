import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { to, subject, body, customerEmail } = await request.json()

    // Log para debugging
    console.log('[v0] Procesando pedido para:', customerEmail)

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Mi Sede CTG <onboarding@resend.dev>',
      to: [to],
      subject: subject,
      text: body,
      replyTo: customerEmail
    })

    if (error) {
      console.error('[v0] Error al enviar email:', error)
      return NextResponse.json(
        { success: false, message: 'Error al enviar el correo' },
        { status: 500 }
      )
    }

    console.log('[v0] Email enviado exitosamente:', data?.id)

    return NextResponse.json({ 
      success: true, 
      message: 'Pedido enviado correctamente',
      emailId: data?.id
    })
  } catch (error) {
    console.error('[v0] Error processing order:', error)
    return NextResponse.json(
      { success: false, message: 'Error al procesar el pedido' },
      { status: 500 }
    )
  }
}
