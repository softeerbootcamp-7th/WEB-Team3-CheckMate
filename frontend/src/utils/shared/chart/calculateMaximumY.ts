import type { ChartDatum } from '@/types/shared';

export const calculateMaximumY = (data: ChartDatum[]) => {
  const totalData = data.map((datum) => Number(datum.amount));
  const maximumAmount = totalData.length > 0 ? Math.max(...totalData) : 10;
  const adjustedMaximumAmount =
    Math.ceil(Math.ceil(maximumAmount * 1.5) / 10) * 10;
  return adjustedMaximumAmount;
};
