const num = 4
function paridade(num){
    const par = num % 2 
    const verificarPar = par === 0
    return verificarPar
}

if(paridade(num)){
    console.log("O número é par");
}   
