import { http, HttpResponse } from 'msw';

import type { SuccessResponse } from '@/services/shared';
import type { PostBusinessRegistrationNumberResponseDto } from '@/types/onboarding/store-register';

export const storeRegisterHandler = [
  http.post('/api/stores/business/verify', () => {
    return HttpResponse.json<
      SuccessResponse<PostBusinessRegistrationNumberResponseDto>
    >(
      {
        success: true,
        data: { businessAuthToken: 'mock-business-auth-token' },
        message: '사업자 인증 성공',
        errorCode: '',
      },
      { status: 201 },
    );
  }),
];
