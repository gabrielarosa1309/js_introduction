const urlViaCep = "https://viacep.com.br/ws"
const urlContato = "http://172.16.35.155:3000/myceps";

async function cadastrar(e) {
    e.preventDefault();
    
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const cep = document.getElementById("cep").value;
    const endereco = document.getElementById("endereco").value.trim();
    const numero = document.getElementById("numero").value;
    const cidade = document.getElementById("cidade").value.trim();
    const estado = document.getElementById("estado").value.trim();

    // if (!validacaoForm (nome, email, cep)){
    //     alert("Preencher todos os campos")
    //     return;
    // } alert("Cadastro feito com sucesso!")

    objCadastro = {nome, email, cep, endereco, numero, cidade, estado}

    try{
        const promise = await fetch (urlContato, {
            body: JSON.stringify(objCadastro),
            method: "post",
            headers: {"Content-type" : "application/json"}
        });
        const dados = await promise.json()
        console.log(dados);
    }
    catch {

    }

}

// function validacaoForm(nome, email, cep){
//     if (nome.length == 0 || email.length == 0 || cep.lenght < 8) {
//         return false;  
//     } return true;
// }

async function buscarEndereco(cep) {
    //const resource = `/${cep}/json/` //resource é um pedido
    
    try {
        // const promise = await fetch(urlViaCep + resource);
        const promise = await fetch(`${urlCepProfessor}/${cep}`);
        
        //transforma o json retornado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);

        preencherCampos({
            logradouro: endereco.logradouro,
            localidade: endereco.localidade,
            uf: endereco.uf
        })
        
    } catch (error) {
        alert (error);
        document.getElementById("not-found").innerText = "CEP inválido!";
    }
}

function preencherCampos(endereco) {
    //preenche o formulário
    document.getElementById("endereco").value = endereco.logradouro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}