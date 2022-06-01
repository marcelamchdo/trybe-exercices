//* Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = numbers[0] //*primeiro numero do array

for (i = 1; i < numbers.length; i++) { //*inicia da segunda posição do array, já foi falado que o primeiro numero é maior
  console.log(numbers[i]);
  if (resultado < numbers[i]) {
    resultado = numbers[i]
  }
} NÃO TERMINADO