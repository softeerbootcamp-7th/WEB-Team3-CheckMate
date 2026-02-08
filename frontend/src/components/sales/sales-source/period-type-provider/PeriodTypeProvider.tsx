import { type PropsWithChildren, useMemo, useState } from 'react';

import {
  PERIOD_PRESET_KEYS,
  PERIOD_PRESETS,
  type PeriodType,
} from '@/constants/shared';

import { periodTypeContext } from './periodTypeInstance';

export const PeriodTypeProvider = ({ children }: PropsWithChildren) => {
  const [periodType, setPeriodType] = useState<
    PeriodType<typeof PERIOD_PRESET_KEYS.dayWeekMonth> | undefined
  >(PERIOD_PRESETS.dayWeekMonth.today);
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  const value = useMemo(
    () => ({
      periodType,
      startDate,
      endDate,
      setPeriodType,
      setStartDate,
      setEndDate,
    }),
    [periodType, startDate, endDate],
  );

  return (
    <periodTypeContext.Provider value={value}>
      {children}
    </periodTypeContext.Provider>
  );
};
