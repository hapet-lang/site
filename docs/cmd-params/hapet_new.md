---
sidebar_position: 40
title: hapet new
---

# hapet new  

## Usage

The ```hapet new``` command can be used to create **hapet** projects. Example of usage:
```bash title="bash"
hapet new console -n ConsoleTest
```  

To view available templates and parameters, run the command:
```bash title="bash"
hapet new -h
```   

## Available project templates  

- ```console``` - template for a console application project.
- ```classlib``` - template for a class library project.  

## Arguments  

- ```-n|--name <PROJECT_NAME>``` - name of the project to create. If the name is not specified, the default template project name will be used.
