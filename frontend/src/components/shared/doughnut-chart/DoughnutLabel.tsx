import { useEffect, useState } from 'react';

interface DoughnutLabelProps {
  x: number;
  y: number;
  label: string | number;
  textColor: string;
  currentAnimationDuration: number;
  cumulativeAnimationDuration: number;
}

export const DoughnutLabel = ({
  x,
  y,
  label,
  textColor,
  currentAnimationDuration,
  cumulativeAnimationDuration,
}: DoughnutLabelProps) => {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setIsAnimating(false),
      cumulativeAnimationDuration,
    );
    return () => clearTimeout(timeoutId);
  }, [cumulativeAnimationDuration]);

  return (
    <text
      x={x}
      y={y + 9} // line-height 보정
      fill={textColor}
      textAnchor="middle"
      opacity={isAnimating ? 0 : 1}
      fontSize={'24px'}
      fontWeight={600}
      style={{
        transition: `opacity ${currentAnimationDuration / 2}ms linear`,
      }}
    >
      {label}%
    </text>
  );
};
