//DESAFIO: Puxando relatórios - Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível e de forma automatizada para fornecer a outros departamentos do banco;

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["55912345498", "5521988743124"],
  dependentes: [
    {
      nome: "Sara Silva",
      parentesco: "filha",
      dataNasc: "20/03/2011",
    },
  ],

  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

let relatorio = "";

// info: nome da chave de cada propriedade do objeto.
//for (let info in cliente) {
//  relatorio += ` - ${cliente[info]}`;
//}

//console.log(relatorio);
// identificar objetos e arrays para nao imprimir ambos no relatorio.

for (let info in cliente) {
  if (
    typeof cliente[info] === "object" ||
    typeof cliente[info] === "function"
  ) {
    continue;
  } else {
    relatorio += `
    ${info} ==> ${cliente[info]}
    `;
  }
}

console.log(typeof cliente.depositar);
console.log(relatorio);
