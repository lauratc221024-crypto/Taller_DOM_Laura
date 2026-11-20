import { useState } from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Registro = {
  numero: number;
  hora: string;
};

// Reto 2: al superar este valor cambia el tema de colores
const UMBRAL_DESTACADO = 10;

// Formatear la hora actual en formato HH:MM:SS
function obtenerHoraActual(): string {
  const ahora = new Date();
  const horas = String(ahora.getHours()).padStart(2, "0");
  const minutos = String(ahora.getMinutes()).padStart(2, "0");
  const segundos = String(ahora.getSeconds()).padStart(2, "0");
  return `${horas}:${minutos}:${segundos}`;
}

export default function App() {
  // Estado del contador y del registro de clics en un solo objeto
  // para que las actualizaciones sean atómicas ante clics rápidos.
  const [estado, setEstado] = useState<{ likes: number; registros: Registro[] }>({
    likes: 0,
    registros: [],
  });
  const { likes, registros } = estado;

  // Reto 2: el tema se activa cuando el contador supera 10
  const temaDestacado = likes > UMBRAL_DESTACADO;

  const darLike = () => {
    setEstado((anterior) => {
      const nuevoTotal = anterior.likes + 1;
      return {
        likes: nuevoTotal,
        // El registro más reciente se inserta al inicio de la lista
        registros: [
          { numero: nuevoTotal, hora: obtenerHoraActual() },
          ...anterior.registros,
        ],
      };
    });
  };

  // Reiniciar el contador y el historial de registros
  const reiniciar = () => setEstado({ likes: 0, registros: [] });

  // Reto 1: restar un like sin borrar el registro y sin bajar de cero
  const restarLike = () => {
    setEstado((anterior) =>
      anterior.likes === 0
        ? anterior
        : { ...anterior, likes: anterior.likes - 1 }
    );
  };

  return (
    <View
      style={[styles.pantalla, temaDestacado && styles.pantallaDestacada]}
      testID="pantalla"
    >
      <StatusBar barStyle={temaDestacado ? "light-content" : "dark-content"} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View
          style={[styles.tarjeta, temaDestacado && styles.tarjetaDestacada]}
          testID="tarjeta"
        >
          <Text style={[styles.titulo, temaDestacado && styles.tituloDestacado]}>
            Contador de Likes
          </Text>
          <Text
            style={[styles.subtitulo, temaDestacado && styles.subtituloDestacado]}
          >
            React Native + Expo · sin DOM, con estado de React
          </Text>

          <View style={styles.contadorContenedor}>
            <Text
              style={[styles.contador, temaDestacado && styles.contadorDestacado]}
              testID="contador"
            >
              {likes}
            </Text>
            <Text
              style={[
                styles.contadorEtiqueta,
                temaDestacado && styles.contadorEtiquetaDestacada,
              ]}
            >
              likes
            </Text>
          </View>

          <View style={styles.acciones}>
            <TouchableOpacity
              style={styles.botonLike}
              onPress={darLike}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel="Dar like"
              testID="btn-like"
            >
              <Text style={styles.botonLikeTexto}>Dar like</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.botonRestar,
                temaDestacado && styles.botonRestarDestacado,
                likes === 0 && styles.botonRestarDeshabilitado,
              ]}
              onPress={restarLike}
              activeOpacity={0.8}
              disabled={likes === 0}
              accessibilityRole="button"
              accessibilityLabel="Restar like"
              accessibilityState={{ disabled: likes === 0 }}
              testID="btn-restar"
            >
              <Text
                style={[
                  styles.botonRestarTexto,
                  temaDestacado && styles.botonRestarTextoDestacado,
                  likes === 0 && styles.botonRestarTextoDeshabilitado,
                ]}
              >
                Restar like
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.botonReiniciar}
              onPress={reiniciar}
              activeOpacity={0.8}
              accessibilityRole="button"
              accessibilityLabel="Reiniciar contador"
              testID="btn-reiniciar"
            >
              <Text style={styles.botonReiniciarTexto}>Reiniciar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.registros}>
            <Text
              style={[
                styles.registrosTitulo,
                temaDestacado && styles.registrosTituloDestacado,
              ]}
            >
              Registro de clics
            </Text>

            <View
              style={[styles.tabla, temaDestacado && styles.tablaDestacada]}
            >
              <View
                style={[
                  styles.fila,
                  styles.filaCabecera,
                  temaDestacado && styles.filaCabeceraDestacada,
                ]}
              >
                <Text
                  style={[
                    styles.celda,
                    styles.celdaNumero,
                    styles.celdaCabecera,
                    temaDestacado && styles.celdaCabeceraDestacada,
                  ]}
                >
                  Nº Clic
                </Text>
                <Text
                  style={[
                    styles.celda,
                    styles.celdaHora,
                    styles.celdaCabecera,
                    temaDestacado && styles.celdaCabeceraDestacada,
                  ]}
                >
                  Hora
                </Text>
              </View>

              {registros.length === 0 ? (
                <Text
                  style={[
                    styles.sinRegistros,
                    temaDestacado && styles.sinRegistrosDestacado,
                  ]}
                >
                  Aún no hay clics registrados.
                </Text>
              ) : (
                registros.map((registro, indice) => (
                  <View
                    key={`clic-${registro.numero}`}
                    style={[
                      styles.fila,
                      temaDestacado && styles.filaDestacada,
                      indice === 0 && styles.filaReciente,
                      indice === 0 && temaDestacado && styles.filaRecienteDestacada,
                    ]}
                    testID="registro-fila"
                  >
                    <Text
                      style={[
                        styles.celda,
                        styles.celdaNumero,
                        temaDestacado && styles.celdaDestacada,
                        indice === 0 && styles.textoReciente,
                        indice === 0 &&
                          temaDestacado &&
                          styles.textoRecienteDestacado,
                      ]}
                    >
                      {registro.numero}
                    </Text>
                    <Text
                      style={[
                        styles.celda,
                        styles.celdaHora,
                        temaDestacado && styles.celdaDestacada,
                        indice === 0 && styles.textoReciente,
                        indice === 0 &&
                          temaDestacado &&
                          styles.textoRecienteDestacado,
                      ]}
                    >
                      {registro.hora}
                    </Text>
                  </View>
                ))
              )}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: {
    flex: 1,
    backgroundColor: "#e9ecef",
  },
  pantallaDestacada: {
    backgroundColor: "#0f172a",
  },
  scroll: {
    flexGrow: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 32,
  },
  tarjeta: {
    width: "100%",
    maxWidth: 520,
    alignSelf: "center",
    backgroundColor: "#ffffff",
    borderRadius: 16,
    padding: 24,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 12,
    elevation: 6,
  },
  tarjetaDestacada: {
    backgroundColor: "#1e293b",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "800",
    textAlign: "center",
    color: "#1c1c1c",
  },
  tituloDestacado: {
    color: "#ffffff",
  },
  subtitulo: {
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
    color: "#6c757d",
  },
  subtituloDestacado: {
    color: "#cbd5e1",
  },
  contadorContenedor: {
    alignItems: "center",
    marginTop: 24,
    marginBottom: 16,
  },
  contador: {
    fontSize: 64,
    fontWeight: "800",
    lineHeight: 72,
    color: "#0d6efd",
  },
  contadorDestacado: {
    color: "#38bdf8",
  },
  contadorEtiqueta: {
    marginTop: 4,
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "uppercase",
    color: "#6c757d",
  },
  contadorEtiquetaDestacada: {
    color: "#94a3b8",
  },
  acciones: {
    flexDirection: "row",
    gap: 12,
  },
  botonLike: {
    flex: 1,
    backgroundColor: "#198754",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    shadowColor: "#198754",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 4,
  },
  botonLikeTexto: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  botonRestar: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#ced4da",
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
  },
  botonRestarDestacado: {
    backgroundColor: "#1e293b",
    borderColor: "#475569",
  },
  botonRestarDeshabilitado: {
    backgroundColor: "#f8f9fa",
    borderColor: "#e9ecef",
  },
  botonReiniciar: {
    flex: 1,
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: "#dc3545",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  botonReiniciarTexto: {
    color: "#dc3545",
    fontSize: 15,
    fontWeight: "700",
  },
  botonRestarTexto: {
    color: "#495057",
    fontSize: 16,
    fontWeight: "700",
  },
  botonRestarTextoDestacado: {
    color: "#e2e8f0",
  },
  botonRestarTextoDeshabilitado: {
    color: "#adb5bd",
  },
  registros: {
    marginTop: 28,
  },
  registrosTitulo: {
    marginBottom: 10,
    fontSize: 17,
    fontWeight: "700",
    color: "#343a40",
  },
  registrosTituloDestacado: {
    color: "#e2e8f0",
  },
  tabla: {
    borderTopWidth: 1,
    borderColor: "#dee2e6",
  },
  tablaDestacada: {
    borderColor: "#475569",
  },
  fila: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "#dee2e6",
  },
  filaDestacada: {
    borderColor: "#475569",
  },
  filaCabecera: {
    backgroundColor: "#f8f9fa",
  },
  filaCabeceraDestacada: {
    backgroundColor: "#334155",
  },
  filaReciente: {
    backgroundColor: "#eef5ff",
  },
  filaRecienteDestacada: {
    backgroundColor: "#273449",
  },
  celda: {
    paddingVertical: 10,
    fontSize: 14,
    color: "#212529",
  },
  celdaDestacada: {
    color: "#e2e8f0",
  },
  celdaCabecera: {
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
    color: "#495057",
  },
  celdaCabeceraDestacada: {
    color: "#e2e8f0",
  },
  celdaNumero: {
    flex: 1,
    textAlign: "left",
  },
  celdaHora: {
    flex: 1,
    textAlign: "right",
    fontVariant: ["tabular-nums"],
  },
  textoReciente: {
    fontWeight: "700",
    color: "#0d6efd",
  },
  textoRecienteDestacado: {
    color: "#38bdf8",
  },
  sinRegistros: {
    paddingVertical: 14,
    fontSize: 14,
    textAlign: "center",
    color: "#adb5bd",
  },
  sinRegistrosDestacado: {
    color: "#94a3b8",
  },
});
