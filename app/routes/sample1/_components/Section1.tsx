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
<div style="position: relative; z-index: 100;">
  <div id="div1" style="position: relative;" />
  <div id="div2" />
  <div id="div3" style="position: absolute;" />
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
- 同一StackingContext内でposition: staticの要素より、position: static以外の要素 (z-index: autoの要素) が上に表示される
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
          'tw-z-[100]',
          marginClassName,
          'tw-flex tw-flex-col tw-gap-2',
          'tw-px-[120px] tw-py-8'
        )}
      >
        {showAnswer && (
          <>
            <div>
              <Box
                positionClassName={'tw-relative tw-ml-[-150px] tw-mt-[50px]'}
                sizeClassName="tw-h-[150px] tw-w-[180px]"
                colorClassName="tw-bg-red-50 tw-border-red-500"
              >
                <P>{'div1'}</P>
              </Box>

              <Box
                positionClassName={'tw-mt-[-250px]'}
                sizeClassName="tw-h-[300px] tw-w-[300px]"
                colorClassName="tw-bg-yellow-50 tw-border-yellow-500"
              >
                <P>{'div2'}</P>
              </Box>

              <Box
                positionClassName={'tw-absolute tw-ml-[280px] tw-top-[80px]'}
                sizeClassName="tw-h-[150px] tw-w-[180px]"
                colorClassName="tw-bg-green-50 tw-border-green-500"
              >
                <P>{'div3'}</P>
              </Box>
            </div>

            <div className={clsx('tw-mt-16', 'tw-relative')}>
              <Box
                positionClassName={'tw-relative tw-ml-[-150px] tw-mt-[50px]'}
                sizeClassName="tw-h-[150px] tw-w-[180px]"
                colorClassName="tw-bg-red-50 tw-border-red-500"
              >
                <P>{'div1'}</P>
              </Box>

              <Box
                positionClassName={'tw-mt-[-250px]'}
                sizeClassName="tw-h-[300px] tw-w-[300px]"
                colorClassName="tw-bg-yellow-50 tw-border-yellow-500 tw-opacity-[0.9]"
              >
                <P>{'div2'}</P>
                <P>{'opacity: 0.9'}</P>
              </Box>

              <Box
                positionClassName={'tw-absolute tw-ml-[280px] tw-top-[80px]'}
                sizeClassName="tw-h-[150px] tw-w-[180px]"
                colorClassName="tw-bg-green-50 tw-border-green-500"
              >
                <P>{'div3'}</P>
              </Box>
              <p className={clsx('tw-mt-4')}>
                {
                  '※ opacity: 1未満など特定のスタイルを当てるだけでz-index: auto扱いになるため注意'
                }
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
