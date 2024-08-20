# prueba-node-react

# Guía de Despliegue del Proyecto

Esta guía describe los pasos necesarios para desplegar el proyecto utilizando Docker Compose y los Dockerfiles proporcionados.

## Requisitos Previos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu sistema:

- **Docker**: Puedes descargar Docker desde [docker.com](https://www.docker.com/products/docker-desktop).
- **Docker Compose**: Generalmente se incluye con Docker Desktop, pero también puedes instalarlo por separado desde [docs.docker.com/compose/install](https://docs.docker.com/compose/install/).

## Pasos para Desplegar el Proyecto

### 1. Clona el Repositorio

Si no tienes el código fuente, clónalo desde tu repositorio. Navega a la carpeta donde quieres clonar el proyecto y ejecuta:

```bash
git clone https://github.com/jcastrol/prueba-node-react.git
cd prueba-node-react
```
### 2. Configura los Dockerfiles

Asegúrate de que los Dockerfiles para frontend y backend estén en las carpetas correctas (./frontend y ./backend respectivamente) y que sus nombres sean correctos (frontend.dockerfile y backend.dockerfile).

### 3.Verifica el Archivo Docker Compose

Asegúrate de que el archivo compose.yaml esté correctamente configurado y que las rutas de construcción y configuración sean correctas:

### 4. Construir y Levantar los Contenedores
Ejecuta el siguiente comando en la raíz del proyecto para construir las imágenes y levantar los contenedores:

```bash
docker-compose up --build
```
Este comando construye las imágenes Docker para cada servicio y arranca los contenedores. La opción --build asegura que Docker reconstruya las imágenes en caso de que haya cambios en los Dockerfiles.


### 5. Accede a los Servicios
Una vez que los contenedores estén en ejecución, puedes acceder a los servicios en los siguientes URLs:

Frontend: http://localhost:3000
Backend: http://localhost:4000
Base de datos (PostgreSQL): http://localhost:5432