import type { ReactNode } from 'react';

export interface Program {
  id: string;
  title: string;
  path: string;
  tag: string;
  desc: string;
  projects: string[];
  icon: ReactNode;
  accent: string;
  num: string;
}

export interface Principle {
  label: string;
  icon: ReactNode;
}

export interface Metric {
  value: string;
  label: string;
  sub: string;
}