"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Eye, Save, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { useToast } from "@/hooks/use-toast"
import Header from "@/components/header"

interface NewsItem {
  id: number
  title: string
  summary: string
  content: string
  image: string
  category: string
  date: string
  author: string
  status: "published" | "draft"
}

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  category: string
  price: string
  image: string
  status: "published" | "draft"
}

const initialNews: NewsItem[] = [
  {
    id: 1,
    title: "Nueva temporada de verano: expectativas récord de turismo",
    summary: "Las reservas hoteleras superan las del año pasado en un 25%.",
    content:
      "Las reservas hoteleras superan las del año pasado en un 25%. La ciudad se prepara para recibir más de 2 millones de visitantes durante la temporada estival. Los hoteleros reportan una ocupación del 85% para enero y febrero.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Turismo",
    date: "2024-12-15",
    author: "María González",
    status: "published",
  },
  {
    id: 2,
    title: "Operativo policial en el centro: detienen a tres personas",
    summary: "Procedimiento por venta ilegal de mercadería en la peatonal San Martín.",
    content:
      "En un operativo conjunto entre la Policía Local y la Bonaerense, se detuvo a tres personas que vendían mercadería sin autorización en la peatonal San Martín. Se secuestraron productos por un valor estimado de $500.000.",
    image: "/placeholder.svg?height=300&width=500",
    category: "Policiales",
    date: "2024-12-14",
    author: "Carlos Mendez",
    status: "published",
  },
]

const initialEvents: Event[] = [
  {
    id: 1,
    title: "Festival de Jazz en la Rambla",
    description: "Una noche mágica con los mejores exponentes del jazz nacional e internacional.",
    date: "2024-12-20",
    time: "20:00",
    location: "Rambla Casino",
    category: "Música",
    price: "Gratis",
    image: "/placeholder.svg?height=300&width=500",
    status: "published",
  },
]

const categories = ["Turismo", "Policiales", "Cultura", "Deportes", "Servicios", "Gastronomía", "Política", "Economía"]
const eventCategories = ["Música", "Cultura", "Deportes", "Arte", "Gastronomía", "Teatro", "Cine"]

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<"news" | "events" | "gallery">("news")
  const [news, setNews] = useState<NewsItem[]>(initialNews)
  const [events, setEvents] = useState<Event[]>(initialEvents)
  const [editingNews, setEditingNews] = useState<NewsItem | null>(null)
  const [editingEvent, setEditingEvent] = useState<Event | null>(null)
  const [showNewsForm, setShowNewsForm] = useState(false)
  const [showEventForm, setShowEventForm] = useState(false)
  const { toast } = useToast()

  // News form state
  const [newsForm, setNewsForm] = useState({
    title: "",
    summary: "",
    content: "",
    image: "",
    category: "",
    author: "",
    status: "draft" as "published" | "draft",
  })

  // Event form state
  const [eventForm, setEventForm] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
    location: "",
    category: "",
    price: "",
    image: "",
    status: "draft" as "published" | "draft",
  })

  const handleSaveNews = () => {
    if (!newsForm.title || !newsForm.summary || !newsForm.content || !newsForm.category || !newsForm.author) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      })
      return
    }

    if (editingNews) {
      // Update existing news
      setNews(
        news.map((item) =>
          item.id === editingNews.id
            ? { ...editingNews, ...newsForm, date: new Date().toISOString().split("T")[0] }
            : item,
        ),
      )
      toast({
        title: "Noticia actualizada",
        description: "La noticia se ha actualizado correctamente",
      })
    } else {
      // Create new news
      const newNews: NewsItem = {
        id: Math.max(...news.map((n) => n.id)) + 1,
        ...newsForm,
        date: new Date().toISOString().split("T")[0],
      }
      setNews([newNews, ...news])
      toast({
        title: "Noticia creada",
        description: "La noticia se ha creado correctamente",
      })
    }

    // Reset form
    setNewsForm({
      title: "",
      summary: "",
      content: "",
      image: "",
      category: "",
      author: "",
      status: "draft",
    })
    setEditingNews(null)
    setShowNewsForm(false)
  }

  const handleSaveEvent = () => {
    if (
      !eventForm.title ||
      !eventForm.description ||
      !eventForm.date ||
      !eventForm.time ||
      !eventForm.location ||
      !eventForm.category
    ) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos obligatorios",
        variant: "destructive",
      })
      return
    }

    if (editingEvent) {
      // Update existing event
      setEvents(events.map((item) => (item.id === editingEvent.id ? { ...editingEvent, ...eventForm } : item)))
      toast({
        title: "Evento actualizado",
        description: "El evento se ha actualizado correctamente",
      })
    } else {
      // Create new event
      const newEvent: Event = {
        id: Math.max(...events.map((e) => e.id)) + 1,
        ...eventForm,
      }
      setEvents([newEvent, ...events])
      toast({
        title: "Evento creado",
        description: "El evento se ha creado correctamente",
      })
    }

    // Reset form
    setEventForm({
      title: "",
      description: "",
      date: "",
      time: "",
      location: "",
      category: "",
      price: "",
      image: "",
      status: "draft",
    })
    setEditingEvent(null)
    setShowEventForm(false)
  }

  const handleEditNews = (newsItem: NewsItem) => {
    setEditingNews(newsItem)
    setNewsForm({
      title: newsItem.title,
      summary: newsItem.summary,
      content: newsItem.content,
      image: newsItem.image,
      category: newsItem.category,
      author: newsItem.author,
      status: newsItem.status,
    })
    setShowNewsForm(true)
  }

  const handleEditEvent = (event: Event) => {
    setEditingEvent(event)
    setEventForm({
      title: event.title,
      description: event.description,
      date: event.date,
      time: event.time,
      location: event.location,
      category: event.category,
      price: event.price,
      image: event.image,
      status: event.status,
    })
    setShowEventForm(true)
  }

  const handleDeleteNews = (id: number) => {
    setNews(news.filter((item) => item.id !== id))
    toast({
      title: "Noticia eliminada",
      description: "La noticia se ha eliminado correctamente",
    })
  }

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter((item) => item.id !== id))
    toast({
      title: "Evento eliminado",
      description: "El evento se ha eliminado correctamente",
    })
  }

  const toggleNewsStatus = (id: number) => {
    setNews(
      news.map((item) =>
        item.id === id ? { ...item, status: item.status === "published" ? "draft" : "published" } : item,
      ),
    )
  }

  const toggleEventStatus = (id: number) => {
    setEvents(
      events.map((item) =>
        item.id === id ? { ...item, status: item.status === "published" ? "draft" : "published" } : item,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
          <p className="text-gray-600">Gestiona el contenido de Mar del Plata Hoy</p>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("news")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === "news" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Noticias
          </button>
          <button
            onClick={() => setActiveTab("events")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === "events" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Eventos
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`px-4 py-2 rounded-md font-medium transition-colors ${
              activeTab === "gallery" ? "bg-white text-blue-600 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Galería
          </button>
        </div>

        {/* News Tab */}
        {activeTab === "news" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Noticias</h2>
              <Button
                onClick={() => {
                  setShowNewsForm(true)
                  setEditingNews(null)
                  setNewsForm({
                    title: "",
                    summary: "",
                    content: "",
                    image: "",
                    category: "",
                    author: "",
                    status: "draft",
                  })
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nueva Noticia
              </Button>
            </div>

            {/* News Form */}
            {showNewsForm && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>{editingNews ? "Editar Noticia" : "Nueva Noticia"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Título *</label>
                      <Input
                        value={newsForm.title}
                        onChange={(e) => setNewsForm({ ...newsForm, title: e.target.value })}
                        placeholder="Título de la noticia"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Categoría *</label>
                      <Select
                        value={newsForm.category}
                        onValueChange={(value) => setNewsForm({ ...newsForm, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Resumen *</label>
                    <Textarea
                      value={newsForm.summary}
                      onChange={(e) => setNewsForm({ ...newsForm, summary: e.target.value })}
                      placeholder="Resumen breve de la noticia"
                      rows={2}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Contenido completo *</label>
                    <Textarea
                      value={newsForm.content}
                      onChange={(e) => setNewsForm({ ...newsForm, content: e.target.value })}
                      placeholder="Contenido completo de la noticia"
                      rows={6}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">URL de imagen</label>
                      <Input
                        value={newsForm.image}
                        onChange={(e) => setNewsForm({ ...newsForm, image: e.target.value })}
                        placeholder="https://ejemplo.com/imagen.jpg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Autor *</label>
                      <Input
                        value={newsForm.author}
                        onChange={(e) => setNewsForm({ ...newsForm, author: e.target.value })}
                        placeholder="Nombre del autor"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Estado</label>
                    <Select
                      value={newsForm.status}
                      onValueChange={(value: "published" | "draft") => setNewsForm({ ...newsForm, status: value })}
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Borrador</SelectItem>
                        <SelectItem value="published">Publicado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={handleSaveNews} className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      {editingNews ? "Actualizar" : "Guardar"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowNewsForm(false)
                        setEditingNews(null)
                      }}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* News List */}
            <div className="space-y-4">
              {news.map((newsItem) => (
                <Card key={newsItem.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={newsItem.status === "published" ? "default" : "secondary"}>
                            {newsItem.status === "published" ? "Publicado" : "Borrador"}
                          </Badge>
                          <Badge variant="outline">{newsItem.category}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{newsItem.title}</h3>
                        <p className="text-gray-600 mb-2">{newsItem.summary}</p>
                        <div className="text-sm text-gray-500">
                          Por {newsItem.author} • {new Date(newsItem.date).toLocaleDateString("es-AR")}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => toggleNewsStatus(newsItem.id)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleEditNews(newsItem)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteNews(newsItem.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === "events" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Eventos</h2>
              <Button
                onClick={() => {
                  setShowEventForm(true)
                  setEditingEvent(null)
                  setEventForm({
                    title: "",
                    description: "",
                    date: "",
                    time: "",
                    location: "",
                    category: "",
                    price: "",
                    image: "",
                    status: "draft",
                  })
                }}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Plus className="h-4 w-4 mr-2" />
                Nuevo Evento
              </Button>
            </div>

            {/* Event Form */}
            {showEventForm && (
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle>{editingEvent ? "Editar Evento" : "Nuevo Evento"}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Título *</label>
                      <Input
                        value={eventForm.title}
                        onChange={(e) => setEventForm({ ...eventForm, title: e.target.value })}
                        placeholder="Título del evento"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Categoría *</label>
                      <Select
                        value={eventForm.category}
                        onValueChange={(value) => setEventForm({ ...eventForm, category: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          {eventCategories.map((cat) => (
                            <SelectItem key={cat} value={cat}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Descripción *</label>
                    <Textarea
                      value={eventForm.description}
                      onChange={(e) => setEventForm({ ...eventForm, description: e.target.value })}
                      placeholder="Descripción del evento"
                      rows={3}
                    />
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Fecha *</label>
                      <Input
                        type="date"
                        value={eventForm.date}
                        onChange={(e) => setEventForm({ ...eventForm, date: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Hora *</label>
                      <Input
                        type="time"
                        value={eventForm.time}
                        onChange={(e) => setEventForm({ ...eventForm, time: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Precio</label>
                      <Input
                        value={eventForm.price}
                        onChange={(e) => setEventForm({ ...eventForm, price: e.target.value })}
                        placeholder="Gratis o $5000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ubicación *</label>
                      <Input
                        value={eventForm.location}
                        onChange={(e) => setEventForm({ ...eventForm, location: e.target.value })}
                        placeholder="Lugar del evento"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">URL de imagen</label>
                      <Input
                        value={eventForm.image}
                        onChange={(e) => setEventForm({ ...eventForm, image: e.target.value })}
                        placeholder="https://ejemplo.com/imagen.jpg"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Estado</label>
                    <Select
                      value={eventForm.status}
                      onValueChange={(value: "published" | "draft") => setEventForm({ ...eventForm, status: value })}
                    >
                      <SelectTrigger className="w-48">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="draft">Borrador</SelectItem>
                        <SelectItem value="published">Publicado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={handleSaveEvent} className="bg-green-600 hover:bg-green-700">
                      <Save className="h-4 w-4 mr-2" />
                      {editingEvent ? "Actualizar" : "Guardar"}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowEventForm(false)
                        setEditingEvent(null)
                      }}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Cancelar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Events List */}
            <div className="space-y-4">
              {events.map((event) => (
                <Card key={event.id}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant={event.status === "published" ? "default" : "secondary"}>
                            {event.status === "published" ? "Publicado" : "Borrador"}
                          </Badge>
                          <Badge variant="outline">{event.category}</Badge>
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-600 mb-2">{event.description}</p>
                        <div className="text-sm text-gray-500">
                          {new Date(event.date).toLocaleDateString("es-AR")} • {event.time} • {event.location}
                        </div>
                      </div>
                      <div className="flex space-x-2 ml-4">
                        <Button size="sm" variant="outline" onClick={() => toggleEventStatus(event.id)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="outline" onClick={() => handleEditEvent(event)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDeleteEvent(event.id)}
                          className="text-red-600 hover:text-red-700"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Gallery Tab */}
        {activeTab === "gallery" && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Gestión de Galería</h2>
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                <Plus className="h-4 w-4 mr-2" />
                Subir Imagen
              </Button>
            </div>
            <Card>
              <CardContent className="p-6">
                <p className="text-gray-600 text-center py-8">
                  Funcionalidad de galería en desarrollo. Aquí podrás subir y gestionar las imágenes del portal.
                </p>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  )
}
