---
sidebar_position: 10
title: hapet run
---

# hapet run  

## 用法

```hapet run``` 命令可用于运行项目。使用示例：
```bash title="bash"
hapet run /project/MyTestProject.hptproj
```  

如果未指定项目名称，**hapet** 将尝试在当前目录中查找项目。  

要查看可用的参数，请运行命令：
```bash title="bash"
hapet run -h
```  

## 参数  

- ```-t|--target <PLATFORM>``` - 项目将为之编译的平台。如果未指定目标平台，项目将为当前平台编译。  
  可用平台列表：```win-x64```, ```win-x86```, ```linux-x64```, ```linux-x86```。  
- ```--verbose``` - 项目编译期间的详细输出。  
- ```--debug|--release``` - 项目编译配置。如果未指定配置，则使用 ```--debug```。
