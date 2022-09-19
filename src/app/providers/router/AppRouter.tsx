import { routeConfig } from 'app/providers/router/routeConfig'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

const AppRouter: React.FC = () => {
    
  return (
      <Suspense fallback={<div>...loading</div>}>
          <Routes>
              {
                routeConfig.map(({path, element}) => (
                    <Route key={path} path={path} element={element} />
                ))
              }
          </Routes>
      </Suspense>
  )
}

export default AppRouter


