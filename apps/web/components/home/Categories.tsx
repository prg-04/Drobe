"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { categories } from "@/constants/constants";

export function CategoriesCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="w-full max-w-full mt-10 ml-4 ">
      <div className="w-full max-w-full ">
        <h3 className="text-2xl font-bold">Shop by Categories</h3>
      </div>
      <Carousel
        plugins={[plugin.current]}
        className="w-full max-w-full h-full mt-4"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent>
          {categories.map((category, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="relative aspect-square overflow-hidden h-full w-full ">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <a
                        href={category.href}
                        className="text-white text-xl font-semibold p-4 hover:bg-gray-700 transition-colors">
                        {category.title}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2" />
        <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2" />
      </Carousel>
    </div>
  );
}

export default CategoriesCarousel;
