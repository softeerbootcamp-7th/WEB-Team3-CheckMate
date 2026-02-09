import { useEffect } from 'react';
import type { UseFormReturn } from 'react-hook-form';

import { STORE_REGISTER_FORM_FIELD } from '@/constants/onboarding/store-register';
import type { StoreRegisterForm } from '@/types/onboarding/store-register';
import type { BusinessHour } from '@/types/shared';

interface UseInitializeBusinessHoursParams {
  methods: UseFormReturn<StoreRegisterForm>;
  storeBusinessHours: BusinessHour[];
}
// 매장 영업시간 시간 초기화 로직 구현
export const useInitializeBusinessHours = ({
  methods,
  storeBusinessHours,
}: UseInitializeBusinessHoursParams) => {
  // 서버값으로 RHF 폼 값을 초기화(덮어쓰기)
  useEffect(() => {
    if (!storeBusinessHours) {
      return;
    }
    methods.setValue(
      STORE_REGISTER_FORM_FIELD.BUSINESS_HOURS,
      storeBusinessHours,
    );
  }, [storeBusinessHours, methods]);
};
