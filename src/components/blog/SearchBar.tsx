import React from 'react';
import { useUI } from '@/contexts/UIContext';

// 검색바 컴포넌트 Props 타입 정의
interface SearchBarProps {
  onSearch: (query: string) => void;
}

// 검색바 컴포넌트
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const { uiState, toggleSearch } = useUI();
  const [searchQuery, setSearchQuery] = React.useState('');

  // 검색어 변경 핸들러
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <div className="relative w-full max-w-sm">
      <input
        type="text"
        placeholder="검색어를 입력하세요..."
        value={searchQuery}
        onChange={handleSearch}
        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      />
      <button
        onClick={toggleSearch}
        className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar; 