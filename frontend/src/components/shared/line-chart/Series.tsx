import type { LineChartSeries } from '@/types/shared';

import { Dots } from './Dots';
import { Line } from './Line';

interface SeriesProps {
  coordinate: (number | null)[][];
  color: string;
  hasGradient?: boolean;
  gradientId?: string;
  series: LineChartSeries;
  activeTooltip: boolean;
  tooltipContent: (...args: string[]) => string;
}

export const Series = ({
  coordinate,
  color,
  hasGradient = false,
  gradientId,
  series,
  activeTooltip,
  tooltipContent,
}: SeriesProps) => {
  return (
    <>
      <Line
        coordinate={coordinate}
        color={color}
        hasGradient={hasGradient}
        gradientId={gradientId}
      />
      <Dots
        series={series}
        activeTooltip={activeTooltip}
        tooltipContent={tooltipContent}
        coordinate={coordinate}
        color={color}
      />
    </>
  );
};
