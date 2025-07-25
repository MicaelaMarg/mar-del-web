"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Send, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const { toast } = useToast()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    toast({
      title: "Mensaje enviado",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate newsletter subscription
    toast({
      title: "¡Suscripción exitosa!",
      description: "Te has suscrito a nuestro newsletter. Recibirás las últimas noticias de Mar del Plata.",
    })
    setNewsletterEmail("")
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contacto</h1>
          <p className="text-xl text-blue-100">
            Estamos aquí para escucharte. Contáctanos o suscríbete a nuestro newsletter
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Envíanos un mensaje</CardTitle>
                <p className="text-slate-600">
                  ¿Tienes una noticia, sugerencia o comentario? Nos encantaría escucharte.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Nombre completo
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
                      Asunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="¿De qué quieres hablarnos?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                      Mensaje
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Escribe tu mensaje aquí..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    <Send className="mr-2 h-4 w-4" />
                    Enviar mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info & Newsletter */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Email</h3>
                    <p className="text-slate-600">info@mardelplatahoy.com</p>
                    <p className="text-slate-600">redaccion@mardelplatahoy.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Teléfono</h3>
                    <p className="text-slate-600">+54 223 123-4567</p>
                    <p className="text-slate-600">WhatsApp: +54 9 223 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Ubicación</h3>
                    <p className="text-slate-600">Mar del Plata</p>
                    <p className="text-slate-600">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-800">Horarios de atención</h3>
                    <p className="text-slate-600">Lunes a Viernes: 9:00 - 18:00</p>
                    <p className="text-slate-600">Sábados: 10:00 - 14:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Subscription */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Newsletter</CardTitle>
                <p className="text-slate-600">
                  Suscríbete para recibir las últimas noticias y eventos de Mar del Plata
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <Input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="tu@email.com"
                  />
                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Suscribirse al newsletter
                  </Button>
                </form>
                <p className="text-xs text-slate-500 mt-3">
                  Al suscribirte, aceptas recibir emails con noticias y eventos. Puedes darte de baja en cualquier
                  momento.
                </p>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-slate-800">Síguenos</CardTitle>
                <p className="text-slate-600">Mantente conectado a través de nuestras redes sociales</p>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                    <Facebook className="h-5 w-5 mr-2" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                    <Instagram className="h-5 w-5 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1 bg-transparent">
                    <Twitter className="h-5 w-5 mr-2" />
                    Twitter
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
