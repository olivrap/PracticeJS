//aula de exceções

function divisao(divisor, dividendo){
    if (divisor === 0)
        throw new Error('Divisor não pode ser zero');

    return dividendo/divisor;
}

try{
    console.log('Divisao de 4 por 2', divisao(2, 4));
    console.log('Divisao de 6 por 2', divisao(2, 6));
    console.log('Divisao de 8 por 0', divisao(0, 8));
}catch(error){
    console.log(error.message);
}finally{
    console.log('Alem do error, eu ainda executo isso aqui.');
    // é executado indepentende de termos erro ou não.
}

//console.log('Divisao de -4 por -2', divisao(2, -4));