import type { PropsWithChildren } from 'react';

export const OnboardingLayout = ({ children }: PropsWithChildren) => {
  return <div className="onboarding-layout">{children}</div>;
};

const OnboardingSidebar = ({ children }: PropsWithChildren) => {
  return (
    <aside
      className="bg-special-dashboard-bg size-full"
      style={{ gridArea: 'sidebar' }}
    >
      {children}
    </aside>
  );
};

const OnboardingMain = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-special-card-bg size-full" style={{ gridArea: 'main' }}>
      {children}
    </main>
  );
};

const OnboardingFooter = ({ children }: PropsWithChildren) => {
  return (
    <footer
      className="bg-special-card-bg size-full"
      style={{ gridArea: 'footer' }}
    >
      {children}
    </footer>
  );
};

OnboardingLayout.Sidebar = OnboardingSidebar;
OnboardingLayout.Main = OnboardingMain;
OnboardingLayout.Footer = OnboardingFooter;
