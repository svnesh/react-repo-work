import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-3 bg-gray-600 text-white">
      <NavLink to="/" className={({isActive}) => isActive ? "underline" : ""}>Products</NavLink>
      <NavLink to="/about" className={({isActive}) => isActive ? "underline" : ""}>About</NavLink>
    </nav>
  )
}

export default Navbar