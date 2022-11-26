/*faça um programa para cacular o valor de uma viagem.

você tera 5 variaveis, sendo elas:
-1 preço do etanol;
-2 preço do gasolina;
-3 O tipo de combustivel que esta no carro; 
-4 gasto médio de combustivel  do carro por km;
-5 distancia em km da viagem;


imprima no console o valor que será gasto para realizar essa viagem.*/

const precoGasolina = 6.66;
const precoEtanol = 5.79;
const kmPorLitro = 10;
const distanciaKm = 100;
const tipoCombustivel = 'gasolina';

const litrosConsumidos = distanciaKm / kmPorLitro;

if (tipoCombustivel === 'Etanol') {
    const valorDaViagem = litrosConsumidos * precoEtanol;
    console.log(valorDaViagem.toFixed(2));
} else {
    const valorDaViagem = litrosConsumidos * precoGasolina;
    console.log(valorDaViagem.toFixed(2));

}



