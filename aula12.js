// faça um programa que escreva os 6 próximos números ímpares
// a partir de um número X qualquer

const x = 8; // início do meu contador
const limite = 6; // qtde de vezes que eu escrevo os ímpares

function escreve6Impares(valor){
let val = 1;
    do{
        if(valor%2 == 1)
        {
            console.log(valor);
            val++;
        }
        valor++;
    }while(val<=6)
}
escreve6Impares(x);
