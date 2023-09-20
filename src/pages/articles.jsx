import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllArticles } from '@/lib/getAllArticles'
import { formatDate } from '@/lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={article.link} target="_blank">
          {article.title}
        </Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden order-first"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description className="article-description">
          {article.description}
        </Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block order-first"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export default function ArticlesIndex({ articles }) {
  return (
    <>
      <Head>
        <title>Articles - James Reaver</title>
        <meta
          name="description"
          content="Articles about language, tech, and being a software engineer."
        />
      </Head>
      <SimpleLayout
        title="On language, technology, and software engineering."
        intro="From time to time, I write down some personal reflections or interesting findings of mine, especially if I believe other folks might find it helpful to read about them too."
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article, articleIndex) => (
              <Article key={'article-'+articleIndex} article={article} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      articles: (await getAllArticles()),
    },
  }
}
