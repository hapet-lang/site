---
sidebar_position: 30
title: hapet restore
---

# hapet restore  

## Usage

The ```hapet restore``` command can be used to restore and verify project dependencies. Example of usage:
```bash title="bash"
hapet restore /project/MyTestProject.hptproj
```  

If the project name is not specified, **hapet** will try to find the project in the current directory.  

To view available parameters, run the command:
```bash title="bash"
hapet restore -h
```  

:::info
Note - ```hapet restore``` is automatically called by the ```hapet build``` and ```hapet run``` commands! 
:::
