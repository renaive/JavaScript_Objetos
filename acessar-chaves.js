// DESAFIO: acessar chaves - consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela.

// 01: usar colchetes (chave como variável)

const cliente = {
  nome: "André",
  idade: 36,
  CPF: "12543652266",
  email: "andre@email.com",
};

const chaves = ["nome", "idade", "CPF", "email"];

console.log(cliente[chaves[0]]);
