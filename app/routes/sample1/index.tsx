import { Section1 } from './_components/Section1'
import { Section2 } from './_components/Section2'
import { Section3 } from './_components/Section3'
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
      title={'StackingContext内の表示ルール'}
      mainContent={
        <>
          <Section1 />
          <Section2 />
          <Section3 />
        </>
      }
    />
  )
}
