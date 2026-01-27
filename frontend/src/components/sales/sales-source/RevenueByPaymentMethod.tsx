interface Item {
  paymentMethod: string;
  value: number;
}

interface RevenueByPaymentMethodProps {
  items?: Item[];
  className?: string;
}

export const RevenueByPaymentMethod = ({
  items = [],
  className = '',
}: RevenueByPaymentMethodProps) => {
  return (
    <section className={`sales-source-revenue-by-payment-method ${className}`}>
      <h3 className="title-small-semibold">결제수단별 매출</h3>
      <ul>
        {items.map((it) => (
          <li key={it.paymentMethod}>
            {it.paymentMethod}: {it.value}
          </li>
        ))}
      </ul>
    </section>
  );
};
