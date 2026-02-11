import type { LineChartSeries } from '@/types/shared';

interface GetCoordinateArgs {
  svgRect: DOMRect;
  adjustedHeight: number;
  series: LineChartSeries;
  maximumY: number;
}

export const getCoordinate = ({
  svgRect,
  adjustedHeight,
  series,
  maximumY,
}: GetCoordinateArgs): (number | null)[][] => {
  const { width: svgWidth } = svgRect;
  const xDataLength = series.data.mainX.length;

  const intervalX = svgWidth / xDataLength;
  const lastX = intervalX * (xDataLength - 1);
  const offsetX = (svgWidth - lastX) / 2;

  return Array.from({ length: xDataLength }).reduce<(number | null)[][]>(
    (acc, _, index) => [
      ...acc,
      [
        index * intervalX + offsetX,
        series.data.mainY[index].amount === null
          ? null
          : adjustedHeight -
            (Number(series.data.mainY[index].amount) / maximumY) *
              adjustedHeight,
      ],
    ],
    [],
  );
};
