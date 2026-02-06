import { useLocation } from 'react-router-dom';

import { getChatRecommendedQuestions } from '@/constants/ai-chat';

import { RecommendedQuestionItem } from './RecommendedQuestionItem';

interface RecommendedQuestionListProps {
  onQuestionSelect: (question: string) => void;
}

export const RecommendedQuestionList = ({
  onQuestionSelect,
}: RecommendedQuestionListProps) => {
  const location = useLocation();
  const questions = getChatRecommendedQuestions(location.pathname);

  return (
    <ul className="flex flex-col gap-150">
      {questions.map((question) => (
        <RecommendedQuestionItem
          key={question}
          question={question}
          onSelect={onQuestionSelect}
        />
      ))}
    </ul>
  );
};
