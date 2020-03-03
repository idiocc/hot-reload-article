# @idio/hot-reload-article

[![npm version](https://badge.fury.io/js/@idio/hot-reload-article.svg)](https://www.npmjs.com/package/@idio/hot-reload-article)

`@idio/hot-reload-article` is An article about hot reload.

```sh
yarn add @idio/hot-reload-article
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
- [`async hotReloadArticle(config: !Config): string`](#async-mynewpackageconfig-config-string)
  * [`Config`](#type-config)
- [CLI](#cli)
- [Copyright & License](#copyright--license)

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/0.svg?sanitize=true">
</a></p>

## API

The package is available by importing its default function:

```js
import hotReloadArticle from '@idio/hot-reload-article'
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/1.svg?sanitize=true">
</a></p>

## <code>async <ins>hotReloadArticle</ins>(</code><sub><br/>&nbsp;&nbsp;`config: !Config,`<br/></sub><code>): <i>string</i></code>
An article about hot reload.

 - <kbd><strong>config*</strong></kbd> <em><code><a href="#type-config" title="Options for the program.">!Config</a></code></em>: The config.

__<a name="type-config">`Config`</a>__: Options for the program.


|   Name    |       Type       |    Description    | Default |
| --------- | ---------------- | ----------------- | ------- |
| shouldRun | <em>boolean</em> | A boolean option. | `true`  |
| text      | <em>string</em>  | A text to return. | -       |

```js
import hotReloadArticle from '@idio/hot-reload-article'

(async () => {
  const res = await hotReloadArticle({
    text: 'example',
  })
  console.log(res)
})()
```
```
@idio/hot-reload-article called with example
example
```

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/2.svg?sanitize=true">
</a></p>

## Copyright & License

GNU Affero General Public License v3.0

<table>
  <tr>
    <td><img src="https://avatars3.githubusercontent.com/u/38815725?v=4&amp;s=100" alt="idiocc"></td>
    <td>© <a href="https://www.idio.cc">Idio</a> 2020</td>
  </tr>
</table>

<p align="center"><a href="#table-of-contents">
  <img src="/.documentary/section-breaks/-1.svg?sanitize=true">
</a></p>