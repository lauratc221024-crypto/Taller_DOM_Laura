# Cuadro comparativo: Desarrollo Web y React Native (Expo)

| Concepto | Desarrollo Web | React Native (Expo) | Funcionamiento |
|---|---|---|---|
| Estructura visual | HTML: `<h1>`, `<div>`, `<p>` | Componentes: `<Text>`, `<View>` | HTML organiza el contenido de una página; React Native compone la pantalla con componentes que se representan de forma nativa. |
| Botón de clic | `<button>` + `onclick` o `addEventListener` | `<TouchableOpacity>` + `onPress` | Ambos reciben la interacción del usuario, pero usan eventos y componentes propios de cada entorno. |
| ¿Existe el DOM? | Sí, se accede con `document.getElementById` | No se utiliza el DOM web; la interfaz se actualiza con estado | En web se seleccionan y modifican nodos; en React Native React vuelve a representar la interfaz según el estado. |
| Estilos | CSS tradicional o librerías | Objetos JavaScript con `StyleSheet.create` | CSS usa reglas y selectores; React Native define propiedades de estilo en objetos. |
| Entorno de ejecución | Navegadores como Chrome, Edge y Safari | Dispositivos Android e iOS mediante Expo | La web se ejecuta en un navegador; la app móvil se ejecuta en el entorno nativo del dispositivo. |
| Actualización del contador | Se modifica `textContent` del elemento del DOM | Se actualiza el estado con `useState` | En web se cambia el contenido del nodo; en móvil el cambio del estado provoca la actualización de la vista. |
| Registro de hora | `new Date()` y creación de filas con `createElement` | `new Date()` y actualización de una lista en el estado | Las dos tecnologías obtienen la hora del sistema, pero muestran los registros con estructuras diferentes. |
