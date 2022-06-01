// Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
// Bonus: use somente um if .

const a = 30;
const b = 20;
const c = 12;

let parouimpar= true

if(a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  parouimpar = true;
} else {
  parouimpar = false;
}

console.log(parouimpar);