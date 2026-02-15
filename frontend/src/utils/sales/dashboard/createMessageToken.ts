export const createMessageToken = (text: string, isHighlight?: boolean) => {
  return {
    text,
    isHighlight,
  };
};

export type MessageToken = ReturnType<typeof createMessageToken>;
