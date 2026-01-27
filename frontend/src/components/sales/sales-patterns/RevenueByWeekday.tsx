interface WeekdayPoint {
  weekday: string;
  revenue: number;
}

interface RevenueByWeekdayProps {
  data?: WeekdayPoint[];
  className?: string;
}

export const RevenueByWeekday = ({
  data = [],
  className = '',
}: RevenueByWeekdayProps) => {
  return (
    <section className={`sales-patterns-revenue-by-weekday ${className}`}>
      <h3 className="title-small-semibold">요일별 매출</h3>
      <div>Days: {data.length}</div>
    </section>
  );
};
