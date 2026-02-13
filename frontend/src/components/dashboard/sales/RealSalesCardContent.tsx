import { useMemo } from 'react';

import {
  DASHBOARD_METRIC_CARDS,
  type DASHBOARD_METRICS,
  type ExtractCardCodes,
} from '@/constants/dashboard';
import type { GetRealTimeSalesResponseDto } from '@/types/sales';
import { getMetricTrend } from '@/utils/dashboard/getMetricTrend';
import { getPeriodComparisonMessage } from '@/utils/sales';
import type { Nullable } from '@/utils/shared';

import { CurrentSalesContent } from './CurrentSalesContent';

type RealSalesCardCodes = ExtractCardCodes<
  typeof DASHBOARD_METRICS.SALES.sections.CURRENT_SALES.items.REAL_SALES
>;

const unit = '원';
const EXAMPLE_AMOUNT = 256000;
const EXAMPLE_CHANGE_RATE = 5;
const EXAMPLE_HAS_PREVIOUS_DATA = true;

interface RealSalesCardContentProps extends Nullable<GetRealTimeSalesResponseDto> {
  cardCode: RealSalesCardCodes;
  className?: string;
}

export const RealSalesCardContent = ({
  cardCode,
  netAmount = EXAMPLE_AMOUNT,
  changeRate = EXAMPLE_CHANGE_RATE,
  hasPreviousData = EXAMPLE_HAS_PREVIOUS_DATA,
  className,
}: RealSalesCardContentProps) => {
  const periodType = DASHBOARD_METRIC_CARDS[cardCode].period;

  const comparisonMessage = useMemo(() => {
    return getPeriodComparisonMessage(periodType);
  }, [periodType]);

  const changeRateMessage = useMemo(() => {
    if (!hasPreviousData) {
      return `${changeRate}%`;
    }
    return `동요일 대비 ${changeRate}%`;
  }, [changeRate, hasPreviousData]);

  const metricTrend = getMetricTrend(changeRate);

  return (
    <CurrentSalesContent className={className}>
      <CurrentSalesContent.TrendBadge trend={metricTrend} />
      <CurrentSalesContent.Amount amount={netAmount} unit={unit} />
      <CurrentSalesContent.ComparisonMessage
        comparisonMessage={comparisonMessage}
        changeRateMessage={changeRateMessage}
        metricTrend={metricTrend}
      />
    </CurrentSalesContent>
  );
};
