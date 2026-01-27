interface DiscountCancelProps {
  discountAmount?: number;
  cancelAmount?: number;
  className?: string;
}

export const DiscountCancel = ({
  discountAmount = 0,
  cancelAmount = 0,
  className = '',
}: DiscountCancelProps) => {
  return (
    <section className={`sales-overview-discount-cancel ${className}`}>
      <h3 className="title-small-semibold">할인 & 취소</h3>
      <div className="values">
        <div className="value-item">할인: {discountAmount}</div>
        <div className="value-item">취소: {cancelAmount}</div>
      </div>
    </section>
  );
};
