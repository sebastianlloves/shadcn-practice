'use client'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  ColumnFiltersState,
  getFilteredRowModel,
  VisibilityState,
  RowSelectionState,
} from '@tanstack/react-table'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import EmailSearchInput from './filters/emailSearchInput'
import StatusSelect from './filters/statusSelect'
import AmountRange from './filters/amountRange'
import { Payment } from '@/data/payments.data'
import ColumnsVisibility from './filters/columnsVisibility'
import {
  Select,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'

export interface DataTableProps<TValue> {
  columns: ColumnDef<Payment, TValue>[]
  data: Payment[]
}

export function DataTable<TValue>({ columns, data }: DataTableProps<TValue>) {
  const [sorting, setSorting] = useState<SortingState>([])
  const [filter, setFilter] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    select: false,
  })
  const [selectedRows, setSelectedRows] = useState<RowSelectionState>({})

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onSortingChange: setSorting,
    onColumnFiltersChange: setFilter,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setSelectedRows,
    state: {
      sorting,
      columnFilters: filter,
      columnVisibility,
      rowSelection: selectedRows,
    },
    debugTable: true,
  })

  // console.log(table.getFilteredSelectedRowModel().rows.map(row => row.original.clientName))

  return (
    <div>
      <div className='flex items-center justify-between my-4'>
        <ColumnsVisibility table={table} />
        <AmountRange table={table} />
        <StatusSelect table={table} />
        <EmailSearchInput table={table} />
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
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className='h-24 text-center'>
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className='flex justify-between items-center py-4 px-2'>
        {table.getColumn('select')?.getIsVisible() && (
          <p className='text-muted-foreground text-center'>{`${
            table.getFilteredSelectedRowModel().rows.length
          } seleccionados de ${table.getFilteredRowModel().rows.length}`}</p>
        )}
        <div className='flex justify-center items-center space-x-6'>
          <Button
            variant='secondary'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}>
            Anterior
          </Button>
          <p>{`Página ${
            table.getState().pagination.pageIndex + 1
          } de ${table.getPageCount()}`}</p>
          <Button
            variant='secondary'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}>
            Siguiente
          </Button>
        </div>
        <div>
          <Select onValueChange={(value) => table.setPageSize(Number(value))}>
            <SelectTrigger className='w-max space-x-2'>
              <SelectValue placeholder='Cantidad filas' />
            </SelectTrigger>
            <SelectContent align='end' side='top'>
              <SelectGroup>
                <SelectLabel>Cantidad de filas por página</SelectLabel>
                <SelectItem value='25'>25</SelectItem>
                <SelectItem value='50'>50</SelectItem>
                <SelectItem value='75'>75</SelectItem>
                <SelectItem value='100'>100</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  )
}
