import { SectionTitle } from '@/components/shared';

import { PeakTimeByHour } from './PeakTimeByHour';
import { RevenueByWeekday } from './RevenueByWeekday';

export const SalesPatterns = () => {
  return (
    <section aria-label="매출 패턴">
      <header>
        <SectionTitle
          title="매출 패턴"
          description="매장이 바쁜 때를 파악해요."
        />
      </header>
      <div className="contents">
        <PeakTimeByHour />
        <RevenueByWeekday />
      </div>
    </section>
  );
};
