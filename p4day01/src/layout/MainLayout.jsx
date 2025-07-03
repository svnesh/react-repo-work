import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="min-w-md m-auto">
      <Navbar />
      <main className="ml-6 mr-6">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout