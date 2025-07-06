import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {

  const [isLogin, setIsLogin] = useState(false);
  
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  }

  return (
    <AuthContext.Provider value={{ isLogin, toggleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);