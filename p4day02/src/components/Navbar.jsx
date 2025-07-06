import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { isLogin, toggleLogin } = useAuth();
  return (
    <nav className="flex gap-4 p-3 bg-gray-600 text-white">
      <NavLink to="/products" className={({isActive}) => isActive ? "underline" : ""}>Products</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? "underline" : ""}>About</NavLink>
      {isLogin ? <NavLink to="/" onClick={toggleLogin}>Logout</NavLink> : ""}
    </nav>
  )
}

export default Navbar