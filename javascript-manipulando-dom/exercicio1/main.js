const elementos = document.getElementsByTagName("p");
for (elemento in elementos) {
    elementos[elemento].textContent = `Texto substituído, p ${Number(elemento)+1}`;
}
