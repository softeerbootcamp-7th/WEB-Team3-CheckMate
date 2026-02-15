import {
  DASHBOARD_METRIC_CARDS,
  type DASHBOARD_METRICS,
  type ExtractCardCodes,
} from '@/constants/dashboard';
import { SALES_SOURCE_COLORS, SALES_TYPE } from '@/constants/sales';
import type { GetIncomStructureBySalesTypeResponseDto } from '@/types/sales';
import { type Nullable } from '@/utils/shared';

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

  const salesTypeData = (items ?? EXAMPLE_SALES_SOURCE_DATA).map((item) => ({
    salesSourceType: item.salesType,
    revenue: item.salesAmount,
    count: item.orderCount,
    changeRate: item.deltaShare,
  }));

  const chartData = salesTypeData.map((data) => ({
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
      <DashboardSalesIncomeContent.DoughnutChart
        periodType={periodType}
        chartData={chartData}
        salesSourceData={salesTypeData}
        title={DOUGHNUT_CHART_TITLE}
      />
    </DashboardSalesIncomeContent>
  );
};
