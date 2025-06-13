import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// className을 병합하는 유틸리티 함수
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 