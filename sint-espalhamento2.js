const clientes = [
  {
    nome: "André",
    cpf: "12312312312",
    dependentes: [
      {
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011",
      },
      {
        nome: "Samia",
        parentesco: "filha",
        dataNasc: "04/01/2014",
      },
    ],
  },
  {
    nome: "Juliana",
    cpf: "56767867867",
    dependentes: [
      {
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "30/08/2020",
      },
    ],
  },
];

const listaDependentes = [
  ...clientes[0].dependentes,
  ...clientes[1].dependentes,
];

//Usando a sintaxe de espalhamento … (3 pontos) vamos acessar o cliente na primeira posição do array de dependentes. Assim espalharemos o conteúdo do array de dependentes do objeto cliente na definição do novo array listaDependentes. Repetiremos o processo para a lista de dependentes do cliente na segunda posição.

console.table(listaDependentes);
