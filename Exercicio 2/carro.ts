export class Carro{
    marca:string = 'Ford';
    modelo:string = 'T';
    cor:string;
    ano:number = 1908;
    velocidade:number=0;
    
    constructor(novaCor:string){
        this.cor=novaCor;
    }
   
    acelerar(velocidade?: number) {
        if (velocidade === undefined) {
            this.velocidade += 10;
        } else {
            this.velocidade += velocidade;
        }

        console.log("Nova velocidade: ", this.velocidade);

    }
    
    frear(){
        this.velocidade-=10;
    }
    
}