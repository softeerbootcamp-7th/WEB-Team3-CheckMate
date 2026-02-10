import { LINE_CHART } from '@/constants/shared';
import { useDrawLinePath, useLineAnimation } from '@/hooks/shared';

interface LineProps {
  coordinate: (number | null)[][];
  color: string;
  hasGradient?: boolean;
  gradientId?: string;
}

export const Line = ({
  coordinate,
  color,
  hasGradient = false,
  gradientId,
}: LineProps) => {
  const { LINE_STROKE_WIDTH } = LINE_CHART;

  const { filteredCoordinate, pathD } = useDrawLinePath({ coordinate });
  const { lineRef } = useLineAnimation({
    coordinateCount: filteredCoordinate.length,
    pathD,
  });

  return (
    <path
      d={pathD}
      stroke={hasGradient ? `url(#${gradientId})` : color}
      strokeWidth={LINE_STROKE_WIDTH}
      fill={'none'}
      ref={lineRef}
    />
  );
};
