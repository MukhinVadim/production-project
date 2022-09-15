import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { AboutAsync } from "./pages/About"
import { MainAsync } from "./pages/Main"
import './styles/index.scss'
import { useTheme } from "./theme/useTheme"



export const App: React.FC = () => {
  const {theme, toggleTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>
      <Link to={'/about'}>about</Link>
      <Link to={'/'}>main</Link>
      <button onClick={toggleTheme}>{theme}</button>
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
              <Route path={'/about'} element={<AboutAsync/>}/>
              <Route path={'/'} element={<MainAsync/>}/>
          </Routes>
        </Suspense>
    </div>
  ) 
}