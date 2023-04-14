import Head from 'next/head'

import { Button } from '@/components/Button'
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
        title="Say hello!"
        intro="Would you like to reach out to me? This is the best way to do it. Introduce yourself using the form below and let me know about your query, interest, concern or opportunity."
      >
        <form method="post"
          action="https://formspree.io/f/xyyabwdr"
          className="max-w-2xl"
        >
          <div className="mt-6 flex">
            <textarea
              name="message"
              placeholder="Message"
              aria-label="message"
              rows="4"
              required
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
          </div>
          <div className="flex flex-auto flex-wrap mt-6 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              aria-label="Name"
              required
              className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
            />
            <div className="flex flex-auto flex-wrap gap-6 min-w-0">
              <input
                type="email"
                name="email"
                placeholder="Email address"
                aria-label="Email address"
                required
                className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10 sm:text-sm"
              />
              <input type="text" name="_gotcha" className="hidden"/>
              <Button type="submit" className="flex-none">
                Send
              </Button>
            </div>
          </div>
        </form>
      </SimpleLayout>
    </>
  )
}