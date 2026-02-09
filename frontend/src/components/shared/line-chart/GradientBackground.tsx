interface GradientBackgroundProps {
  svgRect: DOMRect | null;
  adjustedHeight: number;
  primaryCordiante: (number | null)[][];
  gradientId: string;
}

export const GradientBackground = ({
  svgRect,
  adjustedHeight,
  primaryCordiante,
  gradientId,
}: GradientBackgroundProps) => {
  if (svgRect === null) {
    return null;
  }

  const filteredCordinate: number[][] = primaryCordiante.filter(
    (point): point is number[] => point[1] !== null,
  );

  if (filteredCordinate.length === 0) {
    return null;
  }

  const lastXCordinate = filteredCordinate[filteredCordinate.length - 1][0];

  return (
    <rect
      x={0}
      y={0}
      width={lastXCordinate}
      height={adjustedHeight}
      fill={`url(#${gradientId})`}
      className="transition-all duration-1000"
    />
  );
};
