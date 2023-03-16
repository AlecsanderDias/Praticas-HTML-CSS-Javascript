function mostraTintas(elemento) {
    const botao = document.querySelector('[lista-tintas-visivel]');
    botao.getAttribute('lista-tintas-visivel');
    if(botao.getAttribute('lista-tintas-visivel') === 'true') {
        botao.style.display = 'none';
        botao.setAttribute('lista-tintas-visivel','false');
    } else {
        botao.style.display = 'block';
        botao.setAttribute('lista-tintas-visivel','true');
    }
}

