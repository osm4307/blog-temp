import React from 'react';
import Link from 'next/link';

// Footer 컴포넌트
const Footer = () => {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built by{' '}
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Your Name
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/yourusername/blog"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            href="/terms"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            이용약관
          </Link>
          <Link
            href="/privacy"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            개인정보처리방침
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 