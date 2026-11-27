# CRUD de Productos

Proyecto de Programación III (ITLA) para practicar Git y Git Flow.

## Tecnologías
- Node.js
- Express

## Cómo ejecutarlo
1. Instalar las dependencias: `npm install`
2. Iniciar el servidor: `node server.js`
3. Abrir en el navegador: http://localhost:3000

## Ramas
- main: versión final
- qa: pruebas
- dev: desarrollo
- feature/: ramas de trabajo

## Rutas de la API

| Método | Ruta | Descripción |
| --- | --- | --- |
| GET | /products | Lista todos los productos |
| GET | /products/:id | Obtiene un producto por su id |
| POST | /products | Crea un producto |
| PUT | /products/:id | Actualiza un producto existente |
| DELETE | /products/:id | Elimina un producto existente |

Ejemplo de cuerpo para POST y PUT:

{"name": "Laptop", "price": 500}