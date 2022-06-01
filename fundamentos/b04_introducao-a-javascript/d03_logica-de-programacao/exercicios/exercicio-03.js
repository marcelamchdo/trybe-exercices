let array = ['java', 'javascript', 'python', 'html', 'css'];
let maior = array[0];
let menor = array[0];

for(let i = 0; i < array.length; i++) {
  if (array[i].length > maior.length) {
    maior = array[i];
  }
}
console.log(maior);

for(let i = 0; i < array.length; i ++) {
  if(array[i].length < menor.length) {
    menor = array[i];
  }
}
console.log(menor);
