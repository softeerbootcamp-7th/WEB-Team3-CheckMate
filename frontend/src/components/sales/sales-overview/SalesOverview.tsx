import { useState } from 'react';

import { DateRangePicker, SectionTitle } from '@/components/shared';
import { DATE_RANGE_PICKER_TYPE } from '@/constants/shared';

import { ActualRevenue } from './ActualRevenue';
import { AverageRevenuePerOrder } from './AverageRevenuePerOrder';
import { DiscountCancel } from './DiscountCancel';
import { OrderCount } from './OrderCount';
import { TotalRevenue } from './TotalRevenue';

export const SalesOverview = () => {
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);

  return (
    <section aria-label="매출 현황">
      <header className="flex justify-between">
        <SectionTitle
          title="매출 현황"
          description="실제 매출과 주문 상황을 한눈에 확인해요."
        />
        <DateRangePicker
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          dateRangePickerType={DATE_RANGE_PICKER_TYPE.date}
        />
      </header>
      <section className="mt-4 grid grid-rows-2 gap-5">
        <div className="grid grid-cols-3 gap-5">
          <ActualRevenue />
          <OrderCount />
          <AverageRevenuePerOrder />
        </div>
        <div className="grid grid-cols-2 gap-5">
          <TotalRevenue />
          <DiscountCancel />
        </div>
      </section>
    </section>
  );
};
