---
sidebar_position: 45
title: hapet update
---

# hapet update  

## Usage

The ```hapet update``` command can be used to update the **hapet** compiler to the latest version. Example of usage:
```bash title="bash"
hapet update
```  

To view available parameters, run the command:
```bash title="bash"
hapet update -h
```   

:::warning
Note - ```hapet update``` runs a process after itself to replace the downloaded compiler files.  
This process may take some time (usually a few seconds).   
During file replacement, it is recommended not to use the compiler.   
For greater control over compiler updates, see the ```--manual``` parameter. 
:::

## Arguments  

- ```--manual``` - with this parameter, the ```hapet update``` command will not run a program to replace the compiler files.   
  Therefore, to successfully update the compiler, the user will need to run the ```hapet-replacer``` command.
