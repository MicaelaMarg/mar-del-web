import Image from "next/image"
import { MapPin, Star, Clock, Camera } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/footer"

const attractions = [
  {
    id: 1,
    name: "Casino Central",
    description:
      "Emblemático edificio de 1939, símbolo de la ciudad. Arquitectura única y espectáculos de primer nivel.",
    category: "Arquitectura",
    rating: 4.5,
    openHours: "24 horas",
    image: "/placeholder.svg?height=300&width=500",
    tips: "Visita el mirador en el último piso para una vista panorámica de la ciudad.",
  },
  {
    id: 2,
    name: "Playa Grande",
    description:
      "La playa más famosa de Mar del Plata, ideal para surf y deportes acuáticos. Arena fina y aguas cristalinas.",
    category: "Playas",
    rating: 4.8,
    openHours: "Siempre abierto",
    image: "/placeholder.svg?height=300&width=500",
    tips: "Mejor momento para surf: temprano en la mañana. Hay alquiler de equipos.",
  },
  {
    id: 3,
    name: "Puerto de Mar del Plata",
    description:
      "Puerto pesquero más importante del país. Observa la llegada de los barcos y disfruta mariscos frescos.",
    category: "Cultura",
    rating: 4.3,
    openHours: "6:00 - 20:00",
    image: "/placeholder.svg?height=300&width=500",
    tips: "Visita temprano para ver la descarga de pescado. Prueba los mariscos en los restaurantes cercanos.",
  },
  {
    id: 4,
    name: "Museo del Mar",
    description: "Impresionante colección de caracolas marinas y vida marina. Perfecto para familias con niños.",
    category: "Museos",
    rating: 4.2,
    openHours: "10:00 - 18:00",
    image: "/placeholder.svg?height=300&width=500",
    tips: "Los fines de semana hay actividades especiales para niños. Entrada con descuento para estudiantes.",
  },
  {
    id: 5,
    name: "Laguna de los Padres",
    description: "Reserva natural a 15km de la ciudad. Ideal para pesca, kayak y avistamiento de aves.",
    category: "Naturaleza",
    rating: 4.6,
    openHours: "8:00 - 18:00",
    image: "/placeholder.svg?height=300&width=500",
    tips: "Lleva repelente de mosquitos. Hay senderos para trekking y áreas de picnic.",
  },
  {
    id: 6,
    name: "Peatonal San Martín",
    description: "Principal arteria comercial de la ciudad. Tiendas, cafés y arquitectura histórica en cada esquina.",
    category: "Compras",
    rating: 4.4,
    openHours: "Varía por local",
    image: "/placeholder.svg?height=300&width=500",
    tips: "Mejor momento: tarde-noche cuando hay más ambiente. Muchos locales ofrecen descuentos en temporada baja.",
  },
]

const categoryColors = {
  Playas: "bg-blue-100 text-blue-800",
  Arquitectura: "bg-purple-100 text-purple-800",
  Cultura: "bg-green-100 text-green-800",
  Museos: "bg-orange-100 text-orange-800",
  Naturaleza: "bg-emerald-100 text-emerald-800",
  Compras: "bg-pink-100 text-pink-800",
}

export default function TurismoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <Image src="/placeholder.svg?height=600&width=1200" alt="Turismo Mar del Plata" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-600/50" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Turismo y Cultura</h1>
          <p className="text-xl md:text-2xl">Descubre los tesoros de la Perla del Atlántico</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Lugares Imperdibles</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Mar del Plata ofrece una combinación única de playas, cultura, gastronomía y entretenimiento. Desde sus
            icónicas playas hasta sus museos y espacios culturales, cada rincón tiene una historia que contar.
          </p>
        </div>
      </section>

      {/* Attractions Grid */}
      <section className="pb-12 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attractions.map((attraction) => (
            <Card key={attraction.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={attraction.image || "/placeholder.svg"}
                  alt={attraction.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    className={
                      categoryColors[attraction.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"
                    }
                  >
                    {attraction.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-2 py-1 flex items-center">
                  <Star className="h-4 w-4 text-yellow-500 fill-current mr-1" />
                  <span className="text-sm font-semibold">{attraction.rating}</span>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl text-slate-800 group-hover:text-blue-600 transition-colors">
                  {attraction.name}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 mb-4">{attraction.description}</p>

                <div className="space-y-2 text-sm text-slate-600 mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-blue-600" />
                    <span>{attraction.openHours}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                    <span>Mar del Plata</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg mb-4">
                  <p className="text-sm text-blue-800">
                    <strong>Tip:</strong> {attraction.tips}
                  </p>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Camera className="mr-2 h-4 w-4" />
                  Ver más fotos
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="py-12 bg-gradient-to-r from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-8">Consejos para tu Visita</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Mejor Época</h3>
              <p className="text-sm text-slate-600">
                Diciembre a marzo para playa, abril a noviembre para turismo cultural
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">Transporte</h3>
              <p className="text-sm text-slate-600">Colectivos urbanos, taxis y bicicletas públicas disponibles</p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="font-semibold mb-2">Gastronomía</h3>
              <p className="text-sm text-slate-600">
                No te pierdas los mariscos frescos del puerto y las parrillas tradicionales
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-6 w-6 text-orange-600" />
              </div>
              <h3 className="font-semibold mb-2">Fotografía</h3>
              <p className="text-sm text-slate-600">Mejores vistas: Casino al atardecer, puerto al amanecer</p>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
