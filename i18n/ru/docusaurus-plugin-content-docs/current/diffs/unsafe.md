---
sidebar_position: 5
title: Небезопасный код
---

# Небезопасный код

Небезопасный код в **hapet** работает иначе. Вот главные отличия:  

## arglist для импортируемых функций  

В отличие от [**C#**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/expression-tree-restrictions), использование ***arglist*** в **hapet** - это нормально. Для импортируемых функций с переменным количеством параметров, этот модификатор будет необходим. Вот пример:  
```csharp
public static class Console
{
    [DllImport("", "vprintf")]
    public static extern int Printf(byte* format, arglist);
}
```  

Обратите внимание, что допускается использование только фукнций с декларацией типа:
```c
int vprintf(const char *format, va_list arg)
```
а не 
```c
int printf(const char *format, ...)
```