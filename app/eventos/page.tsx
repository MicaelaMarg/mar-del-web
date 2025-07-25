import Image from "next/image"
import { Calendar, Clock, MapPin, Ticket } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const events = [
  {
    id: 1,
    title: "Festival de Jazz en la Rambla",
    description:
      "Una noche mágica con los mejores exponentes del jazz nacional e internacional. Entrada libre y gratuita.",
    date: "2024-12-20",
    time: "20:00",
    location: "Rambla Casino",
    category: "Música",
    price: "Gratis",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 2,
    title: "Feria de Artesanos",
    description: "Productos únicos hechos por artesanos locales. Gastronomía, arte y música en vivo.",
    date: "2024-12-22",
    time: "10:00",
    location: "Plaza San Martín",
    category: "Cultura",
    price: "Gratis",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 3,
    title: "Torneo de Surf Profesional",
    description: "Los mejores surfistas del país compiten en las olas marplatenses. Tres días de competencia intensa.",
    date: "2024-12-25",
    time: "08:00",
    location: "Playa Grande",
    category: "Deportes",
    price: "Gratis",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 4,
    title: "Concierto de Año Nuevo",
    description: "Celebra el nuevo año con música en vivo y fuegos artificiales sobre el mar.",
    date: "2024-12-31",
    time: "23:00",
    location: "Playa Bristol",
    category: "Música",
    price: "$5000",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 5,
    title: "Exposición de Arte Contemporáneo",
    description:
      "Obras de artistas locales y regionales. Una muestra que refleja la identidad cultural de la costa atlántica.",
    date: "2025-01-05",
    time: "18:00",
    location: "Museo de Arte Contemporáneo",
    category: "Arte",
    price: "$2000",
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: 6,
    title: "Maratón de la Costa",
    description: "42K corriendo por la costanera marplatense. Inscripciones abiertas hasta el 20 de enero.",
    date: "2025-01-15",
    time: "07:00",
    location: "Costanera Norte",
    category: "Deportes",
    price: "$8000",
    image: "/placeholder.svg?height=300&width=500",
  },
]

const categoryColors = {
  Música: "bg-purple-100 text-purple-800",
  Cultura: "bg-blue-100 text-blue-800",
  Deportes: "bg-green-100 text-green-800",
  Arte: "bg-pink-100 text-pink-800",
  Gastronomía: "bg-orange-100 text-orange-800",
}

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Eventos</h1>
          <p className="text-xl text-purple-100">Descubre las mejores actividades culturales, musicales y deportivas</p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      categoryColors[event.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"
                    }
                  >
                    {event.category}
                  </Badge>
                </div>
                {event.price !== "Gratis" && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-amber-500 text-white">
                      {event.price}
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                  {event.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 mb-4 line-clamp-3">{event.description}</p>

                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-blue-600" />
                    <span>
                      {new Date(event.date).toLocaleDateString("es-AR", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
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

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Ticket className="mr-2 h-4 w-4" />
                  {event.price === "Gratis" ? "Más información" : "Comprar entrada"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
