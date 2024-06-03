'use client'

import { Button } from '@/components/ui/button'
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CopyIcon } from '@radix-ui/react-icons'

export default function DialogDemo () {
  const link = 'https://ui.shadcn.com/docs/installation'

  return (
    <div className='flex gap-3 items-center'>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant='secondary'>Share</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-[425px]'>
          <DialogHeader>
            <DialogTitle>Share link</DialogTitle>
            <DialogDescription>
              Anyone who has this link will be able to view this.
            </DialogDescription>
          </DialogHeader>
          <div className='grid gap-4 py-4'>
            <div className='grid grid-cols-6 items-center gap-4'>
              <Label htmlFor='link' className='sr-only'>Link</Label>
              <Input id='link' defaultValue={link} readOnly className='col-span-5' />

              <span className='sr-only'>Copy</span>
              <Button type='submit' onClick={() => navigator.clipboard.writeText(link)}><CopyIcon /></Button>
            </div>
          </div>
          <DialogFooter className='sm:justify-start'>
            <DialogClose asChild>
              <Button type='button' variant='secondary'>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog>
        <ContextMenu>
          <ContextMenuTrigger>Right click</ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem>Open</ContextMenuItem>
            <ContextMenuItem>Download</ContextMenuItem>
            <DialogTrigger asChild>
              <ContextMenuItem>
                <span>Delete</span>
              </ContextMenuItem>
            </DialogTrigger>
          </ContextMenuContent>
        </ContextMenu>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. Are you sure you want to permanently
              delete this file from our servers?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type='submit'>Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
