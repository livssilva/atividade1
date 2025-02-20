let teclado = require(`prompt-sync`) ();

let grauscelcius: number = parseInt(teclado(`Digite a temperatura em graus celcius`));
let Fahrenheit: number = (grauscelcius) * (9/5) + (32);

console.log(`A temperatura convertida de Fahrenheit para Graus Celcius é ${grauscelcius}`);
