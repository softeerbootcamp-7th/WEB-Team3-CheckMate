interface HourPoint {
  hour: number;
  orders: number;
}

interface PeakTimeByHourProps {
  data?: HourPoint[];
  className?: string;
}

export const PeakTimeByHour = ({
  data = [],
  className = '',
}: PeakTimeByHourProps) => {
  return (
    <section className={`sales-patterns-peak-time-by-hour ${className}`}>
      <h3 className="title-small-semibold">피크타임 (시간대별 주문건수)</h3>
      <div>Hours: {data.length}</div>
    </section>
  );
};
