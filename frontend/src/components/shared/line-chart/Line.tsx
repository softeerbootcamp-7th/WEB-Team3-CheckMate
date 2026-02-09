import { LINE_CHART } from '@/constants/shared';
import { useDrawLinePath, useLineAnimation } from '@/hooks/shared';

interface LineProps {
  cordinate: (number | null)[][];
  color: string;
  hasGradient?: boolean;
  gradientId?: string;
}

export const Line = ({
  cordinate,
  color,
  hasGradient = false,
  gradientId,
}: LineProps) => {
  const { LINE_STROKE_WIDTH } = LINE_CHART;

  const { filteredCordinate, pathD } = useDrawLinePath({ cordinate });
  const { lineRef } = useLineAnimation({
    cordinateCount: filteredCordinate.length,
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
