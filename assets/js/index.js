/*
Nuestro objetivo 📋

El objetivo del proyecto es desarrollar una aplicación en consola que permita a los usuarios:

***Realizar operaciones matemáticas básicas.Implementar estructuras condicionales y de bucles.
***Usar funciones para modularizar el código.Trabajar con arreglos y objetos.
***El código deberá estar estructurado de manera clara según las mejores prácticas de desarrollo en JavaScript.

Requerimientos 🤝

La aplicación deberá cumplir con los siguientes requisitos:

***Requerimientos generales:Debe ejecutarse en la consola del navegador.
***Debe permitir al usuario ingresar datos mediante prompt o variables predefinidas.
***Debe realizar al menos tres operaciones diferentes usando funciones.
***Debe utilizar condicionales y estructuras de repetición.
***Debe incluir arreglos y objetos para almacenar y manipular datos.

Requerimientos técnicos:

***Funciones y modularización: Separación del código en funciones reutilizables.
***Uso de estructuras de control: Implementación de if, switch, for, while, según corresponda.
***Uso de arreglos y objetos: Manipulación de datos utilizando estos conceptos.
***Validaciones: Control de entradas del usuario para evitar errores.
*/


//////////////////////////////////////////////
//////////////////////////////////////////////

// Lección 1: Introducción al lenguaje javascript

/////////////////////////////////////////////
/////////////////////////////////////////////

console.log("Hola mundo!");
const datoUsuario = prompt("Ingrese un mensaje:");
alert(`Has escrito ${datoUsuario} en el recuadro anterior.`)

//////////////////////////////////////////////
//////////////////////////////////////////////

// Lección 2: Variables, expresiones y sentencias condicionales

/////////////////////////////////////////////
/////////////////////////////////////////////

let numeroActualizable = 1;
const numeroFijo = 2;
const numero1 = parseInt(prompt("ingrese el primer numero:"));
if(isNaN(numero1)){alert("Has ingresado algo que no es un número. por favor reinicia el programa")}
const numero2 = parseInt(prompt("ingrese el segundo numero:"));
if(isNaN(numero2)){alert("Has ingresado algo que no es un número. por favor reinicia el programa")}
const operacion = prompt("que operacion quieres hacer con los numeros? (+,-,*,/)")
let resultado;

switch(operacion) {
  case "+": resultado = numero1 + numero2; break;
  case "-": resultado = numero1 - numero2; break;
  case "*": resultado = numero1 * numero2; break;
  case "/": resultado = numero1 / numero2; break;
  default: console.log("Operación no válida");break;
}

console.log(`el resultado de ${numero1} ${operacion} ${numero2} es: ${resultado}`);

let continuar = true;

while (continuar) {
  const respuesta = prompt("¿Deseas realizar continuar? (Escribe 'si' o 'no')");

  if (respuesta === null) {
    continuar = false;
    alert("Programa cancelado. ¡Adiós!");
  } else if (respuesta.toLowerCase() === "si") {
    alert("Ahora conoceras algunas clases de un juego llamado Ragnarok Online");
    break;
  } else if (respuesta.toLowerCase() === "no") {
    continuar = false;
    alert("Programa finalizado. ¡Gracias!");
  } else {
    alert("Opción no válida. El programa continuará de todas formas.");
  }
}

//////////////////////////////////////////////
//////////////////////////////////////////////

// Lección 3: Arreglos y ciclos

/////////////////////////////////////////////
/////////////////////////////////////////////

const thirdJobsRO = [
  "Rune Knight", "Royal Guard", "Warlock", "Sorcerer", 
  "Mechanic", "Geneticist", "Arch Bishop", "Sura", 
  "Guillotine Cross", "Shadow Chaser", "Ranger", "Maestro", "Wanderer"
];


console.log(" ");
console.log("Lista de clases (Recorrido con FOR)");
for (let i = 0; i < thirdJobsRO.length; i++) {
  console.log(`Clase n°${i + 1}: ${thirdJobsRO[i]}`);
}

console.log(" ");
console.log("Lista de clases (Recorrido con WHILE)");
let index = 0;
while (index < thirdJobsRO.length) {
  console.log(`Clase n°${index + 1}: ${thirdJobsRO[index]}`);
  index++;
}

function filtrarPorLetraInicial(arreglo, letra) {
  const clasesFiltradas = [];
  const letraMinuscula = letra.toLowerCase();

  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].charAt(0).toLowerCase() === letraMinuscula) {
      clasesFiltradas.push(arreglo[i]);
    }
  }

  return clasesFiltradas;
}

console.log("\n--- Clases filtradas (Que empiezan con 'R') ---");
const clasesConR = filtrarPorLetraInicial(thirdJobsRO, "R");
console.log(clasesConR);

//////////////////////////////////////////////
//////////////////////////////////////////////

// Lección 4: Funciones en JavaScript
/////////////////////////////////////////////
/////////////////////////////////////////////

// Funciones para cada operación

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  if (b === 0) {
    return "Error: División por cero";
  }
  return a / b;
}

//Funciones dentro de otras funciones

function calcular(numero1, numero2, operacion) {
  let resultado;

  switch (operacion) {
    case "+":
      resultado = sumar(numero1, numero2);
      break;
    case "-":
      resultado = restar(numero1, numero2);
      break;
    case "*":
      resultado = multiplicar(numero1, numero2);
      break;
    case "/":
      resultado = dividir(numero1, numero2);
      break;
    default:
      resultado = "Operación no válida";
  }

  return resultado;
}

const n1 = parseInt(prompt("Ingrese primer número:"), 10);
const op = prompt("Ingrese operación (+, -, *, /):");
const n2 = parseInt(prompt("Ingrese segundo número:"), 10);

const resultadoFinal = calcular(n1, n2, op);

console.log(`El resultado de la operación es: ${resultadoFinal}`);

//////////////////////////////////////////////
//////////////////////////////////////////////

// Lección 5: Conceptos básicos de objetos en JavaScript
/////////////////////////////////////////////
/////////////////////////////////////////////

const personajeRO = {
  nombre: "Valkyrie",
  clase: "Rune Knight",
  nivel: 99,
  hp: 15400,
  
  mostrarFicha: function() {
    return `${this.nombre} es un ${this.clase} de Nivel ${this.nivel}`;
  }
};

console.log(personajeRO.mostrarFicha()); 

const partyRagnarok = [
  { nombre: "Aegis", clase: "Royal Guard", nivel: 120 },
  { nombre: "Chronos", clase: "Warlock", nivel: 115 },
  { nombre: "Elysia", clase: "Arch Bishop", nivel: 125 },
  { nombre: "Fenrir", clase: "Guillotine Cross", nivel: 110 }
];

console.log("Integrantes de la Party (con forEach)");
partyRagnarok.forEach(personaje => {
  console.log(`- Nombre: ${personaje.nombre} | Rol: ${personaje.clase} (Lv. ${personaje.nivel})`);
});


console.log("Nombres de los personajes (con map)");
const nombresDeClases = partyRagnarok.map(personaje => personaje.nombre);

console.log(nombresDeClases); 
