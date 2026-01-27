interface AverageRevenuePerOrderProps {
  average?: number;
  className?: string;
}

export const AverageRevenuePerOrder = ({
  average = 0,
  className = '',
}: AverageRevenuePerOrderProps) => {
  return (
    <section
      className={`sales-overview-average-revenue-per-order ${className}`}
    >
      <h3 className="title-small-semibold">건당 평균가</h3>
      <div className="value-large">{average}</div>
    </section>
  );
};
