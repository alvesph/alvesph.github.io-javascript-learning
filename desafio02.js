//DESAFIO 1 E 2 DO MÓDULO 2
var botao = document.querySelector('button.botao02');

botao.onclick = function() {
    var criaQuadro = document.createElement('div');
    criaQuadro.innerHTML = "Hello World!";
    criaQuadro.style.width = '100px';
    criaQuadro.style.height = '100px';
    criaQuadro.style.backgroundColor = 'red';
    criaQuadro.addEventListener('mouseover', function(){
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        }
        this.innerHTML = color
        return this.style.background = color;
    });

    var vai = document.getElementById("cubo")
    vai.appendChild(criaQuadro)
}

//DESAFIO 3 MÓDULO 2
    var nomes = ["Diego", "Gabriel", "Lucas"];
    var nome;
    for (nome of nomes) {
        var lista = document.createElement('div');
        lista.innerHTML = "<ul>"+nome+"</ul>";
        var eita = document.querySelector('#desafio3')
        eita.appendChild(lista)
    }

//DESAFIO 4 MÓDULO 2
var inputNome = document.querySelector('input[name=desa]');
function adicionar() {
    var criaQ = document.createElement('div');
    var osNomes = inputNome.value;
    criaQ.innerHTML = osNomes;
    var mostrNome = document.getElementById("mostra");
    mostrNome.appendChild(criaQ)

    
}