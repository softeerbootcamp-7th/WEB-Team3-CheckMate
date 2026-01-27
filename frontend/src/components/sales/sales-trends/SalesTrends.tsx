import { SectionTitle } from '@/components/shared';

import { DailyRevenueTrend } from './DailyRevenueTrend';
import { MonthlyRevenueTrend } from './MonthlyRevenueTrend';
import { WeeklyRevenueTrend } from './WeeklyRevenueTrend';
import { YearlyRevenueTrend } from './YearlyRevenueTrend';

export const SalesTrends = () => {
  return (
    <section aria-label="매출 추이">
      <header>
        <SectionTitle
          title="매출 추이"
          description="매출이 늘고 있는지, 줄고 있는지 흐름으로 살펴봐요."
        />
      </header>
      <div className="contents">
        <DailyRevenueTrend />
        <WeeklyRevenueTrend />
        <MonthlyRevenueTrend />
        <YearlyRevenueTrend />
      </div>
    </section>
  );
};
