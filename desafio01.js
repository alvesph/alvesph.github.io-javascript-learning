var inputElement1 = document.querySelector('input[name=rua]');
var inputElement2 = document.querySelector('input[name=numero]');
var inputElement3 = document.querySelector('input[name=bairro]');
var inputElement4 = document.querySelector('input[name=cidade]');
var inputElement5 = document.querySelector('input[name=uf]');
var btnElement = document.querySelector('button.botao');
var resultadodesafio1 = document.getElementById("resultadodesafio1")
btnElement.onclick = function() {
    var rua = inputElement1.value;
    var numero = inputElement2.value;
    var bairro = inputElement3.value;
    var cidade = inputElement4.value;
    var uf = inputElement5.value;

    var endereco
    function dados(valor1, valor2, valor3, valor4, valor5) {
        endereco = {
            rua: valor1,
            numero: valor2,
            bairro: valor3, 
            cidade: valor4,
            uf: valor5
        };
        return "O usuário mora em " + endereco.cidade + " / " + endereco.uf + " no bairro " + endereco.bairro + " na rua " + endereco.rua + " com nº " + endereco.numero;
    }
    var endereco  = dados(rua, numero, bairro, cidade, uf);
    resultadodesafio1.innerHTML = "<h1>"+endereco+"</h1>"
}

function pares(x, y) {
    document.write("<br><br> EXERCÍCIO 02 <br>")
    for (var i = x; i >= x && i <= y ; i++) {
        if (i % 2 == 0) {
            document.write(" "+i)
        }

    }
}
pares(32, 60);

function temHabilidade(skills) {
    document.write("<br><br> EXERCÍCIO 03")
    var objeto = "Javascript";
    var testa = skills.indexOf(objeto);
    if (testa == 0) {
        document.write("<br>true");
    } else {
        document.write("<br>false");
    }
}
var skills = ["Javascript", "ReactJS", "React Native"];
temHabilidade(skills); // true ou false

function experiencia(anos) {
    document.write("<br><br> EXERCÍCIO 04 <br>");
    if (anos <= 1){
        document.write("Iniciante");
    }
    else if (anos > 1 && anos <= 3){
        document.write("Intermediário");
    }
    else if (anos > 3 && anos <= 6){
        document.write("Avançado");
    }
    else if (anos >= 7){
        document.write("Jedi Master");
    }
}

var anosEstudo = 7;
experiencia(anosEstudo);
// De 0-1 ano: Iniciante
// De 1-3 anos: Intermediário
// De 3-6 anos: Avançado
// De 7 acima: Jedi Master

var value;
function habilidade(usuario) {
    document.write("<br><br> EXERCÍCIO 05 <br>");
    for (value of usuario){
        document.write("O "+value.nome+" possui as habilidades: "+ value.habilidades.join(', ')+"<br>")
    }

}

var usuarios = [
    {
    nome: "Diego",
    habilidades: ["Javascript", "ReactJS", "Redux"]
    },
    {
    nome: "Gabriel",
    habilidades: ["VueJS", "Ruby on Rails", "Elixir"]
    }
];

habilidade(usuarios)