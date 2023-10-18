const camisaPolo = {
    descricao: "Camisa Lacoste",
    preco: 589.97,
    tamanho: "M",
    cor: "Amarela",
    presente: true
}

//Forma convencional
// const descricao = camisaPolo.descricao;
// const preco = camisaPolo.preco;

// console.log();
// console.log(`
// Produto:
// Descrição: ${descricao} 
// Preço: ${preco}
// `);
// console.log();

const {descricao, preco, presente} = camisaPolo;

console.log(`
Produto:
Descrição: ${descricao}
Preço: ${preco}
Presente: ${presente ? "sim" : "não"}
`);