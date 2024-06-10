'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu'
import { Payment } from '@/data/payments.data'
import { ColumnDef } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'
import SortedColumnButton from './sortedColumnButton'

const statusVariant: Record<Payment['status'], 'secondary' | 'success' | 'destructive' | 'outline'> = {
  pending: 'outline',
  processing: 'secondary',
  success: 'success',
  failed: 'destructive'
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'clientName',
    header: ({ column }) => <SortedColumnButton column={column} title='Client Name' />
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <SortedColumnButton column={column} title='Status' />,
    cell: ({ row }) => {
      const status: Payment['status'] = row.getValue('status')
      return (<Badge capitalize variant={statusVariant[status] ?? 'default'}>{status}</Badge>)
    }
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <SortedColumnButton
        column={column}
        title='Email'
      />)
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => <SortedColumnButton column={column} title='Amount' />,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)

      return (<div>{formatted}</div>)
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='w-8 h-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <MoreHorizontal className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel inset>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              inset onClick={() => {
                navigator.clipboard.writeText(row.original.id)
                toast('Action', {
                  position: 'top-right',
                  description: 'Id copiado',
                  duration: 3000
                })
              }}
            >
              Copiar ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem>Estado 1</DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem checked>Estado 2</DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }
  }
]
