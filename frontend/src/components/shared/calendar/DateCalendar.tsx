import { useCalendarNavigation, useDateCalendar } from '@/hooks/shared';

import { CalendarDateGrid } from './CalendarDateGrid';
import { CalendarDayGrid } from './CalendarDayGrid';
import { CalendarHeader } from './CalendarHeader';

interface DateCalendarProps {
  selectedStartDate?: Date;
  setSelectedStartDate: (date?: Date) => void;
  selectedEndDate?: Date;
  setSelectedEndDate: (date?: Date) => void;
}

export const DateCalendar = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
}: DateCalendarProps) => {
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

  const { handleSelectDate } = useDateCalendar({
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
        <CalendarDateGrid
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
