import { NavLink } from "react-router-dom"
import { useTheme } from "../context/ThemeContext"

const Navbar = () => {

  const {theme, toggleTheme} = useTheme();

  return (
    <nav className="flex gap-4 p-4 bg-gray-200 dark:bg-gray-800 items-center">
      <NavLink to="/" className={({ isActive }) => isActive ? "font-bold underline" : "" }>Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/dashboard">Dashboard</NavLink>
      <button onClick={toggleTheme} className="text-sm font-semibold p-2 bg-amber-400 rounded-2xl">Toggle to {theme === 'light'? 'dark' : 'light'}</button>
    </nav>
  )
}

export default Navbar