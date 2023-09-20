import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { BookIcon, LanguageIcon, BuyIcon } from '@/components/Icons'
import { truncateText } from '@/lib/truncateText'


function Tag({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <div className="group flex text-sm font-medium text-zinc-800 transition dark:text-zinc-200">
        <Icon className="h-6 w-6 flex-none fill-zinc-500" />
        <span className="ml-4">{children}</span>
      </div>
    </li>
  )
}

function LinkedTag({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link href={href} target="_blank" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function Cover({ cover }) {
  return (
    <div className="mx-auto lg:mx-0 max-w-xxs lg:max-w-xs px-2.5">
      <Image src={cover} alt="" sizes="(min-width: 1024px) 32rem, 20rem"
        className="aspect-[640/988] rotate-2 lg:rotate-3 rounded-lg lg:rounded-xl bg-zinc-100 object-cover dark:bg-zinc-800"
      />
    </div>
  )
}

export default function Book({ book }) {
  let title = book.title + ' - James Reaver';
  let description = truncateText(book.synopsis, 142)
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20 hidden lg:block">
            <Cover cover={book.cover} />
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {book.title}
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p className="font-serif italic text-lg">
                {book.synopsis}
              </p>
              <div className="py-4 lg:pl-20 lg:hidden">
                <Cover cover={book.cover} />
              </div>
              {book.description.map((line, lineIndex) =>
                <p key={lineIndex}>{line}</p>
              )}
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">{book.linkAmazon &&
              <LinkedTag
                href={book.linkAmazon}
                aria-label={book.amazonText}
                icon={BuyIcon}
                className="mt-4"
              >{book.amazonText}
              </LinkedTag>}
              <Tag
                aria-label={book.publishedText}
                icon={BookIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >{book.publishedText}
              </Tag>
              <Tag
                aria-label={book.language}
                icon={LanguageIcon}
                className="mt-4"
              >{book.language}
              </Tag>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}