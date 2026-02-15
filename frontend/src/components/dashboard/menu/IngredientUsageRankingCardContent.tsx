// 대시보드>메뉴분석에서 식재료별 소진량 랭킹 카드
import { useMemo } from 'react';

import type { DashboardRankItem } from '@/types/dashboard/menu';
import type {
  GetIngredientUsageRankingResponseDto,
  IngredientUsage,
} from '@/types/menu/dto';
import type { Nullable } from '@/utils/shared';

import { DashboardRankingContent } from './DashboardRankingContent';
import { IngredientUnregisteredContent } from './IngredientUnregisteredContent';

// dto를 대시보드의 식재료 소진량 랭킹 카드 UI에서 사용하는 데이터 형태로 변환
interface GetDashboardIngredientRankItemsParams {
  items: IngredientUsage[] | null;
}
const getDashboardIngredientRankItems = ({
  items,
}: GetDashboardIngredientRankItemsParams): DashboardRankItem[] => {
  if (!items) {
    return [];
  }
  // 사용량 기준으로 내림차순 정렬
  // 단 kg , L 단위는 g, ml로 변환하여 비교해야 함
  const sortedItems = [...items].sort((a, b) => {
    const aQuantity =
      a.baseUnit === 'kg' || a.baseUnit === 'L'
        ? a.totalQuantity * 1000
        : a.totalQuantity;
    const bQuantity =
      b.baseUnit === 'kg' || b.baseUnit === 'L'
        ? b.totalQuantity * 1000
        : b.totalQuantity;
    return bQuantity - aQuantity;
  });
  return sortedItems.map((item, index) => ({
    rank: index + 1,
    itemName: item.ingredientName,
    totalAmount: item.totalQuantity,
    unit: item.baseUnit as DashboardRankItem['unit'],
  }));
};

// 편집 패널에서 보여질 데이터
const EXAMPLE_HAS_INGREDIENT = true;
const EXAMPLE_INGREDIENT_USAGE = [
  {
    ingredientName: '우유',
    totalQuantity: 3921,
    baseUnit: 'ml',
  },
  {
    ingredientName: '케냐산 원두',
    totalQuantity: 1200,
    baseUnit: 'g',
  },
  {
    ingredientName: '생딸기',
    totalQuantity: 840,
    baseUnit: 'g',
  },
  {
    ingredientName: '감자',
    totalQuantity: 1,
    baseUnit: 'kg',
  },
];

interface IngredientUsageRankingCardContentProps extends Nullable<GetIngredientUsageRankingResponseDto> {
  className?: string;
}

export const IngredientUsageRankingCardContent = ({
  hasIngredient = EXAMPLE_HAS_INGREDIENT,
  items = EXAMPLE_INGREDIENT_USAGE,
}: IngredientUsageRankingCardContentProps) => {
  // dto -> 대시보드의 메뉴>식재료 소진량 랭킹 카드 UI 데이터 형태로 변환
  const ingredientRankItems = useMemo(
    () => getDashboardIngredientRankItems({ items }),
    [items],
  );
  // 등록된 식재료가 없는 경우 카드 내용
  if (!hasIngredient) {
    return <IngredientUnregisteredContent />;
  }
  // tHeadLabels를 통해 테이블 각 열의 이름을 지정
  return (
    <DashboardRankingContent tHeadLabels={['순위', '식재료명', '소진량']}>
      <DashboardRankingContent.TableBody rankItems={ingredientRankItems} />
    </DashboardRankingContent>
  );
};
