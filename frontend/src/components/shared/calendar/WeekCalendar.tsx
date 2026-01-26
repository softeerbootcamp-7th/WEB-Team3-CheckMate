import { useCalendarNavigation, useWeekCalendar } from '@/hooks/shared';

import { CalendarDayGrid } from './CalendarDayGrid';
import { CalendarHeader } from './CalendarHeader';
import { CalendarWeekGrid } from './CalendarWeekGrid';

interface WeekCalendarProps {
  selectedStartDate?: Date;
  setSelectedStartDate: (date?: Date) => void;
  selectedEndDate?: Date;
  setSelectedEndDate: (date?: Date) => void;
}

export const WeekCalendar = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
}: WeekCalendarProps) => {
  const {
    currentDateForCalendar,
    currentYearForCalendar,
    currentMonthForCalendar,
    numberOfDatesForCalendar,
    lastWeekOfPreviousMonth,
    firstWeekOfNextMonth,
    handleMovePreviousMonth,
    handleMoveNextMonth,
  } = useCalendarNavigation({
    selectedEndDate,
  });
  const { handleSelectDate } = useWeekCalendar({
    selectedStartDate,
    selectedEndDate,
    setSelectedStartDate,
    setSelectedEndDate,
  });

  return (
    <section className="rounded-300 border-grey-300 w-80 border p-350">
      <div className="size-full">
        <CalendarHeader
          headerTitle={`${currentYearForCalendar}년 ${currentMonthForCalendar}월`}
          previousAriaLabel="이전 달로 이동"
          nextAriaLabel="다음 달로 이동"
          handleClickPreviousMonth={handleMovePreviousMonth}
          handleClickNextMonth={handleMoveNextMonth}
        />
        <CalendarDayGrid />
        <CalendarWeekGrid
          currentDateForCalendar={currentDateForCalendar}
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          lastWeekOfPreviousMonth={lastWeekOfPreviousMonth}
          numberOfDatesForCalendar={numberOfDatesForCalendar}
          firstWeekOfNextMonth={firstWeekOfNextMonth}
          handleSelectDate={handleSelectDate}
        />
      </div>
    </section>
  );
};
