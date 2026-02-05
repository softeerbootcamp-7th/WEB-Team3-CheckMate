import { queryOptions } from '@tanstack/react-query';

import { getAuthMe } from './get';
import { authKeys } from './keys';

export const authOptions = {
  status: queryOptions({
    queryKey: authKeys.status(),
    queryFn: getAuthMe,
  }),
};
