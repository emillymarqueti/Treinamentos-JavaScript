import { Aranha } from "./aranha"

const aranha1 = new Aranha('Aranhazinha');
const aranha2 = new Aranha('Mariazinha');

console.log("Nossas aranhas possuem as seguintes características:");
console.log("Espécie: " + Aranha.especie);
console.log("Cor: " + Aranha.cor);
console.log("Características: " + Aranha.caracteristicas);

console.log("..........................................\n");

console.log("Aranhas registradas: " + aranha1.nome + " e " + aranha2.nome + "\n");

console.log("..........................................\n");

aranha1.andar();
aranha1.fazerTeia();

aranha2.andar();
aranha2.comer();





