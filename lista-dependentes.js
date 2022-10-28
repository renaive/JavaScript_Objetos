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
};

// transformar dependentes em ARRAY

clientes.dependentes.push({
  nome: "Samia Maria",
  parentesco: "filha",
  dataNasc: "04/01/2014",
});

console.log(clientes);

// filter é um método de array que sempre irá retornar o que ele filtra dentro de um novo array.
const filhaMaisNova = clientes.dependentes.filter(
  (dependentes) => dependentes.dataNasc === "04/01/2014"
);

console.log(filhaMaisNova);
console.log(filhaMaisNova[0].nome);
