import React from 'react'
import { A, H1, Layout, P } from '@/Components'

const meta = {
  title: 'inertia-react@v0.5.3',
}

const Page = () => {
  return (
    <>
      <H1>inertia-react@v0.5.3</H1>
      <div className="-mt-8 mb-12 text-base font-medium text-gray-600">Published on February 25, 2021</div>
      <P>
        Update the TypeScript definitions (<A href="https://github.com/inertiajs/inertia/pull/457">#457</A>).
      </P>
    </>
  )
}

Page.layout = page => <Layout children={page} meta={meta} />

export default Page