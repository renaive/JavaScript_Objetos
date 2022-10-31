//DESAFIO: Cliente genérico - Gerar uma função que permita a criação de novos clientes a partir de um modelo.

function cliente(nome, CPF, email, saldo) {
  this.nome = nome;
  this.CPF = CPF;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

// diferença entre const.nome e this.nome: a função sempre vai ter o objeto cliente.
// new: palavra reservada

const andre = new cliente("André", "1254359542", "andre@email.com", "100");

console.log(andre);

// no console do navegador: 01. colar o codigo acima. 02. andre.__proto__ (é possivel ver que andré é um objeto construido a partir do "cliente");
// andre.__proto__.__proto__: construtor de objeto, ou seja, o nosso cliente utilizou o construtor objeto. o andré utilizou o consrutor cliente => CADEIA DE PROTÓTIPO.
