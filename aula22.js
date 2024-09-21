//funções assíncronas e síncronas

/* se eu tenho essa ordem, eu vou executar com
uma ordem e de modo ordenado
const myFunc = () =>{
    console.log("Potencia ", 2**4);
    console.log("Potencia ", 4**4);
    console.log("Potencia ", 10**4);
    console.log("Potencia ", 3**4);
}*/

// agora eu preciso que isso seja executado em ordem, 
// mas no meio há uma função que pede um dado do BE e isso pode
// fazer com que o processamento demore. Nesse caso, o JS pula a 
// função demorada e vai para as outras.
const myFuncSinc = () =>{
    console.log("Potencia ", 2**4);
    console.log("Potencia ", 4**4);
    setTimeout(() => {
        console.log("Potencia demo", 10**4),
        7000}); // por ser demorada, vai para o final da fila
    console.log("Potencia ", 3**4);
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const myFuncASinc = async () =>{
    console.log("Potencia ", 2**4);
    console.log("Potencia ", 4**4);
    await sleep(3000); // por ser assinc, o meu programa vai esperar
    console.log("Potencia ", 3**4);
}

myFuncSinc();
myFuncASinc();