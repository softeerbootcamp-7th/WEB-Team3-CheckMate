import type {
  SalesIncomeStructureInsight,
  SalesIncomeStructureTopType,
} from '../salesIncomeStructureInsight';

interface SalesTypeItem {
  salesType: Extract<SalesIncomeStructureTopType, '홀' | '포장' | '배달'>;
  salesAmount: number;
  orderCount: number;
  share: number;
  deltaShare: number;
}

export interface GetIncomStructureBySalesTypeResponseDto {
  insight: SalesIncomeStructureInsight;
  items: SalesTypeItem[];
}
