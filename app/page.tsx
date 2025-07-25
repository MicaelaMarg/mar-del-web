import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsCard from "@/components/news-card"

const featuredNews = [
  {
    id: 1,
    title: "Nueva temporada de verano: expectativas récord de turismo",
    summary:
      "Las reservas hoteleras superan las del año pasado en un 25%. La ciudad se prepara para recibir más de 2 millones de visitantes.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Turismo",
    date: "2024-12-15",
    author: "María González",
  },
  {
    id: 2,
    title: "Inauguración del nuevo centro cultural en el puerto",
    summary:
      "El espacio contará con salas de exposición, teatro y talleres artísticos para toda la comunidad marplatense.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Cultura",
    date: "2024-12-14",
    author: "Carlos Mendez",
  },
  {
    id: 3,
    title: "Mejoras en el transporte público para la temporada",
    summary:
      "Se incorporan nuevas líneas y se extienden los horarios para facilitar el traslado de turistas y residentes.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Servicios",
    date: "2024-12-13",
    author: "Ana Rodríguez",
  },
]

const upcomingEvents = [
  {
    id: 1,
    title: "Festival de Jazz en la Rambla",
    date: "2024-12-20",
    time: "20:00",
    location: "Rambla Casino",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Feria de Artesanos",
    date: "2024-12-22",
    time: "10:00",
    location: "Plaza San Martín",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=800&width=1200"
          alt="Mar del Plata"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">Mar del Plata Hoy</h1>
          <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
            Tu portal de noticias, eventos y cultura de la Perla del Atlántico
          </p>
          <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">
            Explorar Noticias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">Últimas Noticias</h2>
          <p className="text-lg text-slate-600">Mantente informado sobre lo que sucede en nuestra ciudad</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/noticias">
            <Button
              variant="outline"
              size="lg"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent"
            >
              Ver Todas las Noticias
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">Próximos Eventos</h2>
            <p className="text-lg text-slate-600">No te pierdas las actividades más destacadas</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-slate-800">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-slate-600">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{new Date(event.date).toLocaleDateString("es-AR")}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.time} hs</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/eventos">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Ver Todos los Eventos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow border-2 border-blue-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-blue-600" />
            </div>
            <CardTitle className="text-xl mb-4 text-slate-800">Turismo</CardTitle>
            <p className="text-slate-600 mb-6">Descubre los mejores lugares, playas y atracciones de Mar del Plata</p>
            <Link href="/turismo">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 bg-transparent">
                Explorar
              </Button>
            </Link>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow border-2 border-amber-100">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-8 w-8 text-amber-600" />
            </div>
            <CardTitle className="text-xl mb-4 text-slate-800">Eventos</CardTitle>
            <p className="text-slate-600 mb-6">Agenda completa de actividades culturales, musicales y deportivas</p>
            <Link href="/eventos">
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50 bg-transparent">
                Ver Agenda
              </Button>
            </Link>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow border-2 border-emerald-100">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Image src="/placeholder.svg?height=32&width=32" alt="Galería" width={32} height={32} />
            </div>
            <CardTitle className="text-xl mb-4 text-slate-800">Galería</CardTitle>
            <p className="text-slate-600 mb-6">Las mejores fotos de nuestra hermosa ciudad costera</p>
            <Link href="/galeria">
              <Button
                variant="outline"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                Ver Fotos
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
