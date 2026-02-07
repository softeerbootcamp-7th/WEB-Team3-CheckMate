import { useEffect, useState } from 'react';

interface DonutSegmentProps {
  path: string;
  strokeWidth: number;
  color: string;
  arcLength: number;
  circumference: number;
  currentAnimationDuration: number;
  cumulativeAnimationDuration: number;
}

export const DonutSegment = ({
  path,
  strokeWidth,
  color,
  arcLength,
  circumference,
  currentAnimationDuration,
  cumulativeAnimationDuration,
}: DonutSegmentProps) => {
  const [isDrawing, setIsDrawing] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => setIsDrawing(false), 0);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <path
      d={path}
      stroke={color}
      strokeWidth={strokeWidth}
      strokeDasharray={`${arcLength} ${circumference}`}
      // 호 길이만큼 offset 줘서 안보이게 시작
      strokeDashoffset={isDrawing ? arcLength : 0}
      fill="none"
      style={{
        transition: `stroke-dashoffset ${cumulativeAnimationDuration + currentAnimationDuration}ms ease,
                     stroke-dasharray ${cumulativeAnimationDuration + currentAnimationDuration}ms ease`,
        transitionDelay: `${isDrawing ? cumulativeAnimationDuration : 0}ms`,
      }}
    />
  );
};
