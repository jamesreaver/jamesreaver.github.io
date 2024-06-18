import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { truncateText } from '@/lib/truncateText'
import { BookIcon, LanguageIcon } from '@/components/Icons'
import { InstagramIcon } from '@/components/SocialIcons'
import { formatDate } from '@/lib/formatDate'

function SocialLink({ className, href, children, icon: Icon, ...props }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link href={href} {...props}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

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

function StoreLinks({ className, links, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
      {links.amazon && <Link href={links.amazon} target="_blank" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <span className="ml-4 pr-4 border-r border-zinc-100 dark:border-zinc-800">Amazon</span>
      </Link>}
      {links.kindle && <Link href={links.kindle} target="_blank" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <span className="ml-4 pr-4 border-r border-zinc-100 dark:border-zinc-800">Kindle</span>
      </Link>}
      {links.apple && <Link href={links.apple} target="_blank" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <span className={!links.google ? "ml-4" : "ml-4 pr-4 border-r border-zinc-100 dark:border-zinc-800"}>Apple Books</span>
      </Link>}
      {links.google && <Link href={links.google} target="_blank" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <span className="ml-4">Google Play</span>
      </Link>}
      {links.other && <span className="group flex ml-4 text-sm font-medium text-zinc-500 dark:text-zinc-500">{links.other}</span>}
    </li>
  )
}

function SocialLinks({ className, links, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
      {links.instagram && <Link href={links.instagram} target="_blank" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <span className="ml-4 pr-4 border-r border-zinc-100 dark:border-zinc-800">Instagram</span>
      </Link>}
      {links.threads && <Link href={links.threads} target="_blank" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <span className="ml-4 pr-4 border-r border-zinc-100 dark:border-zinc-800">Threads</span>
      </Link>}
      {links.twitter && <Link href={links.twitter} target="_blank" className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500">
        <span className="ml-4">Twitter</span>
      </Link>}
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
  let publishedText = book.publishedText || formatDate(book.publishedDate, book.locale)
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
            <h1 className="text-4xl text-wrap-balance font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              {book.title}
            </h1>
            <h2 className="text-3xl text-wrap-balance font-light tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              {book.subtitle}
            </h2>
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
            <ul role="list">
              {book.links && book.links.apple &&
              <StoreLinks
                links = {book.links}
                icon={BookIcon}
                className="mt-4"
              />}
              <SocialLinks
                links = {book.links}
                icon={InstagramIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              />
              <Tag
                aria-label={publishedText}
                icon={LanguageIcon}
                className="mt-4"
              >{publishedText}
              </Tag>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}