import { Button } from '@/components/ui/button'
import { Payment } from '@/data/payments.data'
import { cn } from '@/lib/utils'
import { Column } from '@tanstack/react-table'
import { ArrowUpDown, ArrowUp } from 'lucide-react'

interface SortedColumnButtonProps {
  title: string,
  column: Column<Payment, unknown>
  className?: string
}

function SortedColumnButton ({ title, className, column }: SortedColumnButtonProps) {
  const handleOnClick = () => {
    console.log(column.getIsSorted())
    if (!column.getIsSorted()) column.toggleSorting(true)
    if (column.getIsSorted() === 'desc') column.toggleSorting(false)
    if (column.getIsSorted() === 'asc') column.clearSorting()
  }
  return (
    <Button variant='ghost' onClick={handleOnClick} className={cn('w-fit transition-all duration-500', className)}>
      {title}
      {!column.getIsSorted() ? <ArrowUpDown className='w-4 h-[15px] mx-4 opacity-50 p-[1px]' /> : <ArrowUp className={`w-4 h-[15px] mx-4 opacity-100 ${column.getIsSorted() === 'asc' ? '' : 'rotate-180'}`} />}
    </Button>
  )
}

export default SortedColumnButton
