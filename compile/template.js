const { _hotReloadArticle } = require('./hot-reload-article')

/**
 * @methodType {_hotReloadArticle.hotReloadArticle}
 */
function hotReloadArticle(config) {
  return _hotReloadArticle(config)
}

module.exports = hotReloadArticle

/* typal types/index.xml namespace */
