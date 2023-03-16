function tocaSom(tipoDeSom) {
    const elementoSom = document.querySelector(tipoDeSom);

    if (elementoSom && elementoSom.localName === "audio") {
        elementoSom.play();
    } else {
        alert("Elemento não encontrado ou seletor inválido!");
    }
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0;contador < listaTeclas.length; contador++) {
    
    let tecla = listaTeclas[contador];
    let idAudio = `#som_${tecla.classList[1]}`;
    listaTeclas[contador].onclick = function () { 
        tocaSom(idAudio)
    };

    tecla.onkeydown = (event) => {
        
        if (event.code === "Space" || event.code === "Enter") {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
    
}