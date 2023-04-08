import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - James Reaver</title>
        <meta
          name="description"
          content="Drop me a message using this contact form."
        />
      </Head>
      <SimpleLayout
        title="Coming soon..."
        intro="I have only just started working on this website, so some pages (like this one) are still missing. Sorry about this... Make sure to check back soon!"
      />
    </>
  )
}