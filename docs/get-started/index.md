---
sidebar_position: 2
title: Getting Started with hapet
---

# Getting Started with hapet

## Installation

Before starting with **hapet**, you need to download the [pre-built installer](https://hapetlang.com/#downloads) of the compiler or [build the compiler yourself](https://github.com/hapet-lang/hapet?tab=readme-ov-file#running-from-source) (why though?).

After installation, you can verify that **hapet** is working. To do this, run the following command in your terminal:
```bash title="bash"
hapet check
```  

[Learn more about using **hapet check**](../cmd-params/hapet_check).

## Creating a Project  

To create a project, you can use the ```hapet new``` command. Example of creating a console application project:  
```bash title="bash"
hapet new console -n MyProject
```  

After executing the command, a *MyProject* folder will be created with project files.   
[Learn more about using **hapet new**](../cmd-params/hapet_new).

## Running a Project  

To run a project, navigate to the project folder (the folder where the *.hptproj* file is located) and run the command:  
```bash title="bash"
hapet run
```  

[Learn more about using **hapet run**](../cmd-params/hapet_run).

## Working with a Project  

For convenient (or not) work with a project, an [extension for the *vs-code* code editor](https://marketplace.visualstudio.com/items?itemName=crackanddie.hapet-vscode) was created.  

After installing the extension, you can open a folder with a project that contains the *.hptproj* file.  

:::warning
Note - the **hapet** extension in *vs-code* only works if you open a folder with the project file (a file with the *.hptproj* extension)! 
:::
