const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro",
};

const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2",
};

//const guerreiro = { fichaGuerreiro, equipoGuerreiro };
//console.log(guerreiro);

//{
//  fichaGuerreiro: { nome: 'Aragorn', classe: 'guerreiro' },
//  equipoGuerreiro: { espada: 'Andúril', capa: 'capa élfica +2' }
//}

//Aqui entramos com o spread operator, adicionando a sintaxe de três pontos (reticências) antes do nome de cada objeto literal, com cada objeto separado por vírgula:
const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro };
console.log(guerreiro);
