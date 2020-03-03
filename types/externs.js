/**
 * @fileoverview
 * @externs
 */

/* typal types/index.xml externs */
/** @const */
var _hotReloadArticle = {}
/**
 * Options for the program.
 * @record
 */
_hotReloadArticle.Config
/**
 * A boolean option. Default `true`.
 * @type {boolean|undefined}
 */
_hotReloadArticle.Config.prototype.shouldRun
/**
 * A text to return.
 * @type {string|undefined}
 */
_hotReloadArticle.Config.prototype.text

/* typal types/api.xml externs */
/**
 * An article about hot reload.
 * @typedef {function(!_hotReloadArticle.Config): !Promise<string>}
 */
_hotReloadArticle.hotReloadArticle
