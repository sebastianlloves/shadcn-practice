import { payments } from '@/data/payments.data'
import { DataTable } from './data-table'
import { columns } from './columns'

async function getData () {
  await new Promise(resolve => setTimeout(resolve, 2000))
  return payments
}

async function DataTablePage () {
  const data = await getData()

  return (
    <div>
      <DataTable data={data} columns={columns} />
    </div>
  )
}

export default DataTablePage
