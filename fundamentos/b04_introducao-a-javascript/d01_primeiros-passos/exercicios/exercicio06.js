// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "rainha";

switch(peca) {
  case "peão": console.log("Peão -> Movimenta apenas uma casa para frente e só captura outra peça na diagonal");
    break;
  case "cavalo": console.log("Cavalo -> Movimento em forma de L, pode pular outras peças");
    break;
  case "torre": console.log("Torre -> Quantas casas quises, porém, só na horizontal ou vertical");
    break;
  case "rainha": console.log("Rainha -> Quantas casas quiser, em qualquer direção");
    break;
  case "rei": console.log("Rei -> Uma casa para qualquer direção");
    break;
  case "bispo": console.log("Bispo -> Diagonal");
    break;
}