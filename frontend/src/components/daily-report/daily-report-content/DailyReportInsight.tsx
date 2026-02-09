import type { GetDailyReportContentResponseDto } from '@/types/daily-report';

interface DailyReportInsightProps {
  insights: GetDailyReportContentResponseDto['insights'];
}
export const DailyReportInsight = ({ insights }: DailyReportInsightProps) => {
  return (
    <div>
      <h3 className="text-grey-700 body-medium-semibold mb-4">
        오늘의 인사이트
      </h3>
      <div className="flex flex-col gap-3">
        {insights.map((insight, index) => (
          <p
            key={`insight-${index}`} // 일부만 바뀔 일 없으므로 index 사용
            className="bg-grey-100 rounded-200 text-grey-900 body-small-medium [&>strong]:text-brand-main px-4 py-3"
          >
            {insight.observe}
            <strong>{insight.meaning} </strong>
            {insight.impact}
          </p>
        ))}
      </div>
    </div>
  );
};
