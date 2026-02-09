import { StoreNameInput } from '@/components/onboarding/store-register/store-info-input-section/StoreNameInput';
import { useInitializeStoreName } from '@/hooks/setting/useInitializeStoreName';

interface SettingMyStoreNameProps {
  storeName: string;
}

export const SettingMyStoreName = ({ storeName }: SettingMyStoreNameProps) => {
  // 서버에서 받아온 값으로 RHF 폼 값을 초기화(덮어쓰기)
  useInitializeStoreName({ storeName });
  return <StoreNameInput />;
};
