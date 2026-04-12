---
sidebar_position: 60
title: Reflection
---

# Reflection

## Type / GetType()  

You can get the type of the current object using the **GetType()** method.  

### FullName  

The **FullName** property returns the full name of the type, including the namespace where the type was declared:  
```csharp
namespace SmallTestProject;

public class TestClass
{
}

// this code is in Main
TestClass tst = new TestClass();
Type type = tst.GetType();
Console.WriteLine(type.FullName); // outputs 'SmallTestProject.TestClass'
```

### RawSize  

The **RawSize** property returns the size in bytes that will be allocated when creating an instance:  
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
Console.WriteLine(type.RawSize.ToString()); // outputs 16

TestStruct tstStruct = new TestStruct();
Type typeStruct = tstStruct.GetType();
Console.WriteLine(typeStruct.RawSize.ToString()); // outputs 8
```  

:::info
The size of memory allocated for a class instance is 8 bytes larger (depends on processor architecture) because class instances store a pointer to type information. 
:::
