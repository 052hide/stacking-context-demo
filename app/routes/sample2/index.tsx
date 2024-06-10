import { clsx } from 'clsx'

import { Section1 } from './_components/Section1'
import { Section2 } from './_components/Section2'

export default function Index() {
  return (
    <div
      className={clsx(
        'tw-min-h-screen',
        'tw-flex tw-flex-col tw-gap-8',
        'tw-bg-neutral-50'
      )}
    >
      <Section1 />
      <Section2 />
    </div>
  )
}
