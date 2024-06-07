'use client'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet'
import { useState } from 'react'

const SHEET_SIDES = ['top', 'right', 'bottom', 'left'] as const

export default function SheetPage () {
  const [open, setOpen] = useState(false)

  return (
    <div className='grid grid-cols-2 gap-6'>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant='outline'>Open</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Button onClick={() => setOpen(true)}>Open manually</Button>

      <div className='col-span-2 grid grid-cols-2 gap-6'>
        {
          SHEET_SIDES.map(side => (
            <Sheet key={side}>
              <SheetTrigger asChild>
                <Button variant='outline'>{side}</Button>
              </SheetTrigger>
              <SheetContent side={side}>
                <SheetHeader>
                  <SheetTitle>Are you absolutely sure?</SheetTitle>
                  <SheetDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          ))
        }

      </div>
    </div>
  )
}
