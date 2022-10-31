class cliente {
  constructor(nome, email, CPF, saldo) {
    this.nome = nome;
    this.email = email;
    this.CPF = CPF;
    this.saldo = saldo;
  }

  // definindo métodos:
  depositar(valor) {
    this.saldo += valor;
  }

  exibirSaldo() {
    console.log(this.saldo);
  }
}

// criando cliente:
const andre = new cliente("André", "andre@email.com", "112233665544", 100);

console.log(andre);

// metodo:
andre.exibirSaldo();
