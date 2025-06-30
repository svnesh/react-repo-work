import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex gap-4 p-3 bg-gray-300 text-white">
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/About">About</NavLink>
      <NavLink to="/product">Product</NavLink>
    </nav>
  )
}

export default Navbar