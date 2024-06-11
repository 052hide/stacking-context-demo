import { clsx } from 'clsx'
import { useState } from 'react'

import { Box } from '../../_components/Box'
import { P } from '../../_components/P'

export const Section2 = ({ marginClassName }: { marginClassName?: string }) => {
  const [showAnswer, setShowAnswer] = useState<boolean>(false)

  return (
    <div className={clsx('tw-flex tw-gap-16')}>
      <div
        className={clsx('tw-w-1/3', 'tw-flex tw-flex-col tw-gap-4', 'tw-p-4')}
      >
        <pre
          className={clsx(
            'tw-rounded',
            'tw-p-4',
            'tw-bg-neutral-100',
            'tw-whitespace-break-spaces tw-break-all'
          )}
        >
          {`
<div style="position: relative;">
  <div style="position: absolute; z-index: 2;" />
  <div style="position: relative; z-index: 1;" />
    <div style="position: absolute; z-index: 3;" />
  </div>
</div>
`}
        </pre>

        {showAnswer ? (
          <pre
            className={clsx(
              'tw-rounded',
              'tw-p-4',
              'tw-bg-red-50',
              'tw-whitespace-break-spaces tw-break-all'
            )}
          >
            {`
- order1とorder2がStackingContext内の同一階層の要素として比較される
  - order2のz-indexがorder1より大きいため、order2がorder1より上に表示される
- order1とorder2.1は異なるStackingContext内の要素なので、order2.1のz-indexがorder1より大きいが、order1がorder2.1より上に表示される
`}
          </pre>
        ) : (
          <button
            type={'button'}
            className={clsx(
              'tw-h-[40px]',
              'tw-rounded',
              'tw-px-2',
              'tw-bg-indigo-600 tw-text-white'
            )}
            onClick={() => setShowAnswer(true)}
          >
            {'答え'}
          </button>
        )}
      </div>
      <div className={clsx('tw-w-2/3', 'tw-relative', marginClassName)}>
        {showAnswer && (
          <>
            <Box
              positionClassName={'tw-absolute tw-inset-x-0 tw-top-0 tw-z-[2]'}
              sizeClassName={'tw-h-[100px]'}
              colorClassName={'tw-bg-green-50 tw-border-green-500'}
            >
              <P>{'order: 1'}</P>
              <P>{'position: absolute'}</P>
              <P>{'z-index: 2'}</P>
            </Box>

            <Box
              positionClassName={'tw-relative tw-z-[1]'}
              sizeClassName={'tw-h-[300px]'}
              colorClassName={'tw-bg-red-50 tw-border-red-500'}
            >
              <div className={clsx('tw-py-[100px]')}>
                <P>{'order: 2'}</P>
                <P>{'position: relative'}</P>
                <P>{'z-index: 1'}</P>

                <Box
                  positionClassName={
                    'tw-absolute tw-z-[3] tw-left-[200px] tw-top-[80px]'
                  }
                  sizeClassName={'tw-h-[200px] tw-w-[400px]'}
                  colorClassName={'tw-bg-yellow-50 tw-border-yellow-500'}
                >
                  <P>{'order: 2.1'}</P>
                  <P>{'position: absolute'}</P>
                  <P>{'z-index: 3'}</P>
                </Box>
              </div>
            </Box>
          </>
        )}
      </div>
    </div>
  )
}
