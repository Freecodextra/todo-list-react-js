import React, { createContext, useEffect } from 'react'
import useLocalStorage from '../customHooks/useLocalStorage';

export const ThemeContext = createContext();
export const UpdateThemeContext = createContext();
function ThemeProvider({children}) {
    const [theme, setTheme] = useLocalStorage("theme","light");
    useEffect(() => {
        theme === "dark"
          ? document.body.classList.add("dark-theme")
          : document.body.classList.remove("dark-theme");
      }, [theme]);
  return (
    <ThemeContext.Provider value={theme}>
        <UpdateThemeContext.Provider value={setTheme}>
            {children}
        </UpdateThemeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;