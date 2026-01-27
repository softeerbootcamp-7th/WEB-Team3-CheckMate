interface Point {
  period: string;
  value: number;
}

interface MonthlyRevenueTrendProps {
  data?: Point[];
  className?: string;
}

export const MonthlyRevenueTrend = ({
  data = [],
  className = '',
}: MonthlyRevenueTrendProps) => {
  return (
    <section className={`sales-trends-monthly-revenue-trend ${className}`}>
      <h3 className="title-small-semibold">월별 매출 추이</h3>
      <div>Data points: {data.length}</div>
    </section>
  );
};
