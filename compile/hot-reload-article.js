'use strict';/*
 diff package https://github.com/kpdecker/jsdiff
 BSD License
 Copyright (c) 2009-2015, Kevin Decker <kpdecker@gmail.com>
*/
const c={black:30,red:31,green:32,yellow:33,blue:34,magenta:35,cyan:36,white:37,grey:90};module.exports={_hotReloadArticle:async function(a={}){const {shouldRun:d=!0,text:b=""}=a;if(!d)return"";a=(a=c.yellow)?`\x1b[${a}m${b}\x1b[0m`:b;console.log("@idio/hot-reload-article called with %s",a);return b}};

//# sourceMappingURL=hot-reload-article.js.map