---
sidebar_position: 9
title: Сборщик мусора
---

# Сборщик мусора

В языке программирования **hapet** сборщик мусора ничего не убирает сам параллельно.  
Пользователю предоставляется полный контроль над частотой/расположением вызовов сборщика мусора:  
```csharp
public void Entry()
{
    CalledFunction();
    Gc.Collect(); // obj будет собран
}

public void CalledFunction()
{
    object obj = new object();
}
```

