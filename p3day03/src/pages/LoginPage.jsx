import { useNavigate } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

const LoginPage = () => {

  const navigate = useNavigate();
  const { isLogIn } = useAuth()

  const handleLogin = () => {
    isLogIn();
    navigate('/home');
  }

  return (
    <div className="flex flex-col">
      <div>
        <h2>Login Page</h2>
        <button className="p-2 bg-blue-400 rounded-2xl items-center w-30 cursor-pointer mt-3" onClick={handleLogin}>Login</button>
      </div>
    </div>
  )
}

export default LoginPage