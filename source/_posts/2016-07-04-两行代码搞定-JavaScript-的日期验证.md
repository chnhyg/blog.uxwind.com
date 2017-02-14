---
title: 两行代码搞定 JavaScript 的日期验证
date: 2016-07-04 12:54:10
permalink: javascript-date-validation
categories:
tags:
- JavaScript
- 日期
- 验证
---

我们通常在 JavaScript 中验证日期，基本的思路大概是，先判断年月日是否有效，再判断当月是否有当日，比如一些月份没有 31 日，平年二月没有 29、30 日，闰年二月没有 30 日等等。

偶然间发现一个技巧，能判断以上所有的情况。除去赋值代码，实际代码仅两行。

<!-- more -->

其实这个技巧也很简单，通过实例化 Date 对象来生成一个合法的日期，再去对比年月日是否相等，以验证日期是否合法。

``` javascript
var originalYear = 2016;
var originalMonth = 12;
var originalDay = 32;
var date = new Date(originalYear, originalMonth - 1, originalDay);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(year + '-' + month + '-' + day); // 2017-1-1
```

因为 12 月没有 32 日，所以输出的日期就是第二年的 1 月 1 日，年月日不相等，所以 2016 年 12 月 32 日不是一个合法的日期。

具体的实现代码：

``` javascript
var validateDate = function (originalYear, originalMonth, originalDay) {
    var date = new Date(originalYear, originalMonth - 1, originalDay);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    return year == originalYear && month == originalMonth && day == originalDay;
}
```

测试：

``` javascript
console.log(validateDate()); // false
console.log(validateDate(-1, -1, -1)); // false
console.log(validateDate('', '', '')); // false
console.log(validateDate([], [], [])); // false
console.log(validateDate({}, {}, {})); // false

// 平年二月。
console.log(validateDate(2015, 2, 29)); // false
// 闰年二月。
console.log(validateDate(2016, 2, 29)); // true
console.log(validateDate(2016, 6, 30)); // true
console.log(validateDate(2016, 6, 31)); // false
console.log(validateDate('2016', '01', '01')); // true
```
