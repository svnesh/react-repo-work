import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="flex flex-col mb-4">
      <Navbar />
      <main className="p-6">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout