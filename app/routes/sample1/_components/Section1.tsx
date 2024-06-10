import { clsx } from 'clsx'

import { Box } from '../../_components/Box'
import { P } from '../../_components/P'

export const Section1 = ({ marginClassName }: { marginClassName?: string }) => {
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
        <p>{'Stacking Context と No Stacking Context'}</p>
        <p>{'Stacking Context > No Stacking Context'}</p>
        <p>{'注意: opacityをつけるとStacking Contextになる'}</p>
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
        positionClassName={''}
        sizeClassName="tw-h-[300px] tw-w-[300px]"
        colorClassName="tw-bg-yellow-50 tw-border-yellow-500"
      >
        <P>{'order: 2'}</P>
        <P>{'No Stacking Context'}</P>
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
