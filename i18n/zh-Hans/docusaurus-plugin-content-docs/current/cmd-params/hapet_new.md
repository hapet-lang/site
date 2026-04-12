---
sidebar_position: 40
title: hapet new
---

# hapet new  

## 用法

```hapet new``` 命令可用于创建 **hapet** 项目。使用示例：
```bash title="bash"
hapet new console -n ConsoleTest
```  

要查看可用的模板和参数，请运行命令：
```bash title="bash"
hapet new -h
```   

## 可用的项目模板  

- ```console``` - 控制台应用程序项目的模板。
- ```classlib``` - 类库项目的模板。  

## 参数  

- ```-n|--name <PROJECT_NAME>``` - 要创建的项目的名称。如果未指定名称，将使用默认的模板项目名称。
