//apredendo o switch case

function reajuste(tempo, salario){

    switch(tempo){
        case (tempo >= 1 && tempo<=3):
            return salario*1.1;
        case (tempo >= 4 && tempo<=6):
                return salario*1.2;
        case (tempo >= 7):
                return salario*1.3;
        default:
            return salario*1.05;
    }
}


console.log("Salaro 1000 tempo 2",reajuste(2, 1000));
console.log("Salaro 3000 tempo 6",reajuste(6, 3000));
console.log("Salaro 5000 tempo 5",reajuste(5, 5000));
console.log("Salaro 8000 tempo 3",reajuste(3, 8000));