import type { PropsWithChildren } from 'react';

export function FormControl({ children }: PropsWithChildren) {
  return <div className="flex items-center gap-4">{children}</div>;
}
