import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Header from "@/components/header"
import Footer from "@/components/footer"

// Mock data - in a real app, this would come from a database
const newsData = {
  1: {
    id: 1,
    title: "Nueva temporada de verano: expectativas récord de turismo",
    content: `
      <p>Las reservas hoteleras superan las del año pasado en un 25%, según informaron desde la Asociación Empresaria Hotelera Gastronómica de Mar del Plata (AEHGMDP). La ciudad se prepara para recibir más de 2 millones de visitantes durante la temporada estival 2024-2025.</p>
      
      <p>Los hoteleros reportan una ocupación del 85% para enero y febrero, con picos del 95% durante las primeras dos semanas de enero. "Estamos muy optimistas con esta temporada. Las consultas y reservas anticipadas nos indican que será una de las mejores de los últimos años", comentó María Elena Torresi, presidenta de la AEHGMDP.</p>
      
      <h3>Factores que impulsan el turismo</h3>
      <p>Entre los factores que contribuyen a este crecimiento se destacan:</p>
      <ul>
        <li>La estabilización de la economía nacional</li>
        <li>Las mejoras en la infraestructura turística</li>
        <li>La diversificación de la oferta cultural y gastronómica</li>
        <li>Las campañas de promoción turística</li>
      </ul>
      
      <p>Además, se espera un incremento significativo en el turismo internacional, especialmente de países limítrofes como Uruguay, Brasil y Chile.</p>
      
      <h3>Preparativos de la ciudad</h3>
      <p>El municipio ha intensificado los trabajos de puesta en valor de los espacios públicos, con especial atención en las playas y la zona céntrica. Se han reforzado los operativos de seguridad y limpieza, y se han habilitado nuevos espacios de estacionamiento.</p>
      
      <p>La temporada oficial comenzará el 15 de diciembre con la inauguración de las actividades en las playas y se extenderá hasta el 31 de marzo de 2025.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Turismo",
    date: "2024-12-15",
    author: "María González",
    summary:
      "Las reservas hoteleras superan las del año pasado en un 25%. La ciudad se prepara para recibir más de 2 millones de visitantes.",
  },
  2: {
    id: 2,
    title: "Operativo policial en el centro: detienen a tres personas",
    content: `
      <p>En un operativo conjunto entre la Policía Local y la Policía Bonaerense, se detuvo a tres personas que vendían mercadería sin autorización en la peatonal San Martín. El procedimiento se realizó durante la mañana del jueves en el marco de los controles de comercio ambulante.</p>
      
      <p>Según informó el comisario Juan Carlos Méndez, a cargo del operativo, se secuestraron productos por un valor estimado de $500.000, incluyendo ropa, accesorios y productos electrónicos de dudosa procedencia.</p>
      
      <h3>Detalles del operativo</h3>
      <p>El operativo se desarrolló entre las 10:00 y las 12:00 horas en diferentes puntos de la peatonal San Martín, tras recibir denuncias de comerciantes establecidos sobre la venta ilegal de mercadería.</p>
      
      <p>Los detenidos, de entre 25 y 40 años, fueron trasladados a la comisaría 1ª para las actuaciones correspondientes. Se les imputaron los delitos de comercio ambulante sin autorización y posible receptación de mercadería robada.</p>
      
      <h3>Controles permanentes</h3>
      <p>Desde la Municipalidad informaron que se intensificarán los controles durante la temporada turística para garantizar el orden en los espacios públicos y proteger a los comerciantes que operan de manera legal.</p>
      
      <p>"Es importante que tanto residentes como turistas sepan que estamos trabajando para mantener el orden y la seguridad en nuestra ciudad", declaró el secretario de Seguridad municipal.</p>
    `,
    image: "/placeholder.svg?height=400&width=800",
    category: "Policiales",
    date: "2024-12-14",
    author: "Carlos Mendez",
    summary: "Procedimiento por venta ilegal de mercadería en la peatonal San Martín.",
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function NewsDetailPage({ params }: PageProps) {
  const newsId = Number.parseInt(params.id)
  const news = newsData[newsId as keyof typeof newsData]

  if (!news) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Noticia no encontrada</h1>
          <p className="text-gray-600 mb-8">La noticia que buscas no existe o ha sido eliminada.</p>
          <Link href="/noticias">
            <Button>Volver a Noticias</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link href="/noticias">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Noticias
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Badge className="mb-4">{news.category}</Badge>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">{news.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-2" />
              <span>{news.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>
                {new Date(news.date).toLocaleDateString("es-AR", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
          </div>

          {/* Share Buttons */}
          <div className="flex items-center space-x-2 mb-6">
            <span className="text-sm text-gray-600 mr-2">Compartir:</span>
            <Button size="sm" variant="outline">
              <Facebook className="h-4 w-4 mr-1" />
              Facebook
            </Button>
            <Button size="sm" variant="outline">
              <Twitter className="h-4 w-4 mr-1" />
              Twitter
            </Button>
            <Button size="sm" variant="outline">
              <Share2 className="h-4 w-4 mr-1" />
              Copiar enlace
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-64 md:h-96 mb-8 rounded-lg overflow-hidden">
          <Image src={news.image || "/placeholder.svg"} alt={news.title} fill className="object-cover" priority />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <div className="text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: news.content }} />
        </div>

        {/* Related Articles */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.values(newsData)
              .filter((item) => item.id !== news.id && item.category === news.category)
              .slice(0, 2)
              .map((relatedNews) => (
                <Card key={relatedNews.id} className="hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <Image
                      src={relatedNews.image || "/placeholder.svg"}
                      alt={relatedNews.title}
                      fill
                      className="object-cover rounded-t-lg"
                    />
                  </div>
                  <CardContent className="p-4">
                    <Badge variant="outline" className="mb-2">
                      {relatedNews.category}
                    </Badge>
                    <h4 className="font-semibold mb-2 line-clamp-2">{relatedNews.title}</h4>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedNews.summary}</p>
                    <Link href={`/noticias/${relatedNews.id}`}>
                      <Button size="sm" variant="outline" className="w-full bg-transparent">
                        Leer más
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  )
}
