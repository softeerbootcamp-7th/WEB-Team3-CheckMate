import { SectionTitle } from '@/components/shared';

import { RevenueByOrderMethod } from './RevenueByOrderMethod';
import { RevenueByPaymentMethod } from './RevenueByPaymentMethod';
import { RevenueBySaleType } from './RevenueBySaleType';

export const SalesSource = () => {
  return (
    <section aria-label="매출 유입 구조">
      <header>
        <SectionTitle
          title="매출 유입 구조"
          description="매출이 어떤 경로와 방식으로 들어왔는지 확인해요."
        />
      </header>
      <div className="contents">
        <RevenueBySaleType />
        <RevenueByOrderMethod />
        <RevenueByPaymentMethod />
      </div>
    </section>
  );
};
