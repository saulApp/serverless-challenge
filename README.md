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

7- Realizar la documentación de los servicios con Open API/Swagger

8- Realizar las pruebas unitarias con Jest


### Deploy :runner:
---

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


### Prueba de servicios 🚀
---

1- Obtener personaje de star wars por Id

![image](https://user-images.githubusercontent.com/44443381/172071535-55cacf48-fc7e-441d-83e3-ca29ff1c12ea.png)

2- Obtener pelicula de star wars por Id

![image](https://user-images.githubusercontent.com/44443381/172081179-e5ce0f37-1561-4a6a-af00-ff654c98a87a.png)

3- Creación de una nota

![image](https://user-images.githubusercontent.com/44443381/172071746-677057f7-51eb-47fd-a031-92a0c27088b2.png)

4- Listar notas

![image](https://user-images.githubusercontent.com/44443381/172071667-8ceefe6e-1a02-456c-a15f-59c19bf1bd0d.png)

5- Obtener una nota por Id

![image](https://user-images.githubusercontent.com/44443381/172071699-f4067fea-7f0e-4019-b2f5-ae7ca984fc0b.png)

6- Actualizar una nota por Id

![image](https://user-images.githubusercontent.com/44443381/172071719-c635ac65-b3e9-4ea3-a807-d0aae252a13f.png)

7- Eliminar una nota por Id

![image](https://user-images.githubusercontent.com/44443381/172071729-04275f6d-e145-4f47-ab5d-c8497231db4d.png)


### Notas almacenadas en la base de datos 
---

![image](https://user-images.githubusercontent.com/44443381/172082895-75b3f374-20a6-4731-9747-bc1f8e2468eb.png)

### Documentación de servicios :memo:
---

Se ejecuta el comando para generar la documentación en el archivo openapi.yml:

```bash
serverless openapi generate
```

![image](https://user-images.githubusercontent.com/44443381/172071845-6371fba5-2c57-4f28-8f73-3b522c5c8480.png)

### pruebas unitarias 🚀
---

Ejecutar comando para poder realizar las pruebas

```bash
npm run test
```

![carbon (2)](https://user-images.githubusercontent.com/44443381/172080929-5f9186c6-6cf7-4ddc-b10a-f2695ea67e17.png)



