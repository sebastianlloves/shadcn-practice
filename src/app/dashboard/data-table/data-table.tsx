'use client'

import { ColumnDef, flexRender, getCoreRowModel, useReactTable, getPaginationRowModel, getSortedRowModel, SortingState, ColumnFiltersState, getFilteredRowModel } from '@tanstack/react-table'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import EmailSearchInput from './emailSearchInput'
import StatusSelect from './statusSelect'
import AmountRange from './amountRange'
import { Payment } from '@/data/payments.data'

export interface DataTableProps< TValue> {
  columns: ColumnDef<Payment, TValue>[]
  data: Payment[]
}

export function DataTable<TValue> ({ columns, data }: DataTableProps< TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [filter, setFilter] = useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setFilter,
    state: {
      sorting,
      columnFilters: filter
    }
  })

  return (
    <div>
      <div className='flex items-center justify-between my-4'>
        <EmailSearchInput table={table} />
        <AmountRange table={table} />
        <StatusSelect table={table} />
      </div>

      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className='py-2' key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length
            ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && 'selected'}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              )
            : (
              <TableRow>
                <TableCell colSpan={columns.length} className='h-24 text-center'>
                  No results.
                </TableCell>
              </TableRow>
              )}
        </TableBody>
      </Table>

      <div className='flex justify-center items-center space-x-6 py-4'>
        <Button
          variant='secondary'
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >Anterior
        </Button>
        <p>{`Página ${table.getState().pagination.pageIndex + 1} de ${table.getPageCount()}`}</p>
        <Button
          variant='secondary'
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >Siguiente
        </Button>
      </div>
    </div>
  )
}
