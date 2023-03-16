function incluirDigito(telefone, valor) {
    telefone.value += valor;
}

const listaDeTeclas = document.querySelectorAll("input");
const campoTelefone = document.querySelector('input[type="tel"]');
campoTelefone.setAttribute("readonly","true");
const teclasValidas = ['0','1','2','3','4','5','6','7','8','9','#','*','Backspace','Tab'];

console.log(listaDeTeclas);

for(let contador = 0; contador < listaDeTeclas.length -1; contador++) {
    let tecla = listaDeTeclas[contador];
    tecla.onclick = () => {
        if (campoTelefone.value.length < 15) {
            incluirDigito(campoTelefone, tecla.value);
        }
    } 
    tecla.onkeydown = (event) => {
        valorDaTecla = event.key;
        if(teclasValidas.includes(valorDaTecla)) {
            campoTelefone.setAttribute("readonly","false");
            if (campoTelefone.value.length < 15) {
                if (valorDaTecla >= 0 && valorDaTecla <= 9|| valorDaTecla == `*` || valorDaTecla == `#`) {
                    incluirDigito(campoTelefone, valorDaTecla);
                }
            }
            if (valorDaTecla === 'Backspace') {
                campoTelefone.value = campoTelefone.value.slice(0,-1);
            }
            campoTelefone.setAttribute("readonly","true");
        }
    }
}