/*
1- Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por
quilometro rodado. Crie um método que dado a quantidade de quilômetros e o preço do combustível nos de o valor gasto em reais para realizar este percurso.
*/

class Carro{
    marca;
    cor;
    gastoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }
    
    calcularGastoDePercurso(distanciaEmKm, precodoCombustivel){
        return distanciaEmKm * this.gastoMedioPorKm  * precodoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularGastoDePercurso(70, 6.15));
const palio = new Carro('Fiat', 'Preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 6.15));
