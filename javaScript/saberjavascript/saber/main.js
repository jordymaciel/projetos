//NULLISH*******

// const { response } = require("express")

// const { json } = require("express/lib/response");

// const idade = null; 

// document.body.innerText = 'sua idade é: ' + (idade ?? 'Não informado');


//OBJETOS*******

// const user = {
//   nome: 'jordy',
//   idade: 28,
//   address: {
//     street: 'Rua',
//     number: 176,
//   },
// };


//DESESTRUTURAÇÃO*******

// const {address, idade} = user


// function mostrarIdade({ idade }) {
//   return idade;
// }


//REST OPERATOR*******

// const {nome, idade} = user;

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const first = array[0];
// const second = array[1];

// const [first, second, ...rest] = array


//SHORT SYNTAX*******

// const nome = 'jordy';
// const age = 27;

// const user = {
//   name,
//   age,
// };

// document.body.innerText = JSON.stringify(user);


//OPTIONAL CHAINING*******

// const user = {
//   name: 'jordy',
//   age: 28,
//   address: {
//     street: 'rua',
//     number: 176,
//     zip: {
//       code: '89160000',
//       city: 'Rio'
//     },
//     showFullAddress() {
//       return 'ok'
//     }
//   },
// };

// const key = 'state';

// document.body.innerText = user.adress?.[key]

// document.body.innerText = user.address?.zip?.code ?? 'Não informado';

// document.body.innerText = user.address.showFullAddress?.();


//METODOS DE ARRAY*******

// const array = [1, 2, 3, 4, 5];

// for (const i of array) {
//   document.body.innerText += i;
// };

// Array.forEach(item => {
//   document.body.innerText += item;
// })

//agora quero multiplicar os valores do array, uma forma mais limpa seria:

// const novoArray = array.map(item => {
//   return item * 2;
// })

// document.body.innerText = JSON.stringify(novoArray)

// const novoArray = array.filter(item => item % 2 = 0)

// document.body.innerText = JSON.stringify(novoArray)

// const array = [1, 2, 3, 4, 5];

// const novoArray = array.map(item => {
//   if (item % 2 == 0) {
//     return item * 10;
//   }

//   return item;
// })

// document.body.innerText = JSON.stringify(novoArray)

// const novoArray = array
//   .filter(item=> item % 2 != 0)
//   .map(item => item * 10)

// document.body.innerText = JSON.stringify(novoArray)

// const todosItensSaoNumeros = array.every(item => typeof item == 'number');

// document.body.innerText = JSON.stringify(todosItensSaoNumeros)

// const peloMenosUmItemNaoEUmNumero = array.some(item => {
//   return typeof item != 'number';
// })

// document.body.innerText = JSON.stringify(peloMenosUmItemNaoEUmNumero)

// const par = array.find(item => item % 2 == 0)

// document.body.innerText = JSON.stringify(par)

// const some = array.reduce((acc, item) => {
//   document.body.innerText += acc + ',' + item + ' -- '
//   return acc + item
// }, 0)


// //TEMPLATE LITERAL*******

// const name = 'jordy';
// const message = `bem vindo, ${name}`;

// document.body.innerText = message


//PROMISES*******

// const somaDoisNumeros = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a + b);
//     }, 2000);
//   });
// }

// somaDoisNumeros(1, 3)
//   .then(soma => {
//     document.body.innerText = soma
//   })

//   .catch(err => {
//     console.log(err)
//   })

fetch('https://api.github.com/users/jordymaciel')
  .then(reponse => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })
