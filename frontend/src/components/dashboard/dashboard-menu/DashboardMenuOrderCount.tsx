import { useNavigate } from 'react-router-dom';

import { DefaultCardWrapper } from '@/components/shared';
import {
  DASHBOARD_METRIC_CARDS,
  DASHBOARD_METRICS,
  type ExtractCardCodes,
} from '@/constants/dashboard';

type TimeBasedMenuOrderCountCardCode = ExtractCardCodes<
  typeof DASHBOARD_METRICS.MENU.sections.MENU_SALES_PATTERN.items.TIME_BASED_MENU_ORDER_COUNT
>;

// 메뉴분석 > 시간대별 메뉴 주문건수 가장 많은 메뉴
interface DashboardMenuOrderCountProps {
  cardCode: TimeBasedMenuOrderCountCardCode;
}

// 메뉴 주문건수
export const DashboardMenuOrderCount = ({
  cardCode,
}: DashboardMenuOrderCountProps) => {
  const cardInfo = DASHBOARD_METRIC_CARDS[cardCode];

  const navigate = useNavigate();
  // 데이터 정보
  const displayedOrderTopMenu = {
    menuName: '아메리카노(ICE)',
    timeLine: '8-10',
  };
  return (
    <DefaultCardWrapper
      width={340 * cardInfo.sizeX}
      height={228 * cardInfo.sizeY}
      title={cardInfo.label}
      hasChevronRightIcon={true}
      onClickChevronRightIcon={() => {
        navigate('analysis/menu');
      }}
    >
      <p>
        <span className="title-large-bold text-brand-main">
          {displayedOrderTopMenu.menuName}는 {displayedOrderTopMenu.timeLine}시
        </span>
        <br />
        <span className="title-large-semibold text-grey-900">
          주문이 가장 많아요
        </span>
      </p>
    </DefaultCardWrapper>
  );
};
