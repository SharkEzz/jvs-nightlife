import type { PropsWithChildren, ReactNode } from 'react';
import { Title } from '../Title';

export function PageLayout({
  children,
  title,
  extra = undefined,
}: PropsWithChildren<{ title: string; extra?: ReactNode }>) {
  return (
    <div className="flex flex-col gap-4 py-4">
      <div className="flex items-center justify-between">
        <Title>{title}</Title>
        {extra}
      </div>
      <hr />
      {children}
    </div>
  );
}
