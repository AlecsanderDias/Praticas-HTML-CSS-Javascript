function tocaSom(tipoDeSom) {
    document.querySelector(tipoDeSom).play();
}

const listaTeclas = document.querySelectorAll('.tecla');

for (let contador = 0;contador < listaTeclas.length; contador++) {
    
    let tecla = listaTeclas[contador];
    let idAudio = `#som_${tecla.classList[1]}`;
    listaTeclas[contador].onclick = function () { 
        tocaSom(idAudio)
    };

    tecla.onkeydown = () => {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = () => {
        tecla.classList.remove('ativa');
    }
    
}