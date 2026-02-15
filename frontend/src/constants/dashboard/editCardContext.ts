import {
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from 'react';

import type { DashboardCard, DragState, GhostState } from '@/types/dashboard';

import type { MetricCardCode } from './dashboardMetricCards';

interface EditCardContextType {
  initGrid: (MetricCardCode | null)[][];

  grid: (MetricCardCode | null)[][];
  setGrid: Dispatch<SetStateAction<(MetricCardCode | null)[][]>>;

  gridRef: RefObject<HTMLDivElement | null>;

  dragState: DragState | null;
  setDragState: Dispatch<SetStateAction<DragState | null>>;

  ghost: GhostState | null;
  setGhost: Dispatch<SetStateAction<GhostState | null>>;

  tempLayout: DashboardCard[] | null;
  setTempLayout: Dispatch<SetStateAction<DashboardCard[] | null>>;

  isOverList: boolean;
  setIsOverList: Dispatch<SetStateAction<boolean>>;
}

export const EditCardContext = createContext<EditCardContextType | undefined>(
  undefined,
);
