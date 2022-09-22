import { AppRouter } from "app/providers/router"
import { useTheme } from "shared/lib/theme-provider"
import classNames from "classnames"
import { Navbar } from "widgets/Navbar"
import './styles/index.scss'

export const App: React.FC = () => {
  const {theme} = useTheme()
  const appClassNames = classNames('app', theme)

  return (
    <div className={appClassNames}>
      <Navbar/>
      <AppRouter/>
    </div>
  ) 
}