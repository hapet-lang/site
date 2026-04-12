---
sidebar_position: 45
title: hapet update
---

# hapet update  

## 用法

```hapet update``` 命令可用于将 **hapet** 编译器更新到最新版本。使用示例：
```bash title="bash"
hapet update
```  

要查看可用的参数，请运行命令：
```bash title="bash"
hapet update -h
```   

:::warning
请注意 - ```hapet update``` 会在执行后运行一个进程来替换下载的编译器文件。  
此过程可能需要一些时间（通常几秒钟）。   
在文件替换期间，建议不要使用编译器。   
为了更好地控制编译器更新，请参看 ```--manual``` 参数。 
:::

## 参数  

- ```--manual``` - 使用此参数，```hapet update``` 命令将不会运行替换编译器文件的程序。   
  因此，要成功更新编译器，用户需要运行 ```hapet-replacer``` 命令。
