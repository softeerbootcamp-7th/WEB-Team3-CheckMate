import { useNavigate } from 'react-router-dom';

import { DefaultCardWrapper } from '@/components/shared';
import {
  DASHBOARD_METRIC_CARDS,
  DASHBOARD_METRICS,
  type ExtractCardCodes,
} from '@/constants/dashboard';
import { CDN_BASE_URL } from '@/constants/shared';
import { dashboardMenuIngredientRankItems } from '@/mocks/data/dashboard';
import { cn } from '@/utils/shared';

import { DashboardMenuRankItem } from './DashboardMenuRankItem';

// 식자재 소진량 매출 랭킹 카드 코드
type IngredientConsumptionRankCardCode = ExtractCardCodes<
  typeof DASHBOARD_METRICS.MENU.sections.INGREDIENT_CONSUMPTION_RANK.items.INGREDIENT_CONSUMPTION_RANK
>;

// 메뉴분석 > 식자재 소진량 매출 랭킹
interface DashboardIngredientRankingCardProps {
  cardCode: IngredientConsumptionRankCardCode;
}

export const DashboardIngredientRankingCard = ({
  cardCode,
}: DashboardIngredientRankingCardProps) => {
  const cardInfo = DASHBOARD_METRIC_CARDS[cardCode];

  const navigate = useNavigate();
  const displayedRankItems = dashboardMenuIngredientRankItems;
  // 식자제 등록되어 있는지 정보
  const hasRegisteredIngredients = false;

  return (
    <DefaultCardWrapper
      width={340 * cardInfo.sizeX}
      height={228 * cardInfo.sizeY}
      title={cardInfo.label}
      hasChevronRightIcon={true}
      onClickChevronRightIcon={() => {
        navigate('analysis/menu');
      }}
      className={cn(
        !hasRegisteredIngredients && 'border-others-negative border-2',
      )}
    >
      {hasRegisteredIngredients ? (
        displayedRankItems.map(({ rank, itemName, amount, unit }) => (
          <DashboardMenuRankItem
            key={rank}
            rank={rank}
            itemName={itemName}
            amount={amount}
            unit={unit}
          />
        ))
      ) : (
        <div className="flex flex-col items-center">
          <div className="flex flex-col items-center gap-1">
            <img
              src={`${CDN_BASE_URL}/assets/images/empty_ingridient.svg`}
              alt="등록된 식자재 없음"
              className="size-18"
            />
            <span className="body-large-bold">식재료 미등록</span>
            <span className="body-small-medium text-grey-700 text-center">
              자동으로 식재료 파악하고,
              <br /> 간편하게 매장을 운영하세요.
            </span>
          </div>
        </div>
      )}
    </DefaultCardWrapper>
  );
};
