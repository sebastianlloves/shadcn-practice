import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Payment, statuses } from '@/data/payments.data'
import { Table } from '@tanstack/react-table'

interface StatusSelectProps {
  table: Table<Payment>
}

function StatusSelect ({ table } : StatusSelectProps) {
  const selectOptions : Array<Payment['status'] | 'all'> = [...statuses, 'all']
  return (
    <Select
      onValueChange={(value : typeof selectOptions[number] | '') => {
        table.getColumn('status')?.setFilterValue(value === 'all' || value === '' ? '' : value)
      }}
    >
      <SelectTrigger className='max-w-36'>
        <SelectValue placeholder='Select status' />
      </SelectTrigger>
      <SelectContent>
        {selectOptions.map(statusValue => (
          <SelectItem key={statusValue} value={statusValue}><p className='capitalize'>{statusValue}</p></SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}

export default StatusSelect
