// trabalhando com objetos. 
//objetos no javascript são fracamente tipados

//declaração e instanciação de um objeto
const pessoaRafa = {
    idade : 37,
    peso : 80, 
    nome : 'Rafa', 
    end_rua : 'Rua dos Alfineiros', 
    end_num : 2042,
    temFilhos : true,
}

// exibição dos dados de Pessoa
const exibirDadosPessoa = (pessoa) =>{
    console.log(`--- Dados pessoais do ${pessoa.nome} ---- `);
    console.log(`\t --- Peso do ${pessoa.nome}`, pessoa.peso);
    console.log(`\t ---Idade do ${pessoa.idade}`, pessoa.idade);
}

// outra forma de exibir considerando os dados ali. 
const exibirDadosEsp = (pessoa, dado) =>{
    console.log (`Seguem dos dados da rua do ${pessoa.nome} - Rua:`,  pessoa[dado]);
}

exibirDadosPessoa(pessoaRafa);
exibirDadosEsp(pessoaRafa, 'end_rua');