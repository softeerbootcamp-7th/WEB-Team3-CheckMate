import { DoughnutChart } from '@/components/shared';
import {
  DASHBOARD_METRIC_CARDS,
  type DASHBOARD_METRICS,
  type ExtractCardCodes,
} from '@/constants/dashboard';
import {
  isSalesSourceType,
  SALES_SOURCE_COLORS,
  SALES_TYPE,
} from '@/constants/sales';
import { PERIOD_PRESETS } from '@/constants/shared';
import type { GetIncomStructureBySalesTypeResponseDto } from '@/types/sales';
import { assertNever, cn, type Nullable } from '@/utils/shared';

import { SalesSourceChartLegend } from '../sales-source';

import { DashboardSalesIncomeContent } from './DashboardSalesIncomeContent';

const {
  EXAMPLE_TOP_TYPE,
  EXAMPLE_TOP_SHARE,
  EXAMPLE_DELTA_SHARE,
  EXAMPLE_SALES_SOURCE_DATA,
  DOUGHNUT_CHART_TITLE,
} = SALES_TYPE;

type DashboardSalesIncomeCardCodes = ExtractCardCodes<
  typeof DASHBOARD_METRICS.SALES.sections.INCOME_STRUCTURE.items.SALES_TYPE
>;

interface SalesTypeContentProps extends Nullable<GetIncomStructureBySalesTypeResponseDto> {
  cardCode: DashboardSalesIncomeCardCodes;
}

export const SalesTypeContent = ({
  cardCode,
  insight,
  items,
}: SalesTypeContentProps) => {
  const periodType = DASHBOARD_METRIC_CARDS[cardCode].period;

  const salesSourceData = (items ?? EXAMPLE_SALES_SOURCE_DATA).map((item) => {
    if (!isSalesSourceType(item.salesType)) {
      return assertNever(
        item.salesType as never,
        `${item.salesType}는 유효하지 않은 판매 유형입니다.`,
      );
    }
    return {
      salesSourceType: item.salesType,
      revenue: item.salesAmount,
      count: item.orderCount,
      changeRate: item.deltaShare,
    };
  });

  const chartData = salesSourceData.map((data) => ({
    label: data.salesSourceType,
    value: data.revenue,
    color: SALES_SOURCE_COLORS[data.salesSourceType],
  }));

  return (
    <DashboardSalesIncomeContent>
      <DashboardSalesIncomeContent.ComparisonMessage
        periodType={periodType}
        topType={insight?.topType ?? EXAMPLE_TOP_TYPE}
        topShare={insight?.topShare ?? EXAMPLE_TOP_SHARE}
        deltaShare={insight?.deltaShare ?? EXAMPLE_DELTA_SHARE}
      />
      <div
        className={cn(
          'flex w-full flex-col items-center justify-center',
          periodType === PERIOD_PRESETS.dayWeekMonth.today
            ? // 최근 7일 텍스트 높이만큼 gap 조절
              'gap-[calc(46px-17.7px)]'
            : 'gap-11.5',
        )}
      >
        <div className="h-45 w-45">
          <DoughnutChart title={DOUGHNUT_CHART_TITLE} chartData={chartData} />
        </div>
        <SalesSourceChartLegend
          salesSourceData={salesSourceData}
          periodType={periodType}
        />
      </div>
    </DashboardSalesIncomeContent>
  );
};
