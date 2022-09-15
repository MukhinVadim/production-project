import { ReactNode, useState } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

type ThemeProviderProps = {
  children: ReactNode;
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}