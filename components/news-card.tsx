import Image from "next/image"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface NewsCardProps {
  news: {
    id: number
    title: string
    summary: string
    image: string
    category: string
    date: string
    author: string
  }
}

export default function NewsCard({ news }: NewsCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <Badge variant="secondary" className="bg-blue-600 text-white">
            {news.category}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <h3 className="text-xl font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {news.title}
        </h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-slate-600 mb-4 line-clamp-3">{news.summary}</p>

        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(news.date).toLocaleDateString("es-AR")}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{news.author}</span>
          </div>
        </div>

        <Link href={`/noticias/${news.id}`}>
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-blue-50 group-hover:border-blue-600 bg-transparent"
          >
            Leer más
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
