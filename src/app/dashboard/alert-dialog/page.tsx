'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export default function AlertDialogDemo () {
  const [dialogOpen, setDialogOpen] = useState(false)

  return (
    <>
      <AlertDialog open={dialogOpen} onOpenChange={(open) => setDialogOpen(open)}>
        <Button variant='ghost' size='lg' onClick={() => setDialogOpen(!dialogOpen)}>Mostrar diálogo</Button>
        {/* <AlertDialogTrigger asChild>
      </AlertDialogTrigger> */}
        <AlertDialogContent onEscapeKeyDown={() => setDialogOpen(false)}>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              Hola!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => setDialogOpen(!dialogOpen)}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      <Button variant='ghost' size='lg' onClick={() => setDialogOpen(!dialogOpen)}>Mostrar diálogo</Button>
    </>
  )
}
