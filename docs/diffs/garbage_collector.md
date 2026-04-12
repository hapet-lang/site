---
sidebar_position: 50
title: Garbage Collector
---

# Garbage Collector

In the **hapet** programming language, the garbage collector does not clean anything up by itself in parallel.  
Users get full control over the frequency/placement of garbage collector calls:  
```csharp
public void Entry()
{
    CalledFunction();
    Gc.Collect(); // obj will be collected
}

public void CalledFunction()
{
    object obj = new object();
}
```
