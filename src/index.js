import { c } from 'erte'

/**
 * @type {_hotReloadArticle.hotReloadArticle}
 */
export default async function hotReloadArticle(config = {}) {
  const {
    shouldRun = true,
    text = '',
  } = config
  if (!shouldRun) return ''
  console.log('@idio/hot-reload-article called with %s', c(text, 'yellow'))
  return text
}

/**
 * @suppress {nonStandardJsDocs}
 * @typedef {import('../types').hotReloadArticle} _hotReloadArticle.hotReloadArticle
 */
