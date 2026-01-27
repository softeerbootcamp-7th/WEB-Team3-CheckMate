import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { rootRouter } from './RootRouter';

const router = createBrowserRouter([rootRouter]);

export const PageRouter = () => {
  return <RouterProvider router={router} />;
};
