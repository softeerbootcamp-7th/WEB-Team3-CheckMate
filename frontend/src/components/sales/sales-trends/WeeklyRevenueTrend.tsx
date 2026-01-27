interface Point {
  period: string;
  value: number;
}

interface WeeklyRevenueTrendProps {
  data?: Point[];
  className?: string;
}

export const WeeklyRevenueTrend = ({
  data = [],
  className = '',
}: WeeklyRevenueTrendProps) => {
  return (
    <section className={`sales-trends-weekly-revenue-trend ${className}`}>
      <h3 className="title-small-semibold">주별 매출 추이</h3>
      <div>Data points: {data.length}</div>
    </section>
  );
};
