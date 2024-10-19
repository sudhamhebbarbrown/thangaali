

import { Button } from "@/components/ui/button"
import Image from "next/image"

interface HeroProps {
  onCheckAvailability: () => void;
}

export default function HeroGreen({ onCheckAvailability }: HeroProps) {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/g11.jpg?height=1080&width=1920"
        alt="Beautiful nature landscape"
        width={1920}
        height={1080}
        className="absolute inset-0 object-cover w-full h-full"
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Escape to Nature's Embrace
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-8 max-w-3xl">
          Experience tranquility and adventure in our luxurious eco-friendly resort nestled in pristine wilderness.
        </p>
        <Button 
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          onClick={onCheckAvailability}
        >
          Check Availability
        </Button>
      </div>
    </div>
  )
}