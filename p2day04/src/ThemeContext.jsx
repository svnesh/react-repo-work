import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {

  const [theme, setTheme] = useState('light');

  //Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme) setTheme(savedTheme);
  }, [])

  //set theme
  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme]);

  const toggleTheme = () => {
    setTheme((t) => t === 'light' ? 'dark' : 'light');
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? "dark bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

//Custom hook
export function useTheme(){
  return useContext(ThemeContext);
}