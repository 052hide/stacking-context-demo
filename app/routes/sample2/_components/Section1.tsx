import { clsx } from 'clsx'
import { useState } from 'react'

import { Box } from '../../_components/Box'
import { P } from '../../_components/P'

export const Section1 = ({ marginClassName }: { marginClassName?: string }) => {
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
  <div id="div1" style="position: absolute;" />
  <div id="div2">
    <div id="div2-1" style="position: absolute;" />
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
- z-index: autoのdiv1がposition: staticのdiv2より上に表示される
- div2はStackingContextを生成しないため、div1とdiv2-1が同一StackingContext内の要素として比較される
  - z-indexが同じ場合、後に出現した要素が上に表示されるため、div2-1がdiv1より上に表示される
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
              positionClassName={'tw-absolute tw-inset-x-0 tw-top-0'}
              sizeClassName={'tw-h-[100px]'}
              colorClassName={'tw-bg-green-50 tw-border-green-500'}
            >
              <P>{'div1'}</P>
            </Box>

            <Box
              positionClassName={''}
              sizeClassName={'tw-h-[300px]'}
              colorClassName={'tw-bg-red-50 tw-border-red-500'}
            >
              <div className={clsx('tw-py-[100px]')}>
                <P>{'div2'}</P>

                <Box
                  positionClassName={
                    'tw-absolute tw-left-[200px] tw-top-[80px]'
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
