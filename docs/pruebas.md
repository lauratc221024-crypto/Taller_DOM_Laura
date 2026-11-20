# Plan de pruebas – Contador de Likes

| ID | Prueba | Resultado esperado |
|---|---|---|
| CP-01 | Abrir la aplicación | El contador inicia en 0. |
| CP-02 | Presionar Dar like una vez | El contador aumenta a 1 y aparece la hora. |
| CP-03 | Presionar Dar like varias veces | El contador aumenta de uno en uno y el registro nuevo queda arriba. |
| CP-04 | Presionar Restar like | El contador disminuye en uno. |
| CP-05 | Intentar restar cuando está en cero | El botón está deshabilitado y el contador permanece en cero. |
| CP-06 | Presionar Reiniciar | El contador vuelve a cero y el historial queda vacío. |
| CP-07 | Superar 10 likes | Se activa el tema de color destacado. |
| CP-08 | Bajar de 11 a 10 likes | Se desactiva el tema destacado. |
| CP-09 | Repetir las pruebas en Expo Go | La app móvil conserva el mismo comportamiento. |

**Nota:** marcar cada caso como aprobado únicamente después de ejecutarlo en el navegador o dispositivo.
