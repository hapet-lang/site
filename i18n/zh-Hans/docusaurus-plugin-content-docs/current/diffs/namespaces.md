---
sidebar_position: 2
title: 命名空间
---

# 命名空间

在 **hapet** 编程语言中，命名空间只能在单行中指定：  
```csharp
using ...;

namespace CustomNamespace;

...
```

指定的命名空间将应用于整个文件。目前，只允许一个命名空间声明。  

不允许使用花括号 ```namespace { ... }``` 来指定命名空间。  

如果未指定命名空间，它将自动指定为：  
```csharp
namespace ProjectName.PathToFile;
```
