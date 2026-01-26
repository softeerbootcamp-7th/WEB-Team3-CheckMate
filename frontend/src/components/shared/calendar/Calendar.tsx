import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useCalendar } from '@/hooks/shared';

import { Button } from '../shadcn-ui';

import { CalendarDateGrid } from './Calendar.date-grid';
import { CalendarDayGrid } from './Calendar.day-grid';

interface CalendarProps {
  selectedStartDate?: Date;
  setSelectedStartDate: (date: Date) => void;
  selectedEndDate?: Date;
  setSelectedEndDate: (date: Date) => void;
}

export const Calendar = ({
  selectedStartDate,
  setSelectedStartDate,
  selectedEndDate,
  setSelectedEndDate,
}: CalendarProps) => {
  const {
    currentDateForCalendar,
    currentYearForCalendar,
    currentMonthForCalendar,
    numberOfDatesForCalendar,
    lastWeekOfPreviousMonth,
    firstWeekOfNextMonth,
    handleClickPreviousMonth,
    handleClickNextMonth,
    handleSelectDate,
  } = useCalendar({
    selectedStartDate,
    selectedEndDate,
    setSelectedStartDate,
    setSelectedEndDate,
  });

  return (
    <section className="rounded-300 border-grey-300 w-80 border p-350">
      <div className="size-full">
        <div className="flex items-center justify-between p-350">
          <Button
            variant="ghost"
            size="icon"
            className="size-fit"
            onClick={handleClickPreviousMonth}
            aria-label="이전 달로 이동"
          >
            <ChevronLeft className="size-5" />
          </Button>
          <span className="body-small-bold">
            {currentYearForCalendar}년 {currentMonthForCalendar}월
          </span>
          <Button
            variant="ghost"
            size="icon"
            className="size-fit"
            onClick={handleClickNextMonth}
            aria-label="다음 달로 이동"
          >
            <ChevronRight className="size-5" />
          </Button>
        </div>
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
