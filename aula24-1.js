// leitura de dado do teclado

const somaRec  = (n) =>{
    if (n<0)
        throw new Error('Valor invalido. Encerrando o programa');

    if (n === 0)
        return 0; // parada da recursividade

    return n + somaRec(n-1);
} 


process.stdin.on('data', function(data){
    try{
        console.log(' soma ', somaRec(Number(data)))
        }catch(error)
        {
        console.log(error.message);
        process.stdin.pause();
        }
    });