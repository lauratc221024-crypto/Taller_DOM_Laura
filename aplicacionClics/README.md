# aplicacionClics — Contador de Likes (React Native + Expo)

Segunda parte del taller: la misma aplicación de contador de likes de la web,
pero desarrollada como aplicación móvil con **React Native + Expo**.

## Funcionalidad

- Contador de likes que inicia en cero.
- Botón "Dar like" que incrementa el contador.
- Registro de cada clic con la hora exacta en formato `HH:MM:SS`.
- Los registros se muestran del más reciente al más antiguo.
- Sin manipulación del DOM: se usan `View`, `Text`, `TouchableOpacity` y `useState`.

## Requisitos

- Node.js
- La app **Expo Go** en el teléfono (Android o iOS)

## Ejecutar el proyecto

```bash
cd aplicacionClics
npm install
npx expo start
```

Luego escanea el código QR con Expo Go.

También puedes verlo en el navegador:

```bash
npx expo start --web
```

## Estructura

```
aplicacionClics/
├── index.ts            # Punto de entrada: registra el componente principal
├── src/app/index.tsx   # Pantalla del contador de likes
├── app.json            # Configuración de Expo
└── package.json
```

## Retos

Los retos adicionales (restar/reiniciar y cambio de color al superar 10 likes)
todavía no están implementados en esta versión móvil.
