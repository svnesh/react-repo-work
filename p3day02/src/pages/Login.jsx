import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"

const Login = () => {

  const {logIn} = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    logIn();
    navigate('/dashboard');
  }

  return (
    <div className="p-6 max-w-md mx-auto gap-10">
      <h2>Login Page</h2>
      <button className="text-xl font-medium bg-violet-300 rounded-2xl p-1 cursor-pointer" onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login