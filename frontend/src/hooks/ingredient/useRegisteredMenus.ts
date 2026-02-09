import { useQuery } from '@tanstack/react-query';

import { getRegisteredMenus, ingredientKeys } from '@/services/ingredient';

export const useRegisteredMenus = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ingredientKeys.registeredMenus(),
    queryFn: getRegisteredMenus,
  });
  return { data, isPending, error };
};
