import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Payment } from '@/data/payments.data'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'

interface ColumnsVisibilityProps {
  table: Table<Payment>
}

function ColumnsVisibility ({ table } : ColumnsVisibilityProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='font-normal'>Columns<CaretSortIcon className='ml-2 h-4 w-4 opacity-50' /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='start'>
        {
              table.getAllColumns().filter(column => column.getCanHide()).map(column => (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  checked={column.getIsVisible()}
                  onCheckedChange={(value) => column.toggleVisibility(Boolean(value))}
                  className='capitalize'
                >
                  {column.id}
                </DropdownMenuCheckboxItem>
              ))
            }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ColumnsVisibility
