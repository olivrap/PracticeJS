// funções de callback
// quando eu busco algo no BE, demora mais que uma função normal
// quan

//callback é a função q será executada ao final 
//da execução da minha função
const testFCB = (callback) =>{
    setTimeout(() =>
    {
        console.log('Espera de 7 segundos');
        callback(); // dentro do timeOut, se eu colocar fora, ele executa antes. 
    }, 7000)//espero 7 segundos
    //faço o callback
}

const myCallBackFun = () =>{
    console.log('Minha Funcao de CB');
}

//passei uma função para outra função e disse a ordem na qual
//eu quero que ela execute. Isso evita problemas de acoplamento
//entre back e front end.
testFCB(myCallBackFun);

