import { NavLink, Outlet } from "react-router-dom"

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-200 p-6 space-y-4">
        <h2 className="text-xl font-bold mb-3">Dashboard</h2>
        <nav className="flex flex-col gap-2">
          <NavLink to="/dashboard" end className="text-blue-600">Home</NavLink>
          <NavLink to="settings" className="text-blue-600">Settings</NavLink>
          <NavLink to="billing" className="text-blue-600">Billing</NavLink>
          <NavLink to="notifications" className="text-blue-600">Notifications</NavLink>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-white text-black">
        <Outlet />
      </main>
    </div>
  )
}

export default DashboardLayout