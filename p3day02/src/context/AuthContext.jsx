import { createContext, useContext, useState } from "react";

const AuthContent = createContext();

export function AuthProvider({ children }) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const logIn = () => setIsLoggedIn(true);
  const logOut = () => setIsLoggedIn(false);

  return (
  <AuthContent.Provider value={{ isLoggedIn, logIn, logOut }}>
    {children}
  </AuthContent.Provider>
  )
}

export const useAuth = () => useContext(AuthContent);