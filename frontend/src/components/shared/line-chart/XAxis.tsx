import { memo, type RefObject } from 'react';

import { LINE_CHART } from '@/constants/shared';

export interface XAxisProps {
  viewBoxWidth: number;
  viewBoxHeight: number;
  ref: RefObject<SVGPathElement | null>;
}
export const XAxis = memo(
  ({ viewBoxWidth, viewBoxHeight, ref }: XAxisProps) => {
    const { XAXIS_STROKE_WIDTH, XAXIS_Y_OFFSET, TICK_HEIGHT } = LINE_CHART;

    const xAxisY = viewBoxHeight - XAXIS_Y_OFFSET;
    // x축 왼쪽 세로 선 -> x축 -> x축 오른쪽 세로선
    const xAxisPathD =
      `M ${XAXIS_STROKE_WIDTH / 2} ${xAxisY - TICK_HEIGHT / 2} v ${TICK_HEIGHT}`.concat(
        ` M 0 ${xAxisY} h ${viewBoxWidth}`.concat(
          ` m -${XAXIS_STROKE_WIDTH / 2} -${TICK_HEIGHT / 2} v ${TICK_HEIGHT}`,
        ),
      );
    return (
      <path
        d={xAxisPathD}
        strokeWidth={XAXIS_STROKE_WIDTH}
        stroke="currentColor"
        strokeLinecap="round"
        className="text-grey-400"
        aria-hidden="true"
        ref={ref}
      />
    );
  },
);
XAxis.displayName = 'XAxis';
