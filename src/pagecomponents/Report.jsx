import Filters from '../components/Filters'
import Table from '../components/Table'
import AddReport from './AddReport'

const Report = () => {
  return (
    <div>
      <AddReport />
      <Filters />
      <Table data={[]} columns={[]} />
    </div>
  )
}

export default Report
