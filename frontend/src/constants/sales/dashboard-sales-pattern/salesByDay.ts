import type { SalesByDayItem } from '@/types/sales';

export const SALES_BY_DAY = {
  EXAMPLE_TOP_DAY: '금',
  EXAMPLE_IS_SIGNIFICANT: false,
  EXAMPLE_SALES_BY_DAY_ITEMS: [
    {
      day: '월',
      avgNetAmount: 820000,
      orderCount: 86,
    },
    {
      day: '화',
      avgNetAmount: 790000,
      orderCount: 82,
    },
    {
      day: '수',
      avgNetAmount: 880000,
      orderCount: 91,
    },
    {
      day: '목',
      avgNetAmount: 940000,
      orderCount: 97,
    },
    {
      day: '금',
      avgNetAmount: 1320000,
      orderCount: 141,
    },
    {
      day: '토',
      avgNetAmount: 1110000,
      orderCount: 118,
    },
    {
      day: '일',
      avgNetAmount: 960000,
      orderCount: 102,
    },
  ] as const satisfies SalesByDayItem[],
};
