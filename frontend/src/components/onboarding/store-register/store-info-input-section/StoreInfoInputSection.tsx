import { useFormContext } from 'react-hook-form';

import { STORE_REGISTER_FORM_FIELD } from '@/constants/onboarding/store-register';
import type { StoreRegisterForm } from '@/types/onboarding/store-register';

import { StoreRegisterFormTitle } from '../store-register-form-title';
import { StoreRegisterStepButtonGroup } from '../store-register-step-button-group';

import { StoreAddressInput } from './StoreAddressInput';
import { StoreNameInput } from './StoreNameInput';

export const StoreInfoInputSection = () => {
  const {
    watch,
    formState: { isValid },
  } = useFormContext<StoreRegisterForm>();

  const isStoreInfoValid =
    watch(STORE_REGISTER_FORM_FIELD.STORE_NAME) &&
    watch(STORE_REGISTER_FORM_FIELD.ZONE_CODE) &&
    watch(STORE_REGISTER_FORM_FIELD.ROAD_ADDRESS) &&
    isValid;

  return (
    <>
      <StoreRegisterFormTitle
        title={`매장 정보를 입력하면 \n 맞춤형 서비스를 제공해요`}
      />
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-9">
          <StoreNameInput />
          <StoreAddressInput />
        </div>
        <StoreRegisterStepButtonGroup disable={!isStoreInfoValid} />
      </div>
    </>
  );
};
