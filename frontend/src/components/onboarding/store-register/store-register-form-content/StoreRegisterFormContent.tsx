import { STORE_REGISTER_STEP } from '@/constants/onboarding/store-register';
import { useStoreRegisterStepContext } from '@/hooks/onboarding/store-register';

import { BusinessRegistrationNumberInputSection } from '../business-registration-number-input-section';

export const StoreRegisterFormContent = () => {
  const { currentStep } = useStoreRegisterStepContext();
  switch (currentStep) {
    case STORE_REGISTER_STEP.BUSINESS_REGISTRATION_NUMBER:
      return <BusinessRegistrationNumberInputSection />;
    default:
      return <></>;
  }
};
