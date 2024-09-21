// ler x e y
// fazer a soma de todos que não sao múltiplos de 13
// retornar essa soma

const piso = 100;
const teto = 200;

function calculaSoma(piso, teto){
    let soma = 0;
    let val = piso;  
    do{
        if (val%13 != 0){
            soma = soma+val;
        }
        val++;
    }while(val<=teto);

    return soma;
}

console.log('A soma é: ', calculaSoma(piso, teto))
