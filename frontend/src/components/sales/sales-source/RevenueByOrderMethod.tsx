interface Item {
  method: string;
  value: number;
}

interface RevenueByOrderMethodProps {
  items?: Item[];
  className?: string;
}

export const RevenueByOrderMethod = ({
  items = [],
  className = '',
}: RevenueByOrderMethodProps) => {
  return (
    <section className={`sales-source-revenue-by-order-method ${className}`}>
      <h3 className="title-small-semibold">주문수단별 매출</h3>
      <ul>
        {items.map((it) => (
          <li key={it.method}>
            {it.method}: {it.value}
          </li>
        ))}
      </ul>
    </section>
  );
};
