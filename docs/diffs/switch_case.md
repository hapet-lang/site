---
sidebar_position: 20
title: switch/case Statement
---

# Switch/Case Statement  

In the **hapet** programming language, the ***switch/case*** statement looks different compared to C-like languages. Example:
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
Why is there no ***break*** at the end of each ***case*** block? - because what's the point if [C# doesn't allow fall-through cases](https://github.com/dotnet/csharplang/discussions/603).  
However, you can still use **break** to force exit from a block.  

The ***goto*** operator is described [here](unsafe#goto).
