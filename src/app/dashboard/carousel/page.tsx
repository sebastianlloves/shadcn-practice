'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import AutoScroll from 'embla-carousel-auto-scroll'

function CarouselPage () {
  return (
    <div className='flex justify-center items-center'>
      <Carousel
        opts={{ loop: true, dragFree: true }}
        // autoplay={1000}
        plugins={[AutoScroll({ playOnInit: true, speed: 1.5, direction: 'backward', stopOnMouseEnter: true, stopOnInteraction: false })]}
        className='w-full max-w-xs'
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem className='basis-2/3' key={index}>
              <div className='p-1'>
                <Card>
                  <CardContent className='flex aspect-square items-center justify-center p-6'>
                    <span className='text-4xl font-semibold'>{index + 1}</span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CarouselPage
