// Iniciaremos com a criação de um novo arquivo chamado ” clientePrototipo.js” e adicionando o código abaixo a ele, para definir construtores de objetos.

function Cliente(nome, cpf, email, saldo) {
  this.nome = nome;
  this.cpf = cpf;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}
const andre = new Cliente("Andre", "12312312312", "andre@email.com", 100);

// Agora vamos definir um construtor que utiliza o Cliente para gerar um novo tipo de cliente.

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
  Cliente.call(this, nome, cpf, email, saldo);
  this.saldoPoup = saldoPoup;
}
const ju = new ClientePoupanca("Ju", "12312312312", "ju@email.com", 100, 200);

// Agora vamos manipular o comportamento do protótipo do objeto ClientePoupanca, adicionando o código abaixo:

ClientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

// teste de propriedades:

console.log(andre.hasOwnProperty("saldoPoup"));
console.log(ju.hasOwnProperty("saldoPoup"));
console.log(andre instanceof Cliente);
console.log(typeof andre);
console.log(typeof ju);
console.log(ju instanceof ClientePoupanca);
console.log(Function.prototype.isPrototypeOf(Cliente));
console.log(Cliente.constructor === Function);

// Na saída do console veremos que usando .hasOwnProperty(), a função “saldoPoup” só existe no objeto do tipo ClientePoupanca.

// Os objetos andre e ju são do tipo object, ou seja, ambos herdam do protótipo de object, que está associado a todo objeto criado no JavaScript.
