'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/react-query';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { UIProvider } from '@/contexts/UIContext';

// 프로바이더 컴포넌트 Props 타입 정의
interface ProvidersProps {
  children: React.ReactNode;
}

// 프로바이더 컴포넌트
export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <UIProvider>
          {children}
        </UIProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
} 