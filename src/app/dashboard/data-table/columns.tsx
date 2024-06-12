'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuCheckboxItem } from '@/components/ui/dropdown-menu'
import { Payment } from '@/data/payments.data'
import { ColumnDef, FilterFn, Row } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react'
import { toast } from 'sonner'
import SortedColumnButton from './sortedColumnButton'
import { Checkbox } from '@/components/ui/checkbox'

const statusVariant: Record<Payment['status'], 'secondary' | 'success' | 'destructive' | 'outline'> = {
  pending: 'outline',
  processing: 'secondary',
  success: 'success',
  failed: 'destructive'
}

const myCustomFilterFn: FilterFn<Payment> = (row: Row<Payment>, columnId: string, filterValue: string | number[], addMeta: (meta: any) => void) => {
  const { amount, clientName, email, status } = row.original
  console.log(filterValue)
  if (typeof (filterValue) === 'object') return filterValue[0] <= amount && filterValue[1] >= amount

  const words = filterValue.trim().split(' ')
  console.log(words)
  return words.every(word => {
    if (parseFloat(word)) return amount === parseFloat(word) || Math.floor(amount) === parseInt(word)

    return clientName.toLowerCase().includes(word.toLowerCase()) || email.toLowerCase().includes(word.toLowerCase()) || status.toLowerCase().includes(word.toLowerCase())
  })
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllRowsSelected() || (table.getIsSomeRowsSelected() && 'indeterminate')}
        onCheckedChange={(value) => table.toggleAllRowsSelected(Boolean(value))}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(Boolean(value))}
        aria-label='Select row'
      />
    )
  },
  {
    accessorKey: 'clientName',
    id: 'Client Name',
    header: ({ column }) => <SortedColumnButton column={column} title='Client Name' />,
    enableHiding: false
  },
  {
    accessorKey: 'status',
    header: ({ column }) => <SortedColumnButton column={column} title='Status' />,
    cell: ({ row }) => {
      const status: Payment['status'] = row.getValue('status')
      return (<Badge capitalize variant={statusVariant[status] ?? 'default'} className='mx-auto'>{status}</Badge>)
    },
    filterFn: myCustomFilterFn
  },
  {
    accessorKey: 'email',
    id: 'E-mail',
    header: ({ column }) => (
      <SortedColumnButton
        column={column}
        title='Email'
      />
    ),
    filterFn: myCustomFilterFn
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
    },
    filterFn: myCustomFilterFn
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
