// ============================================================
// Contador de likes con manipulación del DOM
// ============================================================

// 1. Obtener los elementos del DOM por su ID
const textoContador = document.getElementById("contador");
const botonLike = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReiniciar = document.getElementById("btn-reiniciar");
const cuerpoTabla = document.getElementById("cuerpo-tabla");
const mensajeSinRegistros = document.getElementById("sin-registros");

// 2. Variable de estado numérica
let likes = 0;

// Umbral del Reto 2: al superar este valor cambia el tema
const UMBRAL_DESTACADO = 10;

// 3. Formatear la hora actual en formato HH:MM:SS
function obtenerHoraActual() {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

// 4. Actualizar contador, tema y estado del botón de restar
function actualizarInterfaz() {
  textoContador.textContent = likes;

  // Reto 2: fondo y texto cambian cuando se superan los 10 likes
  document.body.classList.toggle("tema-destacado", likes > UMBRAL_DESTACADO);

  // Reto 1: no permitir restar cuando el contador está en cero
  botonRestar.disabled = likes === 0;
}

// 5. Registrar un clic en la tabla (siempre arriba)
function registrarClic() {
  const fila = document.createElement("tr");
  const celdaClic = document.createElement("td");
  const celdaHora = document.createElement("td");

  celdaClic.textContent = likes;
  celdaHora.textContent = obtenerHoraActual();

  fila.appendChild(celdaClic);
  fila.appendChild(celdaHora);

  cuerpoTabla.prepend(fila);
  mensajeSinRegistros.hidden = true;
}

// 6. Evento click del botón "Dar like"
botonLike.addEventListener("click", () => {
  likes++;
  registrarClic();
  actualizarInterfaz();
});

// 7. Reto 1: evento click del botón "Restar like"
botonRestar.addEventListener("click", () => {
  if (likes === 0) return;

  likes--;
  actualizarInterfaz();
});

// 8. Reto 1: reiniciar contador e historial
botonReiniciar.addEventListener("click", () => {
  likes = 0;
  cuerpoTabla.replaceChildren();
  mensajeSinRegistros.hidden = false;
  actualizarInterfaz();
});

// 9. Estado inicial (contador en cero y botón de restar deshabilitado)
actualizarInterfaz();
