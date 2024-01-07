

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

//Separa as duas equipes
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
  return {timeAzul, timeAmarelo}
}

//Imprime em DOM HTML
function listaHtml(equipe) {
  const listaEquipe = document.createElement("ul");//Criação dos elementos de html
  listaEquipe.id = 'equipe'//referencia o elem com um id.

  equipe.forEach((param,index) => {
    //O item é uma linha
    const item = document.createElement("li");//Cada iteração vai criar uma linha
    let indexStr = (index + 1).toString().padStart(2, '0');//Convert indes p/ string
    item.textContent = indexStr + '-' + param.nome;//Cria um nó de texo em item.
    listaEquipe.appendChild(item);//Anexa item no elemento listaEquipe
  });
  return listaEquipe;//Retorna lista equipe com as alterações

}

//Usando imutabilidade com 'const' para variáveis
const arrayEquipe = misturarArray(meuArray)//arrayEquipe recebe meuArray misturado
const equipeShuffle = arrayEquipe//Array imutável
const equipeOrdenada = listaPronta(arrayEquipe) //Array equipe recebe ele mesmo function listaPronta

const  {timeAzul, timeAmarelo} = separaEquipes(equipeOrdenada);//Separa lista em duas equipes

const listaAmarela = listaHtml(timeAmarelo);
document.body.appendChild(listaAmarela);

const listaAzul = listaHtml(timeAzul);
document.body.appendChild(listaAzul);










