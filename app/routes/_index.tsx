import { clsx } from 'clsx'

import type { MetaFunction } from '@remix-run/node'

import { Link } from './_components/Link'

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ]
}

export default function Index() {
  return (
    <div className={clsx('tw-flex tw-flex-col tw-gap-4')}>
      <Link href={'/sample1'} label={'StackingContext内の表示ルール'} />
      <Link
        href={'/sample2'}
        label={'StackingContext内でネストした子要素のデモ'}
      />
      <Link href={'/sample3'} label={'isolateとportalのデモ'} />
    </div>
  )
}
