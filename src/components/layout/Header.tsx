import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

// Header 컴포넌트
const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">Blog</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="/blog" className="transition-colors hover:text-foreground/80">
              블로그
            </Link>
            <Link href="/about" className="transition-colors hover:text-foreground/80">
              소개
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              로그인
            </Button>
            <Button size="sm">
              회원가입
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 