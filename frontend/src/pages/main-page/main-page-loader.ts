import { redirect } from 'react-router-dom';

import type { QueryClient } from '@tanstack/react-query';

import { authOptions } from '@/services/auth/options';

export const mainPageLoader = (queryClient: QueryClient) => async () => {
  const data = await queryClient.ensureQueryData(authOptions.me).catch(() => {
    return null;
  });

  if (!data) {
    return redirect('/sign-in');
  }

  switch (data.onboardingStatus) {
    case 'NONE':
      return redirect('/onboarding/store');
    case 'REGISTERED_STORE':
      return redirect('/onboarding/pos');
  }
};
