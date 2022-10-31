//DESAFIO: Oferta de seguro - percorrer um objeto, verificar se existe a chave `dependentes` e , caso exista, enviar uma mensagem de oferta de seguro;

const cliente = {
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

  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
};

// nome: object.keys = passa o objeto como parâmetro. .keys se refere as chaves do objeto (cria como array)
//const propsClientes = Object.keys(cliente);
//console.log(propsClientes);

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(cliente);
  if (propsClientes.includes("dependentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}

oferecerSeguro(cliente);
