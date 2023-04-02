import * as fs from "fs/promises"

const MAX_LENGTH = 300;
const HTML_TAGS_REGEX = /(<([^>]+)>)/ig;
const UNPUBLISHED = ['d941a90dfc81', '4ea467d7f38'];
const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@jameshreaver`;

export async function getAllArticles() {
  return fetch(RSS_URL)
    .then(response => response.json())
    .then(data => getArticles(data.items))
}

function getArticles(articles) {
  return articles
    .filter(article => filterArticle(article))
    .map(article => getArticle(article))
}

function filterArticle(article) {
  return !UNPUBLISHED.some(tag => article.guid.includes(tag))
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
