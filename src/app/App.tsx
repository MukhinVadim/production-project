import { AppRouter } from "app/providers/router"
import { useTheme } from "shared/lib/theme-provider"
import classNames from "classnames"
import { Navbar } from "widgets/Navbar"
import './styles/index.scss'
import { Sidebar } from "widgets/Sidebar"
import { Suspense } from "react"
import { useTranslation } from "react-i18next"

export const App: React.FC = () => {
  const {theme} = useTheme()
  const appClassNames = classNames('app', theme)

  return (
    <div className={appClassNames}>
      <Suspense fallback="">
        <Navbar/>
        <div className="content-page">
          <Sidebar/>
          <AppRouter/>
        </div>
      </Suspense>
    </div>
  ) 
}