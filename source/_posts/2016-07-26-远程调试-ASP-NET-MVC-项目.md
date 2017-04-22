---
title: 远程调试 ASP.NET MVC 项目
date: 2016-07-26 13:39:02
permalink: remote-debugger
categories:
- 技术
tags:
- ASP.NET MVC
- 调试
---

Visual Studio 支持从一台计算机到另一台设备的远程调试。进行远程调试时，主机可以是任何支持 Visual Studio 的平台。远程设备可以是 x86、x64 或 ARM 平台。

本文将指导大家如何使用 Visual Studio 对 ASP.NET MVC 项目进行远程调试。

<!-- more -->

## 下载

我们首先在 [MSDN][1] 上下载 Visual Studio Remote Debugger，并安装到远程服务器上。

![图片](https://oawrwnnqp.qnssl.com/2016/07/26/remote-debugger/~4Y6_65UB%60S8WH_4%5B3QWQU9.png)

## 运行

安装完成后，在开始菜单找到 Remote Debugger 并运行。

![图片](https://oawrwnnqp.qnssl.com/2016/07/26/remote-debugger/8_%7D%7D67RW_O8%28GUAD@S@~0DN.png)

依次点击菜单中的**工具** > **选项**可以查看并修改端口号。记住这个端口号，后面会用到。

## 调试

- 在本机的 Visual Studio 的菜单中依次点击**调试** > **附加到进程**。
- 在**限定符**一栏输入远程服务器的 IP 地址以及上面提到的端口号，并按回车。
- 可用进程中显示进程后，连接就算是成功了。

![图片](https://oawrwnnqp.qnssl.com/2016/07/26/remote-debugger/C%5BAJP0_D%7DJ40C6S%29QNIM9@4.png)

![图片](https://oawrwnnqp.qnssl.com/2016/07/26/remote-debugger/65%5BX~WR7%60YUMW@%7BBZS%7BE762.png)

- 在可用进程列表找到并选中 `w3wp.exe`。如果找不到，就勾选左下方的**显示所有用户的进程**。如果找到且有多个 `w3wp.exe`，就选中对应的 ASP.NET MVC 项目的应用程序池的 `w3wp.exe`，应用程序池名称在用户名一列有显示。

![图片](https://oawrwnnqp.qnssl.com/2016/07/26/remote-debugger/LCLE%5D6@%5BIQL@%5BVC@66%7DFGWW.png)

- 点击附加按钮，开始调试。

现在就可以任性的对远程服务器上的 ASP.NET MVC 项目进行调试啦，`~~(ฅ>ω<*ฅ)~~`。

## 远程调试错误和疑难解答

https://msdn.microsoft.com/zh-cn/library/2ys11ead(v=vs.120).aspx

[1]: https://msdn.microsoft.com/zh-cn/library/bt727f1t(v=vs.120).aspx#BKMK_Installing_the_Remote_Tools
