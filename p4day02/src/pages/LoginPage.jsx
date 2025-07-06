import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom";
import {useAuth} from "../context/AuthContext"

const LoginPage = () => {

  const {isLogin, toggleLogin} = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log("submitted data: ", data);
    toggleLogin();
    navigate('/products');
  }

  return (
    <div className="flex h-screen">
    <div className="flex flex-col m-auto gap-4">
      <h2 className="text-2xl font-bold text-center text-gray-400">LOGIN FORM</h2>
      <form className="flex flex-col gap-4 items-center" action="" onSubmit={handleSubmit(onSubmit)}>

        <div className="flex items-center gap-4">
          <label htmlFor="email">Email</label>
          <input className="border border-gray-300 rounded-2xl p-1" type="email" 
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email format",
              }
            })} />
            {errors.email && <p className="text-sm text-red-400">{errors.email.message}</p>}
        </div>

        <div className="flex items-center gap-4">
          <label htmlFor="password">Password</label>
          <input className="border border-gray-300 rounded-2xl p-1" type="password"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Minium 6 characters"
              },
            })} />
            {errors.password && <p className="text-sm text-red-400">{errors.password.message}</p>}
        </div>

        <button className="w-25 h-10 items-center text-white font-medium bg-green-500 rounded-2xl cursor-pointer" type="submit">Login</button>

      </form>
    </div>
    </div>
  )
}

export default LoginPage