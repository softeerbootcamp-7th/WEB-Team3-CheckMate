interface Point {
  date: string;
  value: number;
}

interface DailyRevenueTrendProps {
  data?: Point[];
  className?: string;
}

export const DailyRevenueTrend = ({
  data = [],
  className = '',
}: DailyRevenueTrendProps) => {
  return (
    <section className={`sales-trends-daily-revenue-trend ${className}`}>
      <h3 className="title-small-semibold">일별 매출 추이</h3>
      <div>Data points: {data.length}</div>
    </section>
  );
};
