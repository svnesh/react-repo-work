import { Route, Routes } from 'react-router-dom'
import './App.css'
import DashboardLayout from './components/DashboardLayout'
import Home from './pages/dashboard/Home'
import Settings from './pages/dashboard/Settings'
import Billing from './pages/dashboard/Billing'
import Notifications from './pages/dashboard/Notifications'

function App() {
  return (
    <Routes>
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path='settings' element={<Settings />} />
        <Route path='billing' element={<Billing />} />
        <Route path='notifications' element={<Notifications />} />
      </Route>
    </Routes>
  )
}

export default App
