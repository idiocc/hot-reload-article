import hotReloadArticle from '../src'

(async () => {
  const res = await hotReloadArticle({
    text: 'example',
  })
  console.log(res)
})()