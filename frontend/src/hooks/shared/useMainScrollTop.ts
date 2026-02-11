import { type RefObject, useCallback } from 'react';
import { useOutletContext } from 'react-router-dom';

export const useMainScrollTop = () => {
  const { mainRef } = useOutletContext<{
    mainRef: RefObject<HTMLDivElement>;
  }>();

  const handleMainScrollToTop = useCallback(() => {
    if (!mainRef) {
      return;
    }
    mainRef.current?.scrollTo(0, 0);
  }, [mainRef]);

  return { handleMainScrollToTop };
};
