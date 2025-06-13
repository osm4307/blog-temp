'use client';

import React, { createContext, useContext, useState } from 'react';

// UI 상태 타입 정의
interface UIState {
  isSidebarOpen: boolean;
  isSearchOpen: boolean;
}

// Context 타입 정의
interface UIContextType {
  uiState: UIState;
  toggleSidebar: () => void;
  toggleSearch: () => void;
}

// Context 생성
const UIContext = createContext<UIContextType | undefined>(undefined);

// Context Provider Props 타입 정의
interface UIProviderProps {
  children: React.ReactNode;
}

// Context Provider 컴포넌트
export function UIProvider({ children }: UIProviderProps) {
  const [uiState, setUIState] = useState<UIState>({
    isSidebarOpen: false,
    isSearchOpen: false,
  });

  // 사이드바 토글 함수
  const toggleSidebar = () => {
    setUIState((prev) => ({
      ...prev,
      isSidebarOpen: !prev.isSidebarOpen,
    }));
  };

  // 검색 토글 함수
  const toggleSearch = () => {
    setUIState((prev) => ({
      ...prev,
      isSearchOpen: !prev.isSearchOpen,
    }));
  };

  return (
    <UIContext.Provider value={{ uiState, toggleSidebar, toggleSearch }}>
      {children}
    </UIContext.Provider>
  );
}

// Context 사용을 위한 Hook
export function useUI() {
  const context = useContext(UIContext);
  if (context === undefined) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
} 