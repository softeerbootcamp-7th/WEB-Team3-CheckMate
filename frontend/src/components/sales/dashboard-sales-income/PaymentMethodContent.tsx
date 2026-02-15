import {
  DASHBOARD_METRIC_CARDS,
  type DASHBOARD_METRICS,
  type ExtractCardCodes,
} from '@/constants/dashboard';
import { PAYMENT_METHOD, SALES_SOURCE_COLORS } from '@/constants/sales';
import type { GetIncomStructureByPaymentMethodResponseDto } from '@/types/sales';
import { type Nullable } from '@/utils/shared';

import { DashboardSalesIncomeContent } from './DashboardSalesIncomeContent';

const {
  EXAMPLE_TOP_TYPE,
  EXAMPLE_TOP_SHARE,
  EXAMPLE_DELTA_SHARE,
  EXAMPLE_PAYMENT_METHOD_DATA,
  DOUGHNUT_CHART_TITLE,
} = PAYMENT_METHOD;

type PaymentMethodCardCodes = ExtractCardCodes<
  typeof DASHBOARD_METRICS.SALES.sections.INCOME_STRUCTURE.items.PAYMENT_METHOD
>;

interface PaymentMethodContentProps extends Nullable<GetIncomStructureByPaymentMethodResponseDto> {
  cardCode: PaymentMethodCardCodes;
}

export const PaymentMethodContent = ({
  cardCode,
  insight,
  items,
}: PaymentMethodContentProps) => {
  const periodType = DASHBOARD_METRIC_CARDS[cardCode].period;

  const paymentMethodData = (items ?? EXAMPLE_PAYMENT_METHOD_DATA).map(
    (item) => ({
      salesSourceType: item.payMethod,
      revenue: item.salesAmount,
      count: item.orderCount,
      changeRate: item.deltaShare,
    }),
  );

  const chartData = paymentMethodData.map((data) => ({
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
        salesSourceData={paymentMethodData}
        title={DOUGHNUT_CHART_TITLE}
      />
    </DashboardSalesIncomeContent>
  );
};
