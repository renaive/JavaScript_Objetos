const colecionador = {
  nome: "João do Gibi",
  idade: 41,
  tipocolecao: ["quadrinhos"],
  contato: "joao@email.com",
};

console.log(colecionador.nome);
console.log(colecionador["nome"]);

//Usando uma estrutura for conseguimos manipular a propriedade tipocolecao do objeto colecionador, por meio da função adicionarTipo(). Usamos a notação de colchetes junto à palavra reservada this, que faz referência ao próprio objeto. Desse modo, fazemos uso do objeto como um array associativo.

//É importante que conheçamos as diversas maneiras que o JavaScript possui para acessarmos os valores das propriedades de um objeto. Uma dessas formas é usando o conceito de array associativo.
