import { cn } from '@/lib/utils'
import React from 'react'

function Skeleton ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-md bg-primary/10 w-full h-full', className)}
      {...props}
    />
  )
}

export { Skeleton }
