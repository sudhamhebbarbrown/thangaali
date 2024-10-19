'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const rooms = [
  {
    name: "Gaali & Belaku",
    description: "Cozy wooden cabin surrounded by lush forest views.",
    image: "/g11.jpg?height=400&width=600",
  },
  {
    name: "Surya & Chandra",
    description: "Spacious suite with panoramic views of the serene lake.",
    image: "/g11.jpg?height=400&width=600",
  },
  {
    name: "Parampare",
    description: "Rustic lodge with breathtaking mountain vistas.",
    image: "/g11.jpg?height=400&width=600",
  },
  {
    name: "Smriti",
    description: "4 bed dormitory with modern amenities and cozy interiors.",
    image: "/g11.jpg?height=400&width=600",
  },
  {
    name: "Prakruti",
    description: "Sustainable bungalow powered by renewable energy.",
    image: "/g11.jpg?height=400&width=600",
  },
]

export function RoomCarousel() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-12">Accomodations</h2>
    <Carousel className="w-full max-w-xl mx-auto">
      <CarouselContent>
        {rooms.map((room, index) => (
          <CarouselItem key={index}>
            <Card className="border-2 border-primary shadow-lg">
              <CardContent className="p-0">
                <Image
                  src={room.image}
                  alt={room.name}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <h3 className="text-xl text-green-800 font-semibold mb-2">{room.name}</h3>
                  <p className="text-green-800">{room.description}</p>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-green-800 text-white hover:bg-emerald-600" />
      <CarouselNext className="bg-green-800 text-white hover:bg-emerald-600" />
    </Carousel>
    </div>
    </section>
  )
}