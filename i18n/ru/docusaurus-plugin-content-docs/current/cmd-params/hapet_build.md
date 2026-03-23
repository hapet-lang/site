---
sidebar_position: 20
title: hapet build
---

# hapet build  

## Использование

Команда ```hapet build``` может быть использована для сборки проекта. Пример использования:
```bash title="bash"
hapet build /project/MyTestProject.hptproj
```  

Если имя проекта не указано, **hapet** попытается найти проект в текущей открытой директории.  

Для просмотра доступных параметров запустите команду:
```bash title="bash"
hapet build -h
```  

:::info
Обратите внимание - ```hapet build``` автоматически вызывается командой ```hapet run```! 
:::