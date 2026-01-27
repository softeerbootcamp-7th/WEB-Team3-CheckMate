interface ActualRevenueProps {
  actual?: number;
  className?: string;
}

export const ActualRevenue = ({
  actual = 0,
  className = '',
}: ActualRevenueProps) => {
  return (
    <section className={`sales-overview-actual-revenue ${className}`}>
      <h3 className="title-small-semibold">실매출</h3>
      <div className="value-large">{actual}</div>
    </section>
  );
};

export default ActualRevenue;
