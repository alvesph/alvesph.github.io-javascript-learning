var botao = document.querySelector('button.botao02');

botao.onclick = function() {
    var criaQuadro = document.createElement("div");
    criaQuadro.innerHTML = "Hello World!";
    criaQuadro.style.width = '100px';
    criaQuadro.style.height = '100px';
    criaQuadro.style.backgroundColor = 'red';
  
    var vai = document.getElementById("cubo")
    vai.appendChild(criaQuadro)
}
