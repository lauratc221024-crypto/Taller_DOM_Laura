# Bitácora de desarrollo – Contador de Likes

**Aprendiz:** Laura Isabella Tavera Contreras  
**Programa:** Tecnólogo en Análisis y Desarrollo de Software (ADSO)  
**Ficha:** 3407186  
**Competencia:** Codificar los módulos del software  
**Fecha:** 20 de noviembre de 2026

## Objetivo
Construir la misma aplicación de contador de likes en dos entornos: una página web con HTML, CSS y JavaScript, y una aplicación móvil con React Native y Expo. En ambas se muestra el total de likes y se registra la hora de cada incremento.

## Parte 1. Desarrollo web
1. Se creó la estructura del proyecto con `index.html`, la carpeta `css` y la carpeta `js`.
2. En `index.html` se definieron la tarjeta principal, el título, el contador, los botones de acción y la tabla con las columnas **Nº Clic** y **Hora**.
3. En `css/styles.css` se diseñó la interfaz con una tarjeta central, fondo claro, tipografía legible, botones, tabla y adaptación a pantallas pequeñas.
4. En `js/script.js` se seleccionaron los elementos del DOM mediante `getElementById`.
5. Se creó la variable `likes` para almacenar el total de interacciones.
6. Se agregó un `addEventListener` de tipo `click` al botón Dar like. Cada clic incrementa el contador y actualiza el texto mediante `textContent`.
7. Se utilizó el objeto `Date` para obtener la hora del sistema y formatearla como `HH:MM:SS`.
8. Se crean filas y celdas con `createElement`; la fila más reciente se agrega al inicio de la tabla mediante `prepend`.
9. Se agregó el botón Restar like, que evita que el contador sea menor que cero.
10. Se agregó el botón Reiniciar, que devuelve el contador a cero y limpia el historial de la tabla.
11. Se implementó el reto de color: cuando el contador supera 10 likes se activa la clase `tema-destacado` en el elemento `body`.

## Parte 2. Aplicación móvil con React Native y Expo
1. Se creó el proyecto móvil con Expo mediante `npx create-expo-app aplicacionClics`.
2. Se ingresó a la carpeta con `cd aplicacionClics` y se abrió el proyecto en Visual Studio Code con `code .`.
3. Se inició el servidor de desarrollo con `npx expo start` y se utilizó Expo Go para visualizar la aplicación en el teléfono.
4. En `src/app/index.tsx` se construyó la interfaz usando componentes `View`, `Text`, `ScrollView` y `TouchableOpacity`.
5. Se utilizó `useState` para administrar el total de likes y el arreglo de registros.
6. El evento `onPress` del botón Dar like incrementa el estado y agrega un registro con la hora actual.
7. Se agregó la acción Restar like, con validación para no bajar de cero.
8. Se agregó Reiniciar para volver el contador a cero y vaciar los registros.
9. Se aplicó el cambio de tema cuando el contador supera 10 likes, usando estilos condicionales.

## Parte 3. Pruebas realizadas / por realizar
- [ ] Abrir `index.html` en un navegador y verificar que inicia en cero.
- [ ] Pulsar Dar like varias veces y comprobar que el contador aumenta.
- [ ] Verificar que cada registro muestre la hora `HH:MM:SS` y que el último aparezca arriba.
- [ ] Comprobar que Restar like no permita valores negativos.
- [ ] Comprobar que Reiniciar deje el contador en cero y limpie la tabla.
- [ ] Llegar a 11 likes y verificar el cambio de color.
- [ ] Ejecutar la aplicación móvil con Expo Go y repetir las pruebas.

## Conceptos aprendidos
En la web se actualiza directamente la interfaz mediante la manipulación del DOM y eventos de JavaScript. En React Native no se utilizan etiquetas HTML ni el DOM del navegador: se construye la interfaz con componentes nativos y se actualiza mediante el estado de React (`useState`).

## Repositorio
**Enlace:** Pegar aquí la URL del repositorio de GitHub después de publicar el proyecto.  
**Commits:** El proyecto incluye una secuencia de 10 commits locales para documentar sus avances. Después de configurar el remoto de GitHub, se deben publicar con `git push`.
