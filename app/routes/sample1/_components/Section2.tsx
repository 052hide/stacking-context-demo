import { clsx } from 'clsx'

import { Box } from '../../_components/Box'
import { P } from '../../_components/P'

export const Section2 = ({ marginClassName }: { marginClassName?: string }) => {
  return (
    <div
      className={clsx(
        'tw-relative',
        marginClassName,
        'tw-flex tw-flex-col tw-gap-2',
        'tw-px-[120px] tw-py-8'
      )}
    >
      <div>
        <p>{'Stacking Context 同士 (z-index同じ)'}</p>
        <p>{'DOMの順番'}</p>
      </div>

      <Box
        positionClassName={'tw-absolute tw-left-0 tw-top-[200px]'}
        sizeClassName="tw-h-[150px] tw-w-[150px]"
        colorClassName="tw-bg-red-50 tw-border-red-500"
      >
        <P>{'order: 1'}</P>
        <P>{'Stacking Context'}</P>
      </Box>

      <Box
        positionClassName={'tw-relative'}
        sizeClassName="tw-h-[300px] tw-w-[300px]"
        colorClassName="tw-bg-yellow-50 tw-border-yellow-500"
      >
        <P>{'order: 2'}</P>
        <P>{'Stacking Context'}</P>
      </Box>

      <Box
        positionClassName={'tw-absolute tw-ml-[280px] tw-top-[200px]'}
        sizeClassName="tw-h-[150px] tw-w-[150px]"
        colorClassName="tw-bg-green-50 tw-border-green-500"
      >
        <P>{'order: 3'}</P>
        <P>{'Stacking Context'}</P>
      </Box>
    </div>
  )
}
