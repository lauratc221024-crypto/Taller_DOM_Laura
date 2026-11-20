# Taller: Interactividad con el DOM y React Native

Proyecto del taller SENA **De la Web al Móvil: Creando tu primer Contador de Likes**.

## Contenido
- `index.html`, `css/styles.css`, `js/script.js`: versión web con manipulación del DOM.
- `aplicacionClics/`: versión móvil con React Native + Expo.
- `docs/bitacora.md`: bitácora del proceso.
- `docs/cuadro-comparativo.md`: equivalencias y diferencias entre tecnologías.
- `docs/pruebas.md`: plan de pruebas funcionales.

## Funciones
- Dar like e incrementar el contador.
- Guardar cada interacción con hora en formato `HH:MM:SS`.
- Mostrar el registro más reciente al inicio.
- Restar likes sin permitir valores negativos.
- Reiniciar el contador y el historial.
- Cambiar el tema visual cuando el contador supera 10 likes.

## Ejecutar versión web
Abre `index.html` en el navegador o inicia Live Server desde Visual Studio Code.

## Ejecutar versión móvil
```bash
cd aplicacionClics
npm install
npx expo start
```
Escanea el QR con Expo Go.

## Entrega
Completa la lista de pruebas en `docs/pruebas.md`, agrega la URL real del repositorio a `docs/bitacora.md` y publica los commits locales en GitHub.
