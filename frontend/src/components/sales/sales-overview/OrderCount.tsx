interface OrderCountProps {
  count?: number;
  className?: string;
}

export const OrderCount = ({ count = 0, className = '' }: OrderCountProps) => {
  return (
    <section className={`sales-overview-order-count ${className}`}>
      <h3 className="title-small-semibold">주문건수</h3>
      <div className="value-large">{count}</div>
    </section>
  );
};
