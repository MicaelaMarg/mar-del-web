"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Camera, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Header from "@/components/header"
import Footer from "@/components/footer"

const galleryImages = [
  {
    id: 1,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Atardecer en Playa Grande",
    category: "Playas",
    title: "Atardecer dorado en Playa Grande",
    photographer: "Ana García",
    date: "2024-12-10",
    likes: 124,
  },
  {
    id: 2,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Casino Central de noche",
    category: "Arquitectura",
    title: "Casino Central iluminado",
    photographer: "Carlos Ruiz",
    date: "2024-12-08",
    likes: 89,
  },
  {
    id: 3,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Puerto pesquero al amanecer",
    category: "Puerto",
    title: "Amanecer en el puerto pesquero",
    photographer: "María López",
    date: "2024-12-05",
    likes: 156,
  },
  {
    id: 4,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Lobos marinos en la costa",
    category: "Naturaleza",
    title: "Lobos marinos en Punta Mogotes",
    photographer: "Diego Fernández",
    date: "2024-12-03",
    likes: 203,
  },
  {
    id: 5,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Peatonal San Martín",
    category: "Ciudad",
    title: "Vida urbana en la peatonal",
    photographer: "Laura Martín",
    date: "2024-12-01",
    likes: 67,
  },
  {
    id: 6,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Festival de Jazz",
    category: "Eventos",
    title: "Festival de Jazz en la Rambla",
    photographer: "Roberto Silva",
    date: "2024-11-28",
    likes: 145,
  },
  {
    id: 7,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Surfista en acción",
    category: "Deportes",
    title: "Surf en Playa Grande",
    photographer: "Martín Torres",
    date: "2024-11-25",
    likes: 178,
  },
  {
    id: 8,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Mariscos frescos",
    category: "Gastronomía",
    title: "Mariscos frescos del puerto",
    photographer: "Elena Vega",
    date: "2024-11-22",
    likes: 92,
  },
  {
    id: 9,
    src: "/placeholder.svg?height=400&width=600",
    alt: "Laguna de los Padres",
    category: "Naturaleza",
    title: "Aves en Laguna de los Padres",
    photographer: "Andrés Morales",
    date: "2024-11-20",
    likes: 134,
  },
]

const categories = [
  "Todas",
  "Playas",
  "Arquitectura",
  "Puerto",
  "Naturaleza",
  "Ciudad",
  "Eventos",
  "Deportes",
  "Gastronomía",
]

const categoryColors = {
  Playas: "bg-blue-100 text-blue-800",
  Arquitectura: "bg-purple-100 text-purple-800",
  Puerto: "bg-cyan-100 text-cyan-800",
  Naturaleza: "bg-green-100 text-green-800",
  Ciudad: "bg-gray-100 text-gray-800",
  Eventos: "bg-pink-100 text-pink-800",
  Deportes: "bg-orange-100 text-orange-800",
  Gastronomía: "bg-red-100 text-red-800",
}

export default function GaleriaPage() {
  const [selectedCategory, setSelectedCategory] = useState("Todas")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredImages = galleryImages.filter(
    (image) => selectedCategory === "Todas" || image.category === selectedCategory,
  )

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return

    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage)
    let newIndex

    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
    }

    setSelectedImage(filteredImages[newIndex].id)
  }

  const selectedImageData = selectedImage ? galleryImages.find((img) => img.id === selectedImage) : null

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Galería</h1>
          <p className="text-xl text-emerald-100">
            Las mejores imágenes de Mar del Plata capturadas por nuestra comunidad
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
              onClick={() => openLightbox(image.id)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge
                    className={
                      categoryColors[image.category as keyof typeof categoryColors] || "bg-gray-100 text-gray-800"
                    }
                  >
                    {image.category}
                  </Badge>
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold mb-1">{image.title}</h3>
                  <div className="flex items-center justify-between text-sm">
                    <span className="flex items-center">
                      <Camera className="h-3 w-3 mr-1" />
                      {image.photographer}
                    </span>
                    <span className="flex items-center">
                      <Heart className="h-3 w-3 mr-1" />
                      {image.likes}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && selectedImageData && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute -top-12 right-0 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateImage("prev")}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateImage("next")}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImageData.src || "/placeholder.svg"}
                alt={selectedImageData.alt}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <h2 className="text-2xl font-bold mb-2">{selectedImageData.title}</h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Camera className="h-4 w-4 mr-2" />
                      {selectedImageData.photographer}
                    </span>
                    <span>{new Date(selectedImageData.date).toLocaleDateString("es-AR")}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Heart className="h-4 w-4 mr-1" />
                      {selectedImageData.likes}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
