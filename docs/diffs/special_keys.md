---
sidebar_position: 30
title: Keywords
---

# Keywords  

The **hapet** language provides new keywords.  

## unreflected

The ***unreflected*** keyword is used as an access modifier like ***public***/***protected***/***internal***/***private***. Within a single assembly, the ***unreflected*** access modifier has the same properties as ***private***. The difference is that a declaration with the ***unreflected*** keyword is not visible outside the current assembly and cannot be accessed even using reflection. 

```csharp
unreflected void SuperPrivateMethod()
{
    ...
}
```

## inline

The ***inline*** keyword can be used for functions that should be expanded in the call context. 

```csharp
public static inline int Min(int a, int b)
{
    return (a <= b) ? a : b;
}
```
