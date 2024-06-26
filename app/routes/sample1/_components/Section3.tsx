import { clsx } from 'clsx'
import { useState } from 'react'

import { Box } from '../../_components/Box'
import { P } from '../../_components/P'

export const Section3 = ({ marginClassName }: { marginClassName?: string }) => {
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
<div style="position: relative; z-index: 100;">
  <div id="div1" style="position: absolute; z-index: 3;" />
  <div id="div2" style="position: relative; z-index: 2;" />
  <div id="div3" style="position: absolute; z-index: 1;" />
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
- 同一StackingContext内でz-indexが異なる要素はz-indexの順番に表示される
`}
          </pre>
        ) : (
          <button
            type={'button'}
            className={clsx(
              'tw-h-[40px]',
              'tw-z-[100]',
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

      <div
        className={clsx(
          'tw-w-2/3',
          'tw-relative',
          marginClassName,
          'tw-flex tw-flex-col tw-gap-2',
          'tw-px-[120px] tw-py-8'
        )}
      >
        {showAnswer && (
          <>
            <Box
              positionClassName={
                'tw-absolute tw-z-[3] tw-left-0 tw-top-[150px]'
              }
              sizeClassName="tw-h-[150px] tw-w-[180px]"
              colorClassName="tw-bg-red-50 tw-border-red-500"
            >
              <P>{'div1'}</P>
            </Box>

            <Box
              positionClassName={'tw-relative tw-z-[2]'}
              sizeClassName="tw-h-[300px] tw-w-[300px]"
              colorClassName="tw-bg-yellow-50 tw-border-yellow-500"
            >
              <P>{'div2'}</P>
            </Box>

            <Box
              positionClassName={
                'tw-absolute tw-z-[1] tw-ml-[280px] tw-top-[150px]'
              }
              sizeClassName="tw-h-[150px] tw-w-[180px]"
              colorClassName="tw-bg-green-50 tw-border-green-500"
            >
              <P>{'div3'}</P>
            </Box>
          </>
        )}
      </div>
    </div>
  )
}
