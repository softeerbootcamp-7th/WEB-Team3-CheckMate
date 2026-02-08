import { createContext, useContext } from 'react';

import type { PeriodPresetType, PeriodType } from '@/constants/shared';

interface PeriodTypeContextState<T extends PeriodPresetType> {
  periodType: PeriodType<T> | undefined;
  startDate?: Date;
  endDate?: Date;
}

interface PeriodTypeContextAction<T extends PeriodPresetType> {
  setPeriodType: (periodType: PeriodType<T> | undefined) => void;
  setStartDate: (date?: Date) => void;
  setEndDate: (date?: Date) => void;
}

export const createPeriodTypeProvider = <T extends PeriodPresetType>() => {
  const periodTypeContext = createContext<
    PeriodTypeContextState<T> & PeriodTypeContextAction<T>
  >({
    periodType: undefined,
    startDate: undefined,
    endDate: undefined,
    setPeriodType: () => {},
    setStartDate: () => {},
    setEndDate: () => {},
  });

  const usePeriodTypeContext = () => {
    const context = useContext(periodTypeContext);

    if (!context) {
      throw new Error('periodTypeContext not found');
    }

    return context as PeriodTypeContextState<T> & PeriodTypeContextAction<T>;
  };

  return {
    periodTypeContext,
    usePeriodTypeContext,
  } as const;
};
