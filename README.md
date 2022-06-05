<!--
title: 'Reto técnico'
description: 'Para el presente reto se realizó el desarrollo de una API en node js. con el framework Serverless con AWS '
layout: Doc
framework: v3
platform: AWS
language: nodeJS
priority: 1
authorLink: 'https://github.com/saulApp/serverless-challenge'
authorName: 'Saul Aranda Chavez.'
-->


# Detalle del reto:

1- Integrar API de Prueba StarWars API
2- Creación de servicio POST para la creación de notas 
3- Creación de servicio GET para obtener todas las notas
4- Creación de servicio GET para obtener una nota por Id
5- Creación de servicio PUT para actualizar la nota
6- Creación de servicio DELETE para eliminar una nota por Id
7- Realizar la documentación de los servicios


### Deploy

Se ejecuta el comando npm install para poder descargar todas las dependencias:

```bash
npm install
```

Se ejecuta el comando para realizar el deploy a aws:

```bash
serverless deploy --verbose
```

Se muestra el log sin errores en la subida: 

![carbon (1)](https://user-images.githubusercontent.com/44443381/172071399-3bb1041b-a288-47aa-82a8-16879b748be8.png)


