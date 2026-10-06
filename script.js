console.log("Funciones Interactivas");

let totalClicks = 0;
let funcionSeleccionada = null;

const elementoDemo = document.getElementById("elementoDemo");
const textoCaja = document.getElementById("textoCaja");
const resultado = document.getElementById("resultado");
const panelOpciones = document.getElementById("panelOpciones");
const camposOpciones = document.getElementById("camposOpciones");
const formularioOpciones = document.getElementById("formOpciones");

function mostrarResultado(mensaje) {
  resultado.textContent = mensaje;
}

function mostrarSaludo({ nombre }) {
  mostrarResultado(`¡Hola, ${nombre}!`);
}

function mostrarFechaActual({ formato }) {
  const fecha = new Date();
  mostrarResultado(
    formato === "fecha"
      ? fecha.toLocaleDateString("es-PE")
      : fecha.toLocaleString("es-PE")
  );
}

function aplicarColor({ color }) {
  elementoDemo.style.animation = "none";
  elementoDemo.style.background = color;
  mostrarResultado("Color de la caja actualizado.");
}

function elevarTamanoCaja({ tamano }) {
  elementoDemo.style.width = `${tamano}px`;
  mostrarResultado(`La caja ahora mide ${tamano} píxeles de ancho.`);
}

function reducirTamanoCaja({ tamano }) {
  elementoDemo.style.width = `${tamano}px`;
  mostrarResultado(`La caja ahora mide ${tamano} píxeles de ancho.`);
}

function esconderElemento() {
  elementoDemo.style.display = "none";
  mostrarResultado("La caja está oculta.");
}

function revelarElemento() {
  elementoDemo.style.display = "grid";
  mostrarResultado("La caja está visible.");
}

function calcularSuma({ numero1, numero2 }) {
  mostrarResultado(`Resultado: ${numero1 + numero2}`);
}

function calcularResta({ numero1, numero2 }) {
  mostrarResultado(`Resultado: ${numero1 - numero2}`);
}

function calcularMultiplicacion({ numero1, numero2 }) {
  mostrarResultado(`Resultado: ${numero1 * numero2}`);
}

function calcularDivision({ numero1, numero2 }) {
  mostrarResultado(`Resultado: ${numero1 / numero2}`);
}

function modificarTextoCaja({ texto }) {
  textoCaja.textContent = texto;
  mostrarResultado("Texto de la caja actualizado.");
}

function emitirAlerta({ mensaje }) {
  alert(mensaje);
  mostrarResultado("Alerta mostrada.");
}

function crearNumeroAzar({ minimo, maximo }) {
  const numero = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
  mostrarResultado(`Número aleatorio: ${numero}`);
}

function aumentarContador({ incremento }) {
  totalClicks += incremento;
  mostrarResultado(`Clicks: ${totalClicks}`);
}

const registroFunciones = [
  { nombre: "mostrarSaludo", accion: mostrarSaludo, campos: '<label>Nombre<input name="nombre" type="text" value="Herlinda" required></label>' },
  { nombre: "mostrarFechaActual", accion: mostrarFechaActual, campos: '<label>Formato de fecha<select name="formato"><option value="completa">Fecha y hora</option><option value="fecha">Solo fecha</option></select></label>' },
  { nombre: "aplicarColor", accion: aplicarColor, campos: '<label>Color de la caja<select name="color"><option value="linear-gradient(145deg, #f9a8d4, #ec4899)">Rosa</option><option value="linear-gradient(145deg, #d8b4fe, #9333ea)">Lila</option><option value="linear-gradient(145deg, #fbcfe8, #c084fc)">Rosa y lila</option><option value="linear-gradient(145deg, #fecdd3, #fb7185)">Coral</option><option value="linear-gradient(145deg, #fde68a, #f9a8d4)">Durazno</option></select></label>' },
  { nombre: "elevarTamanoCaja", accion: elevarTamanoCaja, campos: '<label>Ancho de la caja (150–360 px)<input name="tamano" type="number" min="150" max="360" value="300" required></label>' },
  { nombre: "reducirTamanoCaja", accion: reducirTamanoCaja, campos: '<label>Ancho de la caja (60–220 px)<input name="tamano" type="number" min="60" max="220" value="120" required></label>' },
  { nombre: "esconderElemento", accion: esconderElemento, campos: "" },
  { nombre: "revelarElemento", accion: revelarElemento, campos: "" },
  { nombre: "calcularSuma", accion: calcularSuma, campos: '<label>Primer número<input name="numero1" type="number" step="any" value="5" required></label><label>Segundo número<input name="numero2" type="number" step="any" value="3" required></label>' },
  { nombre: "calcularResta", accion: calcularResta, campos: '<label>Primer número<input name="numero1" type="number" step="any" value="10" required></label><label>Segundo número<input name="numero2" type="number" step="any" value="4" required></label>' },
  { nombre: "calcularMultiplicacion", accion: calcularMultiplicacion, campos: '<label>Primer número<input name="numero1" type="number" step="any" value="6" required></label><label>Segundo número<input name="numero2" type="number" step="any" value="7" required></label>' },
  { nombre: "calcularDivision", accion: calcularDivision, campos: '<label>Primer número<input name="numero1" type="number" step="any" value="20" required></label><label>Segundo número<input name="numero2" type="number" step="any" value="5" required></label>' },
  { nombre: "modificarTextoCaja", accion: modificarTextoCaja, campos: '<label>Nuevo texto<input name="texto" type="text" value="Texto cambiado" required></label>' },
  { nombre: "emitirAlerta", accion: emitirAlerta, campos: '<label>Mensaje de la alerta<input name="mensaje" type="text" value="¡Esto es una alerta!" required></label>' },
  { nombre: "crearNumeroAzar", accion: crearNumeroAzar, campos: '<label>Valor mínimo<input name="minimo" type="number" step="1" value="0" required></label><label>Valor máximo<input name="maximo" type="number" step="1" value="99" required></label>' },
  { nombre: "aumentarContador", accion: aumentarContador, campos: '<label>Clicks que se agregan<input name="incremento" type="number" min="1" max="100" step="1" value="1" required></label>' }
];

function ejecutarFuncion(numero) {
  const item = registroFunciones[numero - 1];
  if (!item) {
    console.error(`No existe una función con el número ${numero}.`);
    return;
  }

  funcionSeleccionada = item;
  document.getElementById("tituloOpciones").textContent = `Opciones: ${item.nombre}`;
  camposOpciones.innerHTML = item.campos || '<p class="sin-opciones">Esta acción no necesita valores adicionales.</p>';
  panelOpciones.hidden = false;

  document.querySelectorAll(".boton-funcion").forEach((boton, indice) => {
    boton.setAttribute("aria-pressed", String(indice === numero - 1));
  });

  const primerControl = camposOpciones.querySelector("input, select");
  if (primerControl) {
    primerControl.focus();
  }
}

formularioOpciones.addEventListener("submit", (evento) => {
  evento.preventDefault();
  if (!funcionSeleccionada || !formularioOpciones.reportValidity()) {
    return;
  }

  const valores = Object.fromEntries(new FormData(formularioOpciones));
  for (const campo of ["numero1", "numero2", "tamano", "minimo", "maximo", "incremento"]) {
    if (valores[campo] !== undefined) {
      valores[campo] = Number(valores[campo]);
    }
  }

  if (funcionSeleccionada.nombre === "calcularDivision" && valores.numero2 === 0) {
    mostrarResultado("No se puede dividir entre cero. Elige otro segundo número.");
    formularioOpciones.elements.numero2.focus();
    return;
  }

  if (funcionSeleccionada.nombre === "crearNumeroAzar" && valores.maximo < valores.minimo) {
    mostrarResultado("El valor máximo debe ser igual o mayor que el mínimo.");
    formularioOpciones.elements.maximo.focus();
    return;
  }

  funcionSeleccionada.accion(valores);
  document.getElementById("tituloFuncion").textContent = funcionSeleccionada.nombre;
  document.getElementById("bloqueCodigo").textContent = funcionSeleccionada.accion.toString();

  console.log(`Función ejecutada: ${funcionSeleccionada.nombre}`);
  console.log(funcionSeleccionada.accion.toString());
});
