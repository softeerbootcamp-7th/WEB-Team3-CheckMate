import type {
  SalesIncomeStructureInsight,
  SalesIncomeStructureTopType,
} from '../salesIncomeStructureInsight';

interface PaymentMethodItem {
  payMethod: Extract<
    SalesIncomeStructureTopType,
    '카드' | '현금' | '간편결제' | '기타'
  >;
  salesAmount: number;
  orderCount: number;
  share: number;
  deltaShare: number;
}

export interface GetIncomStructureByPaymentMethodResponseDto {
  insight: SalesIncomeStructureInsight;
  items: PaymentMethodItem[];
}
