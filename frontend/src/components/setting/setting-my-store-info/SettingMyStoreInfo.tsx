import type { BusinessHour } from '@/types/shared';

import { SettingMyStoreBusinessHours } from '../setting-my-store-business-hours';
import { SettingMyStoreName } from '../setting-my-store-name';
import { SettingMyStoreSalesClosingTime } from '../setting-my-store-sales-closing-time';

interface SettingMyStoreInfoProps {
  storeName: string;
  salesClosingTime: number;
  businessHours: BusinessHour[];
}

export const SettingMyStoreInfo = ({
  storeName,
  salesClosingTime,
  businessHours,
}: SettingMyStoreInfoProps) => {
  return (
    <section className="rounded-400 bg-special-card-bg w-260 px-8 pt-6 pb-9">
      <div>
        <span className="title-small-bold text-grey-900">내 매장 정보</span>
        <div className="bg-grey-300 mt-6 h-0.5 w-244.5" />
        <div className="mt-4 grid grid-cols-2">
          <div className="flex w-95 flex-col gap-12.5">
            <SettingMyStoreName storeName={storeName} />
            <SettingMyStoreSalesClosingTime
              salesClosingTime={salesClosingTime}
            />
          </div>
          <SettingMyStoreBusinessHours storeBusinessHours={businessHours} />
        </div>
      </div>
    </section>
  );
};
