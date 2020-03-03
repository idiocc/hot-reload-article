const { _hotReloadArticle } = require('./hot-reload-article')

/**
 * An article about hot reload.
 * @param {!_hotReloadArticle.Config} config Options for the program.
 * @param {boolean} [config.shouldRun=true] A boolean option. Default `true`.
 * @param {string} [config.text] A text to return.
 * @return {Promise<string>}
 */
function hotReloadArticle(config) {
  return _hotReloadArticle(config)
}

module.exports = hotReloadArticle

/* typal types/index.xml namespace */
/**
 * @typedef {_hotReloadArticle.Config} Config `＠record` Options for the program.
 * @typedef {Object} _hotReloadArticle.Config `＠record` Options for the program.
 * @prop {boolean} [shouldRun=true] A boolean option. Default `true`.
 * @prop {string} [text] A text to return.
 */
