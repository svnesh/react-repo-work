import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout