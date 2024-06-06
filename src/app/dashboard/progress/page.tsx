'use client'

import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { useEffect, useState } from 'react'
import { setInterval } from 'timers'

export default function ProgressPage () {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prevProgress => {
        if (prevProgress >= 100) {
          clearInterval(interval)
          return prevProgress
        }
        return prevProgress + 1
      })
    }, 50)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='grid gap-8'>
      <Progress value={progress} className='w-full' />
      <Button variant='outline' onClick={() => setProgress(0)} className='w-52 mx-auto'>Reiniciar barra de progreso</Button>
    </div>
  )
}
