// aprendendo a manipular e converter dados
const salarioJr = '1200'; //é uma string
const salarioSr = 2500; //é um inteiro
const salarioPl = 2800.1241213; //é um ponto flutuante
//converte o salario (string) para numero
console.log('Salario Junior ', Number(salarioJr));
//converte o salario (inteiro) para string

console.log('Salario Senior R$', salarioSr.toFixed(2));

let salarioArredondado = salarioPl.toFixed(2);
console.log('Salario Pleno R$', salarioArredondado);
