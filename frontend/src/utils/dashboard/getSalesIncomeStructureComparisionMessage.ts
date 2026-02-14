import { PERIOD_PRESETS } from '@/constants/shared';
import type { SalesIncomeStructureInsight } from '@/types/sales/salesIncomeStructureInsight';

import { formatNumber, type ValueOf } from '../shared';

const createMessageToken = (text: string, isHighlight?: boolean) => {
  return {
    text,
    isHighlight,
  };
};

interface GetSalesIncomeStructureComparisionMessageArgs extends Omit<
  SalesIncomeStructureInsight,
  'showDeltaText' | 'showFocusText'
> {
  periodType: ValueOf<typeof PERIOD_PRESETS.dayWeekMonth>;
}

interface GetSalesIncomeStructureComparisionMessageResult {
  text: string;
  isHighlight?: boolean;
}

const DELTA_SHARE_THRESHOLD = 3;

export const getSalesIncomeStructureComparisionMessage = ({
  periodType,
  topType,
  topShare,
  deltaShare,
}: GetSalesIncomeStructureComparisionMessageArgs): GetSalesIncomeStructureComparisionMessageResult[] => {
  if (
    periodType === PERIOD_PRESETS.dayWeekMonth.today &&
    Math.abs(deltaShare) >= DELTA_SHARE_THRESHOLD
  ) {
    return [
      createMessageToken('최근 7일 대비 '),
      createMessageToken(
        `${topType} 비중이 ${deltaShare >= 0 ? '+' : '-'}${formatNumber(deltaShare)}%p `,
        true,
      ),
      createMessageToken('변했어요.'),
    ];
  }

  if (topShare >= 60) {
    return [
      createMessageToken('매출이 '),
      createMessageToken(`${topType}(${formatNumber(topShare)}%)`, true),
      createMessageToken('에 집중돼 있어요.'),
    ];
  }

  return [
    createMessageToken(`${topType}(${formatNumber(topShare)}%) `, true),
    createMessageToken('매출이 가장 많아요.'),
  ];
};
