import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Slider } from '@/components/ui/slider'
import { Payment } from '@/data/payments.data'
import { CaretSortIcon } from '@radix-ui/react-icons'
import { Table } from '@tanstack/react-table'
import { useState } from 'react'

interface AmountRangeProps {
  table: Table<Payment>
}

function AmountRange ({ table } : AmountRangeProps) {
  const maxAmount = table.getCoreRowModel().rows.reduce((acc, newValue) => newValue.original.amount > acc ? newValue.original.amount : acc, 0)
  const minAmount = table.getCoreRowModel().rows.reduce((acc, newValue) => newValue.original.amount < acc ? newValue.original.amount : acc, maxAmount)
  const [amountRange, setAmountRange] = useState([minAmount, maxAmount])
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='font-normal'>Amount range<CaretSortIcon className='ml-2 h-4 w-4 opacity-50' /></Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' className='p-3 flex justify-between space-x-2'>
        <span className='w-16 font-light text-sm text-center'>{`$ ${amountRange[0].toFixed(2)}`}</span>
        <Slider
          defaultValue={amountRange}
          onValueChange={(value) => {
            setAmountRange(value)
            table.getColumn('amount')?.setFilterValue(value)
          }}
          max={maxAmount}
          step={0.01}
          className='w-80'
          color='bg-primary'
        />
        <span className='w-16 font-light text-sm text-center'>{`$ ${amountRange[1].toFixed(2)}`}</span>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AmountRange
