interface UseDrawLinePathProps {
  coordinate: (number | null)[][];
}

export const useDrawLinePath = ({ coordinate }: UseDrawLinePathProps) => {
  const filteredCoordinate: number[][] = coordinate.filter(
    (point): point is number[] => point[1] !== null,
  );
  const pathD = filteredCoordinate.reduce<string>((acc, cur, index) => {
    if (index === 0) {
      return `M ${cur[0]} ${cur[1]}`;
    }
    return `${acc} L ${cur[0]} ${cur[1]}`;
  }, '');

  return {
    filteredCoordinate,
    pathD,
  };
};
