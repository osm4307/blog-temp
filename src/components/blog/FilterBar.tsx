import React from 'react';

// 필터 옵션 타입 정의
export interface FilterOption {
  id: string;
  label: string;
}

// 필터바 컴포넌트 Props 타입 정의
interface FilterBarProps {
  options: FilterOption[];
  selectedFilter: string;
  onFilterChange: (filterId: string) => void;
}

// 필터바 컴포넌트
const FilterBar = ({ options, selectedFilter, onFilterChange }: FilterBarProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => onFilterChange(option.id)}
          className={`rounded-full px-4 py-2 text-sm font-medium transition-colors
            ${
              selectedFilter === option.id
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar; 