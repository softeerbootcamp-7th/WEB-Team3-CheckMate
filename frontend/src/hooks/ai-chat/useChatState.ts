import { useState } from 'react';

interface ChatState {
  didStartChat: boolean;
  selectedQuestion: string | null;
}

export const useChatState = (): [
  ChatState,
  {
    setDidStartChat: (value: boolean) => void;
    setSelectedQuestion: (value: string | null) => void;
  },
] => {
  const [didStartChat, setDidStartChat] = useState<boolean>(false);
  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(null);

  return [
    { didStartChat, selectedQuestion },
    { setDidStartChat, setSelectedQuestion },
  ];
};
