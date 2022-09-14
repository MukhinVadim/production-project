import { Suspense } from "react"
import { Link, Route, Routes } from "react-router-dom"
import './index.scss'
import { AboutAsync } from "./pages/About"
import { MainAsync } from "./pages/Main"

export const App: React.FC = () => {
  return (
    <div className="app">
      <Link to={'/about'}>about</Link>
      <Link to={'/'}>main</Link>
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
              <Route path={'/about'} element={<AboutAsync/>}/>
              <Route path={'/'} element={<MainAsync/>}/>
          </Routes>
        </Suspense>
    </div>
  ) 
}