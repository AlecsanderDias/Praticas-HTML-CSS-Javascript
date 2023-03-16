const form = document.getElementById("novoItem");
const lista = document.getElementById("lista");
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((elemento) => {
    criaElemento(elemento);
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nome = evento.target.elements["nome"];
    const quantidade = evento.target.elements["quantidade"];

    const existe = itens.find(elemento => elemento.nome === nome.value);

    const item = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        item.id = existe.id;

        atualizaElemento(item);

        itens[itens.findIndex(elemento => elemento.id == existe.id)] = item;
    } else {
        item.id = itens[itens.length-1] ? (itens[itens.length-1]).id + 1: 0;
        
        criaElemento(item);
    
        itens.push(item);
    }
    
    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
});

function criaElemento(item) { 
    const itemLista = document.createElement("li");
    const quantidadeItem = document.createElement("strong");
    
    itemLista.classList.add("item");
    quantidadeItem.innerHTML = item.quantidade;
    quantidadeItem.dataset.id = item.id;
    itemLista.appendChild(quantidadeItem);
    itemLista.innerHTML += item.nome;
    itemLista.appendChild(criaBotaoDeleta(item.id));
    lista.appendChild(itemLista);

    console.log(itemLista);
}

function atualizaElemento(item) {
    const elemento = document.querySelector(`[data-id="${item.id}"]`);
    elemento.innerHTML = item.quantidade;
}

function deletaElemento(item, id) {
    item.remove()
    itens.splice(itens.findIndex(elemento => elemento.id == id) ,1);

    localStorage.setItem('itens', JSON.stringify(itens));
}

function criaBotaoDeleta(id) {
    const elementoBotao = document.createElement('button');
    elementoBotao.innerHTML = 'x';

    elementoBotao.addEventListener('click', function () {
        deletaElemento(this.parentNode, id);
    });

    return elementoBotao;
}