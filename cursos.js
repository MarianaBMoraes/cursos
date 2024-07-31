const prompt = require("prompt-sync")();

const cursos = [];

const modelo = () => {
  const nome = prompt("Digite o nome do curso: ");
  const duracao = prompt("Digite a duração do curso: ");

  const professores = [];
  while (true) {
    // repetir até o usuário pedir para terminar.
    const professor = prompt(
      "Digite o nome do professor, ou digite 'fim' para sair: "
    );

    if (professor == "fim") {
      // se professor for == a fim vai sair do laço, pode ser feito com else tbm.
      //define termo para sair do loop
      break; // loop while sempre acaba com break
    }
    professores.push(professor); // caso não tenha mais adicionar no array 'professores', utilizamos o nome-do-array.push(nome-da-variavel-que-vai-adicionar)
  }

  const alunos = []; // segue a mesma estrutura de 'professores'
  while (true) {
    const aluno = prompt("Digite o nome do aluno, ou digite 'fim' para sair: ");

    if (aluno == "fim") {
      break;
    }
    alunos.push(aluno);
  }

  const materias = []; // segue a mesma estrutura de 'professores'
  while (true) {
    const materia = prompt(
      "Digite o nome do materia, ou digite 'fim' para sair: "
    );

    if (materia == "fim") {
      break;
    }
    materias.push(materia);
  }

  if (
    //validar os dados recebidos.
    nome != "" && // nome tem que ser diferente de "string" vazia.
    duracao > 0 && // '>' maior que zero.
    professores.length > 0 &&
    alunos.length > 0 &&
    materias.length > 0
  ) {
    return {
      // return acaba com a execução da função, por isso não faz diferença usar 'else'.
      nome,
      duracao,
      professores,
      alunos,
      materias,
    };
  }

  console.log("Dados inválidos!"); // se os dados não passarem pela validação, aparece 'Dados inválidos!'.
  return; // return vazio, é um retorno 'undefined', retorna toda a função.
};

const criar = () => {
  const novo = modelo();

  if (novo) {
    cursos.push(novo); // adicionar no array.
    console.log("Curso adicionado com sucesso.");
  }
};

const listar = () => {
  if (cursos.length == 0) {
    console.log("Nenhum curso foi criado ainda!");
  }

  // 'el' : elemento / i: indice, para cada elemento faça isso ...
  cursos.forEach((el, i) => {
    // função forEach() recebe um callback (ou seja, outra função como parâmetro).
    console.log(`${i + 1}.
        Nome: ${el.nome},
        Duração: ${el.duracao},
        Professores:  ${el.professores},
        Alunos: ${el.alunos},
        Materias: ${el.materias}`);
  });
};

const atualizar = () => {
  listar();

  const indice = prompt("Qual o indice que deseja atualizar: ") - 1;

  const novo = modelo();

  if (novo && indice >= 0 && indice < cursos.length) {
    cursos[indice] = novo;
    console.log("Curso atualizado com sucesso!");
  } else {
    console.log("Indice inválidoo!");
  }
};

const remover = () => {
  listar();

  const indice = prompt("Qual indice deseja remover: ") - 1; // -1 para começar no indice certo, e não a partir de 0.

  if (indice >= 0 && indice < cursos.length) {
    cursos.splice(indice, 1);
  } else {
    console.log("Indice inválido!");
  }
};

module.exports = {
  criar,
  listar,
  atualizar,
  remover,
};
