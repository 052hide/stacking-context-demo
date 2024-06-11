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
  <div style="position: absolute;" />
  <div style="position: relative;" />
  <div style="position: absolute;" />
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
- '同一階層のz-indexが同じ要素はDOMの出現順に表示される
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
              positionClassName={'tw-absolute tw-left-0 tw-top-[150px]'}
              sizeClassName="tw-h-[150px] tw-w-[180px]"
              colorClassName="tw-bg-red-50 tw-border-red-500"
            >
              <P>{'order: 1'}</P>
              <P>{'position: absolute'}</P>
            </Box>

            <Box
              positionClassName={'tw-relative'}
              sizeClassName="tw-h-[300px] tw-w-[300px]"
              colorClassName="tw-bg-yellow-50 tw-border-yellow-500"
            >
              <P>{'order: 2'}</P>
              <P>{'position: relative'}</P>
            </Box>

            <Box
              positionClassName={'tw-absolute tw-ml-[280px] tw-top-[150px]'}
              sizeClassName="tw-h-[150px] tw-w-[180px]"
              colorClassName="tw-bg-green-50 tw-border-green-500"
            >
              <P>{'order: 3'}</P>
              <P>{'position: absolute'}</P>
            </Box>
          </>
        )}
      </div>
    </div>
  )
}
