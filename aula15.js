// desafio - contando caracteres
const textoTodo = 
'essa eh a minha \n primeira string \n para o meu teste 0';

console.log(textoTodo);

//contar cada palavra e retornar tamanho
//quebrar o conteúdo por palavras antes de cada quebra de linha

function quebraLinha(texto){
    return texto.split('\n');
}

function countWords(palavra){
   //const palavra = (String) palavra;
    return palavra.length;
}

function computaTamanhos(linha){
    let vetPalavras = linha.split(' ');
    let textoFinal = '';
    console.log('O tamanho eh', vetPalavras.length);
   for (let i=0; i<vetPalavras.length; i++)
    textoFinal = textoFinal+vetPalavras[i].length;
     // console.log(vetPalavras[i].length,'-');
     //console.log(textoFinal);
}

function escreveTamanho(textoTodo){
    let vetLinhas = quebraLinha(textoTodo);

    for (let i=0; i<vetLinhas.length; i++)
    {
        computaTamanhos(vetLinhas[i])
    }

}

//let linhas = quebraLinha(textoTodo);
//console.log(' o tamanho de tamanho é', countWords('palavra'));
//console.log('O numero de linhas que temos eh: ',linhas.length);
//computaTamanhos('o meu texto é grande');