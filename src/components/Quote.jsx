import NoSsr from '@/components/NoSsr'
import { randomQuote } from '@/lib/randomQuote'
import { useMemo } from 'react'


export function Quote() {
  const quote = useMemo(() => randomQuote(), [])
  return (
    <div className="grid h-12 max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
      <NoSsr>
        <div className="fade-in md:col-span-3 md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <p className="font-serif text-base text-zinc-600 dark:text-zinc-400">
            “{quote?.text}”<br/>— {quote.author}
          </p>
        </div>
      </NoSsr>
    </div>
  )
}