---
sidebar_position: 50
title: hapet lsp
---

# hapet lsp  

## Использование

Команда ```hapet lsp``` может быть использована для запуска [LSP](https://en.wikipedia.org/wiki/Language_Server_Protocol) сервера **hapet**. Пример использования:
```bash title="bash"
hapet lsp --tcp
```  

Для просмотра доступных параметров запустите команду:
```bash title="bash"
hapet lsp -h
```   

## Аргументы  

- ```--tcp``` - с этим параметром LSP сервер будет общаться по *TCP* протоколу по порту 5007. Если этот параметр не задан, общение будет проходить по *stdin/stdout*.