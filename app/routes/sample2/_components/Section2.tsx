import { clsx } from 'clsx'

import { P } from '../../_components/P'

export const Section2 = ({ marginClassName }: { marginClassName?: string }) => {
  return (
    <div className={clsx('tw-relative', marginClassName)}>
      <div
        className={clsx(
          'tw-z-[2]',
          'tw-absolute tw-inset-x-0 tw-top-0',
          'tw-h-[64px]',
          'tw-bg-green-500'
        )}
      >
        <P>{'order: 1'}</P>
        <P>{'Header'}</P>
        <P>{'Stacking Context'}</P>
        <P>{'z-index: 2'}</P>
      </div>
      <div
        className={clsx(
          'tw-relative tw-z-[1]',
          'tw-h-[300px]',
          'tw-bg-red-50',
          'tw-px-8 tw-pt-[80px]'
        )}
      >
        <P>{'order: 2'}</P>
        <P>{'Stacking Context'}</P>
        <P>{'z-index: 1'}</P>

        <p
          className={clsx(
            'tw-z-[3]',
            'tw-absolute tw-left-[200px]',
            'tw-h-[200px] tw-w-[400px]',
            'tw-px-4 tw-py-8',
            'tw-bg-white'
          )}
          style={{
            top: 40,
          }}
        >
          <P>{'order: 2 > 1'}</P>
          <P>{'Stacking Context'}</P>
          <P>{'z-index: 3'}</P>
        </p>
      </div>
    </div>
  )
}
