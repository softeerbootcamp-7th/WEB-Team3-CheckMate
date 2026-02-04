import { SALES_SOURCE_COLORS } from '@/constants/sales';
import type { DoughnutChartItem } from '@/types/shared';

export const SALES_SOURCE_DATA: DoughnutChartItem[] = [
  {
    percentage: 40,
    label: 'A',
    color: SALES_SOURCE_COLORS.PAYMENT_METHOD.CARD,
  },
  {
    percentage: 20,
    label: 'B',
    color: SALES_SOURCE_COLORS.PAYMENT_METHOD.CASH,
  },
  {
    percentage: 15,
    label: 'C',
    color: SALES_SOURCE_COLORS.PAYMENT_METHOD.MOBILE,
  },
  {
    percentage: 25,
    label: 'D',
    color: SALES_SOURCE_COLORS.PAYMENT_METHOD.ETC,
  },
];
