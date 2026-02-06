import { Navigate, type RouteObject } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/shared';
import { StoreRegisterPage } from '@/pages/onboarding/store-register-page';

export const onboardingRoutes: RouteObject = {
  path: ROUTE_PATHS.ONBOARDING.BASE,
  children: [
    {
      index: true,
      element: <Navigate to={ROUTE_PATHS.ONBOARDING.STORE} replace />,
    },
    {
      path: ROUTE_PATHS.ONBOARDING.STORE,
      Component: StoreRegisterPage,
    },
    {
      path: ROUTE_PATHS.ONBOARDING.POS,
    },
  ],
};
