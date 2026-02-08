import { PERIOD_PRESET_KEYS } from '@/constants/shared';
import { createPeriodTypeProvider } from '@/utils/shared';

const { periodTypeContext, usePeriodTypeContext } =
  createPeriodTypeProvider<typeof PERIOD_PRESET_KEYS.dayWeekMonth>();

export { periodTypeContext, usePeriodTypeContext };
