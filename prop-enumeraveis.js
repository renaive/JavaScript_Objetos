// O JavaScript utiliza o termo own property (propriedade própria) para se referir às propriedades que pertencem ao objeto (como os exemplos nome, cpf e email) e que não são herdadas do protótipo.

const catalogo = {
  editora: "Casa do Código",
  catalogo: [
    {
      id: 50,
      titulo: "Primeiros Passos com NodeJS",
      autor: "João Rubens",
      categoria: "programação",
      versoes: ["ebook", "impresso"],
    },
  ],
};

// Usando o método Object.getOwnPropertyDescriptor() para descrever os atributos da propriedade editora, teremos:
console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"));

//A propriedade editora foi criada por nós e não herdada do protótipo, assim ela pode ser alterada, removida e é enumerável - ou seja, vai ser percorrida em um loop for...in e indexada a um array com Object.keys() ou Object.entries().

//Veja que métodos que começam com getOwnProperty… funcionam apenas em propriedades “próprias” do objeto.

//Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.
