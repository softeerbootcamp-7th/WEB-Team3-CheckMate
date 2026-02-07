import { useMemo } from 'react';

import { RANKING_COLORS } from '@/constants/shared/doughnut-chart';
import type { DoughnutChartItem } from '@/types/shared';
import {
  computeChartDataWithPercentage,
  getAnimationDuration,
  getArcLength,
  getCoordinates,
  getDegreeFromPercentage,
  getSVGPath,
  getTextColor,
} from '@/utils/shared/doughnut-chart';

import { DonutSegment } from './DonutSegment';
import { DoughnutLabel } from './DoughnutLabel';

interface DoughnutChartProps {
  chartData: DoughnutChartItem[];
  animationDuration?: number;
}

export const DoughnutChart = ({
  chartData,
  animationDuration = 800,
}: DoughnutChartProps) => {
  const VIEW_RADIUS = 180;
  const VIEW_SIZE = VIEW_RADIUS * 2;
  const CLIP_RADIUS = 100;
  const STROKE_WIDTH = VIEW_RADIUS - CLIP_RADIUS;
  const DONUT_RADIUS = CLIP_RADIUS + STROKE_WIDTH / 2;
  //
  const MIN_PERCENTAGE_FOR_LABEL = 5; // 라벨 표시 최소 백분율

  const chartDataWithPercentage = useMemo(
    () =>
      computeChartDataWithPercentage(chartData)
        .reverse()
        .filter((data) => data.percentage > 0),
    [chartData],
  );

  // 전체 원주(360도) 길이는 모든 세그먼트에서 동일하므로 미리 계산
  const fullCircumference = useMemo(
    () => getArcLength(360, DONUT_RADIUS),
    [DONUT_RADIUS],
  );

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${VIEW_SIZE} ${VIEW_SIZE}`}
    >
      {/* 가이드라인 호 */}
      <DonutSegment
        path={getSVGPath(359.99, 0, DONUT_RADIUS, VIEW_RADIUS)}
        strokeWidth={STROKE_WIDTH}
        color={'var(--color-grey-100)'}
        arcLength={getArcLength(359.99, DONUT_RADIUS)}
        circumference={fullCircumference}
        currentAnimationDuration={0}
        cumulativeAnimationDuration={0}
      />

      {chartDataWithPercentage.map((data, index) => {
        // 누적 백분율 계산
        const cumulativePercentage = chartDataWithPercentage
          .slice(index + 1)
          .reduce((sum, item) => sum + item.percentage, 0);
        const cumulativeDegree = getDegreeFromPercentage(cumulativePercentage);

        // 현재 세그먼트의 각도 계산
        const degree = getDegreeFromPercentage(data.percentage);
        // 현재 세그먼트의 SVG Path 계산
        const path = getSVGPath(
          degree,
          cumulativeDegree,
          DONUT_RADIUS,
          VIEW_RADIUS,
        );

        // 현재 세그먼트까지의 호 길이
        const arcLength = getArcLength(degree + cumulativeDegree, DONUT_RADIUS);

        // 현재 세그먼트의 중앙으로 라벨 좌표 계산
        const { x: LABEL_X, y: LABEL_Y } = getCoordinates(
          cumulativeDegree + degree / 2,
          DONUT_RADIUS,
          VIEW_RADIUS,
        );

        // 색상 및 텍스트 색상 결정
        const color =
          data.color ??
          RANKING_COLORS[chartDataWithPercentage.length - 1 - index]; // 디폴트: 랭킹에 따른 색상
        const textColor = getTextColor(color);

        const currentAnimationDuration = getAnimationDuration(
          degree,
          animationDuration,
        );
        const cumulativeAnimationDuration = getAnimationDuration(
          cumulativeDegree,
          animationDuration,
        );

        return (
          <g key={data.label} style={{ zIndex: -index }}>
            <DonutSegment
              path={path}
              strokeWidth={STROKE_WIDTH}
              color={color}
              arcLength={arcLength}
              circumference={fullCircumference}
              currentAnimationDuration={currentAnimationDuration}
              cumulativeAnimationDuration={cumulativeAnimationDuration}
            />

            {data.percentage >= MIN_PERCENTAGE_FOR_LABEL && (
              <DoughnutLabel
                x={LABEL_X}
                y={LABEL_Y}
                label={data.percentage}
                textColor={textColor}
                currentAnimationDuration={currentAnimationDuration}
                cumulativeAnimationDuration={cumulativeAnimationDuration}
              />
            )}
          </g>
        );
      })}
    </svg>
  );
};
