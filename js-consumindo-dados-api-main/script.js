async function buscarCep(cep) {
    var mensagemErro = document.getElementById("erro");
    mensagemErro.innerHTML = "";
    try {
        let consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        let consultaCepConvertida = await consultaCep.json();
        if(consultaCepConvertida.erro) {
            throw Error("Este CEP não existe!");
        }
        console.log(consultaCepConvertida);
        preencheDadosCep(consultaCepConvertida);
        return consultaCepConvertida;    
    } catch (error) {
        mensagemErro.innerHTML = `<p>CEP inválido!</p>`
        console.log(error);
    }
}

function preencheDadosCep(dadosCep) {
    let campos = {
        "logradouro": "endereco",
        "complemento": "complemento",
        "bairro": "bairro",
        "localidade": "cidade",
        "uf": "estado"};
    for (let campo in campos) {
        if(dadosCep[campo]) {
            // if(campo == 'estado') {
                document.getElementById(campos[campo]).value = dadosCep[campo];
            // } else {
            //     document.getElementById(campos[campo]).value = dadosCep[campo];
            // }
        }
    };
}

let cep = document.getElementById("cep");
cep.addEventListener("focusout", () => buscarCep(cep.value));
