import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Mar del Plata Hoy</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              Tu portal de confianza para mantenerte informado sobre noticias, eventos y cultura de la Perla del
              Atlántico. Conectamos a la comunidad marplatense con lo que realmente importa.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-slate-300 hover:text-blue-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/noticias" className="text-slate-300 hover:text-white transition-colors">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="/eventos" className="text-slate-300 hover:text-white transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="/turismo" className="text-slate-300 hover:text-white transition-colors">
                  Turismo
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="text-slate-300 hover:text-white transition-colors">
                  Galería
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-slate-300">info@mardelplatahoy.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-slate-300">+54 223 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" />
                <span className="text-slate-300">Mar del Plata, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2024 Mar del Plata Hoy. Todos los derechos reservados - Mattiucci</p>
        </div>
      </div>
    </footer>
  )
}
