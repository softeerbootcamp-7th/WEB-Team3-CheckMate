import { cn, getNextHour } from '@/utils/shared';

interface TimeSlotMenuOrderCountContentProps {
  className?: string;
  timeSlot2H?: number;
  menuName?: string;
}
// 현재 주문건수가 가장 많은 메뉴 카드
export const TimeSlotMenuOrderCountContent = ({
  className,
  timeSlot2H,
  menuName,
}: TimeSlotMenuOrderCountContentProps) => {
  // timeSlot2H과 menuName이 null인 경우 처리해줘서 오류 안나도록
  timeSlot2H = timeSlot2H ?? 0; // 기본값 0
  menuName = menuName ?? ''; // 기본값 ''
  return (
    <p
      className={cn(
        'title-large-semibold text-grey-900 flex w-75 flex-col',
        className,
      )}
    >
      <span className="title-large-bold text-brand-main flex w-70">
        <span className="min-w-0 truncate">{menuName}</span>
        <span className="shrink-0">{`는 ${timeSlot2H}~${getNextHour(timeSlot2H)}시`}</span>
      </span>
      <span>주문이 가장 많아요</span>
    </p>
  );
};
