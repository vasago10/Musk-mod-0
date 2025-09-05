/*Ejercicio 1
Implementa una función que reciba un texto y devuelva las palabras que se repiten en dicho texto
Introduce un texto: Recordar es fácil para quien tiene memoria, olvidar es
difícil para quien tiene corazón
Se repiten las siguientes palabras: es, para, quien, tiene*/


const readLine = require("readline-sync");

const texto = readLine.question("Introduce un texto: ");

const palabras = texto.toLowerCase().replace(/[.,!?¡¿;:]/g, "").split(" ");

const contador = {};
for (let palabra of palabras) {
  contador[palabra] = (contador[palabra] || 0) + 1;
}

const repetidas = new Set();
for (let palabra in contador) {
  if (contador[palabra] > 1) {
    repetidas.add(palabra);
  }
}

if (repetidas.size > 0) {
  console.log("Se repiten las siguientes palabras:", [...repetidas].join(", "));
} else {
  console.log("No hay palabras repetidas.");
}


