---
sidebar_position: 40
title: 泛型
---

# 泛型

总的来说，泛型的工作方式与 **C#** 中相同，但有一些限制/更改。  

## 泛型类型中的静态字段  

与 **C#** 不同，类型中的静态字段对所有具体的结果类型是原子的：  
```csharp
public class TestClass<T>
{
    public static int TestField = 0;
}

// 在 Main 中
var a = new TestClass<int>();
a.TestField = 5;

var b = new TestClass<string>();
var result = b.TestField; // 这里 result 将等于 5
```  

这对静态字段施加了限制：泛型类型中的静态字段的类型 **不能** 包含父类型的泛型参数。

## 泛型参数的约束   

泛型参数的约束大多与 **C#** 中相同，但添加了几个额外的：  
- ***new()*** - 此约束现在可以不仅在没有类型的情况下使用，还可以与类型一起使用。例如，您可以指定必须使用具有 **string** 和 **int** 类型参数的构造函数的类型，如下所示： 
    ``` cs
    ... where T: new(string, int) ...
    ```
- ***delegate*** - 表示泛型类型应该是 **delegate**；  
- ***enum*** - 表示泛型类型应该是 **enum**（不知道这为什么可能有用，但好吧）；

各种"奇怪"的约束已被移除：***notnull***、***default***、***allows ref struct*** 以及与 *nullable* 相关的所有内容。
