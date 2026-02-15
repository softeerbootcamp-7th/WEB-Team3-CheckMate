import type { GetDashboardTimeSlotMenuOrderCountResponseDto } from '@/types/dashboard/menu/dto';
import type { Nullable } from '@/utils/shared';

import { TimeSlotMenuOrderCountContent } from './TimeSlotMenuOrderCountContent';

// 편집 패널에서 보여질 데이터
const EXAMPLE_TIME_SLOT_2H = 9;
const EXAMPLE_MENU_NAME = '아메리카노(ICE)';

// 현재 주문건수가 가장 많은 카드
interface TimeSlotMenuOrderCountCardContentProps extends Nullable<GetDashboardTimeSlotMenuOrderCountResponseDto> {
  className?: string;
}

export const TimeSlotMenuOrderCountCardContent = ({
  timeSlot2H = EXAMPLE_TIME_SLOT_2H,
  menuName = EXAMPLE_MENU_NAME,
}: TimeSlotMenuOrderCountCardContentProps) => {
  return (
    <TimeSlotMenuOrderCountContent
      timeSlot2H={timeSlot2H}
      menuName={menuName}
    />
  );
};
