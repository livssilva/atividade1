let teclado = require(`prompt-sync`)();

console.log(`-------------------`);
console.log(`-  Calculo media  -`);
console.log(`-------------------`);


let notaBimestralUm: number = parseInt(teclado(`Digite a nota N1: `));
let notaBimestralDois: number = parseInt(teclado(`Digite a nota N2: `));
let notaBimestralTres: number = parseInt(teclado(`Digite a nota N3: `));
let notaBimestralQuatro: number = parseInt(teclado(`Digite a nota N4: `));
let notaBimestralCinco: number = parseInt(teclado(`Digite a nota N5: `));
let notaBimestralSeis: number = parseInt(teclado(`Digite a nota N6: `));
let notaBimestralSete: number = parseInt(teclado(`Digite a nota N7: `));
let notaBimestralOito: number = parseInt(teclado(`Digite a nota N8: `));
let notaBimestralNove: number = parseInt(teclado(`Digite a nota N9: `));
let notaBimestralDez: number = parseInt(teclado(`Digite a nota N10: `));

let media: number = (notaBimestralUm+notaBimestralDois+notaBimestralTres+notaBimestralQuatro+notaBimestralCinco+notaBimestralSeis+notaBimestralSete+notaBimestralOito+notaBimestralNove+notaBimestralDez) /10;

console.log(`A media é ${media}`);