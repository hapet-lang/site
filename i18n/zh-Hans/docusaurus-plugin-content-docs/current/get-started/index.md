---
sidebar_position: 2
title: 开始使用 hapet
---

# 开始使用 hapet

## 安装

在开始使用 **hapet** 之前，您需要下载[预编译的安装程序](https://hapetlang.com/#downloads)或[自己编译编译器](https://github.com/hapet-lang/hapet?tab=readme-ov-file#running-from-source)（为什么呢？）。

安装后，您可以验证 **hapet** 是否正常工作。为此，在终端运行以下命令：
```bash title="bash"
hapet check
```  

[了解更多关于使用 **hapet check**](../cmd-params/hapet_check)。

## 创建项目  

要创建项目，可以使用 ```hapet new``` 命令。创建控制台应用程序项目的示例：  
```bash title="bash"
hapet new console -n MyProject
```  

执行命令后，将创建一个 *MyProject* 文件夹，其中包含项目文件。   
[了解更多关于使用 **hapet new**](../cmd-params/hapet_new)。

## 运行项目  

要运行项目，请进入项目文件夹（包含 *.hptproj* 文件的文件夹）并运行命令：  
```bash title="bash"
hapet run
```  

[了解更多关于使用 **hapet run**](../cmd-params/hapet_run)。

## 项目开发  

为了方便（或不方便）地进行项目开发，创建了一个[用于 *vs-code* 代码编辑器的扩展](https://marketplace.visualstudio.com/items?itemName=crackanddie.hapet-vscode)。  

安装扩展后，您可以打开包含 *.hptproj* 文件的项目文件夹。  

:::warning
请注意 - **hapet** 扩展在 *vs-code* 中仅在打开包含项目文件（*.hptproj* 文件）的文件夹时才有效！ 
:::
