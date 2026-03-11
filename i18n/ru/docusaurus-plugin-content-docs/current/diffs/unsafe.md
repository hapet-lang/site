---
sidebar_position: 80
title: Небезопасный код
---

# Небезопасный код

Небезопасный код в **hapet** работает иначе. Вот главные отличия:  

## Аттрибуты LibImport и DllImport  

Для импорта функций из нативных библиотек используются аттрибуты ***LibImport*** и ***DllImport***.   

***LibImport*** используется для импорта функций из статически скомпилированных библиотек или динамически скомпилированных библиотек с **.lib** файлом.  
**Линковка с библиотекой происходит на этапе компиляции**, так что необходимо иметь необходимые файлы на уровне проекта или в выходной директории!  
Пример использования:  
```csharp
[LibImport("SomeLibrary.lib", "SomeFunction")]
public static extern int SomeFunction(int a, int b);
```  

***DllImport*** работает так же, как в *C#* - импортирует функцию из динамической библиотеки при первом вызове. 
Пример использования:
```csharp
[DllImport("SomeDynLibrary.dll", "SomeFunction")]
public static extern int SomeFunction(int a, int b);
```

## arglist для импортируемых функций  

В отличие от [**C#**](https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/compiler-messages/expression-tree-restrictions), использование ***arglist*** в **hapet** - это нормально. Для импортируемых функций с переменным количеством параметров, этот модификатор будет необходим. Вот пример:  
```csharp
public static class Console
{
    [LibImport("", "vprintf")]
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

## stackalloc 

В языке **hapet** можно использовать ключевое слово ***stackalloc*** для аллокации массивов на стэке:

```csharp
byte[] arr = stackalloc byte[5];
```

:::info
В отличие от **C#**, здесь ***stackalloc*** будет аллоцировать полноценный экземпляр структуры ```System.Array<T>```, а не просто кусок памяти.
:::

:::warning
Не следует использовать результат ***stackalloc*** за пределами текущего скоупа. Использование может привести к неопределенному поведению программы.
:::

## new unsafe  

В языке **hapet** можно создавать объекты классов и структуры ```System.Array<T>``` в обход сборщика мусора. Это можно делать добавив ключевое слово ***unsafe*** после слова ***new***:

```csharp
class TestClass { }

// объект будет создан на куче 
// и сборщик мусора не будет видеть его при сборке
TestClass tst = new unsafe TestClass();

// то же можно делать для массивов 
byte[] buffer = new unsafe byte[5];
```

Обратите внимание, переменная ```buffer``` все еще будет структурного типа ```System.Array<byte>```, но буфер массива уже будет указывать на невидимую для сборщика мусора память.  

Созданные экземпляры с ключевым словом ***unsafe*** можно отчистить используя функцию ***Marshal.Free()***:  

```csharp
// для unsafe экземляров классов и структур 
Marshal.Free(tst);
// для unsafe экземляров массивов
Marshal.Free(buffer.Buffer);
```

## goto

Оператор ***goto*** можно использовать только внутри конструкций ***switch-case***. Для создания метки перехода, нужно использовать символ ```$```:

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