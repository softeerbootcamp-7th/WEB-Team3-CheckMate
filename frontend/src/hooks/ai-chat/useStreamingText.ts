import { useEffect, useState } from 'react';

interface UseStreamingTextOptions {
  text: string;
  enabled: boolean;
  speed?: number;
}

export const useStreamingText = ({
  text,
  enabled,
  speed = 30,
}: UseStreamingTextOptions) => {
  const [displayedText, setDisplayedText] = useState(enabled ? '' : text);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.slice(0, currentIndex + 1));
      currentIndex++;
      if (currentIndex >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, enabled, speed]);

  return displayedText;
};
