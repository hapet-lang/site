---
sidebar_position: 30
title: hapet restore
---

# hapet restore  

## 用法

```hapet restore``` 命令可用于恢复和验证项目依赖项。使用示例：
```bash title="bash"
hapet restore /project/MyTestProject.hptproj
```  

如果未指定项目名称，**hapet** 将尝试在当前目录中查找项目。  

要查看可用的参数，请运行命令：
```bash title="bash"
hapet restore -h
```  

:::info
请注意 - ```hapet restore``` 由 ```hapet build``` 和 ```hapet run``` 命令自动调用！ 
:::
