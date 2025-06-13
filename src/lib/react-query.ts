import { QueryClient } from '@tanstack/react-query';

// React Query 클라이언트 생성
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 기본 설정
      refetchOnWindowFocus: false, // 윈도우 포커스 시 자동 리페치 비활성화
      retry: 1, // 실패 시 1번만 재시도
      staleTime: 5 * 60 * 1000, // 5분 동안 데이터를 신선한 상태로 유지
      gcTime: 10 * 60 * 1000, // 10분 동안 캐시 유지
    },
  },
}); 