var value;
function habilidade(usuario) {
    for (value of usuario){
        console.log("O "+value.nome+" possui as habilidades: "+ value.habilidades.join(', '))
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