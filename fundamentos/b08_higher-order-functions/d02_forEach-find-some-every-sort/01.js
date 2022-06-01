/*=========== dia 1 ===========*/


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

// // Adicione o código do exercício aqui:

// //🚀 1 - Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// function findWriter() {
//   return books.find( book => book.author.birthYear === 1947).author.name;
// }

// console.log(findWriter());

// // 2 - Retorne o nome do livro de menor nome.
// function smallerName() {
//   let nameBook;
//   books.forEach(book => {
//     if (!nameBook || book.name.length < nameBook.length) {
//       nameBook = book.name;
//     }
//   });
//   return nameBook;
// }

// console.log(smallerName());

// // 3 - Encontre o primeiro livro cujo nome possui 26 caracteres.

// const expectedResult = {
//   author: {
//     birthYear: 1948,
//     name: 'George R. R. Martin',
//   },
//   genre: 'Fantasia',
//   id: 1,
//   name: 'As Crônicas de Gelo e Fogo',
//   releaseYear: 1991,
// };

// function getNamedBook(book) {
//   return books.find((book) => book.name.length === 26).name;
// }

// console.log(getNamedBook())

// // 4 - Ordene os livros por data de lançamento em ordem decrescente.
// function booksOrderedByReleaseYearDesc() {
//   return books.sort((bookA, bookB) => bookB.releaseYear - bookA.releaseYear)
// }

// console.log(booksOrderedByReleaseYearDesc())

// 5 - Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

// function everyoneWasBornOnSecXX() {
//   return books.every((book) => (
//     book.author.birthYear > 1900 && book.author.birthYear <= 2000 
//   ));
// }

// console.log(everyoneWasBornOnSecXX())

// // 6 - Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

// function someBookWasReleaseOnThe80s() {
//   return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
// }

// console.log(someBookWasReleaseOnThe80s())

// // 7 - Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

// function authorUnique() {
//   return books.every((book) =>
//     !books.some((bookSome) =>
//       (bookSome.author.birthYear === book.author.birthYear)
//       && (bookSome.author.name !== book.author.name)));
// }

/* ================ dia 03 ====================== */

// // 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

// function formatedBookNames() {
//   return books.map((book) => `${book.name.toUpperCase()} - ${book.genre.toUpperCase()} - ${book.author.name.toUpperCase()}`);

// }

// console.log(formatedBookNames())

// // 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

// function nameAndAge() {
//   return books.map((book) => (
//     {
//      author: book.author.name,
//      age: book.releaseYear - book.author.birthYear, 
//     }
//   )).sort((obj1, obj2) => obj1.age - obj2.age)
// }

// console.log(nameAndAge())

// // 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

// function fantasyOrScienceFiction() {
//   return books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica')
// }

// console.log(fantasyOrScienceFiction())

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

// function oldBooksOrdered() {
//   return books.filter((book) => (
//     2022 - book.releaseYear <  60
//   )).sort((book1, book2) => (book1.releaseYear - book2.releaseYear))
// }

// console.log(oldBooksOrdered())

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

// function fantasyOrScienceFictionAuthors() {
//   const generos = ['Fantasia', 'Ficção Científica'];
//   return books
//     .filter((book) => generos.includes(book.genre))
//     .map((book) => book.author.name).sort();
// }

// console.log(fantasyOrScienceFictionAuthors()) 

// 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.
// function oldBooks() {
//   const ano = 2022;
//   return books 
//     .filter((book) => ano - book.releaseYear > 60)
//     .map((book) => book.name);
// }

//  console.log(oldBooks())

// 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).
function authorWith3DotsOnName() {
  return books.find((book) => (book.author.name.split(' ')
    .filter((word) => word.endsWith('.')).length === 3
  )).name;
}

console.log(authorWith3DotsOnName())