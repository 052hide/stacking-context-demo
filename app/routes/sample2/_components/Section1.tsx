import { clsx } from 'clsx'

import { Box } from '../../_components/Box'
import { P } from '../../_components/P'

export const Section1 = ({ marginClassName }: { marginClassName?: string }) => {
  return (
    <div className={clsx('tw-relative', marginClassName)}>
      <Box
        positionClassName={'tw-absolute tw-inset-x-0 tw-top-0'}
        sizeClassName={'tw-h-[100px]'}
        colorClassName={'tw-bg-green-50 tw-border-green-500'}
      >
        <P>{'order: 1'}</P>
        <P>{'Header'}</P>
        <P>{'Stacking Context'}</P>
      </Box>

      <Box
        positionClassName={''}
        sizeClassName={'tw-h-[300px]'}
        colorClassName={'tw-bg-red-50 tw-border-red-500'}
      >
        <div className={clsx('tw-py-[100px]')}>
          <P>{'order: 2'}</P>
          <P>{'No Stacking Context'}</P>

          <Box
            positionClassName={'tw-absolute tw-left-[200px] tw-top-[80px]'}
            sizeClassName={'tw-h-[200px] tw-w-[400px]'}
            colorClassName={'tw-bg-yellow-50 tw-border-yellow-500'}
          >
            <P>{'order: 2.1'}</P>
            <P>{'Stacking Context'}</P>
          </Box>
        </div>
      </Box>

      <p>
        {
          'StackingContextであるOrder1がStackingContextではないOrder2の上に表示される'
        }
      </p>
      <p>
        {
          'Order2はStackingContextではないため、その下のOrder2.1がOrder1と比較対象のStackingContextとなり、Order2.1がOrder1より上に表示される'
        }
      </p>
    </div>
  )
}
