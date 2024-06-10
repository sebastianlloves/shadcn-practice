'use client'

import { Badge } from '@/components/ui/badge'
import { Payment } from '@/data/payments.data'
import { ColumnDef } from '@tanstack/react-table'

const statusVariant: Record<Payment['status'], 'secondary' | 'success' | 'destructive' | 'outline'> = {
  pending: 'outline',
  processing: 'secondary',
  success: 'success',
  failed: 'destructive'
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'clientName',
    header: 'Client Name'
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status: Payment['status'] = row.getValue('status')
      return (<Badge capitalize variant={statusVariant[status] ?? 'default'}>{status}</Badge>)
    }
  },
  {
    accessorKey: 'email',
    header: 'Email'
  },
  {
    accessorKey: 'amount',
    header: () => (<div className='text-left'>Amount</div>),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('amount'))
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
      }).format(amount)

      return (<div>{formatted}</div>)
    }
  }
]
