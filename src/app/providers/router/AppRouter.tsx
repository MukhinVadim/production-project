import { routeConfig } from 'app/providers/router/routeConfig';
import { PagePreloader } from 'features/page-preloader';
import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const AppRouter: React.FC = () => (
  <Suspense fallback={<PagePreloader />}>
    <Routes>
      {routeConfig.map(({ path, element }) => (
        <Route
          key={path}
          path={path}
          element={<div className="page-wrapper">{element}</div>}
        />
      ))}
    </Routes>
  </Suspense>
);

export default AppRouter;
