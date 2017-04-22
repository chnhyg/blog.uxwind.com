---
title: JavaScript 的 defer 与 async
date: 2016-09-24 20:11:09
permalink: defer-and-async
categories:
- 技术
tags:
- JavaScript
---

当解析器遇到 script 标签时，文档的解析将停止，并立即下载并执行脚本，脚本执行完毕后将继续解析文档。但是我们可以将脚本标记为 defer，这样就不会停止文档解析，等到文档解析完成才执行脚本，也可以将脚本标记为 async，以便由其他线程对脚本进行解析和执行。

<!-- more -->

## 三者之间的区别？

#### script

当解析器遇到 script 标签时，文档的解析将停止，并立即下载并执行脚本，脚本执行完毕后将继续解析文档。

#### defer script

当解析器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，待到文档解析完成，脚本才会执行。

#### async script

当解析器遇到 script 标签时，文档的解析不会停止，其他线程将下载脚本，脚本下载完成后开始执行脚本，脚本执行的过程中文档将停止解析，直到脚本执行完毕。

![图片](https://oawrwnnqp.qnssl.com/2016/09/24/defer-and-async/B@%60PL@$S@6PJJF%25UO%7DXS%29A8.jpg)

## 什么情况下使用 defer 和 async？

1. 如果脚本不依赖于任何脚本，并不被任何脚本依赖，那么则使用 defer。
2. 如果脚本是模块化的，不依赖于任何脚本，那么则使用 async。

## 需要注意的地方

1. async 对于内联脚本没有作用。
2. defer 不应该在内联脚本上使用。从 Gecko 1.9.2 开始，内联脚本的 defer 会被忽略，但是在 Gecko 1.9.1 中，如果定义了 defer 属性，即使内联脚本也会被延迟执行。
3. defer 的脚本是按照声明顺序执行的。而 async 的脚本不同，只要脚本下载完成，将会立即执行，未必会按照声明顺序执行。
4. IE9 及以下版本的浏览器，defer 的脚本也未必会按照声明顺序执行。
5. 如果同时使用 defer 和 async，则会默认使用 async，忽略 defer。

## 参考链接

https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script
