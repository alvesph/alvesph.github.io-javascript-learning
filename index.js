var endereco
function dados(valor1, valor2, valor3, valor4, valor5) {
    document.write("EXERCÍCIO 01")
    endereco = {
        rua: valor1,
        numero: valor2,
        bairro: valor3, 
        cidade: valor4,
        uf: valor5
    };
    return "O usuário mora em " + endereco.cidade + " / " + endereco.uf + " no bairro " + endereco.bairro + " na rua " + endereco.rua + " com nº " + endereco.numero;
}
var endereco  = dados("Rua dos pinheiros", 1293, "Centro", "São Paulo", "SP");
document.write("<br>"+endereco)

function pares(x, y) {
    document.write("<br><br> EXERCÍCIO 02")
    for (var i = x; i >= x && i <= y ; i++) {
        if (i % 2 == 0) {
            document.write("<br>"+i)
        }

    }
}
pares(32, 60);

function teHabilidade(skills) {
    document.write("<br><br> EXERCÍCIO 03")
    for (var i = 0; i < skills.length; i++) {
        if(skills[i] == "Javascript"){
            document.write("<br>"+true);
        } 
    }
}
var skills = ["Javascript", "ReactJS", "React Native"];
teHabilidade(skills); // true ou false

function temHabilidade(skills) {
    document.write("<br><br> EXERCÍCIO 03[outra forma]")
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
