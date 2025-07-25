"use client"

import { useState } from "react"
import { Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Header from "@/components/header"
import Footer from "@/components/footer"
import NewsCard from "@/components/news-card"

const allNews = [
  {
    id: 1,
    title: "Nueva temporada de verano: expectativas récord de turismo",
    summary:
      "Las reservas hoteleras superan las del año pasado en un 25%. La ciudad se prepara para recibir más de 2 millones de visitantes durante la temporada estival.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Turismo",
    date: "2024-12-15",
    author: "María González",
  },
  {
    id: 2,
    title: "Inauguración del nuevo centro cultural en el puerto",
    summary:
      "El espacio contará con salas de exposición, teatro y talleres artísticos para toda la comunidad marplatense. La inversión fue de 50 millones de pesos.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Cultura",
    date: "2024-12-14",
    author: "Carlos Mendez",
  },
  {
    id: 3,
    title: "Mejoras en el transporte público para la temporada",
    summary:
      "Se incorporan nuevas líneas y se extienden los horarios para facilitar el traslado de turistas y residentes durante los meses de mayor afluencia.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Servicios",
    date: "2024-12-13",
    author: "Ana Rodríguez",
  },
  {
    id: 4,
    title: "Festival Internacional de Cine: programación completa",
    summary:
      "Del 20 al 30 de diciembre se realizará la 39ª edición del festival con más de 200 películas de 40 países. Habrá funciones gratuitas al aire libre.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Cultura",
    date: "2024-12-12",
    author: "Roberto Silva",
  },
  {
    id: 5,
    title: "Obras de renovación en la peatonal San Martín",
    summary:
      "La principal arteria comercial de la ciudad recibirá una inversión de 80 millones para mejorar la iluminación, el mobiliario urbano y la accesibilidad.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Servicios",
    date: "2024-12-11",
    author: "Laura Fernández",
  },
  {
    id: 6,
    title: "Récord de avistaje de ballenas en la costa marplatense",
    summary:
      "Los operadores turísticos reportan un aumento del 40% en los avistajes. La temporada se extiende hasta marzo por las condiciones climáticas favorables.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Turismo",
    date: "2024-12-10",
    author: "Diego Martín",
  },
]

const categories = ["Todas", "Turismo", "Cultura", "Servicios", "Deportes", "Gastronomía"]

export default function NoticiasPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todas")

  const filteredNews = allNews.filter((news) => {
    const matchesSearch =
      news.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      news.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "Todas" || news.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Noticias</h1>
          <p className="text-xl text-blue-100">Mantente informado con las últimas noticias de Mar del Plata</p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Buscar noticias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-slate-600" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Categoría" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        {filteredNews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((news) => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No se encontraron noticias que coincidan con tu búsqueda.</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setSelectedCategory("Todas")
              }}
              variant="outline"
              className="mt-4"
            >
              Limpiar filtros
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  )
}
