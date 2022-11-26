/* 
 Elabore um algoritmo que calcule o que deve ser pago por um produto,
considerando o preço normal de etiqueta
e a escolha da condição de pagamento. Utilize os códigos da tabela a 
seguir para ler qual a condição de pagamento escolhida
e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
const preçoEt = 100;
const formaPag = 2;

if( formaPag === 1 ){
    console.log(preçoEt - (preçoEt * 0.1))
    console.log('Desconto de 10%')
}else if(formaPag === 2){
    console.log(preçoEt - (preçoEt * 0.15))
    console.log('Desconto de 15%')
}else if( formaPag === 3){
    console.log(preçoEt)
}else if (formaPag === 4){
    console.log(preçoEt + (preçoEt * 0.1))
    console.log('Acrescimo de 10%')
}