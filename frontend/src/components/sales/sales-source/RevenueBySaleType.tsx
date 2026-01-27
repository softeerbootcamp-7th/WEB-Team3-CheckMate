interface Item {
  type: string;
  value: number;
}

interface RevenueBySaleTypeProps {
  items?: Item[];
  className?: string;
}

export const RevenueBySaleType = ({
  items = [],
  className = '',
}: RevenueBySaleTypeProps) => {
  return (
    <section className={`sales-source-revenue-by-sale-type ${className}`}>
      <h3 className="title-small-semibold">판매유형별 매출</h3>
      <ul>
        {items.map((it) => (
          <li key={it.type}>
            {it.type}: {it.value}
          </li>
        ))}
      </ul>
    </section>
  );
};
