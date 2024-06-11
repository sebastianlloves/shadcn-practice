import { Input } from '@/components/ui/input'
import { Payment } from '@/data/payments.data'
import { Table } from '@tanstack/react-table'

interface EmailSearchInputProps {
  table: Table<Payment>
}

function EmailSearchInput ({ table } : EmailSearchInputProps) {
  return (
    <Input
      placeholder='Search by Email'
      value={table.getColumn('E-mail')?.getFilterValue() as string ?? ''}
      onChange={(e) => table.getColumn('E-mail')?.setFilterValue(e.target.value)}
      className='max-w-sm'
    />
  )
}

export default EmailSearchInput
