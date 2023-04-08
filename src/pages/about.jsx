import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  MediumIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - James Reaver</title>
        <meta
          name="description"
          content="I’m a software engineer in London. I graduated at Imperial College in Computer Science and worked for the UK Government, Amazon and JP.Morgan."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              My name is Reaver, James Reaver.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                Hey there, and welcome to my website! My name is James Reaver,
                just like the character of the Fable video game series. I am a
                British-Italian software engineer with a passion for
                customer-focussed services.
              </p>
              <p>
                After finishing school, I moved from Cardiff to London, where I
                studied for a Master of Engineering in Computer Science at
                Imperial College. Dreaming of working for the British
                Government, my career kicked off as a full-stack developer at
                the Prime Minister’s Office. There, I found out that I wanted
                to dive deeper into the field of software engineering, and so, I
                moved to Amazon and finally to JP.Morgan.
              </p>
              <p>
                While I am quite fond of writing code and discussing software
                architecture at work, I also like to let my imagination free and
                write fictional stories. Three years ago, I began putting
                together a narrative for a theatre play, which I am currently in
                the process of completing. Aside from that, I also really enjoy
                recording audiobooks and radio shows, where I broadcast the
                latest hits of the music charts.
              </p>
              <p>
                I keep this site up to date as often as I can. A lot is still
                missing, and a lot more is yet to come. Do not hesitate to drop
                me a message if you want to know more about what’s coming.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/jameshreaver"
                aria-label="Follow on Twitter"
                icon={TwitterIcon}
                className="mt-4"
              >Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/jameshreaver"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                className="mt-4"
              >Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://github.com/jameshreaver"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
                className="mt-4"
              >Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://medium.com/@jameshreaver"
                aria-label="Follow on Medium"
                icon={MediumIcon}
                className="mt-4"
              >Follow on Medium
              </SocialLink>
              <SocialLink
                href="/contact"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
              age
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}