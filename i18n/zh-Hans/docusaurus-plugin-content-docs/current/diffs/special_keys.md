---
sidebar_position: 30
title: 关键字
---

# 关键字  

**hapet** 语言提供了新的关键字。  

## unreflected

***unreflected*** 关键字用作访问修饰符，例如 ***public***/***protected***/***internal***/***private***。在单个程序集中，***unreflected*** 访问修饰符与 ***private*** 具有相同的属性。区别在于带有 ***unreflected*** 关键字的声明在当前程序集之外不可见，甚至无法使用反射访问。

```csharp
unreflected void SuperPrivateMethod()
{
    ...
}
```

## inline

***inline*** 关键字可用于应在调用上下文中展开的函数。

```csharp
public static inline int Min(int a, int b)
{
    return (a <= b) ? a : b;
}
```
