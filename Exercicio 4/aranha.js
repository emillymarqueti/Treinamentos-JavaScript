"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aranha = void 0;
var Aranha = /** @class */ (function () {
    function Aranha(nome) {
        this.passos = 0;
        this.nome = nome;
    }
    Aranha.prototype.andar = function (passos) {
        if (passos === undefined) {
            this.passos += 10;
        }
        else {
            this.passos += passos;
        }
        console.log("A aranha " + this.nome + " andou " + this.passos + " passos.");
    };
    Aranha.prototype.fazerTeia = function () {
        console.log("A aranha " + this.nome + " está fazendo uma teia.");
    };
    Aranha.prototype.comer = function () {
        console.log("A aranha " + this.nome + " está comendo.");
    };
    // decidimos usar static para as características, pois são comuns em todas as aranhas do nosso projeto, enquanto o nome e os passos são específicos de cada instância.
    Aranha.especie = 'Viúva-negra';
    Aranha.cor = 'Preto';
    Aranha.patas = 8;
    Aranha.caracteristicas = 'Pequena e preta com manchas vermelhas. Sua picada pode causar dores musculares intensas e requer atenção médica.';
    return Aranha;
}());
exports.Aranha = Aranha;
