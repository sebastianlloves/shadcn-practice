'use client'

import { Calendar } from '@/components/ui/calendar'
import { useState } from 'react'

export default function BadgePage () {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [multipleDate, setMultipleDate] = useState<Date[] | undefined>([])
  const showedDate = date?.toLocaleDateString('es-Es', { day: 'numeric', weekday: 'long', month: 'long', year: 'numeric' })

  return (
    <div>
      <div className='flex space-x-6'>
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          className='rounded-md border'
        />
        <Calendar
          mode='single'
          selected={date}
          onSelect={setDate}
          disabled={(date) => date > new Date() || date < new Date('06/04/2024')}
          className='rounded-md border'
        />
        <Calendar
          mode='multiple'
          selected={multipleDate}
          onSelect={setMultipleDate}
          className='rounded-md border'
        />
      </div>
      <div>
        <p>{`Fecha: ${showedDate}`}</p>
      </div>
    </div>
  )
}
