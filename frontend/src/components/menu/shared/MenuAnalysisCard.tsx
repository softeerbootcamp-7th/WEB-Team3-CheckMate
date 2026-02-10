import type { ComponentProps, PropsWithChildren } from 'react';

import { cn } from '@/utils/shared';

interface MenuAnalysisCardProps
  extends PropsWithChildren, ComponentProps<'article'> {
  title?: string;
  className?: string;
}

export const MenuAnalysisCard = ({
  title,
  className,
  children,
  ...props
}: MenuAnalysisCardProps) => {
  return (
    <article className={cn('card', className)} {...props}>
      {title && <h3>{title}</h3>}
      {children}
    </article>
  );
};
