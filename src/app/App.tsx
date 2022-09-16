import classNames from "classnames"
import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import { AboutAsync } from "pages/AboutPage"
import { MainAsync } from "pages/MainPage"
import './styles/index.scss'
import { useTheme } from "app/providers/ThemeProvider"

export const App: React.FC = () => {
  const {theme, toggleTheme} = useTheme()
  const appClassNames = classNames('app', theme)

  return (
    <div className={appClassNames}>
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