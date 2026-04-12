---
sidebar_position: 50
title: 垃圾收集器
---

# 垃圾收集器

在 **hapet** 编程语言中，垃圾收集器不主动并行清理任何内容。  
用户可以完全控制垃圾收集器调用的频率/位置：  
```csharp
public void Entry()
{
    CalledFunction();
    Gc.Collect(); // obj 将被收集
}

public void CalledFunction()
{
    object obj = new object();
}
```
