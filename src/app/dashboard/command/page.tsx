'use client'

import { CalendarIcon, EnvelopeClosedIcon, FaceIcon, GearIcon, PersonIcon, RocketIcon } from '@radix-ui/react-icons'
import { CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut } from '@/components/ui/command'
import { useEffect, useState } from 'react'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function CommandPage () {
  const [openDialog, setOpenDialog] = useState(true)

  useEffect(() => {
    const onDownKey = (e: KeyboardEvent) => {
      if (e.key === 'j' && e.ctrlKey) {
        e.preventDefault()
        setOpenDialog(prevValue => !prevValue)
      }
    }
    document.addEventListener('keydown', onDownKey)

    return () => {
      document.removeEventListener('keydown', onDownKey)
    }
  }, [])

  return (
    <div className='flex w-full h-[60vh] justify-center items-center'>
      <p className='text-sm text-muted-foreground'>
        Press{' '}
        <kbd className='pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 py-3'>
          <span className='text-md'>⌘</span>J
        </kbd>
      </p>
      <CommandDialog open={openDialog} onOpenChange={setOpenDialog}>
        <CommandInput placeholder='Type a command or search...' />
        <CommandList>
          {/* <ScrollArea scrollHideDelay={2000} className='h-44 w-full rounded-md border'> */}
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading='Suggestions'>
            <CommandItem>
              <CalendarIcon className='mr-2 h-4 w-4' />
              <span>Calendar</span>
            </CommandItem>
            <CommandItem>
              <FaceIcon className='mr-2 h-4 w-4' />
              <span>Search Emoji</span>
            </CommandItem>
            <CommandItem>
              <RocketIcon className='mr-2 h-4 w-4' />
              <span>Launch</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading='Settings'>
            <CommandItem>
              <PersonIcon className='mr-2 h-4 w-4' />
              <span>Profile</span>
              <CommandShortcut>⌘P</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className='mr-2 h-4 w-4' />
              <span>Mail</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <GearIcon className='mr-2 h-4 w-4' />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem>
          </CommandGroup>
          {/* </ScrollArea> */}
        </CommandList>
      </CommandDialog>
    </div>
  )
}
