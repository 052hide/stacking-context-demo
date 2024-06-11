import { clsx } from 'clsx'
import { useState } from 'react'

export const Section1 = () => {
  const [withIsolate, setWithIsolate] = useState<boolean>(false)

  return (
    <div className={clsx('tw-relative', 'tw-z-[1]')}>
      <div className={clsx(withIsolate && 'tw-isolate')}>
        <p>{'main content'}</p>
        <p className={clsx('tw-fixed', 'tw-z-[9999]', 'tw-bg-white')}>
          {'メインコンテンツ内のz-indexが強い要素'}
        </p>
      </div>
      <div
        className={clsx(
          'tw-fixed',
          'tw-left-0 tw-top-0',
          'tw-h-screen tw-w-screen',
          'tw-bg-black/50',
          'tw-overscroll-none'
        )}
      >
        <div
          className={clsx(
            'tw-mx-auto tw-mt-[120px]',
            'tw-rounded',
            'tw-overflow-auto',
            'tw-relative',
            'tw-h-[400px] tw-w-[640px]',
            'tw-bg-white'
          )}
        >
          <div
            className={clsx(
              'tw-sticky',
              'tw-top-0',
              'tw-p-4',
              'tw-bg-neutral-100'
            )}
          >
            {withIsolate
              ? '今はisolateを使っています'
              : '今はisolateを使っていません'}
          </div>
          <div className={clsx('tw-h-[2000px]', 'tw-p-4')}>
            <button
              type={'button'}
              className={clsx(
                'tw-underline',
                'tw-transition hover:tw-opacity-60'
              )}
              onClick={() => setWithIsolate((v) => !v)}
            >
              {'switch'}
            </button>
          </div>
        </div>
      </div>

      <div
        className={clsx(
          'tw-fixed',
          'tw-x-[9999]',
          'tw-bottom-[40px] tw-right-[40px]',
          'tw-max-h-[calc(100vh_-_80px)] tw-w-[560px]',
          'tw-overflow-auto',
          'tw-bg-white'
        )}
      >
        <pre
          className={clsx(
            'tw-rounded',
            'tw-p-4',
            'tw-bg-red-50',
            'tw-whitespace-break-spaces tw-break-all'
          )}
        >
          {`
<div className={clsx('tw-relative', 'tw-z-[1]')}>
  <div id="main" ${withIsolate ? 'style="isolation: isolate;"' : ''}>
    <div style="position: fixed; z-index: 9999;" />
  </div>
  <div id="modal-bg" style="tw-fixed;">
    <div id="modal-content" />
  </div>
</div>`}
        </pre>
      </div>
    </div>
  )
}