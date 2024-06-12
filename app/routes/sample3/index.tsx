import { Section1 } from './_components/Section1'
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
      title={'Isolateデモ'}
      mainContent={
        <>
          <Section1 />
        </>
      }
    />
  )
}
