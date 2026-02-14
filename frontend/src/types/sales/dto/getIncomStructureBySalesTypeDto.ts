import type { SalesIncomeStructureInsight } from '../salesIncomeStructureInsight';

interface SalesTypeItem {
  salesType: string;
  salesAmount: number;
  orderCount: number;
  share: number;
  deltaShare: number;
}

export interface GetIncomStructureBySalesTypeResponseDto {
  insight: SalesIncomeStructureInsight;
  items: SalesTypeItem[];
}
