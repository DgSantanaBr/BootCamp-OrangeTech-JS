

/*faça um programa para cacular o valor de uma viagem.

você tera 3 variaveis, sendo elas:
-1 preço do combustivel;
-2 gasto médio de combustivel  do carro por km;
-3 distancia em km da viagem;


imprima no console o valor que será gasto de combustivel para realizar essa viagem.*/

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 1580;


const litrosConsumidos = distanciaKm / kmPorLitro;

const valorDaViagem = litrosConsumidos * precoCombustivel; 

console.log( valorDaViagem.toFixed(2));



