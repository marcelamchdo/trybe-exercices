// 3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.

// Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.


const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswer, studentAnswer) => {
  if (rightAnswer === studentAnswer) {
    return 1; 
  } if (rightAnswer === 'N.A') {
    return -0.5;
  } else {
    return 0;
  }
}

const comparaGabarito = (rightAnswers, studentAnswers, comparaRespostas) => {
  let count = 0;
  for (let i = 0; i < rightAnswers.length; i++) {
    const compair = comparaRespostas(rightAnswers[i], studentAnswers[i]);
    count += compair
  }
  return `Sua nota final é: ${count} pontos`
}

console.log(comparaGabarito(RIGHT_ANSWERS, STUDENT_ANSWERS,compareAnswers))

