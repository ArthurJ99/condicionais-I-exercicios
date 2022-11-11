let nacionalidade = prompt("Escreva aqui sua nacionalidade:").toLowerCase()

function verficaNacionalidade(nacionalidade) {
    if (nacionalidade === 'brasileira') {
        console.log(nacionalidade);
    } else if (nacionalidade === 'argentina') {
        console.log(nacionalidade);
    } else if (nacionalidade === 'uruguaia') {
        console.log(nacionalidade);
    } else if (nacionalidade === 'chilena') {
        console.log(nacionalidade);
    } else if (nacionalidade === 'colombiana') {
        console.log(nacionalidade);
    } else {
        console.log('Nacionalidade não encontrada');
    }
}
verficaNacionalidade(nacionalidade)