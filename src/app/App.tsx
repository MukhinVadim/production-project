import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme-provider"
import classNames from "classnames"
import { Navbar } from "widgets/Navbar"
import './styles/index.scss'

export const App: React.FC = () => {
  const {theme, toggleTheme} = useTheme()
  const appClassNames = classNames('app', theme)

  return (
    <div className={appClassNames}>
      <Navbar/>
      <button onClick={toggleTheme}>{theme}</button>
      <AppRouter/>
    </div>
  ) 
}