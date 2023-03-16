const botao = document.getElementById("calcular");
botao.addEventListener("click", () => {alert("Fui clicado!")});

// Exercício 3
var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 
console.log(lista);
lista.splice(1, 1);
console.log(lista);