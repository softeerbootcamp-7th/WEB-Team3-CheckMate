import { NOTIFICATION_DATA } from '@/mocks/data/daily-report';

import { NotificationItem } from './NotificationItem';

export const NotificationList = () => {
  return (
    <ul className="mt-4 flex h-85 flex-col gap-4 overflow-y-scroll">
      {NOTIFICATION_DATA.map((notification, index) => (
        // key는 index로 임시 설정
        <NotificationItem key={index} notification={notification} />
      ))}
    </ul>
  );
};
