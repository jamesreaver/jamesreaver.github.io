import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIcon } from '@/components/Icons'
import { formatMonth } from '@/lib/formatDate'
import { romoloTucano, russelToucan, heroMistpeakOne, heroMistpeakTwo, heroMistpeakThree } from '@/data/books'
import clsx from 'clsx'

function Covers() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[romoloTucano, russelToucan, heroMistpeakOne, heroMistpeakTwo, heroMistpeakThree].map((book, bookIndex) => (
          <div key={bookIndex} className={clsx(
              'relative aspect-[640/988] w-44 flex-none overflow-hidden rounded-md bg-zinc-100 dark:bg-zinc-800 sm:w-52 sm:rounded-md',
              rotations[bookIndex % rotations.length]
            )}>
            <Image
              href={book.linkAmazon}
              src={book.cover}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Books() {
  return (
    <>
      <Head>
        <title>
          Books - James Reaver
        </title>
        <meta
          name="description"
          content="These are the books I have published over the years. From theatre plays to children’s books, writing has always been one of my greatest passions."
        />
      </Head>
      <SimpleLayout
        title="It all started in my imagination, so it can end up in yours."
        intro="Sure, my daily job is to write computer code. Nonetheless, one of my greatest passions is to write books. Here are the stories I have published over the years, since the age of twelve."
      / >
      <Covers />
      <Container className="mt-20 md:mt-24">
        <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          {[romoloTucano, russelToucan, heroMistpeakOne].map((book, bookIndex) => (
            <Card as="li" key={'book-'+bookIndex}>
              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image src={book.profile} alt="" className="h-8 w-8 rounded-full" unoptimized />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={`/books/${book.page}`}>{book.title}</Card.Link>
              </h2>
              <Card.Eyebrow className="capitalise">
                {formatMonth(book.publishedDate, book.locale)}
              </Card.Eyebrow>
              <Card.Description className="book-description">{book.synopsis}</Card.Description>
              <Card.Cta>Read more</Card.Cta>
            </Card>
          ))}
        </ul>
      </Container>
    </>
  )
}
