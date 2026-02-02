import { Button } from '@/components/shared/shadcn-ui';
import { API_BASE_URL } from '@/constants/shared';

export const SignInButton = () => {
  const handleClickSignInWithGoogle = async () => {
    window.location.href = `${API_BASE_URL}/auth/google`;
  };
  return (
    <Button
      variant="ghost"
      className="rounded-300 bg-grey-200 flex h-fit w-80 items-center justify-start gap-12 px-5 py-[16.5px]"
      onClick={handleClickSignInWithGoogle}
    >
      <img src="/assets/icons/google.svg" alt="Google" />
      <span className="body-large-medium text-grey-900">
        Google 계정으로 로그인
      </span>
    </Button>
  );
};
