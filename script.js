/* const user = {
  name : "John",
  idade: 48,
  adress: {
    street : "Rua Vicente Canezin",
    number : 120
  }

};

document.body.innerText = Object.keys(user);
document.body.innerText = Object.values(user);
document.body.innerText = Object.entries(user); */

//Desestruturação


/* rest operator */
/* const {name,idade, ...rest} = user 
document.body.innerText = JSON.stringify(rest)*/

/* const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [first, second, , ...rest] = array;
document.body.innerText = JSON.stringify({first, second, rest}); */

/* short sintax 
const nome = 'john';
const idade = 48;*/

//Criar um objeto usuário com estas informações.
/* const user = {
  nome,
  idade
}
document.body.innerText = JSON.stringify({user}); */

//Optional Chaining

/* const user = {
  name: "John",
  age: 48,

  address: {
    street: "Rua Vicente Canezin",
    number: 120,
    zip: {
      code: '86806566',
      city: 'Apucarana'
    },
    showFullAddress() {
      return 'ok'
    }
  }

}; */
/* document.body.innerText = user.address
? user.address.zip
? user.address.zip.code
: 'Não informado'
: 'Não informado' */

/* Aplicação do Optional Chaining */
/* document.body.innerText = user.address.showFullAddress?.() */

/* const key = 'state' */


/* Metodos de Array */

/* for ( const i of array) {  
  document.body.innerText += i
} */

/* array.forEach(item => {
  document.body.innerText += item;
}); */

/* const novoArray = array.map(item => {
  if ( item % 2 == 0) {
    return item * 10    
  } else {
    return item * 5
  }
  
  return item * 2
}) */

/* map, filter, every, every, some, find, findIndex, reduce */
/* const array = [1, 2, 3, 4, 5];

const novoArray = array.filter(item => item % 2 !== 0)

document.body.innerText = JSON.stringify(novoArray); */



/* const newArray = lista

  .filter(item => item.habilidade === 3 &&
    item.posicao === "meio")

const somaHabilit = newArray.reduce((acum, valor) =>
  acum + valor.habilidade
  , 0) */


//Para acessar o nome de cada item, deve-se fazer um loop.
/* newArray.forEach(item => {
  console.log(item.nome)
}) */

/* O metodo reduce resulta em um único valor de saída, 
    através de um loop, eliminando a necessidade de ter que criar um loop separado*/
//console.log(somaHabilit)

/* document.body.innerText = 'newArray: ' + JSON.stringify(newArray) + '\n\n' + 'somaHabilit: ' + JSON.stringify(somaHabilit);

document.body.innerText = 'newArray: ' + JSON.stringify(newArray) + "\n\n" +
  'somaHabilit: ' + JSON.stringify(somaHabilit);
 */

/* Neste caso, as aspas não estão tornando as variáveis em strings. As aspas são usadas para definir strings literais, mas quando você usa o sinal de mais (+) para concatenar, o JavaScript avalia o conteúdo dentro das variáveis. Então, `JSON.stringify(newArray)` e `JSON.stringify(somaHabilit)` são avaliados como as strings que representam o conteúdo dessas variáveis.

Aqui está o que acontece passo a passo:
1. `'newArray: '` é uma string literal.
2. `JSON.stringify(newArray)` converte o conteúdo do array `newArray` em uma string JSON.
3. O sinal de mais (+) concatena essas duas strings.
4. `'\n\n'` é uma string literal que representa duas quebras de linha.
5. Outro sinal de mais (+) concatena a string até agora com essa string de quebra de linha.
6. `'somaHabilit: '` é outra string literal, que é concatenada à string até agora.
7. `JSON.stringify(somaHabilit)` converte o número em `somaHabilit` em uma string.
8. Finalmente, a última operação de concatenação (+) adiciona essa string ao final.

Então, mesmo que as variáveis estejam dentro de aspas, o JavaScript avalia suas expressões antes de fazer a concatenação. Portanto, o resultado final é uma única string que contém os valores dessas variáveis, não seus nomes. Espero que isso esclareça sua dúvida! Se você tiver mais perguntas, fique à vontade para perguntar. */




let meuArray = ([
  {
    nome: "Edmar",
    posicao: "Defesa",
    habilidade: 3,
  },
  {
    nome: "Miguel",
    posicao: "Defesa",
    habilidade: 3
  },
  {
    nome: "Leonel",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "John",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Sassi",
    posicao: "Meio",
    habilidade: 4
  },
  {
    nome: "João Frango",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Helio",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Dario",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Vinicius",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Maua",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "Jonathan",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Paulinho (Victor)",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "Piu Piu",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "João Ramalho",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "Van Helsing",
    posicao: "Meio",
    habilidade: 2,
  },
  {
    nome: "Alison",
    posicao: "Ataque",
    habilidade: 1
  },
  {
    nome: "Tomazoni",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "João Vitor",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Odimar",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Allan(Xandão)",
    posicao: "Defesa",
    habilidade: 1
  },
  {
    nome: "Herico",
    posicao: "Meio",
    habilidade: 3
  },
  {
    nome: "Guilherme Filho",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "Gabriel",
    posicao: "MeioAtaque",
    habilidade: 3
  },
  {
    nome: "Lacio",
    posicao: "MeioAtaque",
    habilidade: 3,
  },
  {
    nome: "Felipe",
    posicao: "Defesa",
    habilidade: 2,
  },
  {
    nome: "Gustavo Filho",
    posicao: "Defesa",
    habilidade: 0
  },
  {
    nome: "Felipe Indiano",
    posicao: "Defesa",
    habilidade: 0
  },
  {
    nome: "Tannuri",
    posicao: "Ataque",
    habilidade: 1
  },
  {
    nome: "Diego",
    posicao: "Defesa",
    habilidade: 2
  },
  {
    nome: "Alexandre",
    posicao: "Defesa",
    habilidade: 2
  },
  
]);


//Mistura o array de objetos
function misturarArray(array) {
  const resultado = array.slice();
  for (let i = resultado.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [resultado[i], resultado[j]] = [resultado[j], resultado[i]];
  }
  return resultado;
}

//Organiza por habilidade e posição
function listaPronta(param) {
  let habilidades = [0, 1, 2, 3, 4];
  let posicoes = ['Defesa', 'Meio', 'Ataque', 'MeioAtaque']
  const novoArray = [];

  posicoes.forEach(posicao => {
    habilidades.forEach(habilidade => {
      let jogadoresFiltrados = param.filter(jogador => jogador.posicao === posicao && jogador.habilidade === habilidade);
      novoArray.push(...jogadoresFiltrados);
    })
  })
  return novoArray
}


function separaEquipes(param) {
  /* cria duas arrays vazias */
  const timeAzul = [];
  const timeAmarelo = [];
  /* Itera em ordem de índice o array arrayEquipe, e separa 
  um objeto para cada array */
  arrayEquipe.forEach((jogador, index) => {
    if (index % 2 === 0) {
      timeAzul.push(jogador);
    } else {
      timeAmarelo.push(jogador);
    }
  });

  console.log("Time Azul \n" + JSON.stringify(timeAzul));
  console.log("Time Amarelo\n" + JSON.stringify(timeAmarelo));

  return {timeAzul, timeAmarelo}
}



function listaHtml(equipe) {
  const listaEquipe = document.createElement("ul");//Criação dos elementos de html

  equipe.forEach((param) => {
    //O item é uma linha
    const item = document.createElement("li");//Cada iteração vai criar uma linha
    item.textContent = param.nome;
    listaEquipe.appendChild(item);
  });

  return listaEquipe;

}


let arrayEquipe = misturarArray(meuArray)//arrayEquipe recebe meuArray misturado

arrayEquipe = listaPronta(arrayEquipe)//Array equipe recebe ele mesmo function listaPronta

const  {timeAzul, timeAmarelo} = separaEquipes(arrayEquipe);

const listaAmarela = listaHtml(timeAmarelo);
document.body.appendChild(listaAmarela);

const listaAzul = listaHtml(timeAzul);
document.body.appendChild(listaAzul);










