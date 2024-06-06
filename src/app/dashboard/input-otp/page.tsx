'use client'

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from '@/components/ui/input-otp'
import { useState } from 'react'

export default function InputOTPDemo () {
  const [value, setValue] = useState('')

  return (
    <div className='h-[300px] grid gap-4 place-content-center'>
      <InputOTP value={value} onChange={setValue} maxLength={9}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
        <InputOTPGroup>
          <InputOTPSlot index={6} />
          <InputOTPSlot index={7} />
          <InputOTPSlot index={8} />
        </InputOTPGroup>
      </InputOTP>

      <p className='text-center h-6'>{value}</p>
    </div>
  )
}
