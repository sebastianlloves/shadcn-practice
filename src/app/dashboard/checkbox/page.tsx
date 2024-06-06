'use client'

import { Badge } from '@/components/ui/badge'
import { Checkbox } from '@/components/ui/checkbox'
import { useState } from 'react'

export default function CheckboxWithText () {
  const [terms, setTerms] = useState(false)

  return (
    <>
      <div className='items-top flex space-x-2'>
        <div className='grid gap-1.5 leading-none'>
          <Checkbox checked={terms} onCheckedChange={() => setTerms(!terms)} id='terms1' />
          <label
            htmlFor='terms1'
            className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Accept terms and conditions
          </label>
          <p className='text-sm text-muted-foreground'>
            You agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      {terms ? <Badge variant='success'>Aceptado</Badge> : <Badge variant='warning'>Sin aceptar</Badge>}
    </>
  )
}
