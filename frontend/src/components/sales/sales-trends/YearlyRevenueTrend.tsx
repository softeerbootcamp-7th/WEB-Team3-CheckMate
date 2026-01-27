interface Point {
  period: string;
  value: number;
}

interface YearlyRevenueTrendProps {
  data?: Point[];
  className?: string;
}

export const YearlyRevenueTrend = ({
  data = [],
  className = '',
}: YearlyRevenueTrendProps) => {
  return (
    <section className={`sales-trends-yearly-revenue-trend ${className}`}>
      <h3 className="title-small-semibold">연별 매출 추이</h3>
      <div>Data points: {data.length}</div>
    </section>
  );
};
