import type { DashboardEditArea, MetricCardCode } from '@/constants/dashboard';

export interface DashboardCard {
  cardCode: MetricCardCode;
  rowNo: number;
  colNo: number;
}
export interface DragState {
  source: DashboardEditArea;
  item: DashboardCard;
  offset: { x: number; y: number };
}
export interface GhostState {
  rowNo: number;
  colNo: number;
  isValid: boolean;
}
