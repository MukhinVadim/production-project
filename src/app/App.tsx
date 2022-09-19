import { AppRouter } from "app/providers/router"
import { useTheme } from "app/providers/theme-provider"
import classNames from "classnames"
import { Link } from "react-router-dom"
import './styles/index.scss'

export const App: React.FC = () => {
  const {theme, toggleTheme} = useTheme()
  const appClassNames = classNames('app', theme)

  return (
    <div className={appClassNames}>
      <Link to={'/about'}>about</Link>
      <Link to={'/'}>main</Link>
      <button onClick={toggleTheme}>{theme}</button>
      <AppRouter/>
    </div>
  ) 
}