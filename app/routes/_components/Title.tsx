import { clsx } from 'clsx'

export const Title = ({ title }: { title: string }) => {
  return <h1 className={clsx('tw-text-2xl tw-font-bold')}>{title}</h1>
}
