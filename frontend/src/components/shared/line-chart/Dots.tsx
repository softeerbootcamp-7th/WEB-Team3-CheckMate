import { LINE_CHART } from '@/constants/shared';
import type { LineChartSeries } from '@/types/shared';

import { Tooltip, TooltipContent, TooltipTrigger } from '../shadcn-ui';

interface DotsProps {
  series: LineChartSeries;
  activeTooltip: boolean;
  tooltipContent: (...args: string[]) => string;
  coordinate: (number | null)[][];
  color: string;
}

export const Dots = ({
  series,
  activeTooltip,
  tooltipContent,
  coordinate,
  color,
}: DotsProps) => {
  const { DOT_RADIUS } = LINE_CHART;

  const filteredCoordinate: number[][] = coordinate.filter(
    (point): point is number[] => point[1] !== null,
  );

  if (!activeTooltip) {
    return (
      <>
        {filteredCoordinate.map(([x, y], index) => (
          <circle
            key={index}
            cx={x}
            cy={y}
            r={DOT_RADIUS}
            fill={color}
            stroke="none"
            role="graphics-symbol"
            tabIndex={0}
            aria-label={`${series.data.mainX[index].amount} ${series.data.mainX[index].unit}`}
            style={{
              transition: 'cx 0.5s ease-in-out, cy 0.5s ease-in-out',
            }}
          />
        ))}
      </>
    );
  }

  return (
    <>
      {filteredCoordinate.map(([x, y], index) => {
        const tooltipContentText = tooltipContent(
          `${series.data.mainY[index].amount}${series.data.mainY[index].unit}`,
          `${series.data.subY[index]?.amount}${series.data.subY[index]?.unit}`,
        );
        return (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <circle
                cx={x}
                cy={y}
                r={DOT_RADIUS}
                fill={color}
                role="graphics-symbol"
                stroke="none"
                className="hover:brightness-75 hover:saturate-200"
                tabIndex={0}
                aria-label={tooltipContentText}
                style={{
                  transition: 'cx 0.5s ease-in-out, cy 0.5s ease-in-out',
                }}
              />
            </TooltipTrigger>
            <TooltipContent>{tooltipContentText}</TooltipContent>
          </Tooltip>
        );
      })}
    </>
  );
};
