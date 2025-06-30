import { createContext, useContext, useState } from "react"


const AuthContext = createContext();

export function AuthProvider({ children }){

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isLogIn = () => setIsLoggedIn(true);
  const isLogOut = () => setIsLoggedIn(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLogIn, isLogOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;