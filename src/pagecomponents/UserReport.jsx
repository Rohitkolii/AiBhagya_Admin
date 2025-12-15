import React from 'react'
import Filters from '../components/Filters'
import Table from '../components/Table'

const UserReport = () => {
  return (
    <div>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">Users Report</h2>
      <Filters />
      <Table data={[]} columns={[]} />
    </div>
  )
}

export default UserReport
