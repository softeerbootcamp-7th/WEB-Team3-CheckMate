import type { GetDetailPeakTimeResponseDto } from '@/types/sales';

export const createPeakTimeSeries = (
  items:
    | GetDetailPeakTimeResponseDto['todayItems']
    | GetDetailPeakTimeResponseDto['week4Items'],
  color: string,
  mainXUnit: string = '',
  mainYUnit: string = '',
) => {
  const data = {
    mainX: items.map((item) => ({ amount: item.timeSlot2H, unit: mainXUnit })),
    mainY: items.map((item) => ({ amount: item.orderCount, unit: mainYUnit })),
    subX: [],
    subY: [],
  };
  return {
    data,
    color,
  };
};
