---
sidebar_position: 60
title: 反射
---

# 反射

## Type / GetType()  

您可以使用 **GetType()** 方法获取当前对象的类型。  

### FullName  

**FullName** 属性返回类型的全名，包括声明该类型的命名空间：  
```csharp
namespace SmallTestProject;

public class TestClass
{
}

// 这段代码在 Main 中
TestClass tst = new TestClass();
Type type = tst.GetType();
Console.WriteLine(type.FullName); // 输出 'SmallTestProject.TestClass'
```

### RawSize  

**RawSize** 属性返回创建实例时将分配的大小（以字节为单位）：  
```csharp
public class TestClass
{
    public byte Field1;
    public int Field2;
}
public struct TestStruct
{
    public byte Field1;
    public int Field2;
}

TestClass tst = new TestClass();
Type type = tst.GetType();
Console.WriteLine(type.RawSize.ToString()); // 输出 16

TestStruct tstStruct = new TestStruct();
Type typeStruct = tstStruct.GetType();
Console.WriteLine(typeStruct.RawSize.ToString()); // 输出 8
```  

:::info
为类实例分配的内存大小比较大 8 字节（取决于处理器架构），因为类实例存储指向类型信息的指针。 
:::
