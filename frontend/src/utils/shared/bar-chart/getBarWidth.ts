import type { Coordinate } from '@/types/shared';

// 바 너비는 막대 간격의 50%로 설정 (막대 간격은 viewBoxWidth / x축의 지점 개수)
export const getBarWidth = ({
  viewBoxWidth,
  xCoordinate,
}: {
  viewBoxWidth: number;
  xCoordinate: Coordinate[];
}) => {
  return (viewBoxWidth / xCoordinate.length) * 0.5;
};
