import React from 'react'
import Filters from '../components/Filters'
import Table from '../components/Table'
import AddItemForm from './AddItemForm';

const ReportsCategory = () => {

  const columns = [
    { title: "ID", key: "id", sortable: true },
    { title: "Name", key: "name", sortable: true },
    { title: "Email", key: "email", sortable: true },
    { title: "Role", key: "role", sortable: true },
    {
      title: "Actions",
      render: (row) => (
        <div className="flex gap-2">
          <button className="px-3 py-1 text-xs text-white bg-primary rounded">
            Edit
          </button>
          <button className="px-3 py-1 text-xs bg-red-500 text-white rounded">
            Delete
          </button>
        </div>
      ),
    },
  ];

  const data = [
    { id: 1, name: "Rohit", email: "rohit@example.com", role: "Admin" },
    { id: 2, name: "Minzy", email: "minzy@example.com", role: "User" },
    { id: 3, name: "John", email: "john@example.com", role: "Moderator" },
    { id: 1, name: "Rohit", email: "rohit@example.com", role: "Admin" },
    { id: 2, name: "Minzy", email: "minzy@example.com", role: "User" },
    { id: 3, name: "John", email: "john@example.com", role: "Moderator" },
    { id: 1, name: "Rohit", email: "rohit@example.com", role: "Admin" },
    { id: 2, name: "Minzy", email: "minzy@example.com", role: "User" },
    { id: 3, name: "John", email: "john@example.com", role: "Moderator" },
    { id: 1, name: "Rohit", email: "rohit@example.com", role: "Admin" },
    { id: 2, name: "Minzy", email: "minzy@example.com", role: "User" },
    { id: 3, name: "John", email: "john@example.com", role: "Moderator" },
    { id: 1, name: "Rohit", email: "rohit@example.com", role: "Admin" },
    { id: 2, name: "Minzy", email: "minzy@example.com", role: "User" },
    { id: 3, name: "John", email: "john@example.com", role: "Moderator" },
    { id: 1, name: "Rohit", email: "rohit@example.com", role: "Admin" },
    { id: 2, name: "Minzy", email: "minzy@example.com", role: "User" },
    { id: 3, name: "John", email: "john@example.com", role: "Moderator" },
    { id: 1, name: "Rohit", email: "rohit@example.com", role: "Admin" },
    { id: 2, name: "Minzy", email: "minzy@example.com", role: "User" },
    { id: 3, name: "John", email: "john@example.com", role: "Moderator" },
  ];

  return (
    <div>
      <AddItemForm />
      <Filters data={data} />
      <Table columns={columns} data={data} />
    </div>
  )
}

export default ReportsCategory
