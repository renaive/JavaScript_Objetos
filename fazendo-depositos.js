// DESAFIO: lista de dependentes - verificar a melhor forma de agregar a informação de um novo dependente ao objeto cliente.

const clientes = {
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

console.log(clientes.saldo);

clientes.depositar(30);

console.log(clientes.saldo);
