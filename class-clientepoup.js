// DESAFIO: CLIENTE POUPANÇA - Aproveitar o cliente que já existe e criar a partir dele um novo tipo de cliente para contas poupança

class cliente {
  constructor(nome, email, CPF, saldo) {
    this.nome = nome;
    this.email = email;
    this.CPF = CPF;
    this.saldo = saldo;
  }

  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

class clientePoupanca extends cliente {
  constructor(nome, email, CPF, saldo, saldoPoup) {
    super(nome, email, CPF, saldo);
    this.saldoPoup = saldoPoup;
  }
  depositarPoup(valor) {
    this.saldoPoup += valor;
  }
}

const andre = new clientePoupanca(
  "André",
  "andre@email.com",
  "2255887744",
  100,
  200
);

console.log(andre);

andre.depositar(50);
andre.depositarPoup(50);

console.log(andre);
