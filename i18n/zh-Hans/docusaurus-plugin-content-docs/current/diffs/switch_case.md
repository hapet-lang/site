---
sidebar_position: 20
title: Switch/Case 语句
---

# Switch/Case 语句  

在 **hapet** 编程语言中，***switch/case*** 语句的外观与 C 类似的语言不同。示例：
```csharp
int test = 2;
switch (test)
{
    case (0) { }
    case (1)
    case (2)
    {
        if (test == 1)
            break;
        System.Console.WriteLine(test);
    }
    case (4)
        System.Console.WriteLine("It is 4");
    default 
    {
        System.Console.WriteLine("Unknown value");
    }
}
```
为什么每个 ***case*** 块的末尾没有 ***break***？- 因为如果 [C# 不允许贯穿情况](https://github.com/dotnet/csharplang/discussions/603) 就没有意义。  
但是，您仍然可以使用 **break** 来强制退出一个块。  

***goto*** 运算符在[这里](unsafe#goto)描述。
