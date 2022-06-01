//* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) { //*vai passar por cada elemento da array, perguntando a cada um se não são divisíveis por dois (resto diferente de 0)
    resultado += 1; //*aqui ele vai somar +1 cada vez que achar um número ímpar
  }
}

if (resultado === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(resultado);
}