import React from 'react'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import { Toaster as SonnerToaster } from '@/components/ui/sonner'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Shadcn Practice',
  description: ''
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn(
        'min-h-screen bg-background font-sans antialiased',
        fontSans.variable
      )}
      >{children}
        <SonnerToaster gap={20} expand visibleToasts={2} position='top-center' theme='light' dir='rtl' offset='100px' />
      </body>
    </html>
  )
}
