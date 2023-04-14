import logoFirmament from '@/images/logos/firmament.svg'
import logoImperial from '@/images/logos/imperial.svg'
import logoGitHub from '@/images/logos/github.svg'
import logoPiPong from '@/images/logos/pipong.svg'
import logoChase from '@/images/logos/chase.svg'
import logoHype from '@/images/logos/hype.svg'
import logoNo10 from '@/images/logos/no10.svg'

export const projects = [
  {
    name: '1% Cashback',
    description: 'The latest rewards proposition for Chase UK, allowing customers to qualify for 1% cashback after paying in £500 every month.',
    period: 'October 2022 - March 2023',
    logo: logoChase,
    link: {
      href: 'https://www.chase.co.uk/gb/en/support/cashback-offer/',
      label: 'chase.co.uk/cashback'
    },
  },
  {
    name: 'GCS Connect',
    description: 'A cross-government sign-on service built from the ground up as an OpenID idenity provider for 6,000 civil servants and 300 organisations.',
    period: 'May 2019 - April 2020',
    logo: logoNo10,
    link: {
      href: 'https://connect.gcs.civilservice.gov.uk/',
      label: 'connect.gov.uk'
    },
  },
  {
    name: 'Firmament App',
    description: 'A web application to render and teach about the constellations of the night sky in real-time, based on the viewer’s time and location.',
    period: 'May - June 2016',
    logo: logoFirmament,
    link: {
      href: 'https://firmament.space/',
      label: 'firmament.space'
    },
  },
  {
    name: 'Hype Framework',
    description: 'A web framework to perform continuous A/B experiments on live applications, validating the assumptions through tangible site metrics.',
    period: 'March - June 2018',
    logo: logoHype,
    link: {
      href: 'https://github.com/jameshreaver/Hype',
      label: 'hype.software'
    },
  },
  {
    name: 'PiPong Game',
    description:
      'A baremetal implementation of the popular two-player game for the Raspberry Pi. It is written in assembly and runs without operating system.',
    period: 'April - June 2015',
    logo: logoPiPong,
    link: {
      href: 'https://github.com/jameshreaver/PiPong',
      label: 'github.com/pipong'
    },
  },
  {
    name: 'and more...',
    description:
      'From games like an unbeatable Tic-Tac-Toe and Java Battleships, to utility tools such as a multi-threaded web crawler and an Auth API: all my open-source projects live on GitHub.',
    period: '',
    logo: logoGitHub,
    link: {
      href: 'https://github.com/jameshreaver',
      label: 'github.com/jameshreaver'
    },
  },
]