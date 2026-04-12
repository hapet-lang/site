---
sidebar_position: 40
title: Generics
---

# Generics

In general, generics work the same way as in **C#**, but with some limitations/changes.  

## Static Fields in Generic Types  

Unlike **C#**, static fields in types are atomic for all concrete resulting types:  
```csharp
public class TestClass<T>
{
    public static int TestField = 0;
}

// in Main
var a = new TestClass<int>();
a.TestField = 5;

var b = new TestClass<string>();
var result = b.TestField; // here result will be 5
```  

This adds a restriction on static fields: the type of static fields in generic types **cannot** contain generic parameters of the parent type.

## Constraints for Generic Parameters   

Constraints for generic parameters are mostly the same as in **C#**, but several additional ones have been added:  
- ***new()*** - this constraint can now be used not only without types, but also with them. You can, for example, specify the need to use a type with a constructor with parameters of types **string** and **int** like this: 
    ``` cs
    ... where T: new(string, int) ...
    ```
- ***delegate*** - indicates that the generic type should be a **delegate**;  
- ***enum*** - indicates that the generic type should be an **enum** (not sure why this might be needed, but okay);

Various "strange" constraints have been removed: ***notnull***, ***default***, ***allows ref struct***, and anything related to *nullable*.
