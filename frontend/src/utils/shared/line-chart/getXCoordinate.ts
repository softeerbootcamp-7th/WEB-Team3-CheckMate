export const getXCoordinate = ({
  svgRect,
  xDataLength,
}: {
  svgRect: DOMRect;
  xDataLength: number;
}): number[][] => {
  const { width: svgWidth } = svgRect;

  const intervalX = svgWidth / xDataLength;
  const lastX = intervalX * (xDataLength - 1);
  const offsetX = (svgWidth - lastX) / 2;

  return Array.from({ length: xDataLength }).reduce<number[][]>(
    (acc, _, index) => [...acc, [index * intervalX + offsetX, 0]],
    [],
  );
};
