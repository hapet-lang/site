---
sidebar_position: 50
title: hapet lsp
---

# hapet lsp  

## Usage

The ```hapet lsp``` command can be used to run the [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol) server for **hapet**. Example of usage:
```bash title="bash"
hapet lsp --tcp
```  

To view available parameters, run the command:
```bash title="bash"
hapet lsp -h
```   

## Arguments  

- ```--tcp``` - with this parameter, the LSP server will communicate using the *TCP* protocol on port 5007. If this parameter is not set, communication will be via *stdin/stdout*.
