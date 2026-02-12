import { useCallback, useMemo } from 'react';

import { EditCardWrapper } from '@/components/shared';
import { DASHBOARD_METRIC_CARDS } from '@/constants/dashboard';
import { useEditCard } from '@/hooks/dashboard';

interface CardEditViewCardProps {
  cardCode: string;
}
export const CardEditViewCard = ({ cardCode }: CardEditViewCardProps) => {
  const { addCard, removeCard, cards } = useEditCard();

  const card = useMemo(() => DASHBOARD_METRIC_CARDS[cardCode], [cardCode]);

  const handleAddCard = useCallback(() => {
    addCard(cardCode, card.sizeX, card.sizeY);
  }, [addCard, cardCode, card]);

  const handleDeleteCard = useCallback(() => {
    removeCard(cardCode);
  }, [removeCard, cardCode]);

  const isAdded = useMemo(
    () => cards.some((c) => c.code === cardCode),
    [cards, cardCode],
  );

  if (!card) {
    return null; // 카드 정보가 없는 경우 렌더링하지 않음
  }

  const { code, label, type, period, sizeX, sizeY } = card;

  return (
    <li style={{ gridColumn: `span ${1}` }}>
      <EditCardWrapper
        isAdded={isAdded}
        period={period}
        className="min-w-full"
        sizeX={sizeX}
        sizeY={sizeY}
        onClickAddButton={handleAddCard}
        onClickDeleteButton={handleDeleteCard}
      >
        {label}
        <br />
        {code}
        <br />
        {type}
        <br />
        {sizeX} x {sizeY}
      </EditCardWrapper>
    </li>
  );
};
