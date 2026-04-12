---
sidebar_position: 10
title: hapet run
---

# hapet run  

## Usage

The ```hapet run``` command can be used to run a project. Example of usage:
```bash title="bash"
hapet run /project/MyTestProject.hptproj
```  

If the project name is not specified, **hapet** will try to find the project in the current directory.  

To view available parameters, run the command:
```bash title="bash"
hapet run -h
```  

## Arguments  

- ```-t|--target <PLATFORM>``` - the platform for which the project will be built. If the target platform is not specified, the project will be built for the current platform.  
  List of available platforms: ```win-x64```, ```win-x86```, ```linux-x64```, ```linux-x86```.  
- ```--verbose``` - detailed output during project build.  
- ```--debug|--release``` - project build configuration. If the configuration is not specified, ```--debug``` is used.
