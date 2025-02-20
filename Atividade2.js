var teclado = require("prompt-sync")();
var grauscelcius = parseInt(teclado("Digite a temperatura em graus celcius"));
var Fahrenheit = (grauscelcius) * (9 / 5) + 32;
console.log("A temperatura convertida de graus celcius para Fahrenheit \u00E9 ".concat(Fahrenheit));
