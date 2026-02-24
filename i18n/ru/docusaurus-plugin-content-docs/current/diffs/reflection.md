---
sidebar_position: 4
title: Рефлексия
---

# Рефлексия

## Type / GetType()  

Вы можете получить тип текущего объекта с помошью метода **GetType()**.  

### FullName  

Свойство **FullName** возвращает полное название типа, включая пространство имен, где этот тип был объявлен:  
```csharp
namespace SmallTestProject;

public class TestClass
{
}

// this code is in Main
TestClass tst = new TestClass();
Type type = tst.GetType();
Console.WriteLine(type.FullName); // выводит 'SmallTestProject.TestClass'
```

### RawSize  

Свойство **RawSize** возвращает размер в байтах, который будет выделяться при создании экземпляра:  
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
Console.WriteLine(type.RawSize.ToString()); // выводит 16

TestStruct tstStruct = new TestStruct();
Type typeStruct = tstStruct.GetType();
Console.WriteLine(typeStruct.RawSize.ToString()); // выводит 8
```  

:::info
Размер выделяемой памяти под экземпляр класса больше на 8 байт (зависит от архитектуры процессора), так как у экземпляров классов хранится указатель на информацию о типе. 
:::
