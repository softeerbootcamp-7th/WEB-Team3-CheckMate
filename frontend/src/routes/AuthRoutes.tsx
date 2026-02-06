import type { RouteObject } from 'react-router-dom';

import { ROUTE_PATHS } from '@/constants/shared';
import { SignInPage } from '@/pages/sign-in-page';

export const authRoutes: RouteObject = {
  path: ROUTE_PATHS.SIGN_IN,
  Component: SignInPage,
};
