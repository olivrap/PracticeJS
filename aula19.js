//brincando e declarando funções
//arrow function // funções-flecha

// formato 1 - formato padrão para funções
function calcular (){
    console.log('calcular 01');
}

// formato 2 = formato alternativo para declaração funções
const calcular2 = function(){
    console.log('calcular 02');
}

// formato 3 = arrow function
const calcular3 = ()=>{
    console.log('calcular 03');
}

//formato 4 = arrow function direto
const calcular4 = ()=> console.log('calcular 04');

calcular();
calcular2();
calcular3();
calcular4();