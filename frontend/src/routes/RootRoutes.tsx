import { Navigate, Outlet, type RouteObject } from 'react-router-dom';

import { mainPageRoutes } from './mainPageRoutes';
import { signInRoutes } from './signInRoutes';

export const rootRoutes: RouteObject = {
  path: '/',
  element: <Outlet />,
  children: [
    {
      index: true,
      element: <Navigate to="/sign-in" replace />,
    },
    mainPageRoutes,
    signInRoutes,
    {
      path: '*',
      element: <Navigate to="/dashboard" replace />,
    },
  ],
};
