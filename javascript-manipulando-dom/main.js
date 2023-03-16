const controlesAjustes = document.querySelectorAll("[data-controle]");

controlesAjustes.forEach((elemento) => { 
    elemento.addEventListener("click", (evento) => {
        operacao(evento.target.dataset.controle, evento.target.parentNode);
    });
});

function operacao(operacao, atributo) {
    const peca = atributo.querySelector("[data-contador]");

    if(operacao === "+" && peca.value < 10) {
        peca.value++;
    }
    if(operacao === "-" && peca.value > 0) {
        peca.value--;
    }
    
}