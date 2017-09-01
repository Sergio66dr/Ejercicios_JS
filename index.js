var cadena = require('./cadena.js');
var oracion = "Anita lava la tina";

console.log("Cantidad de Letras: "+cadena.cantidadLetra(oracion));
console.log("Cantidad de Consonantes: "+cadena.numeroConso(oracion));
console.log("Cantidad de Vocales: "+cadena.numeroVocales(oracion));
console.log("Cantidad de Palabras: "+cadena.palabrasCadena(oracion));
console.log(cadena.palindromo(oracion));