// DESAFIO: Compondo um objeto - adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.

const clientes = {
  nome: "André",
  idade: 36,
  cpf: "12543652266",
  email: "andre@email.com",
  fones: ["55912345498", "5521988743124"],
};

clientes.dependentes = {
  nome: "Sara",
  parentesco: "filha",
  dataNasc: "20/03/2011",
};

console.log(clientes);

clientes.dependentes.nome = "Sara Silva";

console.log(clientes);
