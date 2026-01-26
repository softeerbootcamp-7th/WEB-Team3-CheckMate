import { useMemo } from 'react';

import {
  DATE_RANGE_PICKER_TYPE,
  type DateRangePickerType,
} from '@/constants/shared';
import { useDateRangePicker } from '@/hooks/shared';
import { cn } from '@/utils/shared';

import { Calendar } from '../calendar';
import { Button, Popover, PopoverContent, PopoverTrigger } from '../shadcn-ui';

import { DateRangePickerSide } from './DateRangePickerSide';

interface DateRangePickerProps {
  startDate?: Date;
  setStartDate?: (date?: Date) => void;
  endDate?: Date;
  setEndDate?: (date?: Date) => void;
  dateRangePickerType: DateRangePickerType;
  triggerClassName?: string;
}

export const DateRangePicker = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  dateRangePickerType,
  triggerClassName,
}: DateRangePickerProps) => {
  const {
    isOpen,
    setIsOpen,
    ariaLabel,
    handleCancel,
    handleSave,
    selectedStartDate,
    selectedEndDate,
    setSelectedStartDate,
    setSelectedEndDate,
  } = useDateRangePicker({
    startDate,
    endDate,
    setStartDate,
    setEndDate,
    dateRangePickerType,
  });

  const CalendarComponent = useMemo(() => {
    switch (dateRangePickerType) {
      case DATE_RANGE_PICKER_TYPE.date:
        return (
          <Calendar
            selectedStartDate={selectedStartDate}
            setSelectedStartDate={setSelectedStartDate}
            selectedEndDate={selectedEndDate}
            setSelectedEndDate={setSelectedEndDate}
          />
        );
      default:
        return null;
    }
  }, [
    dateRangePickerType,
    selectedStartDate,
    setSelectedStartDate,
    selectedEndDate,
    setSelectedEndDate,
  ]);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className={cn(
            'bg-grey-200 text-grey-700 border-grey-300 rounded-unlimit body-small-medium flex h-8 w-fit items-center justify-center border px-300',
            triggerClassName,
          )}
          aria-label={ariaLabel}
        >
          기간 선택
        </Button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="shadow-card-floating rounded-400 bg-special-card-bg flex w-full gap-600 border-none p-4"
        aria-label={ariaLabel}
      >
        {CalendarComponent}
        <DateRangePickerSide
          selectedStartDate={selectedStartDate}
          selectedEndDate={selectedEndDate}
          setSelectedStartDate={setSelectedStartDate}
          setSelectedEndDate={setSelectedEndDate}
          handleCancel={handleCancel}
          handleSave={handleSave}
          dateRangePickerType={dateRangePickerType}
        />
      </PopoverContent>
    </Popover>
  );
};
