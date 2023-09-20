import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Quote } from '@/components/Quote'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>James Reaver - Software Engineer</title>
        <meta
          name="description"
          content="This page could not be found."
        />
      </Head>
      <SimpleLayout
        title="Uh oh!"
        intro="It looks like you have reached a page which does not exist. Maybe you were given an incorrect link or perhaps the site has changed. Change happens and it is beautiful."
      >
      <Quote />
      </SimpleLayout>
    </>
  )
}