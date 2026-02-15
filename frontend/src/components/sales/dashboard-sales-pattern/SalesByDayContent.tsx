import type { SalesByDayItem, SalesByDaySummary } from '@/types/sales';
import { getSalesPatternByDayMessage } from '@/utils/sales';
import { cn, type Nullable } from '@/utils/shared';

interface SalesByDayContentProps extends Nullable<SalesByDaySummary> {
  salesByDayItems?: SalesByDayItem[];
  className?: string;
}

export const SalesByDayContent = ({
  // salesByDayItems = [],
  topDay = '월',
  isSignificant = false,
  className,
}: SalesByDayContentProps) => {
  const salesByDayBriefingMessage = getSalesPatternByDayMessage({
    topDay,
    isSignificant,
  });
  return (
    <article
      className={cn(
        'flex w-75 flex-col items-start justify-start gap-1',
        className,
      )}
    >
      <p className="title-large-semibold w-full min-w-0">
        {salesByDayBriefingMessage.map(
          ({ text, isHighlight, highlightColor }, index) => {
            return (
              <span
                key={index}
                className={cn(
                  'text-grey-900 break-keep whitespace-pre-wrap',
                  isHighlight && highlightColor,
                )}
              >
                {text}
              </span>
            );
          },
        )}
      </p>
    </article>
  );
};
