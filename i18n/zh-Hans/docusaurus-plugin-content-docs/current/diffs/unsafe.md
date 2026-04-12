---
sidebar_position: 80
title: 不安全代码
---

# 不安全代码

**hapet** 中的不安全代码的工作方式不同。以下是主要区别：  

## LibImport 和 DllImport 属性  

要从本机库导入函数，请使用 ***LibImport*** 和 ***DllImport*** 属性。   

***LibImport*** 用于从静态编译的库或具有 **.lib** 文件的动态编译库中导入函数。  
**库链接在编译阶段进行**，因此您需要在项目级别或输出目录中拥有必要的文件！  
使用示例：  
```csharp
[LibImport("SomeLibrary.lib", "SomeFunction")]
public static extern int SomeFunction(int a, int b);
```  

***DllImport*** 与 *C#* 中的工作方式相同 - 它在首次调用时从动态库导入函数。 
使用示例：
```csharp
[DllImport("SomeDynLibrary.dll", "SomeFunction")]
public static extern int SomeFunction(int a, int b);
```

## 导入函数的 arglist  

与 [**C#**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/expression-tree-restrictions) 不同，在 **hapet** 中使用 ***arglist*** 是正常的。对于参数数量可变的导入函数，此修饰符是必需的。以下是示例：  
```csharp
public static class Console
{
    [LibImport("", "vprintf")]
    public static extern int Printf(byte* format, arglist);
}
```  

请注意，仅允许具有类型声明的函数：
```c
int vprintf(const char *format, va_list arg)
```
而不是 
```c
int printf(const char *format, ...)
```

## stackalloc 

在 **hapet** 语言中，您可以使用 ***stackalloc*** 关键字在堆栈上分配数组：

```csharp
byte[] arr = stackalloc byte[5];
```

:::info
与 **C#** 不同，这里 ***stackalloc*** 将分配 ```System.Array<T>``` 结构的完整实例，而不是只分配一块内存。
:::

:::warning
您不应该在当前作用域之外使用 ***stackalloc*** 的结果。使用可能导致程序行为未定义。
:::

## new unsafe  

在 **hapet** 语言中，您可以创建类和 ```System.Array<T>``` 结构的实例，绕过垃圾收集器。这可以通过在 ***new*** 字后添加 ***unsafe*** 关键字来完成：

```csharp
class TestClass { }

// 对象将在堆上创建 
// 垃圾收集器在收集期间将看不到它
TestClass tst = new unsafe TestClass();

// 对数组也可以这样做 
byte[] buffer = new unsafe byte[5];
```

请注意，```buffer``` 变量仍然是 ```System.Array<byte>``` 结构类型，但数组缓冲区将指向对垃圾收集器不可见的内存。  

使用 ***unsafe*** 关键字创建的实例可以使用 ***Marshal.Free()*** 函数进行清理：  

```csharp
// 对于不安全的类和结构实例 
Marshal.Free(tst);
// 对于不安全的数组实例
Marshal.Free(buffer.Buffer);
```

## goto

***goto*** 运算符只能在 ***switch-case*** 构造内使用。要创建转移标签，请使用 ```$``` 字符：

```csharp
switch (fmt & 0xFFDF)
{
    case ('G')
    {
        if (digits > 0)
            goto caseDefault;
        else
            goto caseD;
    }
    case ('D') $caseD
    {
        return 0;
    }
    default $caseDefault
    {
        return 1;
    }
}
```
