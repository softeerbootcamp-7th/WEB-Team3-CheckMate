import { useEffect } from 'react';

interface UseAutoScrollOptions {
  enabled: boolean;
  dependencies?: React.DependencyList;
  containerId?: string;
}

export const useAutoScroll = ({
  enabled,
  dependencies = [],
  containerId = 'chat-history-wrapper',
}: UseAutoScrollOptions) => {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const wrapper = document.getElementById(containerId);
    if (!wrapper) {
      return;
    }

    wrapper.scrollTo({ top: wrapper.scrollHeight, behavior: 'smooth' });
  }, [enabled, containerId, dependencies]);
};
