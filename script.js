// =====================================================
// CONTADOR GLOBAL
// =====================================================
console.log("Funciones Interactivas");

let totalClicks = 0;

// =====================================================
// FUNCIONES DISPONIBLES
// =====================================================

// 1. Muestra un saludo
function mostrarSaludo() {
  document.getElementById("resultado").innerHTML = "¡Hola, Herlinda!";
}

// 2. Muestra la fecha actual
function mostrarFechaActual() {
  document.getElementById("resultado").innerHTML = new Date();
}

// 3. Cambia el color de la caja
function aplicarColorRosa() {
  const elemento = document.getElementById("elementoDemo");
  elemento.style.animation = "none";
  elemento.style.backgroundColor = "pink";
}

// 4. Aumenta el tamaño de la caja
function elevarTamanoCaja() {
  document.getElementById("elementoDemo").style.width = "300px";
}

// 5. Reduce el tamaño de la caja
function reducirTamanoCaja() {
  document.getElementById("elementoDemo").style.width = "100px";
}

// 6. Oculta la caja
function esconderElemento() {
  document.getElementById("elementoDemo").style.display = "none";
}

// 7. Muestra la caja
function revelarElemento() {
  document.getElementById("elementoDemo").style.display = "block";
}

// 8. Suma dos números
function calcularSuma() {
  document.getElementById("resultado").innerHTML = 5 + 3;
}

// 9. Resta dos números
function calcularResta() {
  document.getElementById("resultado").innerHTML = 10 - 4;
}

// 10. Multiplica dos números
function calcularMultiplicacion() {
  document.getElementById("resultado").innerHTML = 6 * 7;
}

// 11. Divide dos números
function calcularDivision() {
  document.getElementById("resultado").innerHTML = 20 / 5;
}

// 12. Cambia el texto de la caja
function modificarTextoCaja() {
  document.getElementById("elementoDemo").innerHTML = "Texto cambiado";
}

// 13. Muestra una alerta
function emitirAlerta() {
  alert("¡Esto es una alerta!");
}

// 14. Genera un número aleatorio
function crearNumeroAzar() {
  document.getElementById("resultado").innerHTML = Math.floor(Math.random() * 100);
}

// 15. Cuenta los clics realizados
function aumentarContador() {
  totalClicks++;
  document.getElementById("resultado").innerHTML = "Clicks: " + totalClicks;
}

// =====================================================
// REGISTRO DE FUNCIONES
// =====================================================
const registroFunciones = [
  { nombre: "mostrarSaludo", accion: mostrarSaludo },
  { nombre: "mostrarFechaActual", accion: mostrarFechaActual },
  { nombre: "aplicarColorRosa", accion: aplicarColorRosa },
  { nombre: "elevarTamanoCaja", accion: elevarTamanoCaja },
  { nombre: "reducirTamanoCaja", accion: reducirTamanoCaja },
  { nombre: "esconderElemento", accion: esconderElemento },
  { nombre: "revelarElemento", accion: revelarElemento },
  { nombre: "calcularSuma", accion: calcularSuma },
  { nombre: "calcularResta", accion: calcularResta },
  { nombre: "calcularMultiplicacion", accion: calcularMultiplicacion },
  { nombre: "calcularDivision", accion: calcularDivision },
  { nombre: "modificarTextoCaja", accion: modificarTextoCaja },
  { nombre: "emitirAlerta", accion: emitirAlerta },
  { nombre: "crearNumeroAzar", accion: crearNumeroAzar },
  { nombre: "aumentarContador", accion: aumentarContador }
];

// =====================================================
// EJECUTA LA FUNCIÓN ELEGIDA Y MUESTRA SU CÓDIGO
// =====================================================
function ejecutarFuncion(numero) {
  const item = registroFunciones[numero - 1];
  item.accion();
  document.getElementById("tituloFuncion").innerHTML = item.nombre;
  document.getElementById("bloqueCodigo").innerHTML = item.accion.toString();

  // Muestra también en la consola
  console.log("Función ejecutada: " + item.nombre);
  console.log(item.accion.toString());
}
