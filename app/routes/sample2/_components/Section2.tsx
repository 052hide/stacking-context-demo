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
  <div id="div1" style="position: absolute; z-index: 2;" />
  <div id="div2" style="position: relative; z-index: 1;" />
    <div id="div2-1" style="position: absolute; z-index: 3;" />
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
- div1とdiv2が同一StackingContext内の要素として比較される
  - div2のz-indexがdiv1より大きいため、div2がdiv1より上に表示される
- div1とdiv2-1は異なるStackingContext内の要素なので、div2-1のz-indexがdiv1より大きい、div1がdiv2-1より上に表示される
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
              <P>{'div1'}</P>
            </Box>

            <Box
              positionClassName={'tw-relative tw-z-[1]'}
              sizeClassName={'tw-h-[300px]'}
              colorClassName={'tw-bg-red-50 tw-border-red-500'}
            >
              <div className={clsx('tw-py-[100px]')}>
                <P>{'div2'}</P>

                <Box
                  positionClassName={
                    'tw-absolute tw-z-[3] tw-left-[200px] tw-top-[80px]'
                  }
                  sizeClassName={'tw-h-[200px] tw-w-[400px]'}
                  colorClassName={'tw-bg-yellow-50 tw-border-yellow-500'}
                >
                  <P>{'div2-1'}</P>
                </Box>
              </div>
            </Box>
          </>
        )}
      </div>
    </div>
  )
}
