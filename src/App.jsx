import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import DashboardPage from './page/DashboardPage'
import Login from './page/Login'
import ReportsCategoryPage from './page/ReportsCategoryPage'
import ReportsPage from './page/ReportsPage'
import UserReportPage from './page/UserReportPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardPage />} />
        <Route path="/reports-categories" element={<ReportsCategoryPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/users-report" element={<UserReportPage />} />
      </Routes>
    </>
  )
}

export default App
