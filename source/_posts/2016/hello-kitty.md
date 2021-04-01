---
title: 使用 CSS3 绘制 Hello Kitty
date: 2016-08-03
---

偶然间看到了 SegmentFault 上的 [一篇文章](https://segmentfault.com/a/1190000005115427)，感觉这个 Hello Kitty 画得还不错，心血来潮也用 CSS3 画了个 Hello Kitty，现在在这里记录一下详细的绘制过程。想要源码、素材、在线演示的同学可以直接拉到最下面。

<!-- more -->

我们先看下原图：

![hello-kitty-logo](https://blog-static.uxwind.com/2016/hello-kitty/1024px-Hello_Kitty_logo.svg.png)

## 结构分解

从上图可以看出，Hello Kitty 由脸蛋、耳朵、红色蝴蝶结、眼睛、鼻子和六根胡须构成，所以 DOM 结构也相对简单：

``` html
<div class="hello-kitty-div">
    <!-- 脸蛋 -->
    <div class="face"></div>

    <!-- 左耳 -->
    <div class="left-ear"></div>
    <div class="left-ear-clean"></div>
    <div class="left-ear-beautify"></div>
    <!-- 右耳 -->
    <div class="right-ear"></div>
    <div class="right-ear-clean"></div>

    <!-- 蝴蝶结 -->
    <div class="bowknot-outside-left-top-container">
        <div class="bowknot-outside-left-top"></div>
    </div>
    <div class="bowknot-outside-left-bottom-container">
        <div class="bowknot-outside-left-bottom"></div>
    </div>
    <div class="bowknot-outside-right-top-container">
        <div class="bowknot-outside-right-top"></div>
    </div>
    <div class="bowknot-outside-right-bottom-container">
        <div class="bowknot-outside-right-bottom"></div>
    </div>
    <div class="bowknot-inside-left"></div>
    <div class="bowknot-inside-right"></div>
    <div class="bowknot-inside-center"></div>

    <!-- 左眼 -->
    <div class="left-eye"></div>
    <!-- 右眼 -->
    <div class="right-eye"></div>

    <!-- 鼻子 -->
    <div class="nose"></div>

    <!-- 左胡须 -->
    <div class="left-moustache-1"></div>
    <div class="left-moustache-2"></div>
    <div class="left-moustache-3"></div>
    <!-- 右胡须 -->
    <div class="right-moustache-1"></div>
    <div class="right-moustache-2"></div>
    <div class="right-moustache-3"></div>
</div>
```

## 开始绘制

可以利用 Photoshop 的参考线精确地计算出元素的 left、top、width、height、border-width 以及四个角的水平 radius 值和垂直 radius 值，有偏差的地方再微调一下基本就可以了。

![calculation](https://blog-static.uxwind.com/2016/hello-kitty/calculation.png)

### 脸蛋

``` css
.hello-kitty-div .face {
    left: 107px;
    top: 77px;
    width: 747px;
    height: 566px;
    border-top: 35px solid black;
    border-bottom: 31px solid black;
    border-left: 29px solid black;
    border-right: 30px solid black;
    border-top-left-radius: 355px 333px;
    border-top-right-radius: 355px 333px;
    border-bottom-left-radius: 370px 285px;
    border-bottom-right-radius: 330px 255px;
    background-color: white;
    z-index: 100;
}
```

![face](https://blog-static.uxwind.com/2016/hello-kitty/face.png)

### 左耳

``` css
.hello-kitty-div .left-ear {
    left: 112px;
    top: 61px;
    width: 250px;
    height: 250px;
    border-top: 33px solid black;
    border-bottom: 30px solid black;
    border-left: 28px solid black;
    border-right: 30px solid black;
    border-top-left-radius: 138px 100px;
    border-bottom-left-radius: 334px 310px;
    background-color: white;
    transform: rotate(23deg);
    z-index: 99;
}
```

![left-ear](https://blog-static.uxwind.com/2016/hello-kitty/left-ear.png)

让耳朵和脸蛋连为一体：

``` css
.hello-kitty-div .left-ear-clean {
    left: 146px;
    top: 96px;
    width: 250px;
    height: 250px;
    border-top-left-radius: 138px 100px;
    border-bottom-left-radius: 360px 310px;
    background-color: white;
    transform: rotate(23deg);
    z-index: 101;
}
```

![left-ear-clean](https://blog-static.uxwind.com/2016/hello-kitty/left-ear-clean.png)

再稍加点缀，美化一下：

``` css
.hello-kitty-div .left-ear-beautify {
    left: 149px;
    top: 221px;
    width: 60px;
    height: 30px;
    border-top-left-radius: 20px 15px;
    border-top-right-radius: 25px 15px;
    border-bottom-left-radius: 20px 15px;
    border-bottom-right-radius: 25px 15px;
    background-color: black;
    transform: rotate(-52deg);
    z-index: 102;
}
```

![left-ear-beautify](https://blog-static.uxwind.com/2016/hello-kitty/left-ear-beautify.png)

### 右耳

``` css
.hello-kitty-div .right-ear {
    left: 600px;
    top: 50px;
    width: 250px;
    height: 250px;
    border-top: 33px solid black;
    border-bottom: 28px solid black;
    border-left: 30px solid black;
    border-right: 29px solid black;
    border-top-left-radius: 220px 170px;
    border-top-right-radius: 90px 57px;
    border-bottom-right-radius: 334px 245px;
    background-color: white;
    transform: rotate(-21deg);
    z-index: 99;
}

.hello-kitty-div .right-ear-clean {
    left: 700px;
    top: 105px;
    width: 120px;
    height: 120px;
    background-color: white;
    z-index: 101;
}
```

![right-ear](https://blog-static.uxwind.com/2016/hello-kitty/right-ear.png)

右耳画得比较粗糙，因为马上就要画蝴蝶结了。

### 蝴蝶结

蝴蝶结分为两个外边，三个圆。外边是整个绘画过程中最难画的地方，用矩形调整 radius 参数很难做到没有偏差，因为它不像是更圆润的矩形，而像是更圆润的三角形。在这里，我们把它分成四块，各个外边各两块，在块内绘制好对应的区域，再利用 `overflow: hidden;` 来隐藏多余的部分。然后是三个圆，相对简单。

代码量实在太多，就不贴出来了，大概思路就这样子。

![bowknot-step-1](https://blog-static.uxwind.com/2016/hello-kitty/bowknot-step-1.png)

![bowknot-step-2](https://blog-static.uxwind.com/2016/hello-kitty/bowknot-step-2.png)

![bowknot-step-3](https://blog-static.uxwind.com/2016/hello-kitty/bowknot-step-3.png)

![bowknot-step-4](https://blog-static.uxwind.com/2016/hello-kitty/bowknot-step-4.png)

### 眼睛，鼻子

眼睛和鼻子相对简单，就不贴代码了。

![eyes-and-nose](https://blog-static.uxwind.com/2016/hello-kitty/eyes-and-nose.png)

### 胡须

因为胡须是弯弯的，所以每根胡须需要两个元素来实现，我们就用 `:before` 和 `:after` 吧。

某一根胡须的代码：

``` css
.hello-kitty-div .left-moustache-1:before {
    content: '\20';
    display: block;
    position: absolute;
    left: 20px;
    top: 420px;
    width: 100px;
    height: 24px;
    border-top-left-radius: 80px 30px;
    border-bottom-left-radius: 20px;
    background-color: black;
    transform: rotate(-5deg);
    z-index: 101;
}

.hello-kitty-div .left-moustache-1:after {
    content: '\20';
    display: block;
    position: absolute;
    left: 131px;
    top: 418px;
    width: 60px;
    height: 24px;
    border-top-right-radius: 100px 30px;
    border-bottom-right-radius: 20px;
    background-color: black;
    transform: rotate(2deg);
    z-index: 101;
}
```

现在，整个 Hello Kitty 就画完了，有没有觉得很可爱？`~~(ฅ>ω<*ฅ)~~`。

![finished](https://blog-static.uxwind.com/2016/hello-kitty/finished.png)

## 最后

完整源码及素材：https://github.com/chnhyg/css3-hello-kitty

在线演示：https://chnhyg.coding.me/css3-hello-kitty
