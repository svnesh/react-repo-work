import { NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

const Navbar = () => {

  const navigate = useNavigate();
  const { isLoggedIn, isLogOut } = useAuth();

  const handleLogout = () => {
    isLogOut();
    navigate('/login');
  }

  return (
    <nav className="flex gap-6 p-3 bg-gray-600 text-white items-center justify-end">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/product">Product</NavLink>
      <button onClick={handleLogout} className={ isLoggedIn ? "p-2 bg-blue-400 rounded-2xl items-center w-30 cursor-pointer" : ""}>{isLoggedIn ? "Logout" : ""}</button>
    </nav>
  )
}

export default Navbar