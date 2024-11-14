# Proyecto App Adoption

Este proyecto es una aplicación para adopción de mascotas. A continuación, se detallan los pasos para instalar y configurar el proyecto.

## Requisitos

- Node.js
- MongoDB
- Docker (opcional para el despliegue)

## Instrucciones de instalación

### 1. Clonar el repositorio
Clona el repositorio e ingresa al directorio del proyecto:

git clone https://github.com/Jaret-Hl/final-adoption.git
cd app-adoption

### Instalar dependencias
Ejecuta el siguiente comando para instalar las dependencias del proyecto:

npm install

### Configuración de la base de datos
Abre el archivo de configuración (por ejemplo, .env o config.js dependiendo de la estructura de tu proyecto).

Agrega la ruta de conexión a tu base de datos MongoDB:

MONGODB_URI=mongodb://<usuario>:<contraseña>@<host>:<puerto>/<nombre_base_de_datos>

### Desplegar la imagen de Docker (opcional)
Si deseas desplegar la aplicación con Docker, puedes utilizar la imagen disponible en el siguiente URL:

docker pull jarethl/app-adoption:tagname

Nota: Reemplaza tagname con la versión de la imagen que deseas utilizar.

### Ejecutar la aplicación 
npm run dev

Esto iniciará la aplicación en el entorno local.

