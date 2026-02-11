import { Link } from 'react-router-dom';

import CardsIcon from '@/assets/icons/cards.svg?react';
import { ROUTE_PATHS } from '@/constants/shared';

interface DashboardEditButtonProps {
  tabName?: string;
}
export const DashboardEditButton = ({
  tabName = '홈 대시보드', // 임시
}: DashboardEditButtonProps) => {
  return (
    <Link
      to={{
        pathname: ROUTE_PATHS.DASHBOARD.EDIT,
        search: `?tab=${tabName}`,
      }}
      aria-label="현재 탭의 지표카드 편집"
      className="bg-grey-0 text-grey-700 body-medium-medium rounded-200 flex w-fit gap-200 border-none p-300 pl-250 shadow-none"
    >
      <CardsIcon className="size-5" />
      카드 편집
    </Link>
  );
};
