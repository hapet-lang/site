---
sidebar_position: 6
title: Конструкция switch/case
---

В языке **hapet** конструкция ***switch/case*** выглядит иначе, по сравнению с C-подобными языками. Пример:
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
Почему в конце каждого блока ***case*** нет ***break***? - потому что какой в этом смысл, если в **C#** [не разрешены *fall through cases*](https://github.com/dotnet/csharplang/discussions/603).  
Но вы все равно можете использовать **break** для принудительного выхода из блока.  

Оператор ***goto*** описан [здесь](unsafe#goto).