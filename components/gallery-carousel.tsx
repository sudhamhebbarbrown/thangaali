'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const galleryItems = [
  { type: 'video', src: 'https://www.youtube.com/embed/DCeW7CVrvtc?si=A1bl0-HjvWQHnevL&amp;start=647', alt: 'Resort overview video' },
  { type: 'image', src: "/placeholder.svg?height=600&width=800", alt: "Resort exterior view" },
  { type: 'image', src: "/placeholder.svg?height=600&width=800", alt: "Luxurious room interior" },
  { type: 'image', src: "/placeholder.svg?height=600&width=800", alt: "Scenic nature trail" },
  { type: 'image', src: "/placeholder.svg?height=600&width=800", alt: "Traditional Malnad cuisine" },
  { type: 'image', src: "/placeholder.svg?height=600&width=800", alt: "Yoga session by the lake" },
  { type: 'image', src: "/placeholder.svg?height=600&width=800", alt: "Sunset view from the resort" },
  { type: 'image', src: "/placeholder.svg?height=600&width=800", alt: "Wildlife spotting experience" },
]

export function GalleryCarouselComponent() {
  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Experience Our Resort</h2>
        
        <Carousel setApi={setApi} className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {galleryItems.map((item, index) => (
              <CarouselItem key={index}>
                <Card>
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    {item.type === 'video' ? (
                      <iframe
                        src={item.src}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-full"
                      ></iframe>
                    ) : (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={800}
                        height={600}
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    )}
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="flex justify-center items-center mt-4 space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-full"
            onClick={() => api?.scrollPrev()}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm text-muted-foreground">
            {current} / {count}
          </span>
          <Button
            variant="outline"
            size="icon"
            className="w-8 h-8 rounded-full"
            onClick={() => api?.scrollNext()}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}