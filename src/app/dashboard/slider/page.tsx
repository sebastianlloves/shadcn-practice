'use client'

import { Slider } from '@/components/ui/slider'
import { useState } from 'react'

export default function SliderDemo () {
  const [value, setValue] = useState([1, 10])

  return (
    <div className='grid gap-32'>
      <Slider
        defaultValue={[50]}
        max={100}
        step={1}
        color='bg-sky-800'
      />
      <div className='flex justify-between gap-x-3'>
        <span>{value[0]}</span>
        <Slider
          defaultValue={value}
          onValueChange={setValue}
          max={10}
          step={1}
          color='bg-sky-800'
        />
        <span>{value[1]}</span>
      </div>
      <p className='w-full'>{`Rango seleccionado: entre ${value[0]} y ${value[1]}`}</p>
    </div>
  )
}
