export function formatDate(dateString, locale = 'en-GB') {
  return new Date(dateString).toLocaleDateString(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

export function formatMonth(dateString, locale = 'en-GB') {
  return new Date(dateString).toLocaleDateString(locale, {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })
}

