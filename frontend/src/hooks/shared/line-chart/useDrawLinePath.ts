interface UseDrawLinePathProps {
  cordinate: (number | null)[][];
}

export const useDrawLinePath = ({ cordinate }: UseDrawLinePathProps) => {
  const filteredCordinate: number[][] = cordinate.filter(
    (point): point is number[] => point[1] !== null,
  );
  const pathD = filteredCordinate.reduce<string>((acc, cur, index) => {
    if (index === 0) {
      return `M ${cur[0]} ${cur[1]}`;
    }
    return `${acc} L ${cur[0]} ${cur[1]}`;
  }, '');

  return {
    filteredCordinate,
    pathD,
  };
};
