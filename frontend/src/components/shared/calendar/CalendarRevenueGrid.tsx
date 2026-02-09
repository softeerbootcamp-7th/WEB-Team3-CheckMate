import { cn, getCurrentDate, isSameDate } from '@/utils/shared';

import { CalendarDateCell } from './CalendarDateCell';

interface CalendarRevenueGridProps {
  currentDateForCalendar: Date;
  selectedDate?: Date;
  lastWeekOfPreviousMonth: number[];
  numberOfDatesForCalendar: number;
  firstWeekOfNextMonth: number[];
  handleSelectDate: (currentDate: Date) => void;
}

export const CalendarRevenueGrid = ({
  currentDateForCalendar,
  selectedDate,
  lastWeekOfPreviousMonth,
  numberOfDatesForCalendar,
  firstWeekOfNextMonth,
  handleSelectDate,
}: CalendarRevenueGridProps) => {
  const renderDateCell = ({
    date,
    isPreviousMonth,
    isNextMonth,
  }: {
    date: number;
    isPreviousMonth: boolean;
    isNextMonth: boolean;
  }) => {
    const currentDate = getCurrentDate({
      date,
      dateForCalendar: currentDateForCalendar,
      isPreviousMonth,
      isNextMonth,
    });

    const isSelected = isSameDate({
      currentDate,
      selectedDate,
    });

    return (
      <CalendarDateCell
        key={date}
        date={date}
        className={cn(
          isSelected &&
            'before:bg-grey-900 text-grey-50 before:absolute before:inset-2 before:z-2 before:rounded-[5rem] before:content-[""]',
          (isPreviousMonth || isNextMonth) && 'text-grey-300',
        )}
        onClick={() => handleSelectDate(currentDate)}
      />
    );
  };
  return (
    <div className="grid grid-cols-7">
      {/* 이전 달 */}
      {lastWeekOfPreviousMonth.map((date) =>
        renderDateCell({ date, isPreviousMonth: true, isNextMonth: false }),
      )}

      {/* 현재 달 */}
      {Array.from({ length: numberOfDatesForCalendar }).map((_, index) =>
        renderDateCell({
          date: index + 1,
          isPreviousMonth: false,
          isNextMonth: false,
        }),
      )}

      {/* 다음 달 */}
      {firstWeekOfNextMonth.map((date) =>
        renderDateCell({ date, isPreviousMonth: false, isNextMonth: true }),
      )}
    </div>
  );
};
