const controlesAjustes = document.querySelectorAll("[data-controle]");
const estatisticas = document.querySelectorAll("[data-estatistica]");
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controlesAjustes.forEach((elemento) => { 
    elemento.addEventListener("click", (evento) => {
        let resultado = operacao(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatistica(evento.target.dataset.peca, resultado);
    });
});

function operacao(operacao, atributo) {
    let resultado = null;
    const peca = atributo.querySelector("[data-contador]");
    if(operacao === "+" && peca.value < 10) {
        peca.value++;
        resultado = operacao;
    }
    if(operacao === "-" && peca.value > 0) {
        peca.value--;
        resultado = operacao;
    }
    return resultado;
}

function atualizaEstatistica(peca, resultado) {
    if (resultado) {
        estatisticas.forEach((elemento) => {
                if (resultado === "+") {
                    elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];
                } else {
                    elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]; 
                }
            }
        );
    }
}