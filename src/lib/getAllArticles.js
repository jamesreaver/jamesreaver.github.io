import * as fs from "fs/promises"

const MAX_LENGTH = 300;
const HTML_TAGS_REGEX = /(<([^>]+)>)/ig;
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jameshreaver`;

export async function getAllArticles() {
  return fetch(RSS_URL)
    .then(response => response.json())
    .then(data => getArticles(data.items))
}

export function getArticles(articles) {
  return articles.map(
    article => getArticle(article)
  )
}

function getArticle(article) {
  return {
    title: article.title,
    description: getDescription(article.description),
    link: article.guid,
    date: article.pubDate
  }
}

function getDescription(html) {
  return html
    .replace(HTML_TAGS_REGEX, '')
    .substring(0, MAX_LENGTH)
}
