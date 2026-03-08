import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSkillIconUrl(icons: string[], theme: 'light' | 'dark' = 'dark') {
  return `https://skillicons.dev/icons?i=${icons.join(',')}&theme=${theme}`;
}

export function getStreakStatsUrl(username: string, theme: string) {
  return `https://streak-stats.demolab.com/?user=${username}&theme=${theme}`;
}
