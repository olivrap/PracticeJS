//carro faz 12km/litros
//recebo o tempo em horas
//recebo a velocidade média km/hora
//qtos de combustível eu preciso?
function calculaComb(tempo, velo)
{
    let distancia = tempo*velo;
    let consumo = distancia/12;
    return consumo;
}

console.log('O consumo qdo tivermos 10 e 85 eh: ',calculaComb(10,85).toFixed(3),' lts');
console.log('O consumo qdo tivermos 2 e 92 eh: ',calculaComb(2,92).toFixed(3),' lts');
console.log('O consumo qdo tivermos 22 e 67 eh: ',calculaComb(22,67).toFixed(3),' lts');