import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { NotFoundPage } from 'pages/not-found-page';
import { RouteProps } from 'react-router-dom';
import { AppRoutes } from 'shared/config/paths';

export const routeConfig: Array<RouteProps> = [
  {
    path: AppRoutes.MAIN,
    element: <MainPage />,
  },
  {
    path: AppRoutes.ABOUT,
    element: <AboutPage />,
  },
  {
    path: AppRoutes.NOT_FOUND,
    element: <NotFoundPage />,
  },
];
