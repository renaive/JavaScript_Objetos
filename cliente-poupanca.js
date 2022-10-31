// DESAFIO: Cliente poupança - aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança:

function cliente(nome, CPF, email, saldo) {
  this.nome = nome;
  this.CPF = CPF;
  this.email = email;
  this.saldo = saldo;
  this.depositar = function (valor) {
    this.saldo += valor;
  };
}

function clientePoupanca(nome, CPF, email, saldo, saldoPoup) {
  cliente.call(this, nome, CPF, email, saldo);
  this.saldoPoup = saldoPoup;
}

const ju = new clientePoupanca(
  "Ju",
  "555888444777711",
  "ju@email.com",
  100,
  200
);

console.log(ju);

// notação de ponto = acessar o objeto poupança > entrar em prototype > adicionar função.
clientePoupanca.prototype.depositarPoup = function (valor) {
  this.saldoPoup += valor;
};

// adicionar ao prototipo cliente poupança 30:
ju.depositarPoup(30);
console.log(ju.saldoPoup);
