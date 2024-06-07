'use client'

import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

function SonnerPage () {
  return (
    <div>
      <Button
        variant='outline'
        onClick={() => toast.success('Hola', {
          description: 'Proceso completado',
          style: {
            width: '600px'
          },
          duration: 5000,
          position: 'top-right',
          closeButton: true,
          invert: true
        })}
      >
        Show toast
      </Button>
    </div>
  )
}

export default SonnerPage
