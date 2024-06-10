import { clsx } from 'clsx'

import type { ReactNode } from 'react'

export const P = ({ children }: { children: ReactNode }) => {
  return <p className={clsx('tw-text-xs')}>{children}</p>
}
