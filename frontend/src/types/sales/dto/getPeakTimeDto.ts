interface PeakTimeItem {
  timeSlot2H: number;
  orderCount: number | null;
  netAmount: number | null;
}

interface PeakTimeSummary {
  todayPeak: number; // 오늘 피크 시간
  comparisonPeak: number; // 비교 시간 피크 시간
  diff: number; // 비교 시간 피크 시간 차이
  shiftDirection: ShiftDirection; // 피크 시간 방향성
  beforeComparisonPeak: boolean; // 비교 시간 피크 시간 이전
}

type ShiftDirection = 'EARLY' | 'LATE' | 'SAME' | 'UNKNOWN';

export interface GetDetailPeakTimeResponseDto extends PeakTimeSummary {
  todayItems: PeakTimeItem[];
  week4Items: PeakTimeItem[];
}

/**
 * 대시보드 피크 시간 DTO (SSE)
 */
export interface GetDashboardPeakTimeResponseDto extends PeakTimeSummary {
  timeSlot2H: number; // 현재 시간
  orderCount: number; // 현재 시간 주문건수
  netAmount: number; // 현재 시간 실매출액
}
