---
sidebar_position: 30
title: hapet restore
---

# hapet restore  

## Использование

Команда ```hapet restore``` может быть использована для восстановления и проверки зависимостей проекта. Пример использования:
```bash title="bash"
hapet restore /project/MyTestProject.hptproj
```  

Если имя проекта не указано, **hapet** попытается найти проект в текущей открытой директории.  

Для просмотра доступных параметров запустите команду:
```bash title="bash"
hapet restore -h
```  

:::info
Обратите внимание - ```hapet restore``` автоматически вызывается командами ```hapet build``` и ```hapet run```! 
:::