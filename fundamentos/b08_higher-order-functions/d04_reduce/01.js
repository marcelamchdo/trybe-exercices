//1 - Dada uma matriz, transforme em um array.
// const arrays = [
//   ['1', '2', '3'],
//   [true],
//   [4, 5, 6],
// ];

// function flatten() {
//   return arrays.reduce((all, actually) => all.concat(actually), []);
// }

// console.log(flatten())

const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//2 - Crie uma string com os nomes de todas as pessoas autoras

// function reduceNames() {
//   return books.reduce((all, name, index) => {
//     const writers = name.author.name; 
//     if (index === books.length -1) {
//     all += writers + '.';
//     } else {
//       all += writers + ', ';
//     }
//     return all;
//   }, '');
// }

// console.log(reduceNames())

//3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

// function averageAge() {
//   const numberBooks = books.length;
//   const ageSum = books.reduce((sum, book) => (
//     sum + (book.releaseYear - book.author.birthYear)
//   ), 0);
//   return ageSum / numberBooks;
// }
// console.log(averageAge())

//4 - Encontre o livro com o maior nome.
// function longestNamedBook() {
//   return books.reduce((lengthBook, actuallyBook) => {
//     if (actuallyBook.name.length > lengthBook.name.length) {
//       return actuallyBook;
//     } else {
//       return lengthBook;
//     }
//   }).name
// }

// console.log(longestNamedBook())


//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.
// const names = [
//   'Aanemarie', 'Adervandes', 'Akifusa',
//   'Abegildo', 'Adicellia', 'Aladonata',
//   'Abeladerco', 'Adieidy', 'Alarucha',
// ];

// function containsA() {
//   return names.reduce((count, actually) => 
//   count + actually.split('').reduce((value, name) => {
//     if (name === 'a' || name === 'A') return value +1;
//     return value
//   }, 0), 0);
// }

// console.log(containsA());

//6 - Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato { name: nome do aluno, average: media das notas }. Para isso vamos assumir que a posição 0 de notes refere-se ao aluno na posição 0 de students, aqui além de reduce será necessário utilizar também a função map. Dica: Você pode acessar o index do array dentro de map, e você pode ver o objeto esperado na constante expected.

const name = ['Raynara', 'Laura'];
const notes = [[8, 9, 7], [9, 7, 8]];

function studentAverage() {
  const array = name.map((student, i) => ({
    name: student,
    average: (notes[i].reduce((value, note) => value + note, 0) / notes[i].length),
  }));
  return array;
}

console.log(studentAverage());