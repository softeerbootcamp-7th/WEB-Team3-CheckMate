import type { SalesIncomeStructureInsight } from '../salesIncomeStructureInsight';

interface PaymentMethodItem {
  payMethod: string;
  salesAmount: number;
  orderCount: number;
  share: number;
  deltaShare: number;
}

export interface GetIncomStructureByPaymentMethodResponseDto {
  insight: SalesIncomeStructureInsight;
  items: PaymentMethodItem[];
}
