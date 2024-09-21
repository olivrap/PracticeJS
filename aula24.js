//dado um numero inteiro não negativo (n), escreva uma função recursiva
// que calcule a soma dos números de 1 até n
//  entrada 3 saída = 6
//  entrada 5 saída = 15

const somaRec  = (n) =>{
    if (n === 1)
        return 1; // parada da recursividade
    return n + somaRec(n-1);
} 

console.log("Soma 5 ->",somaRec(5));
console.log("Soma 3 ->",somaRec(3));
console.log("Soma 4 ->",somaRec(4));
console.log("Soma 10 ->",somaRec(10));