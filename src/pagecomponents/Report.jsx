import { useEffect, useState } from 'react'
import Filters from '../components/Filters'
import Table from '../components/Table'
import { GetReports } from '../utils/api'
import AddReport from './AddReport'

const Report = () => {
  const [reportsdata, setReportsData] = useState([])

  const FetchReports = async () => {
    try {
      const response = await GetReports()
      if(true){
        setReportsData(response?.data)
      }
    } catch (error) {
      console.error("Error in fetching Reports: ", error );
    }
  }

  useEffect(()=> {
    FetchReports()
  }, [])

  const columns = [
    { title: "ID", key: "id", sortable: true },
    { title: "Report Category", key: "report_category_name", sortable: true },
    { title: "Title", key: "title", sortable: true },
    { title: "Desc", key: "description", sortable: true },
    {
      title: "Created On",
      key: "created_on",
      sortable: true,
      render: (row) => {
        return new Date(row.created_on).toLocaleDateString("en-IN");
      },
    },
    {
      title: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <button onClick={()=> FetchSingleReportCategory(row?.id)} className="px-3 py-1 text-xs text-white bg-primary rounded">
            Edit
          </button>
          <button className="px-3 py-1 text-xs bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div>
      <AddReport />
      <Filters />
      <Table data={reportsdata} columns={columns} />
    </div>
  )
}

export default Report
