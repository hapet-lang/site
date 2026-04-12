---
sidebar_position: 70
title: 预处理器指令
---

**hapet** 语言提供了比 **C#** 更广泛的指令支持，但仍然不如 **C/C++** 广泛。  

:::info
在 **hapet** 语言中，***#if***、***#define*** 等块中的表达式必须以 ```;``` 结尾，就像常规语言表达式一样。
:::

## #define

***#define*** 指令现在允许在名称旁边声明常量值。值仅允许 ***string*** 和 ***int*** 类型。示例：
```csharp
#define MY_TEST_DEFINE 10;
```

在文件中指定的所有 ***#define*** 指令仅在该文件中可用。   
要声明在整个项目中可用的全局 ***#define*** 指令，您可以将以下行添加到您的 **.hptproj** 文件：
```xml
<ItemGroup>
    <Define Name="GLOBAL_DEFINE">TestString</Define>
    <Define Name="GLOBAL_DEFINE2"/>
</ItemGroup>
```
请注意，全局 ***#define*** 声明目前仅支持 ***string*** 类型。  

### 预定义的 #define 指令  
执行项目构建时，将自动创建以下全局声明：  
- **HAPET_VERSION** - 包含 **hapet** 编译器的版本，例如 "1.2.3"，类型 ***string***；
- **TARGET_PLATFORM** - 包含目标平台的名称，例如 "win-x64"，类型 ***string***；
- **CURRENT_PLATFORM** - 包含当前平台的名称，例如 "linux-x64"，类型 ***string***；
- **DEBUG/RELEASE** - 在 *Debug* 模式下构建时，将声明 **DEBUG** 指令；在 *Release* 下构建时，将声明 **RELEASE** 指令。  

## #if, #elif, #else, #endif  
这些指令的行为与 **C#** 中的行为相同，除了 ***#if*** 和 ***#elif*** 中的条件处理：
- 如果指令声明时没有值，则当指令被声明时条件被满足；
- 如果指令声明的值类型为 ***int***，则条件中可使用比较运算符：```<, >, <=, >=, ==, !=```；
- 如果指令声明的值类型为 ***string***，则可使用字符串比较运算符：```==, !=```。如果字符串看起来像 *1.2.3*（如版本），则可使用版本比较：```<, >, <=, >=```； 
- 逻辑表达式可使用 ```||, &&``` 运算符。  

示例：  
```csharp
#if HAPET_VERSION < "0.3.2";
Console.WriteLine("Version is lower than 0.3.2");
#elif !DEBUG;
Console.WriteLine("We are not in DEBUG mode");
#endif
```

## #undef

从文件中删除声明，或如果在文件中找不到该声明，则从全局存储中删除。示例：
```csharp
#undef MY_TEST_DEFINE;
```

## #error 和 #warning 

与 **C#** 中的工作方式相同，但消息必须在引号中：
```csharp
#error "Some error text here";
```
