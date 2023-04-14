import logoAmazon from '@/images/logos/amazon.svg'
import logoNo10 from '@/images/logos/no10.svg'
import logoChase from '@/images/logos/chase.svg'

export const roles = [
  {
    company: 'JP.Morgan',
    title: 'Software Engineer II',
    logo: logoChase,
    start: '2022',
    end: {
      label: 'Present',
      dateTime: new Date().getFullYear(),
    },
  },
  {
    company: 'Amazon UK',
    title: 'Software Engineer',
    logo: logoAmazon,
    start: '2020',
    end: '2022',
  },
  {
    company: '10 Downing Street',
    title: 'Full-Stack Developer',
    logo: logoNo10,
    start: '2018',
    end: '2020',
  },
]