import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const Navbar = () => {

    const { isLoggedIn, logIn, logOut } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
      if(isLoggedIn){
        logOut();
        navigate('/login');
      }
    }

  return (
    <nav className="flex gap-4 p-3 bg-gray-200 items-center">
      <NavLink to="/dashboard">Dashboard</NavLink>
      <NavLink to="/about">About</NavLink>
      <button className={isLoggedIn ? "text-sm font-semibold bg-violet-300 rounded-2xl p-2 cursor-pointer": ""} onClick={handleLogout}>{isLoggedIn ? 'LogOut' : ''}</button>
    </nav>
  )
}

export default Navbar