---
sidebar_position: 70
title: Preprocessor Directives
---

The **hapet** language provides more extensive support for directives compared to **C#**, but still not as extensive as **C/C++**.  

:::info
In the **hapet** language, expressions in ***#if***, ***#define***, etc. blocks must end with ```;```, like regular language expressions.
:::

## #define

The ***#define*** directive now allows declaring a constant value next to the name. Only ***string*** and ***int*** types are allowed for values. Example:
```csharp
#define MY_TEST_DEFINE 10;
```

All ***#define*** directives specified in a file will only be available in that file.   
To declare global ***#define*** directives available throughout the project, you can add the following lines to your **.hptproj** file:
```xml
<ItemGroup>
    <Define Name="GLOBAL_DEFINE">TestString</Define>
    <Define Name="GLOBAL_DEFINE2"/>
</ItemGroup>
```
Note that global ***#define*** declaration currently supports only ***string*** type.  

### Predefined #define Directives  
When building a project, the following global declarations will be automatically created:  
- **HAPET_VERSION** - contains the version of the **hapet** compiler, for example "1.2.3", type ***string***;
- **TARGET_PLATFORM** - contains the name of the target platform, for example "win-x64", type ***string***;
- **CURRENT_PLATFORM** - contains the name of the current platform, for example "linux-x64", type ***string***;
- **DEBUG/RELEASE** - when building in *Debug* mode, the **DEBUG** directive will be declared, when building in *Release* - **RELEASE** will be declared.  

## #if, #elif, #else, #endif  
The behavior of these directives is identical to their behavior in **C#**, except for the handling of conditions in ***#if*** and ***#elif***:
- if a directive was declared without a value, the condition is met if the directive was declared at all;
- if a directive was declared with a value of type ***int***, comparison operators are available in the condition: ```<, >, <=, >=, ==, !=```;
- if a directive was declared with a value of type ***string***, string comparison operators are available: ```==, !=```. If strings look like *1.2.3* (like versions), version comparison is available: ```<, >, <=, >=```; 
- logical operators ```||, &&``` are available for logical expressions.  

Example:  
```csharp
#if HAPET_VERSION < "0.3.2";
Console.WriteLine("Version is lower than 0.3.2");
#elif !DEBUG;
Console.WriteLine("We are not in DEBUG mode");
#endif
```

## #undef

Removes a declaration from the file or from global storage if it was not found in the file. Example:
```csharp
#undef MY_TEST_DEFINE;
```

## #error and #warning 

Works the same as in **C#**, but the message must be in quotes:
```csharp
#error "Some error text here";
```
