import { clsx } from 'clsx'

import type { ReactNode } from 'react'

import { Link } from './Link'
import { Title } from './Title'

export const Layout = ({
  links,
  title,
  mainContent,
}: {
  links: {
    href: string
    label: string
  }[]
  title: string
  mainContent: ReactNode
}) => {
  return (
    <div
      className={clsx(
        'tw-min-h-screen',
        'tw-flex tw-flex-col tw-gap-8',
        'tw-px-8 tw-py-16',
        'tw-bg-neutral-50'
      )}
    >
      <div className={clsx('tw-flex tw-gap-4')}>
        {links.map((item) => (
          <Link key={item.href} href={item.href} label={item.label} />
        ))}
      </div>

      <div>
        <Title title={title} />
      </div>

      <div className={clsx('tw-flex tw-flex-col tw-gap-20')}>{mainContent}</div>
    </div>
  )
}
