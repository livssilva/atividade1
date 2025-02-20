let teclado = require(`prompt-sync`) ();

let Fahrenheit: number = parseInt(teclado(`Digite a temperatura em Fahrenheit`));
let celcius: number = (Fahrenheit - 32)  *  (5/9);

console.log(`A temperatura convertida de Fahrenheit para Graus Celcius é ${celcius}`);
