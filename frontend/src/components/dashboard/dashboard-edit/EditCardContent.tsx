import {
  IngredientUsageRankingCardContent,
  MenuSalesRankingCardContent,
  PopularMenuCombinationCardContent,
  TimeSlotMenuOrderCountCardContent,
} from '@/components/menu';
import type { MetricCardCode } from '@/constants/dashboard';
import {
  INGREDIENT_USAGE_RANKING,
  MENU_SALES_RANKING,
  ORDER_COUNT,
  POPULAR_MENU_COMBINATION,
} from '@/constants/menu';

interface EditCardContentProps {
  cardCode: MetricCardCode;
}

const { EXAMPLE_HAS_INGREDIENT, EXAMPLE_INGREDIENT_USAGE_RANKING_ITEMS } =
  INGREDIENT_USAGE_RANKING;
const { EXAMPLE_MENU_SALES_RANKING_ITEMS } = MENU_SALES_RANKING;
const { EXAMPLE_TIME_SLOT_2H, EXAMPLE_MENU_NAME } = ORDER_COUNT;
const { EXAMPLE_FIRST_MENU_NAME, EXAMPLE_SECOND_MENU_NAME } =
  POPULAR_MENU_COMBINATION;
export const EditCardContent = ({ cardCode }: EditCardContentProps) => {
  switch (cardCode) {
    case 'MNU_01_01':
    case 'MNU_01_04':
    case 'MNU_01_05':
      return (
        <MenuSalesRankingCardContent items={EXAMPLE_MENU_SALES_RANKING_ITEMS} />
      );
    case 'MNU_03_01':
      return (
        <TimeSlotMenuOrderCountCardContent
          timeSlot2H={EXAMPLE_TIME_SLOT_2H}
          menuName={EXAMPLE_MENU_NAME}
        />
      );
    case 'MNU_04_01':
      return (
        <IngredientUsageRankingCardContent
          hasIngredient={EXAMPLE_HAS_INGREDIENT}
          items={EXAMPLE_INGREDIENT_USAGE_RANKING_ITEMS}
        />
      );
    case 'MNU_05_04':
      return (
        <PopularMenuCombinationCardContent
          firstMenuName={EXAMPLE_FIRST_MENU_NAME}
          secondMenuName={EXAMPLE_SECOND_MENU_NAME}
        />
      );
    default:
      return null;
  }
};
