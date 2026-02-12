import { PosIntegrationMain } from '@/components/onboarding/pos-integration';
import { OnboardingSidebar } from '@/components/onboarding/shared';
import { OnboardingLayout } from '@/components/shared';
import { usePosIntegration } from '@/hooks/onboarding/pos-integration';

// TODO: POS 연동 상태 따른 section 조건부 렌더링 필요

export const PosIntegrationPage = () => {
  const { event } = usePosIntegration();

  return (
    <OnboardingLayout>
      <OnboardingLayout.Sidebar>
        <OnboardingSidebar />
      </OnboardingLayout.Sidebar>
      <OnboardingLayout.Main>
        <PosIntegrationMain eventData={event?.data} />
      </OnboardingLayout.Main>
    </OnboardingLayout>
  );
};
