---
sidebar_position: 50
title: hapet lsp
---

# hapet lsp  

## 用法

```hapet lsp``` 命令可用于运行 **hapet** 的 [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol) 服务器。使用示例：
```bash title="bash"
hapet lsp --tcp
```  

要查看可用的参数，请运行命令：
```bash title="bash"
hapet lsp -h
```   

## 参数  

- ```--tcp``` - 使用此参数，LSP 服务器将通过端口 5007 上的 *TCP* 协议进行通信。如果未设置此参数，通信将通过 *stdin/stdout* 进行。
