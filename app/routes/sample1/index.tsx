import { clsx } from 'clsx'

import { Section1 } from './_components/Section1'
import { Section2 } from './_components/Section2'
import { Section3 } from './_components/Section3'

export default function Index() {
  return (
    <div
      className={clsx(
        'tw-min-h-screen',
        'tw-px-8 tw-py-16',
        'tw-bg-neutral-50'
      )}
    >
      <div className={clsx('tw-flex tw-flex-col tw-gap-20')}>
        <Section1 />
        <Section2 />
        <Section3 />
      </div>
    </div>
  )
}