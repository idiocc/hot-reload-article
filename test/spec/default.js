import { equal } from '@zoroaster/assert'
import Context from '../context'
import hotReloadArticle from '../../src'

/** @type {TestSuite} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof hotReloadArticle, 'function')
  },
  async 'calls package without error'() {
    await hotReloadArticle()
  },
  async 'gets a link to the fixture'({ fixture, readFile }) {
    const path = fixture`test.txt`
    const text = readFile(path)
    const res = await hotReloadArticle({
      text,
    })
    equal(res, text)
  },
}

/**
 * @typedef {import('../context').TestSuite} TestSuite
 */

export default T