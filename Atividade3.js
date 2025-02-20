var teclado = require("prompt-sync")();
var Fahrenheit = parseInt(teclado("Digite a temperatura em Fahrenheit"));
var celcius = (Fahrenheit - 32) * (5 / 9);
console.log("A temperatura convertida de Fahrenheit para Graus Celcius \u00E9 ".concat(celcius));
