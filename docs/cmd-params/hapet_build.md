---
sidebar_position: 20
title: hapet build
---

# hapet build  

## Usage

The ```hapet build``` command can be used to build a project. Example of usage:
```bash title="bash"
hapet build /project/MyTestProject.hptproj
```  

If the project name is not specified, **hapet** will try to find the project in the current directory.  

To view available parameters, run the command:
```bash title="bash"
hapet build -h
```  

:::info
Note - ```hapet build``` is automatically called by the ```hapet run``` command! 
:::

## Arguments  

- ```-t|--target <PLATFORM>``` - the platform for which the project will be built. If the target platform is not specified, the project will be built for the current platform.  
  List of available platforms: ```win-x64```, ```win-x86```, ```linux-x64```, ```linux-x86```.  
- ```--verbose``` - detailed output during project build.  
- ```--debug|--release``` - project build configuration. If the configuration is not specified, ```--debug``` is used.
