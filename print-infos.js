// desafio: printar infos. Acessar um objeto com informações de um cliente e exibir essas informações num console.

const cliente = {
  nome: "André",
  idade: 36,
  CPF: "12543652266",
  email: "andre@email.com",
};

//console.log(cliente.nome);
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos.`);

//substring: nesse caso vai exibir apenas os 3 primeiros dígitos da string "CPF"
console.log(cliente.CPF.substring(0, 3));
