import makeTestSuite from '@zoroaster/mask'
import { EOL } from 'os'
import Context from '../context'
import hotReloadArticle from '../../src'

export default makeTestSuite('test/result/default', {
  /**
   * @param {Context} ctx
   */
  async getResults({ fixture, readFile }) {
    const text = readFile(fixture`${this.input}.txt`)
    const res = await hotReloadArticle({
      text,
    })
    return `${this.input}:${EOL}${res}`
  },
  context: Context,
})