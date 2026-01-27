import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { rootRoutes } from './RootRouteS';

const router = createBrowserRouter([rootRoutes]);

export const PageRouter = () => {
  return <RouterProvider router={router} />;
};
