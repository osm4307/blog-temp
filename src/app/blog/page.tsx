import React from 'react';
import SearchBar from '@/components/blog/SearchBar';
import FilterBar from '@/components/blog/FilterBar';
import { Card } from '@/components/ui/Card';

// 임시 데이터
const POSTS = [
  {
    id: 1,
    title: 'React와 TypeScript로 블로그 만들기',
    description: 'React와 TypeScript를 사용하여 블로그를 만드는 방법을 알아봅니다.',
    date: '2024-03-20',
    author: '홍길동',
    category: 'development',
  },
  {
    id: 2,
    title: 'TailwindCSS로 아름다운 UI 만들기',
    description: 'TailwindCSS를 사용하여 아름다운 UI를 만드는 방법을 알아봅니다.',
    date: '2024-03-19',
    author: '김철수',
    category: 'design',
  },
  {
    id: 3,
    title: 'Next.js 14의 새로운 기능들',
    description: 'Next.js 14에서 추가된 새로운 기능들을 살펴봅니다.',
    date: '2024-03-18',
    author: '이영희',
    category: 'development',
  },
];

// 필터 옵션
const FILTER_OPTIONS = [
  { id: 'all', label: '전체' },
  { id: 'development', label: '개발' },
  { id: 'design', label: '디자인' },
  { id: 'life', label: '일상' },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedFilter, setSelectedFilter] = React.useState('all');

  // 검색어와 필터에 따라 포스트 필터링
  const filteredPosts = POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || post.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">블로그 포스트</h1>
      
      <div className="mb-8 space-y-4">
        <SearchBar onSearch={setSearchQuery} />
        <FilterBar
          options={FILTER_OPTIONS}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-semibold">{post.title}</h2>
              <p className="mb-4 text-muted-foreground">{post.description}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
          </Card>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="mt-8 text-center text-muted-foreground">
          검색 결과가 없습니다.
        </div>
      )}
    </div>
  );
} 