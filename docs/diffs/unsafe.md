---
sidebar_position: 80
title: Unsafe Code
---

# Unsafe Code

Unsafe code in **hapet** works differently. Here are the main differences:  

## LibImport and DllImport Attributes  

To import functions from native libraries, use the ***LibImport*** and ***DllImport*** attributes.   

***LibImport*** is used to import functions from statically compiled libraries or dynamically compiled libraries with a **.lib** file.  
**Library linking occurs at the compilation stage**, so you need to have the necessary files at the project level or in the output directory!  
Example usage:  
```csharp
[LibImport("SomeLibrary.lib", "SomeFunction")]
public static extern int SomeFunction(int a, int b);
```  

***DllImport*** works the same as in *C#* - it imports a function from a dynamic library on first call. 
Example usage:
```csharp
[DllImport("SomeDynLibrary.dll", "SomeFunction")]
public static extern int SomeFunction(int a, int b);
```

## arglist for Imported Functions  

Unlike [**C#**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/expression-tree-restrictions), using ***arglist*** in **hapet** is normal. For imported functions with a variable number of parameters, this modifier will be necessary. Here's an example:  
```csharp
public static class Console
{
    [LibImport("", "vprintf")]
    public static extern int Printf(byte* format, arglist);
}
```  

Note that only functions with type declaration are allowed:
```c
int vprintf(const char *format, va_list arg)
```
not 
```c
int printf(const char *format, ...)
```

## stackalloc 

In the **hapet** language, you can use the ***stackalloc*** keyword to allocate arrays on the stack:

```csharp
byte[] arr = stackalloc byte[5];
```

:::info
Unlike **C#**, here ***stackalloc*** will allocate a full instance of the ```System.Array<T>``` structure, not just a piece of memory.
:::

:::warning
You should not use the result of ***stackalloc*** outside the current scope. Usage can lead to undefined program behavior.
:::

## new unsafe  

In the **hapet** language, you can create instances of classes and the ```System.Array<T>``` structure bypassing the garbage collector. This can be done by adding the ***unsafe*** keyword after the ***new*** word:

```csharp
class TestClass { }

// object will be created on the heap 
// and the garbage collector will not see it during collection
TestClass tst = new unsafe TestClass();

// the same can be done for arrays 
byte[] buffer = new unsafe byte[5];
```

Note that the ```buffer``` variable will still be of the ```System.Array<byte>``` structure type, but the array buffer will point to memory invisible to the garbage collector.  

Instances created with the ***unsafe*** keyword can be cleaned up using the ***Marshal.Free()*** function:  

```csharp
// for unsafe instances of classes and structures 
Marshal.Free(tst);
// for unsafe instances of arrays
Marshal.Free(buffer.Buffer);
```

## goto

The ***goto*** operator can only be used inside ***switch-case*** constructs. To create a transition label, use the ```$``` character:

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
