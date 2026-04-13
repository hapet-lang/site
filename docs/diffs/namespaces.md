---
sidebar_position: 2
title: Namespaces
---

# Namespaces

In the **hapet** programming language, namespaces can only be specified in a single line:  
```csharp
using ...;

namespace CustomNamespace;

...
```

The specified namespace will be applied to the entire file. Currently, only one namespace declaration is possible.  

Specifying a namespace using curly braces ```namespace { ... }``` is **not allowed**.  

If no namespace is specified, it will be automatically designated as:  
```csharp
namespace ProjectName.Path.To.File;
```
