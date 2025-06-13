import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// 사이드바 메뉴 아이템 타입 정의
interface SidebarItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
}

// 사이드바 컴포넌트 Props 타입 정의
interface SidebarProps {
  items: SidebarItem[];
  className?: string;
}

// Sidebar 컴포넌트
const Sidebar = ({ items, className }: SidebarProps) => {
  return (
    <div className={cn('pb-12', className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            카테고리
          </h2>
          <div className="space-y-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center rounded-lg px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
              >
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar; 