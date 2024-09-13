import type { PropsWithChildren } from 'react';

export function Title({ children }: PropsWithChildren) {
  return <h1 className="text-2xl font-bold">{children}</h1>;
}
