export const MAX_STORE_NAME_LENGTH = 15;

export const validateStoreName = (value: string) => {
  if (!value) {
    return '매장명을 입력해주세요.';
  }

  if (value.length > MAX_STORE_NAME_LENGTH) {
    return `매장명은 ${MAX_STORE_NAME_LENGTH}자 이내로 입력해주세요.`;
  }

  return true;
};
