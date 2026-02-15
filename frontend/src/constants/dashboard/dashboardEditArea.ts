import type { ValueOf } from '@/utils/shared';

export const DASHBOARD_EDIT_AREA = {
  LIST: 'list',
  GRID: 'grid',
} as const;

export type DashboardEditArea = ValueOf<typeof DASHBOARD_EDIT_AREA>;
