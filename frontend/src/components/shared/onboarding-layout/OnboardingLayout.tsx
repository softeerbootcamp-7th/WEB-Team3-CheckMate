import type { PropsWithChildren } from 'react';

import { cn } from '@/utils/shared/lib/utils';

interface OnboardingLayoutProps extends PropsWithChildren {
  className?: string;
}

export const OnboardingLayout = ({
  children,
  className,
}: OnboardingLayoutProps) => {
  return (
    <div className={cn('grid size-full grid-cols-[300px_1fr]', className)}>
      {children}
    </div>
  );
};

const OnboardingSidebar = ({ children, className }: OnboardingLayoutProps) => {
  return (
    <aside className={cn('bg-special-dashboard-bg size-full', className)}>
      {children}
    </aside>
  );
};

const OnboardingMain = ({ children, className }: OnboardingLayoutProps) => {
  return (
    <main className={cn('bg-special-card-bg size-full', className)}>
      {children}
    </main>
  );
};

OnboardingLayout.Sidebar = OnboardingSidebar;
OnboardingLayout.Main = OnboardingMain;
