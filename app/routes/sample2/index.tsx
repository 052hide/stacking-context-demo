import { Section1 } from './_components/Section1'
import { Section2 } from './_components/Section2'
import { Layout } from '../_components/Layout'

export default function Index() {
  return (
    <Layout
      links={[
        {
          href: '/',
          label: '一覧へ',
        },
      ]}
      title={'StackingContext内でネストした子要素のデモ'}
      mainContent={
        <>
          <Section1 />
          <Section2 />
        </>
      }
    />
  )
}
