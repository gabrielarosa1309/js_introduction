const filme = {
    titulo: "Jogos Mortais X",
    genero: "Terror",
    dataLancamento: "28/09/2023",
    diretor: "Kevin Greutert",
    duracao: "1h58",
    indicaco: "18+"
}

const {titulo, genero, duracao} = filme;

console.log()
console.log(`
Filme:
Título: ${titulo}
Gênero: ${genero}
Duração: ${duracao}
`)
console.log()

//var: escopo global - VALOR DEFAULT
//let: escopo local variável
//const: escopo local com valor não variável