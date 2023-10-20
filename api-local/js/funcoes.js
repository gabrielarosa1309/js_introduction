const urlViaCep = "https://viacep.com.br/ws"

function cadastrar(e) {
    e.preventDefault();
    alert("Cadastrar")
}

async function buscarEndereco(cep) {
    const resource = `/${cep}/json/` //resource é um pedido
    
    try {
        const promise = await fetch(urlViaCep + resource);
        
        //transforma o json retornado em um objeto ou array
        const endereco = await promise.json();
        console.log(endereco);

        //preenche o formulário
        document.getElementById("endereco").value = endereco.logradouro;
        document.getElementById("cidade").value = endereco.localidade;
        document.getElementById("estado").value = endereco.uf;

        //reseta o span do cep inválido
        //document.getElementById("not-found").innerText = "";
    } catch (error) {
        alert (error);
        document.getElementById("not-found").innerText = "CEP inválido!";
    }
}

function preencherCampos() {

}