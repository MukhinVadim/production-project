import { AppRouter } from "app/providers/router"
import { useTheme } from "shared/lib/theme-provider"
import classNames from "classnames"
import { Navbar } from "widgets/Navbar"
import './styles/index.scss'
import { Sidebar } from "widgets/Sidebar"

export const App: React.FC = () => {
  const {theme} = useTheme()
  const appClassNames = classNames('app', theme)

  return (
    <div className={appClassNames}>
      <Navbar/>
      <div className="content-page">
        <Sidebar/>
        <AppRouter/>
      </div>
    </div>
  ) 
}