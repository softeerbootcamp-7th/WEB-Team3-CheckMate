import { EditCardWrapper } from '@/components/shared';
import { DASHBOARD_METRIC_CARDS } from '@/constants/dashboard';

interface CardEditViewCardProps {
  cardCode: string;
}
export const CardEditViewCard = ({ cardCode }: CardEditViewCardProps) => {
  const item = DASHBOARD_METRIC_CARDS[cardCode];

  return (
    <li key={cardCode} style={{ gridColumn: `span ${item.sizeX}` }}>
      <EditCardWrapper
        isAdded={false}
        period={item.period as string}
        className="min-w-full"
        sizeX={item.sizeX}
        sizeY={item.sizeY}
      >
        {item.label}
        <br />
        {item.code}
        <br />
        {item.type}
        <br />
        {item.sizeX} x {item.sizeY}
      </EditCardWrapper>
    </li>
  );
};
