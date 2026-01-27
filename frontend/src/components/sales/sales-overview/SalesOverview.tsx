import { SectionTitle } from '@/components/shared';

import { ActualRevenue } from './ActualRevenue';
import { AverageRevenuePerOrder } from './AverageRevenuePerOrder';
import { DiscountCancel } from './DiscountCancel';
import { OrderCount } from './OrderCount';
import { TotalRevenue } from './TotalRevenue';

export const SalesOverview = () => {
  return (
    <section aria-label="매출 현황">
      <header>
        <SectionTitle
          title="매출 현황"
          description="실제 매출과 주문 상황을 한눈에 확인해요."
        />
      </header>
      <div className="contents">
        <ActualRevenue />
        <OrderCount />
        <AverageRevenuePerOrder />
        <TotalRevenue />
        <DiscountCancel />
      </div>
    </section>
  );
};
