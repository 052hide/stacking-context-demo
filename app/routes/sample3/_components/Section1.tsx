import { useSearchParams } from '@remix-run/react'
import { clsx } from 'clsx'
import { useMemo } from 'react'

import { Link } from '../../_components/Link'

export const Section1 = () => {
  const [searchParams, setSearchParams] = useSearchParams()

  const isolate = useMemo(() => {
    const isolate = searchParams.get('isolate')
    return `${isolate || ''}`.toUpperCase() === 'TRUE'
  }, [searchParams])

  const handleToggleIsolate = () => {
    setSearchParams({ isolate: `${!isolate}` })
  }

  return (
    <div className={clsx('tw-relative', 'tw-z-[1]')}>
      <div id="main" className={clsx(isolate && 'tw-isolate')}>
        <p>{'main content'}</p>
        <div
          id="main1"
          className={clsx(
            'tw-fixed',
            'tw-z-[9999]',
            'tw-mt-4',
            'tw-rounded',
            'tw-flex tw-flex-col tw-gap-4',
            'tw-p-4',
            'tw-bg-white'
          )}
        >
          <p>{'main content内のz-indexが強い要素'}</p>
          <Link href={'/'} label={'一覧へ'} />
        </div>
      </div>

      <dialog
        id="modal-bg"
        open
        className={clsx(
          'tw-fixed',
          'tw-left-0 tw-top-0',
          'tw-h-screen tw-w-screen',
          'tw-bg-black/50'
        )}
      >
        <div
          id="modal-content"
          className={clsx(
            'tw-mx-auto tw-mt-[120px]',
            'tw-rounded',
            'tw-overflow-auto',
            'tw-overscroll-none',
            'tw-relative',
            'tw-h-[400px] tw-w-[640px]',
            'tw-bg-white'
          )}
        >
          <div
            className={clsx(
              'tw-sticky',
              'tw-z-[1]',
              'tw-top-0',
              'tw-flex tw-justify-between',
              'tw-p-4',
              'tw-bg-neutral-100'
            )}
          >
            <p>
              {isolate
                ? '今はisolateを使っています'
                : '今はisolateを使っていません'}
            </p>
            <button
              type={'button'}
              className={clsx(
                'tw-underline',
                'tw-transition hover:tw-opacity-60'
              )}
              onClick={handleToggleIsolate}
            >
              {'switch'}
            </button>
          </div>
          <div className={clsx('tw-h-[2000px]', 'tw-relative', 'tw-p-4')}>
            <p>
              {isolate
                ? 'mainにisolateを指定している場合、mainがStakingContextの生成を行うためmain1とmodal-bgは異なるStackingContext内の要素となり、modal-bgがmain1の上に表示される'
                : 'mainにisolateを指定していない場合、main1とmodal-bgが同一StackingContext内の要素として比較され、z-indexが大きいmain1がmodal-bgより上に表示されてしまう'}
            </p>

            <div className={clsx('tw-mt-4')}>
              <Link href={'/sample3-1'} label={'他の要素を追加したデモ'} />
            </div>
          </div>
        </div>
      </dialog>

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
<div style="position: relative; z-index: 1;">
  <div id="main"${isolate ? ' style="isolation: isolate;"' : ''}>
    <div style="position: fixed; z-index: 9999;" />
  </div>
  <dialog id="modal-bg" style="tw-fixed;">
    <div id="modal-content" />
  </dialog>
</div>`}
        </pre>
      </div>
    </div>
  )
}
