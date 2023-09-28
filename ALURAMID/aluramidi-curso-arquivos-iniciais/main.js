function tocaSom (seletorAudio) {
    const elemento = documento.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
       
        console.log('elemento não encontrado ou seletor inválido')
    }
    
}
