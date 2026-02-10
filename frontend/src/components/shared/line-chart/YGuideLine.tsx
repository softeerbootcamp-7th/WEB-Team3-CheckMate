import { memo } from 'react';

import { LINE_CHART } from '@/constants/shared';

interface YGuideLineProps {
  svgRect: DOMRect | null;
  adjustedHeight: number;
  yGuideLineCount: number;
}

export const YGuideLine = memo(
  ({ svgRect, adjustedHeight, yGuideLineCount }: YGuideLineProps) => {
    if (svgRect === null) {
      return null;
    }

    const { GUIDE_LINE_STROKE_WIDTH } = LINE_CHART;

    const intervalY = adjustedHeight / yGuideLineCount;

    const cordinateYGuideLine = Array.from({ length: yGuideLineCount }).reduce<
      number[][]
    >(
      (acc, _, index) => [
        ...acc,
        [0, index * intervalY + GUIDE_LINE_STROKE_WIDTH / 2],
      ],
      [],
    );

    const pathD = cordinateYGuideLine
      .map(([x, y]) => `M ${x} ${y} h ${svgRect.width}`)
      .join(' ');

    return (
      <path
        d={pathD}
        strokeWidth={GUIDE_LINE_STROKE_WIDTH}
        stroke="currentColor"
        strokeDasharray="4 4"
        className="text-grey-300"
        aria-hidden="true"
      />
    );
  },
);

YGuideLine.displayName = 'YGuideLine';
