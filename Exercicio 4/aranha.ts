export class Aranha{
    nome: string;

    // decidimos usar static para as características, pois são comuns em todas as aranhas do nosso projeto, enquanto o nome e os passos são específicos de cada instância.
    static especie: string = 'Viúva-negra';
    static cor: string = 'Preto';
    static patas: number = 8;
    static caracteristicas: string= 'Pequena e preta com manchas vermelhas. Sua picada pode causar dores musculares intensas e requer atenção médica.';
    passos:number=0;

    constructor(nome:string){
        this.nome = nome;
    }



    andar(passos?: number) {
        if (passos === undefined) {
            this.passos += 10;
        } else {
            this.passos += passos;
        }

        console.log("A aranha " + this.nome + " andou " + this.passos + " passos.");

    }


    fazerTeia() {
        console.log("A aranha " + this.nome + " está fazendo uma teia.");
    }
    
    comer() {
        console.log("A aranha " + this.nome + " está comendo.");
    }
}
