import { clsx } from 'clsx'

import type { ReactNode } from 'react'

export const Box = ({
  children,
  positionClassName,
  sizeClassName,
  colorClassName,
}: {
  children: ReactNode
  positionClassName: string
  sizeClassName: string
  colorClassName: string
}) => {
  return (
    <div
      className={clsx(
        'tw-rounded  tw-border-4 tw-border-dotted tw-px-6 tw-py-4',
        positionClassName,
        sizeClassName,
        colorClassName
      )}
    >
      {children}
    </div>
  )
}
