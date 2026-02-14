import type { SalesIncomeStructureInsight } from '../salesIncomeStructureInsight';

interface OrderMethodItem {
  orderChannel: string;
  salesAmount: number;
  orderCount: number;
  share: number;
  deltaShare: number;
}

export interface GetIncomStructureByOrderMethodResponseDto {
  insight: SalesIncomeStructureInsight;
  items: OrderMethodItem[];
}
