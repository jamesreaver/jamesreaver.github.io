import { quotes } from '@/data/quotes'

export function randomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
