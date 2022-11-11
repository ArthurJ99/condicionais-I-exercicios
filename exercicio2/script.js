let idade =prompt('Qual a sua idade?')
//let isMaiorIdade;
//let isCursandoOutraFaculdade;
let terminouEnsinoMedio = prompt('Terminou o Ensino Médio?').toLowerCase();
let cursandoFaculdade = prompt('Você está cursando alguma faculdade?').toLowerCase();

function verificacao(idade,terminouEnsinoMedio,cursandoFaculdade){
    if(idade>=18){
        console.log('Você é maior de idade');
    }else {
        console.log('Você é menor de idade');
    }
    if(terminouEnsinoMedio= 'sim'){
        console.log('Você terminou o ensino médio');
    }else{
        console.log('Você não terminou o sensino médio')
    }
    if (cursandoFaculdade = 'sim'){
        console.log('Você está cursando faculdade');
    }else{
        console.log('Você não está cursando uma faculdade');
    }

}

verificacao(idade,terminouEnsinoMedio,cursandoFaculdade)