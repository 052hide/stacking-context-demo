import { clsx } from 'clsx'

export const Link = ({ href, label }: { href: string; label: string }) => {
  return (
    <a href={href} className={clsx('tw-px-2 tw-py-1', 'tw-underline')}>
      {label}
    </a>
  )
}
