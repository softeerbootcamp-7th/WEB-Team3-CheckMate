import { CDN_BASE_URL } from '@/constants/shared';
import type { Kpi } from '@/types/daily-report';
import { cn } from '@/utils/shared';

interface DailyReportKPIProps {
  kpi: Kpi;
}
export const DailyReportKPI = ({ kpi }: DailyReportKPIProps) => {
  return (
    <div className="bg-special-dashboard-bg rounded-400 w-full p-5 pb-4.5">
      <h3 className="text-grey-700 body-medium-semibold">{kpi.label}</h3>
      <p className="text-grey-900 title-medium-bold mt-2.75 mb-0.5">
        {kpi.value}
      </p>
      <div className="flex items-center">
        {(kpi.trend_dir === 'up' || kpi.trend_dir === 'down') && (
          <object
            data={`${CDN_BASE_URL}/assets/images/${kpi.trend_dir}.svg`}
            className="inline size-4"
          />
        )}
        <span
          className={cn(
            'text-grey-500 body-small-semibold',
            kpi.trend_dir === 'up' && 'text-brand-main',
            kpi.trend_dir === 'down' && 'text-others-negative',
          )}
        >
          {kpi.diff_val}
        </span>
        <span className="text-grey-500 caption-large-medium ml-1">
          {kpi.diff_desc}
        </span>
      </div>
    </div>
  );
};
