"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export const CarouselDemo = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  )

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-xl mx-auto"
      opts={{
        align: "center",
        loop: true,
      }}
    >
      <CarouselContent className="-ml-4">
        {[1, 2, 3, 4, 5, 6].map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-4 md:basis-1/2 lg:basis-1/3"
          >
            <div className="group relative h-48 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold transition-all duration-500 ease-out
              scale-90 opacity-70
              group-data-[active=true]:scale-100
              group-data-[active=true]:opacity-100
              shadow-lg"
            >
              {item}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  )
}
