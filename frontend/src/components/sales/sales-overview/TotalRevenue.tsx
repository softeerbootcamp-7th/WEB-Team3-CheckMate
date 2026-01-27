interface TotalRevenueProps {
  revenue?: number;
  className?: string;
}

export const TotalRevenue = ({
  revenue = 0,
  className = '',
}: TotalRevenueProps) => {
  return (
    <section className={`sales-overview-total-revenue ${className}`}>
      <h3 className="title-small-semibold">총매출</h3>
      <div className="value-large">{revenue}</div>
    </section>
  );
};

export default TotalRevenue;
