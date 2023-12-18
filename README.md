# Descargador de Imágenes de Reddit

Este script de Node.js utiliza la API de Reddit para descargar imágenes desde un subreddit específico y almacenarlas localmente en carpetas correspondientes. A continuación, se proporciona una guía detallada sobre cómo usar y entender el código.

## Requisitos previos
- [Node.js](https://nodejs.org/) instalado en tu máquina.

## Configuración inicial
1. Clona o descarga este repositorio en tu máquina.
2. Abre una terminal en la carpeta del proyecto y ejecuta el siguiente comando para instalar las dependencias:

```bash
npm install
```
# Uso del script
* Para ejecutar el script, utiliza el siguiente comando:

```bash
node src
```

# Detalles del script
## Bibliotecas utilizadas
* axios: Se utiliza para realizar solicitudes HTTP a la API de Reddit.
* fs: Módulo nativo de Node.js utilizado para la manipulación de archivos y carpetas.
- Función principal: descargarTodasLasImagenes()
## Esta función realiza los siguientes pasos:

1. Definición de subreddits: 
Configura el subreddit desde el cual se descargarán las imágenes. Puedes cambiar o agregar subreddits modificando el array subreddits.

2. Bucle principal: 
Recorre cada subreddit definido en el array.

3. Obtención de publicaciones: 
Utiliza la API de Reddit para obtener las publicaciones más populares del subreddit.

4. Filtrado de imágenes: 
Filtra las URL de las imágenes asegurándose de que sean archivos de imagen (jpg, png, gif) o que la publicación sea marcada como contenido para adultos.

5. Creación de carpetas: 
Verifica si la carpeta correspondiente al subreddit existe; si no, la crea.

6. Descarga de imágenes: 
Descarga cada imagen y la almacena en la carpeta correspondiente, utilizando un nombre de archivo único basado en la fecha y posición en la lista.

7. Iteración a través de las páginas de Reddit: 
Repite el proceso hasta que no haya más páginas de publicaciones en el subreddit.

8. Finalización del proceso: 
Imprime mensajes indicando que todas las imágenes del subreddit han sido descargadas.

## Manejo de errores
El script maneja errores de manera adecuada, mostrando mensajes detallados en caso de problemas durante la obtención o descarga de imágenes.

## Avisos importantes
Asegúrate de cumplir con las políticas y términos de servicio de Reddit al utilizar este script.
Este script puede descargar contenido para adultos si está presente en el subreddit.
Contribuciones
Si encuentras algún error o tienes sugerencias para mejorar el script, ¡no dudes en contribuir! Abre un problema o envía una solicitud de extracción.

# Sociales
[Discord](https://discord.gg/MpJvjvKxgT)
[Twitter](https://twitter.com/AleiSistemas)
[Pagina](https://aleistudio.xyz/)