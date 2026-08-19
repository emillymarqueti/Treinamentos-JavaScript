"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Carro = void 0;
var Carro = /** @class */ (function () {
    function Carro(novaCor) {
        this.marca = 'Ford';
        this.modelo = 'T';
        this.ano = 1908;
        this.velocidade = 0;
        this.cor = novaCor;
    }
    Carro.prototype.acelerar = function (velocidade) {
        if (velocidade === undefined) {
            this.velocidade += 10;
        }
        else {
            this.velocidade += velocidade;
        }
        console.log("Nova velocidade: ", this.velocidade);
    };
    Carro.prototype.frear = function () {
        this.velocidade -= 10;
    };
    return Carro;
}());
exports.Carro = Carro;
